const treeList = [
    "itching",
    "paralysis",
    "fear",
    "brokenrightarm",
    "brokenleftarm",
    "brokenrightleg",
    "brokenleftleg",
    "lapsingconsciousness",
    "aeon",
    "lovers",
    "confusion",
    "epilepsy",
    "pacified",
    "blackout",
    "dazed",
    "justice",
    "slashedthroat",
    "hellsight",
    "peace",
    "dazzled",
    "shyness",
    "dizziness",
    "slickness",
    "asthma",
    "nausea",
    "selarnia",
    "weariness",
    "scytherus",
    "haemophilia",
    "clumsiness",
    "hallucinations",
    "healthleech",
    "dementia",
    "recklessness",
    "anorexia",
    "masochism",
    "impatience",
    "stupidity",
    "generosity",
    "addiction",
    "deadening",
    "manaleech",
    "stuttering",
    "paranoia",
    "agoraphobia",
    "loneliness",
    "claustrophobia",
    "vertigo",
    "hypersomnia",
    "shivering",
    "frozen",
    "burning",
    "sensitivity",
    "hypochondria",
    "lethargy",
    "disloyalty",
    "darkshade",
    "voyria",
    "dissonance",
    "phlogisticated",
    "silver",
    "spiritburn",
    "tenderskin",
    "guilt",
    "skullfractures",
    "wristfractures",
    "crackedribs",
    "torntendons",
    "indifference",
    "retribution",
    "shadowmadness",
    "parasite",
    "depression",
    "timeloop",
    "crushedthroat",
    "tension",
    "unweavingspirit",
    "grievouswounds",
    "pyramides",
    "flushings",
    "rebbies",
    "mycalium",
    "sandfever"
];

const cures = {
    //#region Minerals
    ferrum: {
        bals_used: ['herb'],
        bals_req: ['herb'],
        blocks: ['death', 'anorexia', 'sleeping'],
        command: 'eat ferrum',
        order: [
            'darkshade',
            'haemophilia',
            'lethargy',
            'addiction',
            'scytherus',
            'nausea',
            'flushings',
            'unweavingbody'
        ],
        prio: 0,
    },
    magnesium: {
        bals_used: ['herb'],
        bals_req: ['herb'],
        blocks: ['death', 'anorexia', 'sleeping'],
        command: 'eat magnesium',
        order: ['paralysis', 'slickness', 'pyramides'],
        prio: 0,
    },
    aurum: {
        bals_used: ['herb'],
        bals_req: ['herb'],
        blocks: ['death', 'anorexia', 'sleeping'],
        command: 'eat aurum',
        order: [
            'clumsiness',
            'healthleech',
            'sensitivity',
            'weariness',
            'asthma',
            'hypochondria',
            'rebbies',
            'parasite',
        ],
        prio: 0,
    },
    calamine: {
        bals_used: ['herb'],
        bals_req: ['herb'],
        blocks: ['death', 'anorexia', 'sleeping'],
        command: 'eat calamine',
        order: ['deafness'],
        delay: 2.5,
        prio: 0,
    },
    argentum: {
        bals_used: ['herb'],
        bals_req: ['herb'],
        blocks: ['death', 'anorexia', 'sleeping'],
        command: 'eat argentum',
        order: [
            'masochism',
            'loneliness',
            'vertigo',
            'recklessness',
            'agoraphobia',
            'guilt',
            'whisperingmadness',
            'spiritburn',
            'tenderskin',
        ], // CUSTOM
        prio: 0,
    },
    cuprum: {
        bals_used: ['herb'],
        bals_req: ['herb'],
        blocks: ['death', 'anorexia', 'sleeping'],
        command: 'eat cuprum',
        order: [
            'pacified',
            'peace',
            'lovers',
            'justice',
            'generosity',
            'indifference',
            'retribution',
            'pyre',
            'timeloop',
        ],
        prio: 0,
    },
    antimony: {
        bals_used: ['herb'],
        bals_req: ['herb'],
        blocks: ['death', 'anorexia', 'sleeping'],
        command: 'eat antimony',
        order: [
            'temperedcholeric',
            'temperedmelancholic',
            'temperedphlegmatic',
            'temperedsanguine',
        ],
        prio: 0,
    },
    arsenic: {
        bals_used: ['herb'],
        bals_req: ['herb'],
        blocks: ['death', 'anorexia', 'sleeping'],
        command: 'eat arsenic',
        prio: 0,
    },
    stannum: {
        bals_used: ['herb'],
        bals_req: ['herb'],
        blocks: ['death', 'anorexia', 'sleeping'],
        command: 'eat stannum',
        order: [
            'claustrophobia',
            'paranoia',
            'confusion',
            'hypersomnia',
            'hallucinations',
            'dementia',
        ],
        prio: 0,
    },
    plumbum: {
        bals_used: ['herb'],
        bals_req: ['herb'],
        blocks: ['death', 'anorexia', 'sleeping'],
        order: [
            'horror',
            'stupidity',
            'epilepsy',
            'dizziness',
            'shyness',
            'impatience',
            'dissonance',
            'depression',
            'sandfever',
            'mycalium',
            'shadowmadness',
            'unweavingmind',
        ],
        command: 'eat plumbum',
        prio: 0,
    },
    calcite: {
        bals_used: ['herb'],
        bals_req: ['herb'],
        blocks: ['death', 'anorexia', 'sleeping'],
        order: [
            'pressure',
        ],
        command: 'eat calcite',
        prio: 0,
    },
    //#endregion
    //#region Herbs
    ginseng: {
        bals_used: ['herb'],
        bals_req: ['herb'],
        blocks: ['death', 'anorexia', 'sleeping'],
        command: 'eat ginseng',
        order: [
            'darkshade',
            'haemophilia',
            'lethargy',
            'addiction',
            'scytherus',
            'nausea',
            'flushings',
            'unweavingbody',
        ],
        prio: 0,
    },
    bloodroot: {
        bals_used: ['herb'],
        bals_req: ['herb'],
        blocks: ['death', 'anorexia', 'sleeping'],
        command: 'eat bloodroot',
        order: ['paralysis', 'slickness', 'pyramides'],
        prio: 0,
    },
    kelp: {
        bals_used: ['herb'],
        bals_req: ['herb'],
        blocks: ['death', 'anorexia', 'sleeping'],
        command: 'eat kelp',
        order: [
            'clumsiness',
            'healthleech',
            'sensitivity',
            'weariness',
            'asthma',
            'hypochondria',
            'rebbies',
            'parasite',
        ],
        prio: 0,
    },
    hawthorn: {
        bals_used: ['herb'],
        bals_req: ['herb'],
        blocks: ['death', 'anorexia', 'sleeping'],
        command: 'eat hawthorn',
        order: ['deafness'],
        delay: 2.5,
        prio: 0,
    },
    lobelia: {
        bals_used: ['herb'],
        bals_req: ['herb'],
        blocks: ['death', 'anorexia', 'sleeping'],
        command: 'eat lobelia',
        order: [
            'masochism',
            'loneliness',
            'vertigo',
            'recklessness',
            'agoraphobia',
            'guilt',
            'whisperingmadness',
            'spiritburn',
            'tenderskin',
        ], // CUSTOM
        prio: 0,
    },
    bellwort: {
        bals_used: ['herb'],
        bals_req: ['herb'],
        blocks: ['death', 'anorexia', 'sleeping'],
        command: 'eat bellwort',
        order: [
            'pacified',
            'peace',
            'lovers',
            'justice',
            'generosity',
            'indifference',
            'retribution',
            'pyre',
            'timeloop',
        ],
        prio: 0,
    },
    ginger: {
        bals_used: ['herb'],
        bals_req: ['herb'],
        blocks: ['death', 'anorexia', 'sleeping'],
        command: 'eat ginger',
        order: [
            'temperedcholeric',
            'temperedmelancholic',
            'temperedphlegmatic',
            'temperedsanguine',
        ],
        prio: 0,
    },
    bayberry: {
        bals_used: ['herb'],
        bals_req: ['herb'],
        blocks: ['death', 'anorexia', 'sleeping'],
        command: 'eat bayberry',
        prio: 0,
    },
    ash: {
        bals_used: ['herb'],
        bals_req: ['herb'],
        blocks: ['death', 'anorexia', 'sleeping'],
        command: 'eat ash',
        order: [
            'claustrophobia',
            'paranoia',
            'confusion',
            'hypersomnia',
            'hallucinations',
            'dementia',
        ],
        prio: 0,
    },
    goldenseal: {
        bals_used: ['herb'],
        bals_req: ['herb'],
        blocks: ['death', 'anorexia', 'sleeping'],
        command: 'eat goldenseal',
        order: [
            'horror',
            'stupidity',
            'epilepsy',
            'dizziness',
            'shyness',
            'impatience',
            'dissonance',
            'depression',
            'sandfever',
            'mycalium',
            'shadowmadness',
            'unweavingmind',
        ],
        prio: 0,
    },
    pear: {
        bals_used: ['herb'],
        bals_req: ['herb'],
        blocks: ['death', 'anorexia', 'sleeping'],
        order: [
            'pressure',
        ],
        command: 'eat pear',
        prio: 0,
    },
    //#endregion
    //#region Smokes
    smoke: {
        bals_used: ['smoke'],
        bals_req: ['smoke'],
        blocks: ['death', 'asthma', 'sleeping'],
        command: 'smoke cinnabar',
        order: [
            'aeon',
            'disloyalty',
            'hellsight',
            'manaleech',
            'slickness',
            'deadening',
            'tension',
            'unweavingspirit',
        ],
        prio: 0,
    },
    cinnabar: {
        bals_used: ['smoke'],
        bals_req: ['smoke'],
        blocks: ['death', 'asthma', 'sleeping'],
        command: 'smoke cinnabar',
        order: ['aeon', 'deadening', 'tension', 'unweavingspirit'],
        prio: 0,
    },
    malachite: {
        bals_used: ['smoke'],
        bals_req: ['smoke'],
        blocks: ['death', 'asthma', 'sleeping'],
        command: 'smoke malachite',
        prio: 0,
    },
    realgar: {
        bals_used: ['smoke'],
        bals_req: ['smoke'],
        blocks: ['death', 'asthma', 'sleeping'],
        command: 'smoke realgar',
        order: ['disloyalty', 'hellsight', 'manaleech', 'slickness'],
        prio: 0,
    },
    elm: {
        bals_used: ['smoke'],
        bals_req: ['smoke'],
        blocks: ['death', 'asthma', 'sleeping'],
        command: 'smoke elm',
        order: ['aeon', 'deadening', 'tension', 'unweavingspirit'],
        prio: 0,
    },
    skullcap: {
        bals_used: ['smoke'],
        bals_req: ['smoke'],
        blocks: ['death', 'asthma', 'sleeping'],
        command: 'smoke skullcap',
        prio: 0,
    },
    valerian: {
        bals_used: ['smoke'],
        bals_req: ['smoke'],
        blocks: ['death', 'asthma', 'sleeping'],
        command: 'smoke valerian',
        order: ['disloyalty', 'hellsight', 'manaleech', 'slickness'],
        prio: 0,
    },
    //#endregion
    //#region Salves
    caloric: {
        bals_used: ['salve'],
        bals_req: ['salve'],
        blocks: ['death', 'slickness', 'sleeping'],
        command: 'apply caloric',
        order: ['frozen', 'shivering' /* , 'insulation'*/],
        prio: 0,
    },
    'epidermal to body': {
        bals_used: ['salve'],
        bals_req: ['salve'],
        blocks: ['death', 'slickness', 'sleeping'],
        command: 'apply epidermal to body',
        order: ['anorexia'],
        prio: 0,
    },
    'epidermal to head': {
        bals_used: ['salve'],
        bals_req: ['salve'],
        blocks: ['death', 'slickness', 'sleeping'],
        command: 'apply epidermal to head',
        order: ['blindness', 'scalded', 'deafness'],
        prio: 0,
    },
    'epidermal to ears': {
        bals_used: ['salve'],
        bals_req: ['salve'],
        blocks: ['death', 'slickness', 'sleeping'],
        command: 'apply epidermal to ears',
        order: ['deafness'],
        prio: 0,
    },
    'mending to head': {
        bals_used: ['salve'],
        bals_req: ['salve'],
        blocks: ['death', 'slickness', 'sleeping'],
        command: 'apply mending to head',
        order: ['crushedthroat', 'dazzled'],
        prio: 0,
    },
    'mending to arms': {
        bals_used: ['salve'],
        bals_req: ['salve'],
        blocks: ['death', 'slickness', 'sleeping'],
        command: 'apply mending to arms',
        order: ['brokenleftarm', 'brokenrightarm'],
        prio: 0,
    },
    'mending to legs': {
        bals_used: ['salve'],
        bals_req: ['salve'],
        blocks: ['death', 'slickness', 'sleeping'],
        command: 'apply mending to legs',
        order: ['brokenleftleg', 'brokenrightleg'],
        prio: 0,
    },
    'mending to torso': {
        bals_used: ['salve'],
        bals_req: ['salve'],
        blocks: ['death', 'slickness', 'sleeping'],
        command: 'apply mending to torso',
        order: ['burning'],
        prio: 0,
    },
    'restoration to head': {
        bals_used: ['salve'],
        bals_req: ['salve'],
        blocks: ['death', 'slickness', 'sleeping'],
        command: 'apply restoration to head',
        order: ['mangledhead', 'damagedhead', 'calcifiedskull', 'concussion', 'tonguetied'],
        delay: 4.0,
        prio: 0,
    },
    'restoration to torso': {
        bals_used: ['salve'],
        bals_req: ['salve'],
        blocks: ['death', 'slickness', 'sleeping'],
        command: 'apply restoration to torso',
        order: [
            'hypothermia',
            'heartseed',
            'serioustrauma',
            'mildtrauma',
            'calcifiedtorso',
        ],
        delay: 4.0,
        prio: 0,
    },
    'restoration to arms': {
        bals_used: ['salve'],
        bals_req: ['salve'],
        blocks: ['death', 'slickness', 'sleeping'],
        command: 'apply restoration to arms',
        order: [
            'mangledleftarm',
            'mangledrightarm',
            'damagedleftarm',
            'damagedrightarm',
        ],
        delay: 4.0,
        prio: 0,
    },
    'restoration to legs': {
        bals_used: ['salve'],
        bals_req: ['salve'],
        blocks: ['death', 'slickness', 'sleeping'],
        command: 'apply restoration to legs',
        order: [
            'mangledleftleg',
            'mangledrightleg',
            'damagedleftleg',
            'damagedrightleg',
        ],
        delay: 4.0,
        prio: 0,
    },
    //#endregion
    //#region Misc
    insomnia: {
        bals_req: ['free'],
        bals_used: ['free'],
        blocks: ['death', 'hypersomnia', 'sleeping'],
        command: 'insomnia',
        order: ['insomnia'],
        prio: 0,
    },
    focus: {
        bals_req: ['focus'],
        bals_used: ['focus'],
        blocks: ['death', 'impatience', 'sleeping'],
        command: 'focus',
        order: [
            'stupidity',
            'epilepsy',
            'dizziness',
            'shyness',

            'claustrophobia',
            'paranoia',
            'confusion',
            'hallucinations',
            'dementia',

            'pacified',
            'peace',
            'lovers',
            'generosity',

            'masochism',
            'loneliness',
            'vertigo',
            'recklessness',
            'agoraphobia',
            
            'anorexia',
            'stuttering',
        ], // CUSTOM
        prio: 0,
    },
    'health to head': {
        bals_req: ['sip'],
        bals_used: ['sip'],
        command: 'apply health to head',
        order: ['skullfractures'],
        prio: 0,
    },
    'health to torso': {
        bals_req: ['sip'],
        bals_used: ['sip'],
        command: 'apply health to torso',
        order: ['crackedribs', 'grievouswounds'],
        prio: 0,
    },
    'health to arms': {
        bals_req: ['sip'],
        bals_used: ['sip'],
        command: 'apply health to arms',
        order: ['wristfractures'],
        prio: 0,
    },
    'health to legs': {
        bals_req: ['sip'],
        bals_used: ['sip'],
        command: 'apply health to legs',
        order: ['torntendons', 'latched', 'kkractlebrand'],
        prio: 0,
    },
    concentrate: {
        blocks: ['death', 'sleeping', 'confusion'],
        command: 'concentrate',
        order: ['disrupted'],
        prio: 0,
    },
    immunity: {
        bals_req: ['immunity'],
        bals_used: ['immunity'],
        blocks: ['death', 'sleeping', 'anorexia'],
        command: 'sip immunity',
        order: ['voyria'],
        prio: 0,
    },
    stand: {
        bals_req: ['balance', 'equilibrium'],
        blocks: [
            'death',
            'sleeping',
            'paralysis',
            'brokenrightleg',
            'brokenleftleg',
            'damagedleftleg',
            'damagedrightleg',
            'mangledrightleg',
            'mangledleftleg',
            'entangled',
            'transfixation',
            'impaled',
            'webbed',
            'bound',
        ],
        command: 'stand',
        order: ['prone'],
        prio: 0,
    },
    tree: {
        bals_used: ['tree'],
        bals_req: ['tree'],
        blocks: [
            'death',
            'sleeping',
            'paralysis',
            ['brokenleftarm', 'brokenrightarm'],
            ['brokenleftarm', 'damagedrightarm'],
            ['brokenleftarm', 'mangledrightarm'],
            ['damagedleftarm', 'brokenrightarm'],
            ['damagedleftarm', 'damagedrightarm'],
            ['damagedleftarm', 'mangledrightarm'],
            ['mangledleftarm', 'brokenrightarm'],
            ['mangledleftarm', 'damagedrightarm'],
            ['mangledleftarm', 'mangledrightarm'],
            'entangled',
            'transfixation',
            'impaled',
            'webbed',
            'bound',
        ],
        command: 'touch tree',
        order: treeList,
        prio: 0,
    },
    health: {
        bals_req: ['sip'],
        bals_used: ['sip'],
        blocks: ['death', 'sleeping', 'anorexia'],
        command: 'sip health',
        prio: 0,
    },
    mana: {
        bals_req: ['sip'],
        bals_used: ['sip'],
        blocks: ['death', 'sleeping', 'anorexia'],
        command: 'sip mana',
        prio: 0,
    },
    potash: {
        bals_req: ['moss'],
        bals_used: ['moss'],
        blocks: ['death', 'sleeping', 'anorexia'],
        command: 'eat potash',
        prio: 0,
    },
    moss: {
        bals_req: ['moss'],
        bals_used: ['moss'],
        blocks: ['death', 'sleeping', 'anorexia'],
        command: 'eat moss',
        prio: 0,
    },
    fitness: {
        bals_req: ['equilibrium', 'balance', 'fitness'],
        bals_used: ['balance', 'fitness'],
        blocks: ['death', 'weariness', 'sleeping'],
        skills: ['Monk', 'Runewarden'],
        command: 'fitness',
        order: ['asthma'],
        prio: 0,
    },
    bloodboil: {
        bals_req: ['equilibrium', 'balance', 'bloodboil'],
        bals_used: ['equilibrium', 'bloodboil'],
        blocks: [
            'death',
            'haemophilia',
            'sleeping',
            ['brokenleftarm', 'brokenrightarm'],
            ['brokenleftarm', 'damagedrightarm'],
            ['brokenleftarm', 'mangledrightarm'],
            ['damagedleftarm', 'brokenrightarm'],
            ['damagedleftarm', 'damagedrightarm'],
            ['damagedleftarm', 'mangledrightarm'],
            ['mangledleftarm', 'brokenrightarm'],
            ['mangledleftarm', 'damagedrightarm'],
            ['mangledleftarm', 'mangledrightarm'],
            'entangled',
            'transfixation',
            'impaled',
            'webbed',
            'bound',
        ],
        skills: ['Magi'],
        command: 'cast bloodboil',
        order: treeList,
        prio: 0,
    },
    restore: {
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['equilibrium'],
        command: 'restore',
        order: [
            'brokenleftarm',
            'brokenrightarm',
            'brokenleftleg',
            'brokenrightleg',
            'skullfractures',
            'torntendons',
            'wristfractures',
            'crackedribs',
        ],
        prio: 0,
    },
    dragonflex: {
        bals_req: ['balance'],
        bals_used: ['balance'],
        command: 'dragonflex',
        skills: ['Dragon'],
        order: ['webbed', 'entangled'],
        prio: 0,
    },
    dragonheal: {
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['equilibrium'],
        command: 'dragonheal',
        skills: ['Dragon'],
        blocks: ['death', 'sleeping', ['recklessness', 'weariness']],
        order: treeList,
        prio: 0,
    },
    dwinnu: {
        bals_req: ['voice'],
        bals_used: ['voice'],
        command: 'chant dwinnu',
        skills: ['Bard'],
        order: ['webbed', 'entangled'],
        prio: 0,
    },
    rage: {
        bals_req: ['rage'],
        bals_used: ['rage'],
        command: 'rage',
        skills: ['Runewarden'],
        order: ['pacified', 'peace', 'lovers', 'generosity'],
        prio: 95,
    },
    'touch soul': {
        command: 'touch soul',
        blocks: ['death'],
        order: ['amnesia'],
        prio: 101,
    },
    salt: {
        bals_req: ['equilibrium', 'salt'],
        bals_used: ['salt', 'equilibrium'],
        blocks: ['death', 'stupidity', 'sleeping'],
        skills: ['Alchemist'],
        command: 'educe salt',
        order: treeList,
        prio: 0,
    },
    siphon: {
        bals_req: ['angel'],
        bals_used: ['angel'],
        blocks: ['death', 'sleeping'],
        skills: ['Apostate', 'Priest'],
        command: 'educe salt',
        order: treeList,
        prio: 0,
    },
    shrugging: {
        bals_req: ['equilibrium', 'balance', 'shrugging'],
        bals_used: ['shrugging'],
        blocks: ['death', 'weariness', 'sleeping'],
        skills: ['Serpent'],
        command: 'shrugging',
        order: treeList,
        prio: 0,
    },
    slough: {
        bals_req: ['equilibrium', 'balance', 'slough'],
        bals_used: ['slough', 'balance'],
        blocks: ['death', 'weariness', 'sleeping'],
        skills: ['Fire Elemental Lord'],
        command: 'slough impurities',
        order: treeList,
        prio: 0,
    },
    fool: {
        bals_req: ['equilibrium', 'balance', 'fool'],
        bals_used: ['fool', 'balance'],
        blocks: [
            'death',
            'prone',
            'paralysis',
            'sleeping',
            ['brokenleftarm', 'brokenrightarm'],
            ['brokenleftarm', 'damagedrightarm'],
            ['brokenleftarm', 'mangledrightarm'],
            ['damagedleftarm', 'brokenrightarm'],
            ['damagedleftarm', 'damagedrightarm'],
            ['damagedleftarm', 'mangledrightarm'],
            ['mangledleftarm', 'brokenrightarm'],
            ['mangledleftarm', 'damagedrightarm'],
            ['mangledleftarm', 'mangledrightarm'],
            'entangled',
            'transfixation',
            'impaled',
            'webbed',
            'bound',
        ],
        skills: ['Occultist'],
        command: 'fling fool at me',
        order: treeList,
        prio: 0,
    },
    alleviate: {
        bals_req: ['equilibrium', 'balance', 'alleviate'],
        bals_used: ['alleviate', 'balance'],
        blocks: ['death', 'paralysis', 'sleeping'],
        skills: ['Blademaster'],
        command: 'alleviate',
        order: treeList,
        prio: 0,
    },
};
//#endregion

export { cures as cureTable };
