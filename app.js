// Selectors
const generateButton = document.querySelector(".generate-button");
const generateDiv = document.querySelector(".sheetTest");
const generateName = document.querySelector(".inputName");
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
generateButton.addEventListener("click", generateSheet);

// Functions
function generateSheet(event) {
  event.preventDefault();
  const nameSheet = document.createElement("div");
  nameSheet.classList.add("nameSheet");
  const newName = document.createElement("spam");
  newName.innerText = "Name: " + generateName.value;
  nameSheet.classList.add("newName");
  nameSheet.appendChild(newName);
  generateDiv.appendChild(nameSheet);
}
