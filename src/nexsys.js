/* 
  Breaking changes from 2.0 to 3.0:
    send_direct() > nexusclient.send_commands()
    GMCP > nexusclient.datahandler().GMCP
    current_block > nexusclient.current_block
    current_line > nexusclient.current_line
    send_GMCP() > nexusclient.datahandler().send_GMCP()
    get_variable() > nexusclient.variables().get()
    set_variable() > nexusclient.variables().set()
    run_function() > nexusclient.reflexes().run_function()
    display_notice() > nexusclient.display_notice()
    print() > nexusclient.add_html_line()
    $ > all jquery implementation
    gag_current_line() > nexusclient.current_line.gag = true
    reflex_disable() > nexusclient.reflexes().disable_reflex();
    reflex_find_by_name() > nexusclient.reflexes().find_by_name("group", "Aliases", false, false, "nexmap3")
    set_current_target() > nexusclient.datahandler().set_current_target()
*/
/* global globalThis */
import { affs } from "./base/affs/affs";
import {
  affPrioSwap,
  getCurrentAffs,
  haveAff,
  haveAffs,
  haveAnAff
} from "./base/affs/affService";
import { affTable } from "./base/affs/affTable";
import { bals } from "./base/balances/balances";
import { haveABal, haveBal, haveBals } from "./base/balances/balanceService";
import { caches } from "./base/cache/caches";
import { getCacheOutputs } from "./base/cache/cacheService";
import { cacheTable } from "./base/cache/cacheTable";
import Trackable from "./base/classes/Trackable";
import { prompt } from "./base/clientOverrides/prompt";
import { cures } from "./base/cures/cures";
import { defs } from "./base/defs/defs";
import {
  defoff,
  defPrioSwap,
  defup,
  getCurrentDefs,
  getDefOutputs,
  getMissingDefs,
  haveDef,
  parry
} from "./base/defs/defService";
import { defPrios } from "./base/defs/defTable";
import { echo, echoInfoLine, echoLine } from "./base/echo/echos";
import { createQueue } from "./base/queues/Queue";
import {
  serversideDefencePriorityListStart,
  serversideSettings
} from "./base/serverside/serverside";
import {
  loadCustomSettings,
  saveModel,
  updateAndSaveModel,
  updateList,
  updateModel
} from "./base/system/customsettings";
import { curArea, curRoom, curRoomArea, curRoomName } from "./base/system/gmcp";
import { sys, sysLog, sysLogging, sysLoggingToggle } from "./base/system/sys";
import {
  psend,
  rsend,
  sendCmd,
  sendInline,
  timeDiffNow
} from "./base/system/sysService";
import {
  dirMap,
  dirs,
  limbs,
  oppDirs,
  shortDirs
} from "./base/utilities/commonTable";
import { getLustCommands, rejectList, whiteList } from "./base/utilities/lust";
import { startup } from "./base/utilities/startup";
import NexDialog from "./components/NexDialog";

const nexsys = {
  evt: new EventTarget(),
  component: NexDialog,
  
  sys: sys,
  sysLogging: sysLogging,
  sysLog: sysLog,
  sysLoggingToggle: sysLoggingToggle,

  cures: cures,

  affs: affs,
  affTable: affTable,
  getCurrentAffs: getCurrentAffs,
  haveAff: haveAff,
  haveAffs: haveAffs,
  haveAnAff: haveAnAff,
  affPrioSwap: affPrioSwap,

  snapTrack: new Trackable("Snapped"),

  bals: bals,
  haveABal: haveABal,
  haveBal: haveBal,
  haveBals: haveBals,

  defs: defs,
  defPrios: defPrios,
  //defsCreate: defsCreate,
  getCurrentDefs: getCurrentDefs,
  getDefOutputs: getDefOutputs,
  getMissingDefs: getMissingDefs,
  haveDef: haveDef,
  defPrioSwap: defPrioSwap,
  defup: defup,
  defoff: defoff,
  parry: parry,

  caches: caches,
  cacheTable: cacheTable,
  getCacheOutputs: getCacheOutputs,

  echo: echo,
  echoLine: echoLine,
  echoInfoLine: echoInfoLine,

  curArea: curArea,
  curRoom: curRoom,
  curRoomArea: curRoomArea,
  curRoomName: curRoomName,

  limbs: limbs,
  dirs: dirs,
  dirMap: dirMap,
  oppdirs: oppDirs,
  shortDirs: shortDirs,

  whiteList: whiteList,
  rejectList: rejectList,
  getLustCommands: getLustCommands,

  sendCmd: sendCmd,
  sendInline: sendInline,
  psend: psend,
  rsend: rsend,
  timeDiffNow: timeDiffNow,

  serversideSettings: serversideSettings,
  serversideDefencePriorityListStart: serversideDefencePriorityListStart,

  updateModel: updateModel,
  updateList: updateList,
  saveModel: saveModel,
  updateAndSaveModel: updateAndSaveModel,
  loadCustomSettings: loadCustomSettings,
  //saveCustomSettings: saveCustomSettings,

  classQueue: createQueue({
    name: "class",
    type: "c!p!t!w",
    pre: "touch soul|stand",
    exclusions: ["fullQueue"],
  }),
  freeQueue: createQueue({
    name: "free",
    type: "free",
    pre: "touch soul|stand",
    exclusions: ["fullQueue"],
  }),
  fullQueue: createQueue({
    name: "full",
    type: "ebc!w!p!t",
    pre: "touch soul|stand",
    exclusions: ["freeQueue", "classQueue"],
  }),
  stunQueue: createQueue({ name: "stun", type: "!t", pre: "touch soul" }),

  prompt: prompt,
};

const generate_chunk = (text, fg, bg) => {
  let result = document.createElement("span");
  result.style.color = fg;
  result.style.backgroundColor = bg;
  result.innerHTML = text;

  return result;
};

nexsys.replace = (...args) => {
  let htmlLine = document.createElement("span");

  for (let i = 0; i < args.length; i += 3) {
    htmlLine.appendChild(generate_chunk(args[i], args[i + 1], args[i + 2]));
  }
  globalThis.nexusclient.current_line.parsed_line.formatted = () => {
    return htmlLine.outerHTML;
  };

  return true;
};

globalThis.nexsys = nexsys;
startup();