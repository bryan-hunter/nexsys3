/* global nexusclient, echo, eventStream */
import { AffDef } from "../classes/Aff";
import { Defs } from "../generators/defs";
import { sys } from "../functions/sys";
import { sendCmd, sendInline } from "../functions/utilities";
import { serversideSettings } from "../generators/serverside";

const serversideSlowModeOn = function (args) {
  sendInline([
    "curing siphealth 30",
    "curing sipmana 10",
    "curing mosshealth 0",
    "curing mossmana 0",
    "curing batch off",
    "curing clotat 5000",
  ]);
};

const serversideSlowModeOff = function (args) {
  const settings = sys.state;
  sendInline([
    "curing siphealth " + settings.sipHealthAt,
    "curing sipmana " + settings.sipManaAt,
    "curing mosshealth " + settings.mossHealthAt,
    "curing mossmana " + settings.mossManaAt,
    "curing batch on",
    "curing clotat " + settings.clotAt,
  ]);
};

const serversideDefencePrio = function (def) {
  // console.log(def.name);
  if (def instanceof AffDef) {
    if (def.isServerSide && def.prio !== serversideSettings.defs[def.name]) {
      if (def.isIgnored) {
        serversideSettings.defs[def.name] = undefined;
        eventStream.raiseEvent(
          "SystemOutputAdd",
          "curing priority defence " + def.name + " reset"
        );
      } else {
        serversideSettings.defs[def.name] = def.prio;
        eventStream.raiseEvent(
          "SystemOutputAdd",
          "curing priority defence " + def.name + " " + def.prio
        );
      }
    }
  } else if (
    def.isServerSide &&
    def.prio !== serversideSettings.defs[def.name]
  ) {
    if (!(def.isIgnored && serversideSettings.defs[def.name] === undefined)) {
      if (def.isIgnored) {
        serversideSettings.defs[def.name] = undefined;
        eventStream.raiseEvent(
          "SystemOutputAdd",
          "curing priority defence " + def.name + " reset"
        );
      } else {
        if (def.preempt) {
          serversideSettings.defs[def.name] = def.prio;
          eventStream.raiseEvent(
            "SystemOutputAdd",
            "curing priority defence " + def.name + " " + def.prio + " preempt"
          );
        } else {
          serversideSettings.defs[def.name] = def.prio;
          eventStream.raiseEvent(
            "SystemOutputAdd",
            "curing priority defence " + def.name + " " + def.prio
          );
        }
      }
    }
  }
};

const serversideAffPrio = function (aff) {
  if (aff.isServerSide && aff.prio !== serversideSettings.affs[aff.name]) {
    const prio = aff.prio;
    const reset = 26;

    if (prio === 0 || prio === reset) {
      serversideSettings.affs[aff.name] = 26;
      eventStream.raiseEvent(
        "SystemOutputAdd",
        "curing priority " + aff.name + " " + reset
      );
    } else {
      serversideSettings.affs[aff.name] = prio;
      eventStream.raiseEvent(
        "SystemOutputAdd",
        "curing priority " + aff.name + " " + prio
      );
    }
  }
};

const serversideCuringStatusMap = {
  curingMethod: "transmutation",
  sipPriority: "priority",
  sipHealthAt: "siphealth",
  sipManaAt: "sipmana",
  mossHealthAt: "mosshealth",
  mossManaAt: "mossmana",
  focus: "focus",
  focusOverHerbs: "focus",
  tree: "tree",
  clot: "clot",
  clotAt: "clotat",
  insomnia: "insomnia",
  fracturesAbove: "healthaffsabove",
  manaAbilitiesAbove: "manathreshold",
  batch: "batch",
};

const serversideSetStatus = function (args) {
  const status = args.status;
  let arg = args.arg;

  if (arg === true) {
    arg = "on";
  } else if (arg === false) {
    arg = "off";
  } else if (arg === "Transmutation") {
    arg = "on";
  } else if (arg === "Concoctions") {
    arg = "off";
  }
  if (status === "focusOverHerbs") {
    arg = arg ? "first" : "second";
  }

  eventStream.raiseEvent(
    "SystemOutputAdd",
    "curing " + serversideCuringStatusMap[status] + " " + arg
  );
};

eventStream.registerEvent("SystemPaused", function (args) {
  sendCmd("curing off");
});
eventStream.registerEvent("SystemUnpaused", function (args) {
  sendCmd("curing on");
});
eventStream.registerEvent("SystemSlowModeOn", serversideSlowModeOn);
eventStream.registerEvent("SystemSlowModeOff", serversideSlowModeOff);
eventStream.registerEvent("DefPrioritySetEvent", serversideDefencePrio);
eventStream.registerEvent("AffPrioritySetEvent", serversideAffPrio);
eventStream.registerEvent("SystemStatusSetEvent", serversideSetStatus);

let separatorSet = false;

const initiateStartup = function (args) {
  if (!separatorSet) {
    separatorSet = true;
    if (args) {
      sys.settings.sep = args;
      nexusclient.variables().set("commandSeparator", args);
    }
    sys.pause();
    const startupCommands = [
      "inr all",
      "score",
      "curing defences on",
      "curing afflictions on",
      "curing status",
      "curing priority list",
      "curing priority defence list",
      "def",
      "echo SystemEvent CuringStartupCompleteEvent",
    ];

    for (let i = 0; i < startupCommands.length; i++) {
      sendCmd(startupCommands[i]);
    }
    nexusclient.datahandler().send_GMCP("IRE.Rift.Request", "");
  }
};

eventStream.registerEvent("CommandSeparatorSetOnStartup", initiateStartup);

const systemStartupServerside = function () {
  serversideSettings = {
    loaded: false,
    status: {},
    affs: {},
    defs: {},
  };
  const separator = sys.settings.sep;
  sys.pause();
  if (separator) {
    initiateStartup(false);
  } else {
    echo(
      "Enter commandSeparator to get started (e.g. 'config commandseparator |')"
    );
  }
};

eventStream.registerEvent("SystemLoaded", systemStartupServerside);
// eventStream.registerEvent('debug', systemStartupServerside);

const curingStatus = function (args) {
  const statusProperty = args.status;
  let arg = args.arg;
  if (arg === "Yes") {
    arg = true;
  } else if (arg === "No") {
    arg = false;
  }

  serversideSettings.status[statusProperty] = arg;
};

const curingPriorityAffs = function (args) {
  const prio = args.prio === 26 ? 0 : args.prio;
  const affs = args.affs.split(", ");
  for (let i = 0; i < affs.length; i++) {
    const aff = affs[i];
    if (aff !== "") {
      serversideSettings.affs[aff] = prio;
    }
  }
};

const curingPriorityDefs = function (args) {
  const defs = Defs;
  const prio = args.prio;
  const defname = args.def;
  if (defname.length >= 15) {
    for (const def in defs) {
      if (def.startsWith(defname)) {
        serversideSettings.defs[def] = prio;
        break;
      }
    }
  } else {
    serversideSettings.defs[defname] = prio;
  }
};

const serversideCuringStatusSet = function (args) {
  let arg = args.arg;
  if (arg === "activated") {
    arg = true;
  } else if (arg === "disabled") {
    arg = false;
  }

  serversideSettings.status[args.status] = args.arg;
};

const serversideAffPrioSet = function (args) {
  serversideSettings.affs[args.aff] = args.prio;
};

const serversideDefPrioSet = function (args) {
  serversideSettings.defs[args.def] = args.prio;
};

eventStream.registerEvent("CuringStatusEvent", curingStatus);
eventStream.registerEvent("CuringPriorityAffsEvent", curingPriorityAffs);
eventStream.registerEvent("CuringPriorityDefsEvent", curingPriorityDefs);
eventStream.registerEvent(
  "ServersideCuringStatusSetEvent",
  serversideCuringStatusSet
);
eventStream.registerEvent(
  "ServersideAffPrioritySetEvent",
  serversideAffPrioSet
);
eventStream.registerEvent(
  "ServersideDefPrioritySetEvent",
  serversideDefPrioSet
);

const curingStartupComplete = function (args) {
  serversideSettings.loaded = true;
  eventStream.raiseEvent("ServersideSettingsCaptured");
  sys.unpause();
};

const setCuringStatusVars = function () {
  for (const status in serversideSettings.status) {
    const curStatus = serversideSettings.status[status];
    const systemStatus = sys.state[status];
    if (curStatus !== systemStatus) {
      sys.setSystemStatus(status, systemStatus);
    }
  }
};

eventStream.registerEvent("CuringStartupCompleteEvent", curingStartupComplete);
eventStream.registerEvent("ServersideSettingsCaptured", setCuringStatusVars);

/*
let disableTriggersOnPrompt = function() {
  if(serversideDefencePriorityListStart) {
      client.reflex_disable(client.reflex_find_by_name("trigger", "Curing Defence Priority List Line", true, true, "System"));
  }
  serversideDefencePriorityListStart = false;
};

eventStream.registerEvent('PromptEvent', disableTriggersOnPrompt);*/
