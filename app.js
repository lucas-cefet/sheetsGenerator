// Selectors
//BREED SELECTOS
const breedSelection = document.querySelector(".char-breed");
const homidGifts = document.getElementById("homid-gifts");
const lupusGifts = document.getElementById("lupus-gifts");
const metisGifts = document.getElementById("metis-gifts");
//AUSPICE SELECTORS
const auspiceSelection = document.querySelector(".char-auspice");
const ahrounGifts = document.getElementById("ahroun-gifts");
const theurgeGifts = document.getElementById("theurge-gifts");
const galliardGifts = document.getElementById("galliard-gifts");
const ragabashGifts = document.getElementById("ragabash-gifts");

//TRIBE SELECTORS
const tribeSelection = document.querySelector(".char-tribe");
const boneGnawersGifts = document.getElementById("bone-gnawers-gifts");
const childrenOfGaiaGifts = document.getElementById("children-of-gaia-gifts");
const fiannaGifts = document.getElementById("fianna-gifts");
const getOfFenrisGifts = document.getElementById("get-of-fenris-gifts");
const glassWalkersGifts = document.getElementById("glass-walkers-gifts");
const redTalonsGifts = document.getElementById("red-talors-gift");
const shadowLordsGifts = document.getElementById("shadow-lords-gifts");
const silentStridersGifts = document.getElementById("silent-striders-gifts");
const silverFangsGifts = document.getElementById("silver-fangs-gifts");
const stargazerGifts = document.getElementById("stargazer-gifts");
const uktenaGifts = document.getElementById("uktena-gifts");
const wendigoGifts = document.getElementById("wendigo-gifts");
const blackFuriesGifts = document.getElementById("black-furies-gifts");
const blackSpiralDancersGifts = document.getElementById(
  "black-spiral-dancers-gifts"
);

//ABILITIES SELECTORS
const attributesSelection = document.querySelector("attributes-selection");

const genericSheet = {
  basicInformation: {
    name: "",
    player: "",
    chronicle: "",
    breed: "",
    auspice: "",
    tribe: "",
    packName: "",
    packTotem: "",
    concept: "",
  },
  attributes: {
    physical: {
      strength: 1,
      dexterity: 1,
      stamina: 1,
    },
    social: {
      charisma: 1,
      manipulation: 1,
      appearance: 1,
    },
    mental: {
      perception: 1,
      intelligence: 1,
      wits: 1,
    },
  },
  abilities: {
    talents: {
      alertness: 0,
      athletics: 0,
      brawl: 0,
      dodge: 0,
      empathy: 0,
      expression: 0,
      intimidation: 0,
      primalUrge: 0,
      streetwise: 0,
      subterfuge: 0,
    },
    skills: {
      animalKen: 0,
      drive: 0,
      etiquette: 0,
      firearms: 0,
      melee: 0,
      leadership: 0,
      performance: 0,
      repair: 0,
      stelth: 0,
      survival: 0,
    },
    knowloge: {
      computer: 0,
      enigmas: 0,
      investigation: 0,
      law: 0,
      linguistics: 0,
      medicine: 0,
      occult: 0,
      politcs: 0,
      rituals: 0,
      science: 0,
    },
  },
  advantages: {
    backgrounds: {},
    gifts: [],
  },
  renown: {
    glory: {
      permanentGlory: 0,
      temporaryGlory: 0,
    },
    honor: {
      permanentHonor: 0,
      temporaryHonor: 0,
    },
    wisdom: {
      permanentWisdom: 0,
      temporaryWisdom: 0,
    },
  },
  rage: {
    permanentRage: 0,
    temporaryRage: 0,
  },
  gnosis: {
    permanentGnosis: 0,
    temporaryGnosis: 0,
  },
  willpower: {
    permanentWillpower: 0,
    temporaryWillpower: 0,
  },
  health: {
    bruised: 0,
    hurt: -1,
    injured: -1,
    wounded: -2,
    mauled: -2,
    crippled: -5,
    incapacitated: 0,
  },
  experience: 0,
  fetishes: {},
  otherTraits: {
    others: {},
    battleScars: [],
    metisDeformity: [],
  },
  rites: [],
  combat: {
    weapon: {
      roll: 0,
      difficulty: 0,
      damage: 0,
      range: 0,
      rate: 0,
      clip: 0,
    },
  },
  armor: 0,
};

// Event Listeners
breedSelection.addEventListener("change", showBreedGifts);
auspiceSelection.addEventListener("change", showAuspiceGifts);
tribeSelection.addEventListener("change", showTribeGifts);

// Functions

function showBreedGifts(event) {
  event.preventDefault();
  if (breedSelection.value == 1) {
    homidGifts.style.display = "block";
    lupusGifts.style.display = "none";
    metisGifts.style.display = "none";
  } else if (breedSelection.value == 2) {
    homidGifts.style.display = "none";
    lupusGifts.style.display = "block";
    metisGifts.style.display = "none";
  } else if (breedSelection.value == 3) {
    homidGifts.style.display = "none";
    lupusGifts.style.display = "none";
    metisGifts.style.display = "block";
  } else if (breedSelection.value == 0) {
    homidGifts.style.display = "none";
    lupusGifts.style.display = "none";
    metisGifts.style.display = "none";
  }
}

function showAuspiceGifts(event) {
  event.preventDefault();
  if (auspiceSelection.value == 0) {
    ahrounGifts.style.display = "none";
    theurgeGifts.style.display = "none";
    galliardGifts.style.display = "none";
    ragabashGifts.style.display = "none";
  } else if (auspiceSelection.value == 1) {
    ahrounGifts.style.display = "block";
    theurgeGifts.style.display = "none";
    galliardGifts.style.display = "none";
    ragabashGifts.style.display = "none";
  } else if (auspiceSelection.value == 2) {
    ahrounGifts.style.display = "none";
    theurgeGifts.style.display = "block";
    galliardGifts.style.display = "none";
    ragabashGifts.style.display = "none";
  } else if (auspiceSelection.value == 3) {
    ahrounGifts.style.display = "none";
    theurgeGifts.style.display = "none";
    galliardGifts.style.display = "block";
    ragabashGifts.style.display = "none";
  } else if (auspiceSelection.value == 4) {
    ahrounGifts.style.display = "none";
    theurgeGifts.style.display = "none";
    galliardGifts.style.display = "none";
    ragabashGifts.style.display = "block";
  }
}

function showTribeGifts(event) {
  event.preventDefault();
  if (tribeSelection.value == 0) {
    boneGnawersGifts.style.display = "none";
    childrenOfGaiaGifts.style.display = "none";
    fiannaGifts.style.display = "none";
    getOfFenrisGifts.style.display = "none";
    glassWalkersGifts.style.display = "none";
    redTalonsGifts.style.display = "none";
    shadowLordsGifts.style.display = "none";
    silentStridersGifts.style.display = "none";
    silverFangsGifts.style.display = "none";
    stargazerGifts.style.display = "none";
    uktenaGifts.style.display = "none";
    wendigoGifts.style.display = "none";
    blackSpiralDancersGifts.style.display = "none";
    blackFuriesGifts.style.display = "none";
  } else if (tribeSelection.value == 1) {
    boneGnawersGifts.style.display = "block";
    childrenOfGaiaGifts.style.display = "none";
    fiannaGifts.style.display = "none";
    getOfFenrisGifts.style.display = "none";
    glassWalkersGifts.style.display = "none";
    redTalonsGifts.style.display = "none";
    shadowLordsGifts.style.display = "none";
    silentStridersGifts.style.display = "none";
    silverFangsGifts.style.display = "none";
    stargazerGifts.style.display = "none";
    uktenaGifts.style.display = "none";
    wendigoGifts.style.display = "none";
    blackSpiralDancersGifts.style.display = "none";
    blackFuriesGifts.style.display = "none";
  } else if (tribeSelection.value == 2) {
    boneGnawersGifts.style.display = "none";
    childrenOfGaiaGifts.style.display = "block";
    fiannaGifts.style.display = "none";
    getOfFenrisGifts.style.display = "none";
    glassWalkersGifts.style.display = "none";
    redTalonsGifts.style.display = "none";
    shadowLordsGifts.style.display = "none";
    silentStridersGifts.style.display = "none";
    silverFangsGifts.style.display = "none";
    stargazerGifts.style.display = "none";
    uktenaGifts.style.display = "none";
    wendigoGifts.style.display = "none";
    blackSpiralDancersGifts.style.display = "none";
    blackFuriesGifts.style.display = "none";
  } else if (tribeSelection.value == 3) {
    boneGnawersGifts.style.display = "none";
    childrenOfGaiaGifts.style.display = "none";
    fiannaGifts.style.display = "block";
    getOfFenrisGifts.style.display = "none";
    glassWalkersGifts.style.display = "none";
    redTalonsGifts.style.display = "none";
    shadowLordsGifts.style.display = "none";
    silentStridersGifts.style.display = "none";
    silverFangsGifts.style.display = "none";
    stargazerGifts.style.display = "none";
    uktenaGifts.style.display = "none";
    wendigoGifts.style.display = "none";
    blackSpiralDancersGifts.style.display = "none";
    blackFuriesGifts.style.display = "none";
  } else if (tribeSelection.value == 4) {
    boneGnawersGifts.style.display = "none";
    childrenOfGaiaGifts.style.display = "none";
    fiannaGifts.style.display = "none";
    getOfFenrisGifts.style.display = "block";
    glassWalkersGifts.style.display = "none";
    redTalonsGifts.style.display = "none";
    shadowLordsGifts.style.display = "none";
    silentStridersGifts.style.display = "none";
    silverFangsGifts.style.display = "none";
    stargazerGifts.style.display = "none";
    uktenaGifts.style.display = "none";
    wendigoGifts.style.display = "none";
    blackSpiralDancersGifts.style.display = "none";
    blackFuriesGifts.style.display = "none";
  } else if (tribeSelection.value == 5) {
    boneGnawersGifts.style.display = "none";
    childrenOfGaiaGifts.style.display = "none";
    fiannaGifts.style.display = "none";
    getOfFenrisGifts.style.display = "none";
    glassWalkersGifts.style.display = "block";
    redTalonsGifts.style.display = "none";
    shadowLordsGifts.style.display = "none";
    silentStridersGifts.style.display = "none";
    silverFangsGifts.style.display = "none";
    stargazerGifts.style.display = "none";
    uktenaGifts.style.display = "none";
    wendigoGifts.style.display = "none";
    blackSpiralDancersGifts.style.display = "none";
    blackFuriesGifts.style.display = "none";
  } else if (tribeSelection.value == 6) {
    boneGnawersGifts.style.display = "none";
    childrenOfGaiaGifts.style.display = "none";
    fiannaGifts.style.display = "none";
    getOfFenrisGifts.style.display = "none";
    glassWalkersGifts.style.display = "none";
    redTalonsGifts.style.display = "block";
    shadowLordsGifts.style.display = "none";
    silentStridersGifts.style.display = "none";
    silverFangsGifts.style.display = "none";
    stargazerGifts.style.display = "none";
    uktenaGifts.style.display = "none";
    wendigoGifts.style.display = "none";
    blackSpiralDancersGifts.style.display = "none";
    blackFuriesGifts.style.display = "none";
  } else if (tribeSelection.value == 7) {
    boneGnawersGifts.style.display = "none";
    childrenOfGaiaGifts.style.display = "none";
    fiannaGifts.style.display = "none";
    getOfFenrisGifts.style.display = "none";
    glassWalkersGifts.style.display = "none";
    redTalonsGifts.style.display = "none";
    shadowLordsGifts.style.display = "block";
    silentStridersGifts.style.display = "none";
    silverFangsGifts.style.display = "none";
    stargazerGifts.style.display = "none";
    uktenaGifts.style.display = "none";
    wendigoGifts.style.display = "none";
    blackSpiralDancersGifts.style.display = "none";
    blackFuriesGifts.style.display = "none";
  } else if (tribeSelection.value == 8) {
    boneGnawersGifts.style.display = "none";
    childrenOfGaiaGifts.style.display = "none";
    fiannaGifts.style.display = "none";
    getOfFenrisGifts.style.display = "none";
    glassWalkersGifts.style.display = "none";
    redTalonsGifts.style.display = "none";
    shadowLordsGifts.style.display = "none";
    silentStridersGifts.style.display = "block";
    silverFangsGifts.style.display = "none";
    stargazerGifts.style.display = "none";
    uktenaGifts.style.display = "none";
    wendigoGifts.style.display = "none";
    blackSpiralDancersGifts.style.display = "none";
    blackFuriesGifts.style.display = "none";
  } else if (tribeSelection.value == 9) {
    boneGnawersGifts.style.display = "none";
    childrenOfGaiaGifts.style.display = "none";
    fiannaGifts.style.display = "none";
    getOfFenrisGifts.style.display = "none";
    glassWalkersGifts.style.display = "none";
    redTalonsGifts.style.display = "none";
    shadowLordsGifts.style.display = "none";
    silentStridersGifts.style.display = "none";
    silverFangsGifts.style.display = "block";
    stargazerGifts.style.display = "none";
    uktenaGifts.style.display = "none";
    wendigoGifts.style.display = "none";
    blackSpiralDancersGifts.style.display = "none";
    blackFuriesGifts.style.display = "none";
  } else if (tribeSelection.value == 10) {
    boneGnawersGifts.style.display = "none";
    childrenOfGaiaGifts.style.display = "none";
    fiannaGifts.style.display = "none";
    getOfFenrisGifts.style.display = "none";
    glassWalkersGifts.style.display = "none";
    redTalonsGifts.style.display = "none";
    shadowLordsGifts.style.display = "none";
    silentStridersGifts.style.display = "none";
    silverFangsGifts.style.display = "none";
    stargazerGifts.style.display = "block";
    uktenaGifts.style.display = "none";
    wendigoGifts.style.display = "none";
    blackSpiralDancersGifts.style.display = "none";
    blackFuriesGifts.style.display = "none";
  } else if (tribeSelection.value == 11) {
    boneGnawersGifts.style.display = "none";
    childrenOfGaiaGifts.style.display = "none";
    fiannaGifts.style.display = "none";
    getOfFenrisGifts.style.display = "none";
    glassWalkersGifts.style.display = "none";
    redTalonsGifts.style.display = "none";
    shadowLordsGifts.style.display = "none";
    silentStridersGifts.style.display = "none";
    silverFangsGifts.style.display = "none";
    stargazerGifts.style.display = "none";
    uktenaGifts.style.display = "block";
    wendigoGifts.style.display = "none";
    blackSpiralDancersGifts.style.display = "none";
    blackFuriesGifts.style.display = "none";
  } else if (tribeSelection.value == 12) {
    boneGnawersGifts.style.display = "none";
    childrenOfGaiaGifts.style.display = "none";
    fiannaGifts.style.display = "none";
    getOfFenrisGifts.style.display = "none";
    glassWalkersGifts.style.display = "none";
    redTalonsGifts.style.display = "none";
    shadowLordsGifts.style.display = "none";
    silentStridersGifts.style.display = "none";
    silverFangsGifts.style.display = "none";
    stargazerGifts.style.display = "none";
    uktenaGifts.style.display = "none";
    wendigoGifts.style.display = "block";
    blackSpiralDancersGifts.style.display = "none";
    blackFuriesGifts.style.display = "none";
  } else if (tribeSelection.value == 13) {
    boneGnawersGifts.style.display = "none";
    childrenOfGaiaGifts.style.display = "none";
    fiannaGifts.style.display = "none";
    getOfFenrisGifts.style.display = "none";
    glassWalkersGifts.style.display = "none";
    redTalonsGifts.style.display = "none";
    shadowLordsGifts.style.display = "none";
    silentStridersGifts.style.display = "none";
    silverFangsGifts.style.display = "none";
    stargazerGifts.style.display = "none";
    uktenaGifts.style.display = "none";
    wendigoGifts.style.display = "none";
    blackSpiralDancersGifts.style.display = "block";
    blackFuriesGifts.style.display = "none";
  } else if (tribeSelection.value == 14) {
    boneGnawersGifts.style.display = "none";
    childrenOfGaiaGifts.style.display = "none";
    fiannaGifts.style.display = "none";
    getOfFenrisGifts.style.display = "none";
    glassWalkersGifts.style.display = "none";
    redTalonsGifts.style.display = "none";
    shadowLordsGifts.style.display = "none";
    silentStridersGifts.style.display = "none";
    silverFangsGifts.style.display = "none";
    stargazerGifts.style.display = "none";
    uktenaGifts.style.display = "none";
    wendigoGifts.style.display = "none";
    blackSpiralDancersGifts.style.display = "none";
    blackFuriesGifts.style.display = "block";
  }
}
