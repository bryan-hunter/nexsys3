export const defTable = {
    acrobatics: {
        command: 'acrobatics on',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['balance'],
        blocks: ['death', 'sleeping'],
        skills: ['Bard'],
        serverside: true,
    },
    airpocket: {
        command: ['outr calcite', 'eat calcite'],
        bals_req: [],
        bals_used: [],
        blocks: ['death', 'sleeping', 'anorexia'],
        serverside: true,
    },
    alertness: {
        command: 'alertness on',
        bals_req: ['equilibrium'],
        bals_used: ['equilibrium'],
        serverside: true,
    },
    aria: {
        command: 'sing aria at me',
        bals_req: ['voice'],
        bals_used: ['voice'],
        blocks: ['death', 'sleeping'],
        skills: ['Bard'],
    },
    arctar: {
        command: 'command orb',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        blocks: ['death', 'sleeping'],
        skills: ['Occultist'],
    },
    arrowcatching: {
        command: 'arrowcatch on',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['balance'],
        blocks: ['death', 'sleeping'],
        skills: ['Bard'],
        serverside: true,
    },
    astronomy: {
        command: 'astronomy empower me',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['equilibrium'],
        blocks: ['death', 'sleeping'],
        skills: ['Alchemist'],
        serverside: true,
    },
    balancing: {
        command: 'balancing on',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['balance'],
        blocks: ['death', 'sleeping'],
        skills: ['Bard'],
        serverside: true,
    },
    belltattoo: {
        command: 'touch bell',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['equilibrium'],
        blocks: [
            'prone',
            'death',
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
            'icefist',
        ],
        serverside: true,
    },
    blindness: {
        command: ['outr arsenic', 'eat arsenic'],
        bals_req: ['herb'],
        bals_used: ['herb'],
        blocks: ['death', 'sleeping', 'anorexia'],
        serverside: true,
    },
    blocking: {
        command: 'block d',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['balance'],
        blocks: ['death', 'sleeping', 'prone'],
    },
    bodyblock: {
        command: 'bdb',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['balance'],
        blocks: ['death', 'sleeping'],
        skills: ['Monk'],
        serverside: true,
    },
    boostedregeneration: {
        command: 'boost regeneration',
        bals_req: ['free'],
        bals_used: ['free'],
        blocks: ['death', 'sleeping'],
        skills: ['Monk'],
        serverside: true,
    },
    cloak: {
        command: 'touch cloak',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['equilibrium'],
        blocks: [
            'prone',
            'death',
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
            'icefist',
        ],
        serverside: true,
    },
    chargeshield: {
        command: 'cast chargeshield at me',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['equilibrium'],
        skills: ['Magi'],
        serverside: true,
    },
    coldresist: {
        command: 'activate cold resistance',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        preempt: true,
        serverside: true,
    },
    compoundmask: {
        command: ['wear mask', 'secure mask'],
        bals_req: ['free'],
        bals_used: ['free'],
        skills: ['Alchemist'],
    },
    consciousness: {
        command: 'consciousness on',
        bals_req: ['free'],
        bals_used: ['free'],
        blocks: ['death', 'sleeping'],
        skills: ['Monk', 'Blademaster'],
        serverside: true,
    },
    constitution: {
        command: 'constitution',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['equilibrium'],
        skills: ['Monk', 'Blademaster'],
        serverside: true,
    },
    curseward: {
        command: 'curseward',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['equilibrium'],
        serverside: true,
    },
    deafness: {
        command: ['outr calamine', 'eat calamine'],
        bals_req: ['herb', 'deafness'],
        bals_used: ['herb', 'deafness'],
        blocks: ['death', 'sleeping', 'anorexia'],
        serverside: true,
    },
    deathsight: {
        command: 'deathsight',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        serverside: true,
    },
    density: {
        command: 'wear shackle',
        bals_req: ['salve'],
        bals_used: ['salve'],
        blocks: ['death', 'slickness', 'sleeping'],
        serverside: true,
    },
    devilmark: {
        command: 'devilmark',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['equilibrium'],
        blocks: ['death', 'prone', 'sleeping'],
        skills: ['Occultist'],
        serverside: true,
    },
    diamondskin: {
        command: 'cast diamondskin',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['equilibrium'],
        skills: ['Magi'],
        serverside: true,
    },
    distortedaura: {
        command: 'distortaura',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['equilibrium'],
        blocks: ['death', 'prone', 'sleeping'],
        skills: ['Occultist'],
        serverside: true,
    },
    dragonarmour: {
        command: 'dragonarmour',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['equilibrium'],
        blocks: ['death', 'prone', 'sleeping'],
        skills: ['Dragon'],
        serverside: true,
    },
    dragonbreath: {
        command: 'summon ice',
        bals_req: ['balance', 'equilibrium', 'dragonbreath'],
        bals_used: ['free', 'dragonbreath'],
        blocks: ['death', 'prone', 'sleeping'],
        skills: ['Dragon'],
        preempt: true,
        serverside: true,
    },
    drunkensailor: {
        command: 'drunkensailor',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['balance'],
        blocks: ['death', 'sleeping'],
        skills: ['Bard'],
        serverside: true,
    },
    electricresist: {
        command: 'activate electric resistance',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        preempt: true,
        serverside: true,
    },
    enhancedform: {
        command: ['amalgamate enhancement', 'imbibe enhancement'],
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        blocks: ['death', 'sleeping'],
        skills: ['Alchemist'],
    },
    evadeblock: {
        command: 'evb',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['balance'],
        blocks: ['death', 'sleeping'],
        skills: ['Monk'],
        serverside: true,
    },
    fireresist: {
        command: 'activate fire resistance',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        preempt: true,
        serverside: true,
    },
    fangbarrier: {
        command: 'apply quicksilver',
        bals_req: ['salve', 'sileris'],
        bals_used: ['salve', 'sileris'],
        blocks: ['death', 'slickness', 'paralysis', 'sleeping'],
        serverside: true,
    },
    fireshroud: {
        command: 'ignite shroud',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['balance'],
        blocks: ['death', 'slickness', 'paralysis', 'sleeping'],
        serverside: true,
        skills: ['Fire Elemental Lord'],
    },
    fury: {
        command: 'fury on',
        bals_req: ['balance'],
        bals_used: ['equilibrium'],
        skills: ['Runewarden'],
        serverside: true,
    },
    // CUSTOM FLYING
    flying: {
        command: 'fly',
        bals_req: ['balance, equilibrium'],
        bals_used: ['balance'],
        blocks: [
            'prone',
            'death',
            'sleeping',
            'entangled',
            'transfixation',
            'impaled',
            'webbed',
            'bound',
        ],
        serverside: false,
    },
    ghost: {
        command: 'conjure ghost',
        bals_req: ['equilibrium'],
        bals_used: ['equilibrium'],
        skills: ['Serpent'],
        serverside: true,
    },
    groundwatch: {
        command: 'groundwatch on',
        bals_req: ['free'],
        bals_used: ['free'],
        serverside: true,
    },
    'guarding right leg': {
        command: 'guard right leg',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        preempt: true,
        skills: ['Monk'],
        opps: [
            'guarding left leg',
            'guarding left arm',
            'guarding right arm',
            'guarding torso',
            'guarding head',
            'parrying right leg',
            'parrying left leg',
            'parrying left arm',
            'parrying right arm',
            'parrying torso',
            'parrying head',
            'parrying left',
            'parrying right',
            'parrying centre',
        ],
    },
    'guarding left leg': {
        command: 'guard left leg',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        preempt: true,
        skills: ['Monk'],
        opps: [
            'guarding right leg',
            'guarding left arm',
            'guarding right arm',
            'guarding torso',
            'guarding head',
            'parrying right leg',
            'parrying left leg',
            'parrying left arm',
            'parrying right arm',
            'parrying torso',
            'parrying head',
            'parrying left',
            'parrying right',
            'parrying centre',
        ],
    },
    'guarding right arm': {
        command: 'guard right arm',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        preempt: true,
        skills: ['Monk'],
        opps: [
            'guarding left leg',
            'guarding left arm',
            'guarding right leg',
            'guarding torso',
            'guarding head',
            'parrying right leg',
            'parrying left leg',
            'parrying left arm',
            'parrying right arm',
            'parrying torso',
            'parrying head',
            'parrying left',
            'parrying right',
            'parrying centre',
        ],
    },
    'guarding left arm': {
        command: 'guard left arm',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        preempt: true,
        skills: ['Monk'],
        opps: [
            'guarding left leg',
            'guarding right leg',
            'guarding right arm',
            'guarding torso',
            'guarding head',
            'parrying right leg',
            'parrying left leg',
            'parrying left arm',
            'parrying right arm',
            'parrying torso',
            'parrying head',
            'parrying left',
            'parrying right',
            'parrying centre',
        ],
    },
    'guarding head': {
        command: 'guard head',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        preempt: true,
        skills: ['Monk'],
        opps: [
            'guarding left leg',
            'guarding left arm',
            'guarding right arm',
            'guarding torso',
            'guarding right leg',
            'parrying right leg',
            'parrying left leg',
            'parrying left arm',
            'parrying right arm',
            'parrying torso',
            'parrying head',
            'parrying left',
            'parrying right',
            'parrying centre',
        ],
    },
    'guarding torso': {
        command: 'guard torso',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        preempt: true,
        skills: ['Monk'],
        opps: [
            'guarding left leg',
            'guarding left arm',
            'guarding right arm',
            'guarding right leg',
            'guarding head',
            'parrying right leg',
            'parrying left leg',
            'parrying left arm',
            'parrying right arm',
            'parrying torso',
            'parrying head',
            'parrying left',
            'parrying right',
            'parrying centre',
        ],
    },
    heartsfury: {
        command: 'heartsfury',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['balance'],
        blocks: ['death', 'sleeping'],
        skills: ['Bard'],
        serverside: true,
    },
    heldbreath: {
        command: 'hold breath',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        blocks: ['death', 'asthma', 'sleeping'],
        preempt: true,
        serverside: true,
    },
    hiding: {
        command: 'hide',
        bals_req: ['equilibrium', 'balance'],
        bals_used: ['balance'],
        skills: ['Serpent'],
        serverside: true,
    },
    hypersight: {
        command: 'hypersight on',
        bals_req: ['balance'],
        bals_used: ['equilibrium'],
        serverside: true,
    },
    immunity: {
        command: 'immunity',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['equilibrium'],
        blocks: ['death', 'sleeping'],
        skills: ['Monk', 'Blademaster'],
        serverside: true,
    },
    insomnia: {
        command: 'insomnia',
        bals_req: ['free'],
        bals_used: ['free'],
        blocks: ['death', 'hypersomnia', 'sleeping'],
        serverside: true,
    },
    insulation: {
        command: 'apply caloric',
        bals_req: ['salve'],
        bals_used: ['salve'],
        blocks: ['death', 'sleeping', 'slickness', 'hypothermia'],
        serverside: true,
    },
    insufflate: {
        command: [
            'get phial from pack',
            'amalgamate insufflate potency 4 stability 1',
            'imbibe insufflate',
        ],
        bals_req: ['free'],
        bals_used: ['free'],
        blocks: ['death', 'sleeping'],
        skills: ['Alchemist'],
        preempt: true,
    },
    ironform: {
        command: [
            'get phial from pack',
            'amalgamate petrifying potency 4 stability 1',
            'imbibe petrifying',
        ],
        bals_req: ['free'],
        bals_used: ['free'],
        blocks: ['death', 'sleeping'],
        skills: ['Alchemist'],
        preempt: true,
    },
    kaiboost: {
        command: 'kai boost',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        blocks: ['death', 'sleeping'],
        skills: ['Monk'],
        preempt: true,
        serverside: true,
    },
    kaitrance: {
        command: 'kai trance',
        bals_req: ['free'],
        bals_used: ['free'],
        blocks: ['death', 'sleeping'],
        skills: ['Monk'],
        serverside: true,
    },
    kola: {
        command: ['outr quartz', 'eat quartz'],
        bals_req: ['free'],
        bals_used: ['free'],
        blocks: ['death', 'sleeping', 'anorexia'],
        serverside: true,
    },
    lay: {
        command: 'sing lay',
        bals_req: ['voice'],
        bals_used: ['voice'],
        blocks: ['death', 'sleeping'],
        skills: ['Bard'],
        serverside: true,
    },
    levitating: {
        command: 'sip levitation',
        bals_req: ['free'],
        bals_used: ['free'],
        blocks: ['death', 'anorexia', 'sleeping'],
        serverside: true,
    },
    lifevision: {
        command: 'astralvision',
        bals_req: ['equilibrium'],
        bals_used: ['equilibrium'],
        skills: ['Occultist'],
        serverside: true,
    },
    lipreading: {
        command: 'lipread',
        bals_req: ['equilibrium'],
        bals_used: ['equilibrium'],
        skills: ['Serpent'],
        serverside: true,
    },
    locketdeath: {
        command: 'solicit locket for immortality',
        bals_req: ['free'],
        bals_used: ['free'],
    },
    magicresist: {
        command: 'activate magic resistance',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        preempt: true,
        serverside: true,
    },
    blademastery: {
        command: 'mastery on',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        skills: ['Runewarden'],
        preempt: true,
        serverside: true,
    },
    meditate: {
        command: 'meditate',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        blocks: ['death', 'sleeping', 'impatience'],
        preempt: true,
    },
    mercury: {
        command: 'educe mercury',
        bals_req: ['balance'],
        bals_used: ['equilibrium'],
        blocks: ['death', 'sleeping'],
        skills: ['Alchemist'],
        serverside: true,
    },
    metawake: {
        command: 'metawake on',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        blocks: ['death', 'sleeping', 'lullaby'],
        serverside: true,
    },
    mindcloak: {
        command: 'mind cloak on',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['balance'],
        blocks: ['death', 'sleeping'],
        preempt: true,
        skills: ['Monk'],
        serverside: true,
    },
    mindnet: {
        command: 'mindnet on',
        bals_req: ['free'],
        bals_used: ['free'],
        blocks: ['death', 'sleeping'],
        skills: ['Monk', 'Blademaster'],
        serverside: true,
    },
    mindseye: {
        command: 'touch mindseye',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['equilibrium'],
        blocks: [
            'death',
            'prone',
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
            'icefist',
        ],
        serverside: true,
    },
    mounted: {
        command: '', // ** CUSTOM ** This should be set by the user in a separate package. Not universal.
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        blocks: [
            'death',
            'sleeping',
            'stunned',
            'prone',
            'paralysis',
            'entangled',
            'transfixation',
            'impaled',
            'webbed',
            'bound',
        ],
        preempt: true,
    },
    nightsight: {
        command: 'nightsight',
        bals_req: ['free'],
        bals_used: ['free'],
        serverside: true,
    },
    numbness: {
        command: 'numb',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['equilibrium'],
        skills: ['Monk'],
    },
    'parrying right leg': {
        command: 'parry right leg',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        preempt: true,
        opps: [
            'guarding left leg',
            'guarding left arm',
            'guarding right arm',
            'guarding torso',
            'guarding head',
            'guarding right leg',
            'parrying left leg',
            'parrying left arm',
            'parrying right arm',
            'parrying torso',
            'parrying head',
            'parrying left',
            'parrying right',
            'parrying centre',
        ],
    },
    'parrying left leg': {
        command: 'parry left leg',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        preempt: true,
        opps: [
            'guarding left leg',
            'guarding left arm',
            'guarding right arm',
            'guarding torso',
            'guarding head',
            'parrying right leg',
            'guarding right leg',
            'parrying left arm',
            'parrying right arm',
            'parrying torso',
            'parrying head',
            'parrying left',
            'parrying right',
            'parrying centre',
        ],
    },
    'parrying right arm': {
        command: 'parry right arm',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        preempt: true,
        opps: [
            'guarding left leg',
            'guarding left arm',
            'guarding right arm',
            'guarding torso',
            'guarding head',
            'parrying right leg',
            'parrying left leg',
            'parrying left arm',
            'guarding right leg',
            'parrying torso',
            'parrying head',
            'parrying left',
            'parrying right',
            'parrying centre',
        ],
    },
    'parrying left arm': {
        command: 'parry left arm',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        preempt: true,
        opps: [
            'guarding left leg',
            'guarding left arm',
            'guarding right arm',
            'guarding torso',
            'guarding head',
            'parrying right leg',
            'parrying left leg',
            'guarding right leg',
            'parrying right arm',
            'parrying torso',
            'parrying head',
            'parrying left',
            'parrying right',
            'parrying centre',
        ],
    },
    'parrying head': {
        command: 'parry head',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        preempt: true,
        opps: [
            'guarding left leg',
            'guarding left arm',
            'guarding right arm',
            'guarding torso',
            'guarding head',
            'parrying right leg',
            'parrying left leg',
            'parrying left arm',
            'parrying right arm',
            'parrying torso',
            'guarding right leg',
            'parrying left',
            'parrying right',
            'parrying centre',
        ],
    },
    'parrying torso': {
        command: 'parry torso',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        preempt: true,
        opps: [
            'guarding left leg',
            'guarding left arm',
            'guarding right arm',
            'guarding torso',
            'guarding head',
            'parrying right leg',
            'parrying left leg',
            'parrying left arm',
            'parrying right arm',
            'guarding right leg',
            'parrying head',
            'parrying left',
            'parrying right',
            'parrying centre',
        ],
    },
    'parrying left': {
        command: 'trueparry left',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        preempt: true,
        skills: ['Bard'],
        opps: [
            'guarding left leg',
            'guarding left arm',
            'guarding right arm',
            'guarding torso',
            'guarding head',
            'parrying right leg',
            'parrying left leg',
            'parrying left arm',
            'parrying right arm',
            'parrying torso',
            'parrying head',
            'guarding right leg',
            'parrying right',
            'parrying centre',
        ],
    },
    'parrying right': {
        command: 'trueparry right',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        preempt: true,
        skills: ['Bard'],
        opps: [
            'guarding left leg',
            'guarding left arm',
            'guarding right arm',
            'guarding torso',
            'guarding head',
            'parrying right leg',
            'parrying left leg',
            'parrying left arm',
            'parrying right arm',
            'parrying torso',
            'parrying head',
            'parrying left',
            'guarding right leg',
            'parrying centre',
        ],
    },
    'parrying centre': {
        command: 'trueparry centre',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        preempt: true,
        skills: ['Bard'],
        opps: [
            'guarding left leg',
            'guarding left arm',
            'guarding right arm',
            'guarding torso',
            'guarding head',
            'parrying right leg',
            'parrying left leg',
            'parrying left arm',
            'parrying right arm',
            'parrying torso',
            'parrying head',
            'parrying left',
            'parrying right',
            'guarding right leg',
        ],
    },
    pinchblock: {
        command: 'pnb',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['balance'],
        blocks: ['death', 'sleeping'],
        skills: ['Monk'],
        serverside: true,
    },
    projectiles: {
        command: 'projectiles on',
        bals_req: ['free'],
        bals_used: ['free'],
        skills: ['Monk', 'Blademaster'],
        blocks: ['death', 'sleeping', 'mounted'],
        preempt: true,
        serverside: true,
    },
    poisonresist: {
        command: 'sip venom',
        bals_req: ['free'],
        bals_used: ['free'],
        blocks: ['death', 'anorexia', 'sleeping'],
        serverside: true,
    },
    prismatic: {
        command: 'strum lyre',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['equilibrium'],
        blocks: ['death', 'prone', 'sleeping'],
    },
    rebounding: {
        command: 'smoke malachite',
        bals_req: ['smoke', 'rebounding'],
        bals_used: ['smoke', 'rebounding'],
        blocks: ['death', 'asthma', 'sleeping'],
        serverside: true,
    },
    reflections: {
        command: 'point wand235913 at me',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['free'],
        blocks: ['death', 'sleeping'],
    },
    regeneration: {
        command: 'regeneration on',
        bals_req: ['free'],
        bals_used: ['free'],
        skills: ['Monk'],
        blocks: ['death', 'sleeping'],
        serverside: true,
    },
    resistance: {
        command: 'resistance',
        bals_req: ['free'],
        bals_used: ['free'],
        skills: ['Runewarden', 'Monk'],
        blocks: ['death', 'sleeping'],
        serverside: true,
    },
    scales: {
        command: 'scales',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['balance'],
        skills: ['Serpent'],
        serverside: true,
    },
    secondsight: {
        command: 'secondsight',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['equilibrium'],
        skills: ['Serpent'],
        serverside: true,
    },
    selfishness: {
        command: 'selfishness',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['balance'],
        serverside: true,
    },
    shield: {
        command: 'touch shield',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['equilibrium'],
        blocks: [
            'death',
            'prone',
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
            'icefist',
        ],
        serverside: true,
    },
    shintrance: {
        command: 'shin trance',
        bals_req: ['free'],
        bals_used: ['free'],
        skills: ['Blademaster'],
        blocks: ['death', 'sleeping'],
        serverside: true,
    },
    shinclarity: {
        command: 'clarity',
        bals_req: ['balance'],
        bals_used: ['equilibrium'],
        skills: ['Blademaster'],
        blocks: ['death', 'sleeping'],
        serverside: true,
    },
    shinbinding: {
        command: 'shinbinding on',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['equilibrium'],
        skills: ['Blademaster'],
        blocks: ['death', 'sleeping'],
        serverside: true,
    },
    shroud: {
        command: 'shroud',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['equilibrium'],
        skills: ['Occultist'],
        serverside: true,
    },
    softfocusing: {
        command: 'softfocus on',
        bals_req: ['free'],
        bals_used: ['free'],
        blocks: ['death', 'sleeping'],
        serverside: true,
    },
    songbird: {
        command: 'whistle for songbird',
        bals_req: ['equilibrium'],
        bals_used: ['equilibrium'],
        blocks: ['death', 'sleeping'],
        skills: ['Bard'],
    },
    speed: {
        command: 'sip speed',
        bals_req: ['speed'],
        bals_used: ['speed'],
        blocks: ['death', 'anorexia', 'sleeping'],
        serverside: true,
    },
    skysight: {
        command: 'manifest skysight',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['balance'],
        blocks: [
            'death',
            'sleeping',
            'stunned',
            'prone',
            'paralysis',
            'entangled',
            'transfixation',
            'impaled',
            'webbed',
            'bound',
        ],
        skills: ['Air Elemental Lord'],
        serverside: true,
    },
    skywatch: {
        command: 'skywatch on',
        bals_req: ['free'],
        bals_used: ['free'],
        serverside: true,
    },
    stonefist: {
        command: 'cast stonefist',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['equilibrium'],
        skills: ['Magi'],
        serverside: true,
    },
    stoneskin: {
        command: 'cast stoneskin',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['equilibrium'],
        skills: ['Magi'],
        serverside: true,
    },
    sulphur: {
        command: 'educe sulphur',
        bals_req: ['balance'],
        bals_used: ['equilibrium'],
        blocks: ['death', 'sleeping'],
        skills: ['Alchemist'],
        serverside: true,
    },
    tekurastance: {
        command: 'tekurastance',
        bals_req: ['free'],
        bals_used: ['balance'],
        skills: ['Monk'],
    },
    telesense: {
        command: 'telesense on',
        bals_req: ['free'],
        bals_used: ['free'],
        serverside: true,
    },
    temperance: {
        command: 'sip frost',
        bals_req: ['free'],
        bals_used: ['free'],
        blocks: ['death', 'anorexia', 'sleeping'],
        serverside: true,
    },
    tempest: {
        command: 'manifest tempest',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['balance'],
        blocks: [
            'death',
            'sleeping',
            'stunned',
            'prone',
            'paralysis',
            'entangled',
            'transfixation',
            'impaled',
            'webbed',
            'bound',
        ],
        skills: ['Air Elemental Lord'],
        serverside: true,
    },
    thirdeye: {
        command: 'thirdeye',
        bals_req: ['free'],
        bals_used: ['free'],
        serverside: true,
    },
    tin: {
        command: 'educe tin',
        bals_req: ['balance'],
        bals_used: ['equilibrium'],
        blocks: ['death', 'sleeping', 'prone'],
        skills: ['Alchemist'],
        serverside: true,
    },
    tentacles: {
        command: 'tentacles',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['equilibrium'],
        blocks: ['death', 'sleeping', 'prone'],
        skills: ['Occultist'],
        serverside: true,
    },
    toughness: {
        command: 'toughness',
        bals_req: ['free'],
        bals_used: ['free'],
        skills: ['Monk', 'Blademaster'],
        serverside: true,
    },
    treewatch: {
        command: 'treewatch on',
        bals_req: ['free'],
        bals_used: ['free'],
        serverside: true,
    },
    tune: {
        command: 'sing tune',
        bals_req: ['voice'],
        bals_used: ['voice'],
        blocks: ['death', 'sleeping'],
        skills: ['Bard'],
        serverside: true,
    },
    twoartsstance: {
        command: '',
        bals_req: ['free'],
        bals_used: ['free'],
        blocks: ['death', 'sleeping'],
        skills: ['Blademaster'],
    },
    vigilance: {
        command: 'vigilance on',
        bals_req: ['free'],
        bals_used: ['free'],
        serverside: true,
    },
    vitality: {
        command: 'vitality on',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['equilibrium'],
        skills: ['Monk'],
        serverside: true,
    },
    weathering: {
        command: 'weathering on',
        bals_req: ['free'],
        bals_used: ['free'],
        skills: ['Runewarden', 'Monk', 'Blademaster'],
        blocks: ['death', 'sleeping'],
        serverside: true,
    },
    weaving: {
        command: 'weaving on',
        bals_req: ['balance', 'equilibrium'],
        bals_used: ['balance'],
        skills: ['Serpent'],
        serverside: true,
    },
}

export const defPrios = {}

// default keepup essentially
defPrios.keepup = {
    // Normal defences
    alertness: 0,
    curseward: 0,
    deathsight: 0,
    density: 0,
    groundwatch: 0,
    heldbreath: 0,
    hypersight: 0,
    lifevision: 0,
    metawake: 0,
    mindseye: 0,
    reflections: 0,
    shield: 0,
    softfocusing: 0,
    telesense: 0,
    treewatch: 0,
    vigilance: 0,
    insomnia: 0,
    speed: 0,
    insulation: 0,
    kola: 0,
    deafness: 0,
    blindness: 0,
    temperance: 0,
    cloak: 0,
    airpocket: 0,
    coldresist: 0,
    electricresist: 0,
    fangbarrier: 0,
    fireresist: 0,
    levitating: 0,
    magicresist: 0,
    nightsight: 0,
    poisonresist: 0,
    rebounding: 0,
    skywatch: 0,
    thirdeye: 0,

    // class defences

    // Alchemist
    astronomy: 0,
    mercury: 0,
    sulphur: 0,
    tin: 0,
    enhancedform: 0,
    ironform: 0,

    // Bard
    acrobatics: 0,
    aria: 0,
    arrowcatching: 0,
    balancing: 0,
    drunkensailor: 0,
    heartsfury: 0,
    lay: 0,
    songbird: 0,
    tune: 0,

    // Blademaster
    shintrance: 0,
    shinbinding: 0,
    shinclarity: 0,

    // Dragon
    dragonarmour: 0,
    dragonbreath: 0,

    // Magi
    chargeshield: 0,
    diamondskin: 0,
    stonefist: 0,
    stoneskin: 0,

    // Monk
    bodyblock: 0,
    constitution: 0,
    evadeblock: 0,
    immunity: 0,
    kaiboost: 0,
    numbness: 0,
    pinchblock: 0,
    vitality: 0,
    kaitrance: 0,
    regeneration: 0,
    boostedregeneration: 0,
    consciousness: 0,
    mindcloak: 0,
    mindnet: 0,
    projectiles: 0,
    resistance: 0,
    toughness: 0,
    weathering: 0,

    // Occultist
    arctar: 0,
    devilmark: 0,
    distortedaura: 0,
    tentacles: 0,

    // Runewarden
    fury: 0,
    blademastery: 0,

    // Serpent
    ghost: 0,
    hiding: 0,
    lipreading: 0,
    scales: 0,
    secondsight: 0,
    shroud: 0,
    weaving: 0,

    // non-serverside defences 50=ignore
    blocking: 0,
    locketdeath: 0,
    meditate: 0,
    mounted: 0,
    prismatic: 0,
    'parrying left leg': 0,
    'parrying right arm': 0,
    'parrying left arm': 0,
    'parrying head': 0,
    'parrying torso': 0,
    'parrying left': 0,
    'parrying right': 0,
    'parrying centre': 0,
    'parrying right leg': 0,

    // Alchemist
    compoundmask: 0,

    // Blademaster
    twoartsstance: 0,

    // Monk
    tekurastance: 0,
    'guarding left leg': 0,
    'guarding right arm': 0,
    'guarding left arm': 0,
    'guarding head': 0,
    'guarding torso': 0,
    'guarding right leg': 0,
}

// what gets set when deffing up
defPrios.static = {
    // Regular
    mindseye: 0,
    lifevision: 0,
    alertness: 0,
    curseward: 0,
    deathsight: 0,

    // Dragon
    dragonarmour: 0,

    // Alchemist
    astronomy: 0,
    ironform: 0,
    mercury: 0,
    sulphur: 0,
    tin: 0,

    // Blademaster
    shinbinding: 0,
    shinclarity: 0,

    // Magi
    chargeshield: 0,
    diamondskin: 0,
    stonefist: 0,
    stoneskin: 0,

    // Monk
    constitution: 0,
    bodyblock: 0,

    // Occultist
    devilmark: 0,
    distortedaura: 0,

    // Serpent
    ghost: 0,
    lipreading: 0,
    scales: 0,
    secondsight: 0,
    weaving: 0,
    shroud: 0,
}
