const affs = {
  list: [
    "addiction",
    "aeon",
    "agoraphobia",
    "airfisted",
    "amnesia",
    "anorexia",
    "asphyxiating" /**/,
    "asthma",
    "blackout",
    "bleeding",
    "blindness",
    "blistered" /**/,
    "bloodfire" /**/,
    "bound",
    "brokenleftarm",
    "brokenrightarm",
    "brokenleftleg",
    "brokenrightleg",
    "bruisedribs",
    "burning",
    "cadmuscurse",
    "calcifiedskull",
    "calcifiedtorso",
    "claustrophobia",
    "clumsiness",
    "coldfate" /**/,
    "concussion" /**/,
    "condemned" /**/,
    "conflagration",
    "confusion",
    "constricted" /**/,
    "corruption",
    "crackedribs",
    "cremated" /**/,
    "crushedthroat" /**/,
    "daeggerimpale",
    "damagedhead",
    "damagedleftarm",
    "damagedleftleg",
    "damagedrightarm",
    "damagedrightleg",
    "darkshade",
    "dazed",
    "dazzled" /**/,
    "deadening",
    "deafness",
    "death",
    "deathsickness" /**/,
    "deepsleep" /**/,
    "degenerate" /**/,
    "dehydrated",
    "dementia",
    "demonstain",
    "depression" /**/,
    "deteriorate" /**/,
    "disloyalty",
    "disrupted",
    "dissonance",
    "dizziness",
    "empoweredmannaz" /**/,
    "empoweredloshre" /**/,
    "enlightenment",
    "enmesh",
    "ensorcelled" /* pariah */,
    "entangled",
    "epilepsy",
    "fear",
    "flamefisted",
    "flushings" /* pariah */,
    "frozen",
    "generosity",
    "grievouswounds" /**/,
    "guilt" /**/,
    "hamstrung",
    "haemophilia",
    "hallucinations",
    "hatred" /**/,
    "healthleech",
    "heartseed",
    "hecatecurse",
    "hellsight",
    "hindered" /**/,
    "homunculusmercury",
    "horror" /**/,
    "hypersomnia",
    "hypochondria",
    "hypothermia",
    "icefisted",
    "impaled",
    "impatience",
    "indifference" /**/,
    "inquisition",
    "insomnia",
    "internalbleeding",
    // 'insulation', // CUSTOM not an aff
    "isolation" /**/,
    "itching",
    "justice",
    "kaisurge" /**/,
    "kkractlebrand" /**/,
    "laceratedthroat",
    "lapsingconsciousness" /**/,
    "latched" /**/,
    "lethargy",
    "lightbind" /**/,
    "loneliness",
    "lovers",
    "lullaby",
    "manaleech",
    "masochism",
    "mildtrauma",
    "mangledleftarm",
    "mangledleftleg",
    "mangledrightarm",
    "mangledrightleg",
    "mangledhead",
    "mindclamp" /**/,
    "mindravaged" /**/,
    "muddled" /**/,
    "mycalium" /* pariah */,
    "nausea",
    "numbedleftarm",
    "numbedrightarm",
    "pacified",
    "palpatarfeed",
    "paralysis",
    "paranoia",
    "parasite" /* */,
    "peace",
    "penitence" /**/,
    "petrified" /**/,
    "phlogisticated",
    "pinshot",
    "pressure" /**/,
    "prone",
    "pyramides" /* pariah */,
    "pyre" /**/,
    "rebbies" /* pariah */,
    "recklessness",
    "retribution" /**/,
    "revealed" /**/,
    "sandfever" /* pariah */,
    "scalded",
    "scrambledbrains" /**/,
    "scytherus",
    "selarnia",
    "sensitivity",
    "serioustrauma",
    "shadowmadness" /**/,
    "shivering",
    "shyness",
    "silenced" /**/,
    "silver" /**/,
    "skullfractures",
    "slashedthroat",
    "sleeping",
    "slickness",
    "slimeobscure",
    "solarburn" /**/,
    "spiritburn" /**/,
    /*'spiritdisrupt', //This affliction is removed from the game*/
    "stun",
    "stupidity",
    "stuttering",
    "temperedcholeric",
    "temperedmelancholic",
    "temperedphlegmatic",
    "temperedsanguine",
    "tenderskin" /**/,
    "tension" /**/,
    "timeflux",
    "timeloop" /**/,
    "tonguetied" /**/,
    "torntendons",
    "transfixation",
    "trueblind",
    "unweavingbody" /**/,
    "unweavingmind" /**/,
    "unweavingspirit" /**/,
    "vertigo",
    "vinewreathed",
    "vitiated" /**/,
    "vitrified" /**/,
    "voidfisted",
    "voyria",
    "waterbonds" /**/,
    "weakenedmind",
    "weariness",
    "webbed",
    "whisperingmadness",
    "wristfractures",
    "unconsciousness",

    "harmonic",
    "bop",
    "spiritwrack",
    "bedevil",
    "loki",
    "moon",
    "evileye",
    "dragoncurse",
    "swiftcurse",
  ],
  prios: {
    // affs that don't have serverside prio because can't be 'cured', set as 0
    airfisted: 0,
    asphyxiating: 0,
    blistered: 0,
    bloodfire: 0,
    bruisedribs: 0,
    cadmuscurse: 0,
    coldfate: 0,
    condemned: 0,
    conflagration: 0,
    constricted: 0,
    corruption: 0,
    cremated: 0,
    death: 0,
    deathsickness: 0,
    deepsleep: 0,
    degenerate: 0,
    dehydrated: 0,
    demonstain: 0,
    deteriorate: 0,
    empoweredloshre: 0,
    empoweredmannaz: 0,
    enlightenment: 0,
    enmesh: 0,
    ensorcelled: 0,
    flamefisted: 0,
    hamstrung: 0,
    hatred: 0,
    hecatecurse: 0,
    hindered: 0,
    homunculusmercury: 0,
    icefisted: 0,
    internalbleeding: 0,
    inquisition: 0,
    isolation: 0,
    kaisurge: 0,
    lightbind: 0,
    lullaby: 0,
    mindclamp: 0,
    mindravaged: 0,
    muddled: 0,
    numbedleftarm: 0,
    numbedrightarm: 0,
    palpatarfeed: 0,
    petrified: 0,
    phlogisticated: 0,
    pinshot: 0,
    revealed: 0,
    scrambledbrains: 0,
    silenced: 0,
    silver: 0,
    slimeobscure: 0,
    solarburn: 0,
    stun: 0,
    timeflux: 0,
    trueblind: 0,
    vinewreathed: 0,
    vitiated: 0,
    vitrified: 0,
    voidfisted: 0,
    waterbonds: 0,
    weakenedmind: 0,
    unconsciousness: 0,

    // serverside affs 1-26, 26=ignore

    aeon: 2,
    concussion: 2,
    crushedthroat: 2,
    anorexia: 2,
    sleeping: 2,
    spiritburn: 2,

    heartseed: 3,
    paralysis: 3,
    guilt: 3,
    skullfractures: 3,
    grievouswounds: 3,
    spiritburn: 3,
    latched: 3,
    calcifiedskull: 3,
    calcifiedtorso: 3,
    dazzled: 3,
    tenderskin: 3,

    hypothermia: 4,
    impatience: 4,
    torntendons: 4,

    pyramides: 5,
    mycalium: 5,
    flushings: 5,
    rebbies: 5,
    parasite: 5,
    sandfever: 5,
    hypochondria: 5,
    lovers: 5,
    itching: 5,
    pacified: 5,
    peace: 5,
    scytherus: 5,
    pressure: 5,
    unweavingbody: 5,
    unweavingmind: 5,
    unweavingspirit: 5,

    asthma: 6,
    bound: 6,
    daeggerimpale: 6,
    clumsiness: 6,
    entangled: 6,
    impaled: 6,
    sensitivity: 6,
    transfixation: 6,
    weariness: 6,
    webbed: 6,
    kkractlebrand: 6,

    damagedleftleg: 7,
    damagedrightleg: 7,
    darkshade: 7,
    depression: 7,
    mangledleftleg: 7,
    mangledrightleg: 7,
    horror: 7,
    pyre: 7,
    tension: 7,

    brokenleftleg: 8,
    brokenrightleg: 8,
    confusion: 8,
    hallucinations: 8,
    hypersomnia: 8,
    tonguetied: 8,

    disrupted: 9,
    mangledhead: 9,
    prone: 9,
    stupidity: 9,
    voyria: 9,

    brokenleftarm: 10,
    brokenrightarm: 10,
    slickness: 10,
    wristfractures: 10,
    timeloop: 10,

    indifference: 11,
    retribution: 11,
    shadowmadness: 11,
    addiction: 11,
    crackedribs: 11,
    haemophilia: 11,
    lethargy: 11,
    nausea: 11,
    whisperingmadness: 11,

    damagedhead: 12,
    hellsight: 12,
    recklessness: 12,

    damagedleftarm: 13,
    damagedrightarm: 13,
    healthleech: 13,
    manaleech: 13,
    temperedcholeric: 13,
    temperedmelancholic: 13,
    temperedphlegmatic: 13,
    temperedsanguine: 13,

    disloyalty: 14,
    dissonance: 14,
    dizziness: 14,
    mangledleftarm: 14,
    mangledrightarm: 14,
    shyness: 14,

    agoraphobia: 15,
    claustrophobia: 15,
    deadening: 15,
    frozen: 15,
    generosity: 15,
    justice: 15,
    loneliness: 15,
    shivering: 15,
    vertigo: 15,

    dementia: 16,
    mildtrauma: 16,
    paranoia: 16,
    serioustrauma: 16,

    epilepsy: 17,

    burning: 18,
    laceratedthroat: 18,
    slashedthroat: 18,
    stuttering: 18,

    selarnia: 19,

    fear: 20,
    masochism: 20,
    scalded: 20,
    dazed: 20,

    // affs you can cure on your own, but no serverside, 30-49, 30=ignore
    bleeding: 30,
    amnesia: 30,
    blackout: 30,

    // def affs
    insomnia: 10,
    // insulation: 20,  // CUSTOM not an aff
    deafness: 21,
    blindness: 22,

    // unknowns, 100=ignore
    harmonic: 100,
    bop: 100,
    spiritwrack: 100,
    bedevil: 100,
    loki: 100,
    moon: 100,
    evileye: 100,
    dragoncurse: 100,
    swiftcurse: 100,
  },
  types: {
    defs: {
      blindness: true,
      deafness: true,
      insomnia: true,
      // insulation: true  // CUSTOM not an aff
    },
    countable: {
      // TODO: Is pressure a countable aff?
      // TODO: Are unweavings countable?
      // TODO: Is kkractlebrand countable?
      bleeding: { min: 0, max: 15000 },
      burning: { min: 0, max: 5 },
      crackedribs: { min: 0, max: 7 },
      horror: { min: 0, max: 7 },
      skullfractures: { min: 0, max: 7 },
      temperedcholeric: { min: 0, max: 8 },
      temperedmelancholic: { min: 0, max: 8 },
      temperedphlegmatic: { min: 0, max: 8 },
      temperedsanguine: { min: 0, max: 8 },
      torntendons: { min: 0, max: 7 },
      wristfractures: { min: 0, max: 7 },
    },
    timed: {
      aeon: { length: 16 },
      airfisted: { length: 16 },
      blackout: { length: 10 },
      bruisedribs: { length: 30 },
      cadmuscurse: { length: 20 },
      condemned: { length: 20 },
      constricted: { length: 30 },
      corruption: { length: 45 },
      dazzled: { length: 60 },
      dehydrated: { length: 60 },
      demonstain: { length: 120 },
      empoweredloshre: { length: 12 },
      empoweredmannaz: { length: 20 },
      enmesh: { length: 5 },
      ensorcelled: { length: 20 },
      flamefisted: { length: 30 },
      hamstrung: { length: 9 },
      heartseed: { length: 11 },
      hecatecurse: { length: 16 },
      icefisted: { length: 30 },
      internalbleeding: { length: 30 },
      inquisition: { length: 30 },
      kaisurge: { length: 15 }, // TODO: Made up number. Confirm duration
      lightbind: { length: 22 },
      mindravaged: { length: 20 }, // TODO: Made up number. Confirm duration
      mudded: { length: 12 },
      numbedleftarm: { length: 7.5 },
      numbedrightarm: { length: 7.5 },
      petrified: { length: 10 }, // TODO: Made up number. Confirm duration
      phlogisticated: { length: 45 },
      pinshot: { length: 18 },
      revealed: { length: 60 },
      scrambledbrains: { length: 60 },
      silenced: { length: 20 }, // TODO: Made up number. Confirm duration
      silver: { length: 180 },
      slimeobscure: { length: 60 },
      solarburn: { length: 5 },
      stun: { length: 3 },
      timeflux: { length: 60 },
      trueblind: { length: 6 },
      unconsciousness: { length: 10 },
      vinewreathed: { length: 30 },
      vitrified: { length: 45 },
      voidfisted: { length: 5 },
      waterbonds: { length: 30 },
      weakenedmind: { length: 60 },
    },
    unknown: {
      moon: [
        "stupidity",
        "confusion",
        "epilepsy",
        "masochism",
        "hypersomnia",
        "hallucinations",
      ],
      loki: [
        "stupidity",
        "clumsiness",
        "recklessness",
        "asthma",
        "shyness",
        "darkshade",
        "paralysis",
        "brokenleftarm",
        "brokenrightarm",
        "brokenleftleg",
        "brokenrightleg",
        "sensitivity",
        "disloyalty",
        "nausea",
        "weariness",
        "dizziness",
        "anorexia",
        "voyria",
        "haemophilia",
        "addiction",
        "selarnia",
        "slickness",
        "scytherus",
      ],
      evileye: ["confusion", "dizziness"],
      dragoncurse: [
        "recklessness",
        "clumsiness",
        "epilepsy",
        "dizziness",
        "pacifism",
        "nausea",
        "addiction",
        "anorexia",
        "generosity",
        "disloyalty",
        "sensitivity",
        "vertigo",
        "paranoia",
        "stupidity",
        "hypochondria",
        "lethargy" /* 'insulation'*/,
        "shivering",
        "frozen",
        "impatience",
        "paralysis",
        "asthma",
        "agoraphobia",
      ],
      harmonic: ["stupidity", "recklessness"],
      bop: ["stupidity", "recklessness"],
      swiftcurse: [
        "stupidity",
        "clumsiness",
        "recklessness",
        "asthma",
        "paralysis",
        "deafness",
        "sensitivity",
        "nausea",
        "weariness",
        "dizziness",
        "anorexia",
        "voyria",
        "haemophilia",
        "addiction",
        "impatience",
        "claustrophobia",
        "vertigo",
        "agoraphobia",
        "masochism",
        "epilepsy",
        "manaleech",
        "pacifism",
        "dementia",
        "healthleech",
      ],
      bedevil: ["stupidity", "recklessness"],
    },
    uncurable: {
      bloodfire: true,
      cadmuscurse: true,
      conflagration: true,
      death: true,
      deathsickness: true,
      deepsleep: true,
      enlightenment: true,
      insomnia: true,
      isolation: true,
      lullaby: true,
      mindclamp: true,
      mindisolation: true,
      palpatarfeed: true,
      penitence: true,
      stun: true,
      weakenedmind: true,
    },
  },
};

// EXPERIMENTAL: Code snippet added to maintain prio arrays for the purpose
// of potentially sorting affs within the same priority.
affs.prioArrays = {};
[...new Set(Object.values(affs.prios))].forEach((prio) => {
  affs.prioArrays[prio] = Object.keys(affs.prios).filter(
    (aff) => affs.prios[aff] === prio
  );
});

export { affs as affTable };

const defaultPrios = {
  1: [
    "paralysis",
    "aeon",
    "peace",
    "scytherus",
    "anorexia",
    "bound",
    "whisperingmadness",
    "sleeping",
    "transfixation",
    "voyria",
    "webbed",
    "prone",
    "disrupted",
    "latched",
  ],
  2: [
    "entangled",
    "hellsight",
    "slickness",
    "asthma",
    "recklessness",
    "impatience",
    "daeggerimpale",
    "impaled",
    "heartseed",
    "spiritburn",
    "tenderskin",
    "guilt",
    "crushedthroat",
    "calcifiedskull",
    "calcifiedtorso",
  ],
  3: [
    "brokenrightleg",
    "brokenleftleg",
    "damagedleftleg",
    "lovers",
    "confusion",
    "pacified",
    "clumsiness",
    "healthleech",
    "stupidity",
    "manaleech",
    "sensitivity",
    "disloyalty",
    "dissonance",
    "temperedmelancholic",
    "temperedcholeric",
    "temperedsanguine",
    "temperedphlegmatic",
    "skullfractures",
    "wristfractures",
    "crackedribs",
    "torntendons",
    "retribution",
    "grievouswounds",
  ],
  4: [
    "damagedrightleg",
    "mangledrightleg",
    "mangledleftleg",
    "epilepsy",
    "nausea",
    "weariness",
    "addiction",
    "deadening",
    "hypochondria",
    "lethargy",
    "darkshade",
    "hypothermia",
    "unweavingbody",
    "unweavingmind",
    "unweavingspirit",
    "mindravaged",
    "mycalium",
  ],
  5: [
    "itching",
    "fear",
    "brokenrightarm",
    "brokenleftarm",
    "dazed",
    "justice",
    "shyness",
    "dizziness",
    "haemophilia",
    "masochism",
    "vertigo",
    "hypersomnia",
    "shivering",
    "frozen",
    "scalded",
    "kkractlebrand",
    "pressure",
  ],
  6: [
    "damagedrightarm",
    "damagedleftarm",
    "mangledrightarm",
    "mangledleftarm",
    "hallucinations",
    "generosity",
    "agoraphobia",
    "loneliness",
    "claustrophobia",
    "shadowmadness",
    "tension",
    "flushings",
    "rebbies",
  ],
  7: [
    "damagedhead",
    "mangledhead",
    "concussion",
    "dementia",
    "paranoia",
    "horror",
    "depression",
    "tonguetied",
    "pyre",
  ],
  8: ["mildtrauma", "serioustrauma", "burning", "pyramides"],
  9: ["slashedthroat", "laceratedthroat", "parasite", "timeloop", "sandfever"],
  10: ["selarnia"],
  11: ["stuttering"],
  20: ["indifference"],
};
