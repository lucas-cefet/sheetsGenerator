// Selectors
//BREED SELECTOS
const breedSelection = document.querySelector(".char-breed");
const breedOptions = document.querySelector(".breed-options");
const auspiceOptions = document.querySelector(".auspice-options");
const tribeOptions = document.querySelector(".tribe-options");
const auspiceSelection = document.querySelector(".char-auspice");
const points = document.querySelector(".points");

const sheetFirstName = document.getElementById("sheet-first-name");
const sheetLastName = document.getElementById("sheet-last-name");
const sheetBreed = document.getElementById("sheet-breed");
const sheetAuspice = document.getElementById("sheet-auspice");
const sheetTribe = document.getElementById("sheet-tribe");
const sheetConcept = document.getElementById("sheet-concept");
const charName = document.getElementById("char-name");

//BUTTONS SELECTORS

const generateButton = document.querySelector(".generate-btn");
const resetAll = document.querySelector(".reset-all");

//GIFTS

const breedGifts = {
  homid: [
    "Random",
    "City Running",
    "Stench and the City",
    "Master of Fire",
    "Persuasion",
    "Smell of Man",
    "Apecraft’s Blessings",
    "Weaver’s Eyes",
  ],
  lupus: [
    "Random",
    "Hare’s Leap",
    "Heightened Senses",
    "Sense Wyld",
    "Sense Prey",
    "Predator’s Arsenal",
    "Prey Mind",
    "Find Water",
    "Black Mamba Strike",
  ],
  metis: ["Random", "Sense Wyrm", "Primal Anger", "Create Element", "Shed"],
};

const auspiceGifts = {
  ahroun: [
    "Random",
    "Inspiration",
    "Falling Touch",
    "Rhythm of War",
    "Spur Claws",
    "Empathy of Hatred",
    "Pack Tactics",
    "Razor Claws",
  ],
  theurge: [
    "Random",
    "Sense Wyld",
    "Sense Wyrm",
    "Mother’s Touch",
    "Spirit Speech",
    "Umbral Tether",
    "Hear the Silence",
    "Sense Weaver",
    "Spirit Snare",
    "Sense Chiminage",
    "Airt Perception",
  ],
  galliard: [
    "Random",
    "Beast Speech",
    "Perfect Recall",
    "Canine Call",
    "Memory Circle",
    "Call of the Wyld",
    "Heightened Senses",
  ],
  ragabash: [
    "Random",
    "Infectious Laughter",
    "Blur of the Milky Eye",
    "Liar’s Face",
    "Hush",
    "Disguise Fetish",
    "Open Seal",
  ],
  philodox: [
    "Random",
    "Resist Pain",
    "Ma’at’s Feather",
    "Truth of Gaia",
    "Sense Trauma",
    "Fangs of Judgement",
    "Scent of the True Form",
    "Moon Lore",
  ],
};

const tribeGifts = {
  boneGnawers: [
    "Random",
    "Desperate Strength",
    "Declamation",
    "The Mark",
    "Nose of the Hungry Hound",
    "Resist Toxin",
    "Cardboard Mansion",
    "Scent of Sweet Honey",
    "Tagalong",
    "Urban Ward",
    "Cooking",
    "Trash is Treasure",
    "Kitchen Chemistry",
    "Smell of Success",
    "Stench and the City",
  ],
  childrenOfGaia: [
    "Random",
    "Mercy",
    "Brother’s Scent",
    "Water-Conning",
    "Jam Weapon",
    "Swallow Rage",
    "Resist Pain",
    "Mother’s Touch",
  ],
  fianna: [
    "Random",
    "Hare’s Leap",
    "Faerie Light",
    "Two Tongues",
    "Persuasion",
  ],
  getOfFenris: [
    "Random",
    "Razor Claws",
    "Lightning Reflexes",
    "Safe Haven",
    "Snow Running",
    "Visage of Fenris",
    "Sigurd’s Stride",
    "Master of Fire",
    "Resist Pain",
  ],
  glassWalkers: [
    "Random",
    "Sheng-Nong’s Eyes",
    "Agro Culture",
    "Last Ditch",
    "Network Terminal",
    "Tommy’s New Trick",
    "Plug and Play",
    "Diagnostics",
    "Weaver’s Eyes",
    "Control Simple Machine",
    "Trick Shot",
    "Budget Approval Process",
    "Cool Mind",
    "Well-Oiled Running",
    "Skyscraper Vision",
    "Persuasion",
    "Mother’s Touch",
  ],
  redTalons: [
    "Random",
    "Beast Speech",
    "Scent of Running Water",
    "Hidden Killer",
    "Eye of the Hunter",
    "Prey’s Cry",
    "Cub’s Lesson",
    "Silence the Slain",
    "Wolf at the Door",
    "Purify Meat",
    "Speed of Thought",
  ],
  shadowLords: [
    "Random",
    "Dreams of a Thousand Cranes",
    "Fair Path",
    "Purify Scent",
    "Ears of the Bat",
    "Perceptive Servant",
    "Paranoia",
    "Whisper Catching",
    "Shadow Weaving",
    "Aura of Confidence",
    "Fatal Flaw",
    "Rains of Mercy",
    "Seizing the Edge",
  ],
  silentStriders: [
    "Random",
    "Grim Resolve",
    "Sense Wyrm",
    "Speed of Thought",
    "Death Sight",
    "Silence",
    "Heavens’ Guidance",
    "Tireless Running",
  ],
  silverFangs: [
    "Random",
    "Grim Resolve",
    "Sense Wyrm",
    "Implacable Grip",
    "Osprey’s Eye",
    "Full Moon Cleansing",
    "New Moon’s Laughter",
    "Harrier’s View",
    "Eye of the Falcon",
    "Lambent Flame",
    "Ice Dance",
    "Call the Breeze",
  ],
  stargazer: [
    "Random",
    "Falling Touch",
    "Sense Wyrm",
    "Imbalance",
    "Inner Strength",
    "Paper Butterfly",
    "Balance",
    "Iron Resolve",
    "Muladhara",
    "Seed of Speech",
    "Sense the Demonic",
    "Channeling",
  ],
  uktena: [
    "Random",
    "Sense Wyrm",
    "Implacable Grip",
    "Spirit Speech",
    "Fast Track",
    "Moonstruck Path",
    "Shroud",
    "Sense Magic",
    "Spirit of the Lizard",
    "Strut",
    "Pull Water",
  ],
  wendigo: [
    "Random",
    "Call the Breeze",
    "Lift-Your-Leg",
    "Nose-to-Tail",
    "Dead Stick",
    "Snow Sight",
    "Camouflage",
    "Ice Echo",
    "Beat of the Heart-Drum",
  ],
  blackSpiralDancers: [
    "Random",
    "Resist Toxin",
    "Repress Taint",
    "Bane Protector",
    "Spiral - Shadow Dance",
    "Bale Armor",
    "Toxic Claws",
    "Rathead",
    "Sense Wyrm",
    "Resist Pain",
    "Bale Aura",
    "Smell Fear",
    "Aura of Poison",
    "Ways of the Urban Wolf",
    "Bleed",
    "Acid Talons",
    "Bestowing the Predator’s Shadow",
  ],
  blackFuries: [
    "Random",
    "Wyld Resurgence",
    "True Shot",
    "Moonshadow",
    "Spirit Smuggler",
    "Breath of the Wyld",
    "Owl Speech",
    "Man’s Skin",
    "Watchful Eyes",
    "Arion’s Burden",
    "Heightened Senses",
    "Sense Wyld",
    "Sense Wyrm",
  ],
};

//TRIBES

const tribesList = [
  "Bone Gnawers",
  "Children of Gaia",
  "Fianna",
  "Get of Fenris",
  "Glass Walkers",
  "Red Talons",
  "Shadow Lords",
  "Silent Striders",
  "Silver Fangs",
  "Stargazer",
  "Uktena",
  "Wendigo",
  "Black Spiral Dancers",
  "Black Furies",
];

// CONCEPTS

const conceptsList = [
  "Criminal",
  "Gangbanger",
  "Thief",
  "Fence",
  "Dealer",
  "Manhunter",
  "Drifter",
  "Wandering-Hero",
  "Gambler",
  "Urban-Explorer",
  "Omega",
  "Rabblerouser",
  "Entertainer",
  "Musician",
  "Artist",
  "Dancer",
  "Howler",
  "Comedian",
  "Intellectual",
  "Student",
  "Philosopher",
  "Guru",
  "Professor",
  "Investigator",
  "Detective",
  "Kid",
  "Runaway",
  "Hero",
  "Nightlifer",
  "Punk",
  "Skinhead",
  "Addict",
  "Hedonist",
  "Outsider",
  "Urban-Primitive",
  "Refugee",
  "Cultist",
  "Disgraced-Wolf",
  "Litany-Breaker",
  "Politician",
  "Judge",
  "Lobbyist",
  "Professional",
  "Lawyer",
  "Reporter",
  "Journalist",
  "Paparazzi",
  "Gossip",
  "Socialite",
  "Dilettante",
  "Playboy",
  "Trendsetter",
  "Soldier",
  "Bodyguard",
  "Enforcer",
  "Mercenary",
  "Hunter",
  "Security-Guard",
  "Worker",
  "Trucker",
  "Dockworker",
  "Blacksmith",
];

// NAMES

const firstNameList = [
  "Mary",
  "Linda",
  "Barbara",
  "Susan",
  "Jessica",
  "Lisa",
  "Donna",
  "Michell",
  "Carol",
  "Amanda",
  "Melissa",
  "Steph",
  "Laura",
  "Shirley",
  "Angela",
  "Helen",
  "Anna",
  "Pamela",
  "Nicole",
  "Samantha",
  "Kathe",
  "Emma",
  "Ruth",
  "Rachel",
  "Heather",
  "Julie",
  "Joan",
  "Megan",
  "Frances",
  "Gloria",
  "Alice",
  "Julia",
  "Judy",
  "Natalie",
  "Sophia",
  "Rose",
  "Isabella",
  "Alexis",
  "John",
  "Robert",
  "Michael",
  "William",
  "David",
  "Richard",
  "Joseph",
  "Thomas",
  "Charles",
  "Chris",
  "Daniel",
  "Matthew",
  "Anthony",
  "Mark",
  "Paul",
  "Steven",
  "Andrew",
  "Kenneth",
  "Joshua",
  "Kevin",
  "Brian",
  "George",
  "Edward",
  "Ronald",
  "Jeffrey",
  "Ryan",
  "Jacob",
  "Gary",
  "Nicholas",
  "Eric",
  "Jonathan",
  "Stephen",
  "Larry",
  "Justin",
  "Scott",
  "Brandon",
  "Benjamin",
  "Samuel",
  "Frank",
  "Gregory",
  "Astrid",
  "Bodil",
  "Frida",
  "Gertru",
  "Gro",
  "Estrid",
  "Hilda",
  "Gudrun",
  "Gunhil",
  "Helga",
  "Inga",
  "Liv",
  "Randi",
  "Signe",
  "Sigrid",
  "Revna",
  "Sif",
  "Tora",
  "Tove",
  "Thyra",
  "Thurid",
  "Yrsa",
  "Ulfhil",
  "Åse",
  "Ulrich",
  "Arne",
  "Birger",
  "Bjørn",
  "Bo",
  "Erik",
  "Frode",
  "Gorm",
  "Halfdan",
  "Harald",
  "Knud",
  "Kåre",
  "Leif",
  "Njal",
  "Roar",
  "Rune",
  "Skarde",
  "Sune",
  "Svend",
  "Troels",
  "Toke",
  "Torsten",
  "Trygve",
  "Ulf",
  "Ødger",
  "Åge",
];
const lastNameList = [
  "Risberg",
  "Steenberg",
  "Stinar",
  "Thomason",
  "Thostenson",
  "Toft",
  "Tofte",
  "Torgrimson",
  "Torp",
  "Tostenson",
  "Tranum",
  "Truelson",
  "Trulson",
  "Trygg",
  "Vagle",
  "Aland",
  "Alf",
  "Alfson",
  "Ander",
  "Axel",
  "Bernt",
  "Bugge",
  "Christeson",
  "Dolph",
  "Eskelson",
  "Estenson",
  "Fagerberg",
  "Gulbranson",
  "Guttormson",
  "Halvorson",
  "Haralson",
  "Hatlen",
  "Haugrud",
  "Hillesland",
  "Hjelmstad",
  "Hjorth",
  "Kaase",
  "Kolsrud",
  "Lind",
  "Lorenson",
  "Mathieson",
  "Mathison",
  "Matsen",
  "Ness",
  "Nord",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
  "Green",
  "Adams",
  "Nelson",
  "Baker",
  "Hall",
  "Rivera",
  "Campbell",
  "Mitchell",
  "Carter",
  "Roberts",
  "Sanchez",
  "Clark",
  "Ramirez",
  "Lewis",
  "Robinson",
  "Walker",
  "Young",
  "Allen",
  "King",
  "Wright",
  "Scott",
  "Torres",
];

// BREEDS

const breedList = ["Homid", "Lupus", "Metis"];

// AUSPICES

const auspiceList = ["Ahroun", "Theurge", "Galliard", "Ragabash", "Philodox"];

//TRIBE SELECTORS
const tribeSelection = document.querySelector(".char-tribe");

//ABILITIES SELECTORS
const attributesSelection = document.querySelector("attributes-selection");

//ATTRIBUTES POINTS SELECTORS
const str2 = document.getElementById("str2");
const str3 = document.getElementById("str3");
const str4 = document.getElementById("str4");
const str5 = document.getElementById("str5");

const dex2 = document.getElementById("dex2");
const dex3 = document.getElementById("dex3");
const dex4 = document.getElementById("dex4");
const dex5 = document.getElementById("dex5");

const stamina2 = document.getElementById("stamina2");
const stamina3 = document.getElementById("stamina3");
const stamina4 = document.getElementById("stamina4");
const stamina5 = document.getElementById("stamina5");

const charisma2 = document.getElementById("charisma2");
const charisma3 = document.getElementById("charisma3");
const charisma4 = document.getElementById("charisma4");
const charisma5 = document.getElementById("charisma5");

const manipulation2 = document.getElementById("manipulation2");
const manipulation3 = document.getElementById("manipulation3");
const manipulation4 = document.getElementById("manipulation4");
const manipulation5 = document.getElementById("manipulation5");

const appear2 = document.getElementById("appear2");
const appear3 = document.getElementById("appear3");
const appear4 = document.getElementById("appear4");
const appear5 = document.getElementById("appear5");

const percep2 = document.getElementById("percep2");
const percep3 = document.getElementById("percep3");
const percep4 = document.getElementById("percep4");
const percep5 = document.getElementById("percep5");

const int2 = document.getElementById("int2");
const int3 = document.getElementById("int3");
const int4 = document.getElementById("int4");
const int5 = document.getElementById("int5");

const wits2 = document.getElementById("wits2");
const wits3 = document.getElementById("wits3");
const wits4 = document.getElementById("wits4");
const wits5 = document.getElementById("wits5");

// ABILITIES POINTS SELECTORS
//TALENTS

const alertness1 = document.getElementById("alertness1");
const alertness2 = document.getElementById("alertness2");
const alertness3 = document.getElementById("alertness3");
const alertness4 = document.getElementById("alertness4");
const alertness5 = document.getElementById("alertness5");
const athletics1 = document.getElementById("athletics1");
const athletics2 = document.getElementById("athletics2");
const athletics3 = document.getElementById("athletics3");
const athletics4 = document.getElementById("athletics4");
const athletics5 = document.getElementById("athletics5");

const brawl1 = document.getElementById("brawl1");
const brawl2 = document.getElementById("brawl2");
const brawl3 = document.getElementById("brawl3");
const brawl4 = document.getElementById("brawl4");
const brawl5 = document.getElementById("brawl5");

const dodge1 = document.getElementById("dodge1");
const dodge2 = document.getElementById("dodge2");
const dodge3 = document.getElementById("dodge3");
const dodge4 = document.getElementById("dodge4");
const dodge5 = document.getElementById("dodge5");

const empathy1 = document.getElementById("empathy1");
const empathy2 = document.getElementById("empathy2");
const empathy3 = document.getElementById("empathy3");
const empathy4 = document.getElementById("empathy4");
const empathy5 = document.getElementById("empathy5");

const expression1 = document.getElementById("expression1");
const expression2 = document.getElementById("expression2");
const expression3 = document.getElementById("expression3");
const expression4 = document.getElementById("expression4");
const expression5 = document.getElementById("expression5");

const intimidation1 = document.getElementById("intimidation1");
const intimidation2 = document.getElementById("intimidation2");
const intimidation3 = document.getElementById("intimidation3");
const intimidation4 = document.getElementById("intimidation4");
const intimidation5 = document.getElementById("intimidation5");

const primalUrge1 = document.getElementById("primal-urge1");
const primalUrge2 = document.getElementById("primal-urge2");
const primalUrge3 = document.getElementById("primal-urge3");
const primalUrge4 = document.getElementById("primal-urge4");
const primalUrge5 = document.getElementById("primal-urge5");

const streetwise1 = document.getElementById("streetwise1");
const streetwise2 = document.getElementById("streetwise2");
const streetwise3 = document.getElementById("streetwise3");
const streetwise4 = document.getElementById("streetwise4");
const streetwise5 = document.getElementById("streetwise5");

const subterfuge1 = document.getElementById("subterfurge1");
const subterfuge2 = document.getElementById("subterfurge2");
const subterfuge3 = document.getElementById("subterfurge3");
const subterfuge4 = document.getElementById("subterfurge4");
const subterfuge5 = document.getElementById("subterfurge5");

// SKILLS

const animalKen1 = document.getElementById("animal-ken1");
const animalKen2 = document.getElementById("animal-ken2");
const animalKen3 = document.getElementById("animal-ken3");
const animalKen4 = document.getElementById("animal-ken4");
const animalKen5 = document.getElementById("animal-ken5");

const drive1 = document.getElementById("drive1");
const drive2 = document.getElementById("drive2");
const drive3 = document.getElementById("drive3");
const drive4 = document.getElementById("drive4");
const drive5 = document.getElementById("drive5");

const etiquette1 = document.getElementById("etiquette1");
const etiquette2 = document.getElementById("etiquette2");
const etiquette3 = document.getElementById("etiquette3");
const etiquette4 = document.getElementById("etiquette4");
const etiquette5 = document.getElementById("etiquette5");

const fireArms1 = document.getElementById("fire-arms1");
const fireArms2 = document.getElementById("fire-arms2");
const fireArms3 = document.getElementById("fire-arms3");
const fireArms4 = document.getElementById("fire-arms4");
const fireArms5 = document.getElementById("fire-arms5");

const melee1 = document.getElementById("melee1");
const melee2 = document.getElementById("melee2");
const melee3 = document.getElementById("melee3");
const melee4 = document.getElementById("melee4");
const melee5 = document.getElementById("melee5");

const leadership1 = document.getElementById("leadership1");
const leadership2 = document.getElementById("leadership2");
const leadership3 = document.getElementById("leadership3");
const leadership4 = document.getElementById("leadership4");
const leadership5 = document.getElementById("leadership5");

const performance1 = document.getElementById("performance1");
const performance2 = document.getElementById("performance2");
const performance3 = document.getElementById("performance3");
const performance4 = document.getElementById("performance4");
const performance5 = document.getElementById("performance5");

const repair1 = document.getElementById("repair1");
const repair2 = document.getElementById("repair2");
const repair3 = document.getElementById("repair3");
const repair4 = document.getElementById("repair4");
const repair5 = document.getElementById("repair5");

const stealth1 = document.getElementById("stealth1");
const stealth2 = document.getElementById("stealth2");
const stealth3 = document.getElementById("stealth3");
const stealth4 = document.getElementById("stealth4");
const stealth5 = document.getElementById("stealth5");

const survival1 = document.getElementById("survival1");
const survival2 = document.getElementById("survival2");
const survival3 = document.getElementById("survival3");
const survival4 = document.getElementById("survival4");
const survival5 = document.getElementById("survival5");

// KNOWLEDGE

const computer1 = document.getElementById("computer1");
const computer2 = document.getElementById("computer2");
const computer3 = document.getElementById("computer3");
const computer4 = document.getElementById("computer4");
const computer5 = document.getElementById("computer5");

const enigmas1 = document.getElementById("enigmas1");
const enigmas2 = document.getElementById("enigmas2");
const enigmas3 = document.getElementById("enigmas3");
const enigmas4 = document.getElementById("enigmas4");
const enigmas5 = document.getElementById("enigmas5");

const investigation1 = document.getElementById("investigation1");
const investigation2 = document.getElementById("investigation2");
const investigation3 = document.getElementById("investigation3");
const investigation4 = document.getElementById("investigation4");
const investigation5 = document.getElementById("investigation5");

const law1 = document.getElementById("law1");
const law2 = document.getElementById("law2");
const law3 = document.getElementById("law3");
const law4 = document.getElementById("law4");
const law5 = document.getElementById("law5");

const linguistics1 = document.getElementById("linguistics1");
const linguistics2 = document.getElementById("linguistics2");
const linguistics3 = document.getElementById("linguistics3");
const linguistics4 = document.getElementById("linguistics4");
const linguistics5 = document.getElementById("linguistics5");

const medicine1 = document.getElementById("medicine1");
const medicine2 = document.getElementById("medicine2");
const medicine3 = document.getElementById("medicine3");
const medicine4 = document.getElementById("medicine4");
const medicine5 = document.getElementById("medicine5");

const occult1 = document.getElementById("occult1");
const occult2 = document.getElementById("occult2");
const occult3 = document.getElementById("occult3");
const occult4 = document.getElementById("occult4");
const occult5 = document.getElementById("occult5");

const politics1 = document.getElementById("politcs1");
const politics2 = document.getElementById("politcs2");
const politics3 = document.getElementById("politcs3");
const politics4 = document.getElementById("politcs4");
const politics5 = document.getElementById("politcs5");

const rituals1 = document.getElementById("rituals1");
const rituals2 = document.getElementById("rituals2");
const rituals3 = document.getElementById("rituals3");
const rituals4 = document.getElementById("rituals4");
const rituals5 = document.getElementById("rituals5");

const science1 = document.getElementById("science1");
const science2 = document.getElementById("science2");
const science3 = document.getElementById("science3");
const science4 = document.getElementById("science4");
const science5 = document.getElementById("science5");

// ADVANTAGES SELECTORS

const gifts1 = document.getElementById("gifts1");
const gifts2 = document.getElementById("gifts2");
const gifts3 = document.getElementById("gifts3");

const background1 = document.getElementById("background1");
const background2 = document.getElementById("background2");
const background3 = document.getElementById("background3");

//RENOWN SELECTORS

const glory1 = document.getElementById("glory1");
const glory2 = document.getElementById("glory2");
const glory3 = document.getElementById("glory3");
const glory4 = document.getElementById("glory4");
const glory5 = document.getElementById("glory5");
const glory6 = document.getElementById("glory6");
const glory7 = document.getElementById("glory7");
const glory8 = document.getElementById("glory8");
const glory9 = document.getElementById("glory9");
const glory10 = document.getElementById("glory10");

const honor1 = document.getElementById("honor1");
const honor2 = document.getElementById("honor2");
const honor3 = document.getElementById("honor3");
const honor4 = document.getElementById("honor4");
const honor5 = document.getElementById("honor5");
const honor6 = document.getElementById("honor6");
const honor7 = document.getElementById("honor7");
const honor8 = document.getElementById("honor8");
const honor9 = document.getElementById("honor9");
const honor10 = document.getElementById("honor10");

const wisdom1 = document.getElementById("wisdom1");
const wisdom2 = document.getElementById("wisdom2");
const wisdom3 = document.getElementById("wisdom3");
const wisdom4 = document.getElementById("wisdom4");
const wisdom5 = document.getElementById("wisdom5");
const wisdom6 = document.getElementById("wisdom6");
const wisdom7 = document.getElementById("wisdom7");
const wisdom8 = document.getElementById("wisdom8");
const wisdom9 = document.getElementById("wisdom9");
const wisdom10 = document.getElementById("wisdom10");

const rage1 = document.getElementById("rage1");
const rage2 = document.getElementById("rage2");
const rage3 = document.getElementById("rage3");
const rage4 = document.getElementById("rage4");
const rage5 = document.getElementById("rage5");
const rage6 = document.getElementById("rage6");
const rage7 = document.getElementById("rage7");
const rage8 = document.getElementById("rage8");
const rage9 = document.getElementById("rage9");
const rage10 = document.getElementById("rage10");

const gnosis1 = document.getElementById("gnosis1");
const gnosis2 = document.getElementById("gnosis2");
const gnosis3 = document.getElementById("gnosis3");
const gnosis4 = document.getElementById("gnosis4");
const gnosis5 = document.getElementById("gnosis5");
const gnosis6 = document.getElementById("gnosis6");
const gnosis7 = document.getElementById("gnosis7");
const gnosis8 = document.getElementById("gnosis8");
const gnosis9 = document.getElementById("gnosis9");
const gnosis10 = document.getElementById("gnosis10");

const willpower1 = document.getElementById("willpower1");
const willpower2 = document.getElementById("willpower2");
const willpower3 = document.getElementById("willpower3");
const willpower4 = document.getElementById("willpower4");
const willpower5 = document.getElementById("willpower5");
const willpower6 = document.getElementById("willpower6");
const willpower7 = document.getElementById("willpower7");
const willpower8 = document.getElementById("willpower8");
const willpower9 = document.getElementById("willpower9");
const willpower10 = document.getElementById("willpower10");

// ATTRIBUTES RADIO SELECTORS
const physical7 = document.getElementById("attributes7-physical");
const social7 = document.getElementById("attributes7-social");
const mental7 = document.getElementById("attributes7-mental");

const physical5 = document.getElementById("attributes5-physical");
const social5 = document.getElementById("attributes5-social");
const mental5 = document.getElementById("attributes5-mental");

const physical3 = document.getElementById("attributes3-physical");
const social3 = document.getElementById("attributes3-social");
const mental3 = document.getElementById("attributes3-mental");

const randomAttributes = document.getElementById("attributes-random");

// ABILITIES RADIO SELECTORS
const talents13 = document.getElementById("abilities13-talents");
const skills13 = document.getElementById("abilities13-skills");
const knowledge13 = document.getElementById("abilities13-knowledge");

const talents7 = document.getElementById("abilities7-talents");
const skills7 = document.getElementById("abilities7-skills");
const knowledge7 = document.getElementById("abilities7-knowledge");

const talents5 = document.getElementById("abilities5-talents");
const skills5 = document.getElementById("abilities5-skills");
const knowledge5 = document.getElementById("abilities5-knowledge");

const randomAbilities = document.getElementById("abilities-random");

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

generateButton.addEventListener("click", generateSheet);
resetAll.addEventListener("click", cleanWithReset);

physical7.addEventListener("change", blockPhysicalFiveThree);
social7.addEventListener("change", blockSocialFiveThree);
mental7.addEventListener("change", blockMentalFiveThree);

physical5.addEventListener("change", blockPhysicalThreeSeven);
social5.addEventListener("change", blockSocialThreeSeven);
mental5.addEventListener("change", blockMentalThreeSeven);

physical3.addEventListener("change", blockPhysicalFiveSeven);
social3.addEventListener("change", blockSocialFiveSeven);
mental3.addEventListener("change", blockMentalFiveSeven);

randomAttributes.addEventListener("change", enableAttributesRadios);

talents13.addEventListener("change", blockTalentsFiveSeven);
skills13.addEventListener("change", blockSkillsFiveSeven);
knowledge13.addEventListener("change", blockKnowledgeFiveSeven);

talents7.addEventListener("change", blockTalents13Five);
skills7.addEventListener("change", blockSkills13Five);
knowledge7.addEventListener("change", blockKnowledge13Five);

talents5.addEventListener("change", blockTalents13Seven);
skills5.addEventListener("change", blockSkills13Seven);
knowledge5.addEventListener("change", blockKnowledge13Seven);

randomAbilities.addEventListener("change", enableAbilitiesRadios);

// Functions
// CLEANING SHEET
function cleanAttributes() {
  str2.innerHTML = '<img src="/images/light-circle.png" />';
  str3.innerHTML = '<img src="/images/light-circle.png" />';
  str4.innerHTML = '<img src="/images/light-circle.png" />';
  str5.innerHTML = '<img src="/images/light-circle.png" />';
  dex2.innerHTML = '<img src="/images/light-circle.png" />';
  dex3.innerHTML = '<img src="/images/light-circle.png" />';
  dex4.innerHTML = '<img src="/images/light-circle.png" />';
  dex5.innerHTML = '<img src="/images/light-circle.png" />';
  stamina2.innerHTML = '<img src="/images/light-circle.png" />';
  stamina3.innerHTML = '<img src="/images/light-circle.png" />';
  stamina4.innerHTML = '<img src="/images/light-circle.png" />';
  stamina5.innerHTML = '<img src="/images/light-circle.png" />';
  charisma2.innerHTML = '<img src="/images/light-circle.png" />';
  charisma3.innerHTML = '<img src="/images/light-circle.png" />';
  charisma4.innerHTML = '<img src="/images/light-circle.png" />';
  charisma5.innerHTML = '<img src="/images/light-circle.png" />';
  manipulation2.innerHTML = '<img src="/images/light-circle.png" />';
  manipulation3.innerHTML = '<img src="/images/light-circle.png" />';
  manipulation4.innerHTML = '<img src="/images/light-circle.png" />';
  manipulation5.innerHTML = '<img src="/images/light-circle.png" />';
  appear2.innerHTML = '<img src="/images/light-circle.png" />';
  appear3.innerHTML = '<img src="/images/light-circle.png" />';
  appear4.innerHTML = '<img src="/images/light-circle.png" />';
  appear5.innerHTML = '<img src="/images/light-circle.png" />';
  percep2.innerHTML = '<img src="/images/light-circle.png" />';
  percep3.innerHTML = '<img src="/images/light-circle.png" />';
  percep4.innerHTML = '<img src="/images/light-circle.png" />';
  percep5.innerHTML = '<img src="/images/light-circle.png" />';
  int2.innerHTML = '<img src="/images/light-circle.png" />';
  int3.innerHTML = '<img src="/images/light-circle.png" />';
  int4.innerHTML = '<img src="/images/light-circle.png" />';
  int5.innerHTML = '<img src="/images/light-circle.png" />';
  wits2.innerHTML = '<img src="/images/light-circle.png" />';
  wits3.innerHTML = '<img src="/images/light-circle.png" />';
  wits4.innerHTML = '<img src="/images/light-circle.png" />';
  wits5.innerHTML = '<img src="/images/light-circle.png" />';
}
function cleanAbilities() {
  points.innerHTML = '<img src="/images/light-circle.png" />';
}
function cleanAdvantages() {
  gifts1.innerText = "";
  gifts2.innerText = "";
  gifts3.innerText = "";

  background1.innerText = "";
  background2.innerText = "";
  background3.innerText = "";
}
function cleanRenown() {
  glory1.innerHTML = '<img src="/images/light-circle.png" />';
  glory2.innerHTML = '<img src="/images/light-circle.png" />';
  glory3.innerHTML = '<img src="/images/light-circle.png" />';
  glory4.innerHTML = '<img src="/images/light-circle.png" />';
  glory5.innerHTML = '<img src="/images/light-circle.png" />';
  glory6.innerHTML = '<img src="/images/light-circle.png" />';
  glory7.innerHTML = '<img src="/images/light-circle.png" />';
  glory8.innerHTML = '<img src="/images/light-circle.png" />';
  glory9.innerHTML = '<img src="/images/light-circle.png" />';
  glory10.innerHTML = '<img src="/images/light-circle.png" />';

  honor1.innerHTML = '<img src="/images/light-circle.png" />';
  honor2.innerHTML = '<img src="/images/light-circle.png" />';
  honor3.innerHTML = '<img src="/images/light-circle.png" />';
  honor4.innerHTML = '<img src="/images/light-circle.png" />';
  honor5.innerHTML = '<img src="/images/light-circle.png" />';
  honor6.innerHTML = '<img src="/images/light-circle.png" />';
  honor7.innerHTML = '<img src="/images/light-circle.png" />';
  honor8.innerHTML = '<img src="/images/light-circle.png" />';
  honor9.innerHTML = '<img src="/images/light-circle.png" />';
  honor10.innerHTML = '<img src="/images/light-circle.png" />';

  wisdom1.innerHTML = '<img src="/images/light-circle.png" />';
  wisdom2.innerHTML = '<img src="/images/light-circle.png" />';
  wisdom3.innerHTML = '<img src="/images/light-circle.png" />';
  wisdom4.innerHTML = '<img src="/images/light-circle.png" />';
  wisdom5.innerHTML = '<img src="/images/light-circle.png" />';
  wisdom6.innerHTML = '<img src="/images/light-circle.png" />';
  wisdom7.innerHTML = '<img src="/images/light-circle.png" />';
  wisdom8.innerHTML = '<img src="/images/light-circle.png" />';
  wisdom9.innerHTML = '<img src="/images/light-circle.png" />';
  wisdom10.innerHTML = '<img src="/images/light-circle.png" />';

  rage1.innerHTML = '<img src="/images/light-circle.png" />';
  rage2.innerHTML = '<img src="/images/light-circle.png" />';
  rage3.innerHTML = '<img src="/images/light-circle.png" />';
  rage4.innerHTML = '<img src="/images/light-circle.png" />';
  rage5.innerHTML = '<img src="/images/light-circle.png" />';
  rage6.innerHTML = '<img src="/images/light-circle.png" />';
  rage7.innerHTML = '<img src="/images/light-circle.png" />';
  rage8.innerHTML = '<img src="/images/light-circle.png" />';
  rage9.innerHTML = '<img src="/images/light-circle.png" />';
  rage10.innerHTML = '<img src="/images/light-circle.png" />';

  gnosis1.innerHTML = '<img src="/images/light-circle.png" />';
  gnosis2.innerHTML = '<img src="/images/light-circle.png" />';
  gnosis3.innerHTML = '<img src="/images/light-circle.png" />';
  gnosis4.innerHTML = '<img src="/images/light-circle.png" />';
  gnosis5.innerHTML = '<img src="/images/light-circle.png" />';
  gnosis6.innerHTML = '<img src="/images/light-circle.png" />';
  gnosis7.innerHTML = '<img src="/images/light-circle.png" />';
  gnosis8.innerHTML = '<img src="/images/light-circle.png" />';
  gnosis9.innerHTML = '<img src="/images/light-circle.png" />';
  gnosis10.innerHTML = '<img src="/images/light-circle.png" />';

  willpower1.innerHTML = '<img src="/images/light-circle.png" />';
  willpower2.innerHTML = '<img src="/images/light-circle.png" />';
  willpower3.innerHTML = '<img src="/images/light-circle.png" />';
  willpower4.innerHTML = '<img src="/images/light-circle.png" />';
  willpower5.innerHTML = '<img src="/images/light-circle.png" />';
  willpower6.innerHTML = '<img src="/images/light-circle.png" />';
  willpower7.innerHTML = '<img src="/images/light-circle.png" />';
  willpower8.innerHTML = '<img src="/images/light-circle.png" />';
  willpower9.innerHTML = '<img src="/images/light-circle.png" />';
  willpower10.innerHTML = '<img src="/images/light-circle.png" />';
}

// SHOW HIDDEN DROPBOX
function showBreedGifts(event) {
  event.preventDefault();
  breedOptions.innerHTML = "";
  const breedSelect = document.createElement("select");
  breedSelect.classList.add("breed-select");
  if (breedSelection.value == 0) {
    breedOptions.innerHTML = "";
  } else if (breedSelection.value == 1) {
    var breedLabel = document.createElement("label");
    breedLabel.innerHTML = "Homid Gifts ";
    breedOptions.appendChild(breedLabel);
    for (var i = 0; i < breedGifts.homid.length; i++) {
      var breedGiftOption = document.createElement("option");
      breedGiftOption.value = i;
      breedGiftOption.innerHTML = breedGifts.homid[i];
      breedSelect.appendChild(breedGiftOption);
    }
    breedOptions.appendChild(breedSelect);
  } else if (breedSelection.value == 2) {
    var breedLabel = document.createElement("label");
    breedLabel.innerHTML = "Lupus Gifts ";
    breedOptions.appendChild(breedLabel);
    for (var i = 0; i < breedGifts.lupus.length; i++) {
      var breedGiftOption = document.createElement("option");
      breedGiftOption.value = i;
      breedGiftOption.innerHTML = breedGifts.lupus[i];
      breedSelect.appendChild(breedGiftOption);
    }
    breedOptions.appendChild(breedSelect);
  } else if (breedSelection.value == 3) {
    var breedLabel = document.createElement("label");
    breedLabel.innerHTML = "Metis Gifts ";
    breedOptions.appendChild(breedLabel);
    for (var i = 0; i < breedGifts.metis.length; i++) {
      var breedGiftOption = document.createElement("option");
      breedGiftOption.value = i;
      breedGiftOption.innerHTML = breedGifts.metis[i];
      breedSelect.appendChild(breedGiftOption);
    }
    breedOptions.appendChild(breedSelect);
  }
}
function showAuspiceGifts(event) {
  event.preventDefault();
  auspiceOptions.innerHTML = "";
  const auspiceSelect = document.createElement("select");
  auspiceSelect.classList.add("auspice-select");

  if (auspiceSelection.value == 0) {
    auspiceOptions.innerHTML = "";
  } else if (auspiceSelection.value == 1) {
    var auspiceLabel = document.createElement("label");
    auspiceLabel.innerHTML = "Ahroun Gifts ";
    auspiceOptions.appendChild(auspiceLabel);
    for (var i = 0; i < auspiceGifts.ahroun.length; i++) {
      var gift = document.createElement("option");
      gift.value = i;
      gift.innerHTML = auspiceGifts.ahroun[i];
      auspiceSelect.appendChild(gift);
    }
    auspiceOptions.appendChild(auspiceSelect);
  } else if (auspiceSelection.value == 2) {
    var auspiceLabel = document.createElement("label");
    auspiceLabel.innerHTML = "Theurge Gifts ";
    auspiceOptions.appendChild(auspiceLabel);
    for (var i = 0; i < auspiceGifts.theurge.length; i++) {
      var gift = document.createElement("option");
      gift.value = i;
      gift.innerHTML = auspiceGifts.theurge[i];
      auspiceSelect.appendChild(gift);
    }
    auspiceOptions.appendChild(auspiceSelect);
  } else if (auspiceSelection.value == 3) {
    var auspiceLabel = document.createElement("label");
    auspiceLabel.innerHTML = "Galliard Gifts ";
    auspiceOptions.appendChild(auspiceLabel);
    for (var i = 0; i < auspiceGifts.galliard.length; i++) {
      var gift = document.createElement("option");
      gift.value = i;
      gift.innerHTML = auspiceGifts.galliard[i];
      auspiceSelect.appendChild(gift);
    }
    auspiceOptions.appendChild(auspiceSelect);
  } else if (auspiceSelection.value == 4) {
    var auspiceLabel = document.createElement("label");
    auspiceLabel.innerHTML = "Ragabash Gifts ";
    auspiceOptions.appendChild(auspiceLabel);
    for (var i = 0; i < auspiceGifts.ragabash.length; i++) {
      var gift = document.createElement("option");
      gift.value = i;
      gift.innerHTML = auspiceGifts.ragabash[i];
      auspiceSelect.appendChild(gift);
    }
    auspiceOptions.appendChild(auspiceSelect);
  } else if (auspiceSelection.value == 5) {
    var auspiceLabel = document.createElement("label");
    auspiceLabel.innerHTML = "Philodox Gifts ";
    auspiceOptions.appendChild(auspiceLabel);
    for (var i = 0; i < auspiceGifts.philodox.length; i++) {
      var gift = document.createElement("option");
      gift.value = i;
      gift.innerHTML = auspiceGifts.philodox[i];
      auspiceSelect.appendChild(gift);
    }
    auspiceOptions.appendChild(auspiceSelect);
  }
}
function showTribeGifts(event) {
  event.preventDefault();
  tribeOptions.innerHTML = "";
  const tribeSelect = document.createElement("select");
  tribeSelect.classList.add("tribe-select");

  if (tribeSelection.value == 0) {
    tribeOptions.innerHTML = "";
  } else if (tribeSelection.value == 1) {
    var tribeLabel = document.createElement("label");
    tribeLabel.innerHTML = "Bone Gnawers Gifts ";
    tribeOptions.appendChild(tribeLabel);
    for (var i = 0; i < tribeGifts.boneGnawers.length; i++) {
      var gift = document.createElement("option");
      gift.value = i;
      gift.innerHTML = tribeGifts.boneGnawers[i];
      tribeSelect.appendChild(gift);
    }
    tribeOptions.appendChild(tribeSelect);
  } else if (tribeSelection.value == 2) {
    var tribeLabel = document.createElement("label");
    tribeLabel.innerHTML = "Children of Gaia Gifts ";
    tribeOptions.appendChild(tribeLabel);
    for (var i = 0; i < tribeGifts.childrenOfGaia.length; i++) {
      var gift = document.createElement("option");
      gift.value = i;
      gift.innerHTML = tribeGifts.childrenOfGaia[i];
      tribeSelect.appendChild(gift);
    }
    tribeOptions.appendChild(tribeSelect);
  } else if (tribeSelection.value == 3) {
    var tribeLabel = document.createElement("label");
    tribeLabel.innerHTML = "Fianna Gifts ";
    tribeOptions.appendChild(tribeLabel);
    for (var i = 0; i < tribeGifts.fianna.length; i++) {
      var gift = document.createElement("option");
      gift.value = i;
      gift.innerHTML = tribeGifts.fianna[i];
      tribeSelect.appendChild(gift);
    }
    tribeOptions.appendChild(tribeSelect);
  } else if (tribeSelection.value == 4) {
    var tribeLabel = document.createElement("label");
    tribeLabel.innerHTML = "Get of Fenris Gifts ";
    tribeOptions.appendChild(tribeLabel);
    for (var i = 0; i < tribeGifts.getOfFenris.length; i++) {
      var gift = document.createElement("option");
      gift.value = i;
      gift.innerHTML = tribeGifts.getOfFenris[i];
      tribeSelect.appendChild(gift);
    }
    tribeOptions.appendChild(tribeSelect);
  } else if (tribeSelection.value == 5) {
    var tribeLabel = document.createElement("label");
    tribeLabel.innerHTML = "Glass Walkers Gifts ";
    tribeOptions.appendChild(tribeLabel);
    for (var i = 0; i < tribeGifts.glassWalkers.length; i++) {
      var gift = document.createElement("option");
      gift.value = i;
      gift.innerHTML = tribeGifts.glassWalkers[i];
      tribeSelect.appendChild(gift);
    }
    tribeOptions.appendChild(tribeSelect);
  } else if (tribeSelection.value == 6) {
    var tribeLabel = document.createElement("label");
    tribeLabel.innerHTML = "Red Talons Gifts ";
    tribeOptions.appendChild(tribeLabel);
    for (var i = 0; i < tribeGifts.redTalons.length; i++) {
      var gift = document.createElement("option");
      gift.value = i;
      gift.innerHTML = tribeGifts.redTalons[i];
      tribeSelect.appendChild(gift);
    }
    tribeOptions.appendChild(tribeSelect);
  } else if (tribeSelection.value == 7) {
    var tribeLabel = document.createElement("label");
    tribeLabel.innerHTML = "Shadow Lords Gifts ";
    tribeOptions.appendChild(tribeLabel);
    for (var i = 0; i < tribeGifts.shadowLords.length; i++) {
      var gift = document.createElement("option");
      gift.value = i;
      gift.innerHTML = tribeGifts.shadowLords[i];
      tribeSelect.appendChild(gift);
    }
    tribeOptions.appendChild(tribeSelect);
  } else if (tribeSelection.value == 8) {
    var tribeLabel = document.createElement("label");
    tribeLabel.innerHTML = "Silent Striders Gifts ";
    tribeOptions.appendChild(tribeLabel);
    for (var i = 0; i < tribeGifts.silentStriders.length; i++) {
      var gift = document.createElement("option");
      gift.value = i;
      gift.innerHTML = tribeGifts.silentStriders[i];
      tribeSelect.appendChild(gift);
    }
    tribeOptions.appendChild(tribeSelect);
  } else if (tribeSelection.value == 9) {
    var tribeLabel = document.createElement("label");
    tribeLabel.innerHTML = "Silver Fangs Gifts ";
    tribeOptions.appendChild(tribeLabel);
    for (var i = 0; i < tribeGifts.silverFangs.length; i++) {
      var gift = document.createElement("option");
      gift.value = i;
      gift.innerHTML = tribeGifts.silverFangs[i];
      tribeSelect.appendChild(gift);
    }
    tribeOptions.appendChild(tribeSelect);
  } else if (tribeSelection.value == 10) {
    var tribeLabel = document.createElement("label");
    tribeLabel.innerHTML = "Stargazer Gifts ";
    tribeOptions.appendChild(tribeLabel);
    for (var i = 0; i < tribeGifts.stargazer.length; i++) {
      var gift = document.createElement("option");
      gift.value = i;
      gift.innerHTML = tribeGifts.stargazer[i];
      tribeSelect.appendChild(gift);
    }
    tribeOptions.appendChild(tribeSelect);
  } else if (tribeSelection.value == 11) {
    var tribeLabel = document.createElement("label");
    tribeLabel.innerHTML = "Uktena Gifts ";
    tribeOptions.appendChild(tribeLabel);
    for (var i = 0; i < tribeGifts.uktena.length; i++) {
      var gift = document.createElement("option");
      gift.value = i;
      gift.innerHTML = tribeGifts.uktena[i];
      tribeSelect.appendChild(gift);
    }
    tribeOptions.appendChild(tribeSelect);
  } else if (tribeSelection.value == 12) {
    var tribeLabel = document.createElement("label");
    tribeLabel.innerHTML = "Wendigo Gifts ";
    tribeOptions.appendChild(tribeLabel);
    for (var i = 0; i < tribeGifts.wendigo.length; i++) {
      var gift = document.createElement("option");
      gift.value = i;
      gift.innerHTML = tribeGifts.wendigo[i];
      tribeSelect.appendChild(gift);
    }
    tribeOptions.appendChild(tribeSelect);
  } else if (tribeSelection.value == 13) {
    var tribeLabel = document.createElement("label");
    tribeLabel.setAttribute("id", "black-spiral-label");
    tribeLabel.innerHTML = "Black Spiral Dancers Gifts ";
    tribeOptions.appendChild(tribeLabel);
    document.getElementById("black-spiral-label").style.fontSize = "75%";
    for (var i = 0; i < tribeGifts.blackSpiralDancers.length; i++) {
      var gift = document.createElement("option");
      gift.value = i;
      gift.innerHTML = tribeGifts.blackSpiralDancers[i];
      tribeSelect.appendChild(gift);
    }
    tribeOptions.appendChild(tribeSelect);
  } else if (tribeSelection.value == 14) {
    var tribeLabel = document.createElement("label");
    tribeLabel.innerHTML = "Black Furies Gifts ";
    tribeOptions.appendChild(tribeLabel);
    for (var i = 0; i < tribeGifts.blackFuries.length; i++) {
      var gift = document.createElement("option");
      gift.value = i;
      gift.innerHTML = tribeGifts.blackFuries[i];
      tribeSelect.appendChild(gift);
    }
    tribeOptions.appendChild(tribeSelect);
  }
}

// SHEET OUTPUT
function outputNames() {
  var verifyName = charName.value.length;

  if (verifyName == 0) {
    var firstNameLength = firstNameList.length - 1;
    var chosenFirstName =
      Math.floor(Math.random() * (firstNameLength - 0 + 1)) + 0;
    sheetFirstName.innerText = firstNameList[chosenFirstName];

    var lastNameLength = lastNameList.length - 1;
    var chosenLastName =
      Math.floor(Math.random() * (lastNameLength - 0 + 1)) + 0;
    sheetLastName.innerText = lastNameList[chosenLastName];
  } else {
    sheetFirstName.innerText = charName.value;
    sheetLastName.innerText = "";
  }
}
function outputTribes() {
  var chosenTribe = tribeSelection.value;
  if (chosenTribe == 0) {
    chosenTribe = Math.floor(Math.random() * 14);
    sheetTribe.innerText = tribesList[chosenTribe];
    if (chosenTribe == 0) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower4.innerHTML = '<img src="/images/bold-circle.png" />';
      var gifLength = tribeGifts.boneGnawers.length - 1;
      var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
      gifts3.innerText = tribeGifts.boneGnawers[randomGift];
    } else if (chosenTribe == 1) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower4.innerHTML = '<img src="/images/bold-circle.png" />';
      var gifLength = tribeGifts.childrenOfGaia.length - 1;
      var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
      gifts3.innerText = tribeGifts.childrenOfGaia[randomGift];
    } else if (chosenTribe == 2) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
      var gifLength = tribeGifts.fianna.length - 1;
      var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
      gifts3.innerText = tribeGifts.fianna[randomGift];
    } else if (chosenTribe == 3) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
      var gifLength = tribeGifts.getOfFenris.length - 1;
      var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
      gifts3.innerText = tribeGifts.getOfFenris[randomGift];
    } else if (chosenTribe == 4) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
      var gifLength = tribeGifts.glassWalkers.length - 1;
      var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
      gifts3.innerText = tribeGifts.glassWalkers[randomGift];
    } else if (chosenTribe == 5) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
      var gifLength = tribeGifts.redTalons.length - 1;
      var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
      gifts3.innerText = tribeGifts.redTalons[randomGift];
    } else if (chosenTribe == 6) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
      var gifLength = tribeGifts.shadowLords.length - 1;
      var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
      gifts3.innerText = tribeGifts.shadowLords[randomGift];
    } else if (chosenTribe == 7) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
      var gifLength = tribeGifts.silentStriders.length - 1;
      var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
      gifts3.innerText = tribeGifts.silentStriders[randomGift];
    } else if (chosenTribe == 8) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
      var gifLength = tribeGifts.silverFangs.length - 1;
      var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
      gifts3.innerText = tribeGifts.silverFangs[randomGift];
    } else if (chosenTribe == 9) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
      var gifLength = tribeGifts.stargazer.length - 1;
      var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
      gifts3.innerText = tribeGifts.stargazer[randomGift];
    } else if (chosenTribe == 10) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
      var gifLength = tribeGifts.uktena.length - 1;
      var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
      gifts3.innerText = tribeGifts.uktena[randomGift];
    } else if (chosenTribe == 11) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower4.innerHTML = '<img src="/images/bold-circle.png" />';
      var gifLength = tribeGifts.wendigo.length - 1;
      var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
      gifts3.innerText = tribeGifts.wendigo[randomGift];
    } else if (chosenTribe == 12) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower4.innerHTML = '<img src="/images/bold-circle.png" />';
      var gifLength = tribeGifts.blackSpiralDancers.length - 1;
      var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
      gifts3.innerText = tribeGifts.blackSpiralDancers[randomGift];
    } else if (chosenTribe == 13) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
      var gifLength = tribeGifts.blackFuries.length - 1;
      var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
      gifts3.innerText = tribeGifts.blackFuries[randomGift];
    }
  } else {
    chosenTribe--;
    sheetTribe.innerText = tribesList[chosenTribe];
    if (chosenTribe == 0) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower4.innerHTML = '<img src="/images/bold-circle.png" />';
    } else if (chosenTribe == 1) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower4.innerHTML = '<img src="/images/bold-circle.png" />';
    } else if (chosenTribe == 2) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
    } else if (chosenTribe == 3) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
    } else if (chosenTribe == 4) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
    } else if (chosenTribe == 5) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
    } else if (chosenTribe == 6) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
    } else if (chosenTribe == 7) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
    } else if (chosenTribe == 8) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
    } else if (chosenTribe == 9) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
    } else if (chosenTribe == 10) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
      w;
    } else if (chosenTribe == 11) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower4.innerHTML = '<img src="/images/bold-circle.png" />';
    } else if (chosenTribe == 12) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower4.innerHTML = '<img src="/images/bold-circle.png" />';
    } else if (chosenTribe == 13) {
      willpower1.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower2.innerHTML = '<img src="/images/bold-circle.png" />';
      willpower3.innerHTML = '<img src="/images/bold-circle.png" />';
    }
  }
}
function outputBreeds() {
  var chosenBreed = breedSelection.value;
  if (chosenBreed == 0) {
    chosenBreed = Math.floor(Math.random() * 3);
    sheetBreed.innerText = breedList[chosenBreed];
    if (chosenBreed == 0) {
      gnosis1.innerHTML = '<img src="/images/bold-circle.png" />';
      var gifLength = breedGifts.homid.length - 1;
      var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
      gifts1.innerText = breedGifts.homid[randomGift];
    } else if (chosenBreed == 1) {
      gnosis1.innerHTML = '<img src="/images/bold-circle.png" />';
      gnosis2.innerHTML = '<img src="/images/bold-circle.png" />';
      gnosis3.innerHTML = '<img src="/images/bold-circle.png" />';
      gnosis4.innerHTML = '<img src="/images/bold-circle.png" />';
      gnosis5.innerHTML = '<img src="/images/bold-circle.png" />';
      var gifLength = breedGifts.lupus.length - 1;
      var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
      gifts1.innerText = breedGifts.lupus[randomGift];
    } else {
      gnosis1.innerHTML = '<img src="/images/bold-circle.png" />';
      gnosis2.innerHTML = '<img src="/images/bold-circle.png" />';
      gnosis3.innerHTML = '<img src="/images/bold-circle.png" />';
      var gifLength = breedGifts.metis.length - 1;
      var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
      gifts1.innerText = breedGifts.metis[randomGift];
    }
  } else {
    chosenBreed--;
    sheetBreed.innerText = breedList[chosenBreed];
    if (chosenBreed == 0) {
      gnosis1.innerHTML = '<img src="/images/bold-circle.png" />';
    } else if (chosenBreed == 1) {
      gnosis1.innerHTML = '<img src="/images/bold-circle.png" />';
      gnosis2.innerHTML = '<img src="/images/bold-circle.png" />';
      gnosis3.innerHTML = '<img src="/images/bold-circle.png" />';
      gnosis4.innerHTML = '<img src="/images/bold-circle.png" />';
      gnosis5.innerHTML = '<img src="/images/bold-circle.png" />';
    } else {
      gnosis1.innerHTML = '<img src="/images/bold-circle.png" />';
      gnosis2.innerHTML = '<img src="/images/bold-circle.png" />';
      gnosis3.innerHTML = '<img src="/images/bold-circle.png" />';
    }
  }
}
function outputConcepts() {
  var conceptLength = conceptsList.length - 1;
  var chosenConcept = Math.floor(Math.random() * (conceptLength - 0 + 1)) + 0;
  sheetConcept.innerText = conceptsList[chosenConcept];
}
function outputAuspices() {
  var chosenAuspice = auspiceSelection.value;
  if (chosenAuspice == 0) {
    chosenAuspice = Math.floor(Math.random() * 5);

    sheetAuspice.innerText = auspiceList[chosenAuspice];
    if (chosenAuspice == 0) {
      //Renown Anhroun
      glory1.innerHTML = '<img src="/images/bold-circle.png" />';
      glory2.innerHTML = '<img src="/images/bold-circle.png" />';
      honor1.innerHTML = '<img src="/images/bold-circle.png" />';
      //Rage Anhroun
      rage1.innerHTML = '<img src="/images/bold-circle.png" />';
      rage2.innerHTML = '<img src="/images/bold-circle.png" />';
      rage3.innerHTML = '<img src="/images/bold-circle.png" />';
      rage4.innerHTML = '<img src="/images/bold-circle.png" />';
      rage5.innerHTML = '<img src="/images/bold-circle.png" />';
      //Random Gifts
      var gifLength = auspiceGifts.ahroun.length - 1;
      var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
      gifts2.innerText = auspiceGifts.ahroun[randomGift];
    } else if (chosenAuspice == 1) {
      //Renown Theurge
      wisdom1.innerHTML = '<img src="/images/bold-circle.png" />';
      wisdom2.innerHTML = '<img src="/images/bold-circle.png" />';
      wisdom3.innerHTML = '<img src="/images/bold-circle.png" />';
      //Rage Theurge
      rage1.innerHTML = '<img src="/images/bold-circle.png" />';
      rage2.innerHTML = '<img src="/images/bold-circle.png" />';
      //Random Gifts
      var gifLength = auspiceGifts.theurge.length - 1;
      var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
      gifts2.innerText = auspiceGifts.theurge[randomGift];
    } else if (chosenAuspice == 2) {
      //Renown Galliard
      glory1.innerHTML = '<img src="/images/bold-circle.png" />';
      glory2.innerHTML = '<img src="/images/bold-circle.png" />';
      wisdom1.innerHTML = '<img src="/images/bold-circle.png" />';
      //Rage Galliard
      rage1.innerHTML = '<img src="/images/bold-circle.png" />';
      rage2.innerHTML = '<img src="/images/bold-circle.png" />';
      rage3.innerHTML = '<img src="/images/bold-circle.png" />';
      rage4.innerHTML = '<img src="/images/bold-circle.png" />';
      //Random Gifts
      var gifLength = auspiceGifts.galliard.length - 1;
      var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
      gifts2.innerText = auspiceGifts.galliard[randomGift];
    } else if (chosenAuspice == 3) {
      //Random Gifts
      var gifLength = auspiceGifts.ragabash.length - 1;
      var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
      gifts2.innerText = auspiceGifts.ragabash[randomGift];
      //Renown Ragabash
      var ragabashRenown = Math.floor(Math.random() * 10);
      switch (ragabashRenown) {
        case 1:
          wisdom1.innerHTML = '<img src="/images/bold-circle.png" />';
          wisdom2.innerHTML = '<img src="/images/bold-circle.png" />';
          wisdom3.innerHTML = '<img src="/images/bold-circle.png" />';
          break;
        case 2:
          glory1.innerHTML = '<img src="/images/bold-circle.png" />';
          glory2.innerHTML = '<img src="/images/bold-circle.png" />';
          glory3.innerHTML = '<img src="/images/bold-circle.png" />';
          break;
        case 3:
          honor1.innerHTML = '<img src="/images/bold-circle.png" />';
          honor2.innerHTML = '<img src="/images/bold-circle.png" />';
          honor3.innerHTML = '<img src="/images/bold-circle.png" />';
          break;
        case 4:
          wisdom1.innerHTML = '<img src="/images/bold-circle.png" />';
          wisdom2.innerHTML = '<img src="/images/bold-circle.png" />';
          honor1.innerHTML = '<img src="/images/bold-circle.png" />';
          break;
        case 5:
          glory1.innerHTML = '<img src="/images/bold-circle.png" />';
          glory2.innerHTML = '<img src="/images/bold-circle.png" />';
          wisdom1.innerHTML = '<img src="/images/bold-circle.png" />';
          break;
        case 6:
          honor1.innerHTML = '<img src="/images/bold-circle.png" />';
          honor2.innerHTML = '<img src="/images/bold-circle.png" />';
          glory1.innerHTML = '<img src="/images/bold-circle.png" />';
          break;
        case 7:
          honor1.innerHTML = '<img src="/images/bold-circle.png" />';
          honor2.innerHTML = '<img src="/images/bold-circle.png" />';
          wisdom1.innerHTML = '<img src="/images/bold-circle.png" />';
          break;
        case 8:
          honor1.innerHTML = '<img src="/images/bold-circle.png" />';
          glory1.innerHTML = '<img src="/images/bold-circle.png" />';
          wisdom1.innerHTML = '<img src="/images/bold-circle.png" />';
          break;
        case 9:
          glory1.innerHTML = '<img src="/images/bold-circle.png" />';
          glory2.innerHTML = '<img src="/images/bold-circle.png" />';
          honor1.innerHTML = '<img src="/images/bold-circle.png" />';
          break;
        case 0:
          wisdom1.innerHTML = '<img src="/images/bold-circle.png" />';
          wisdom2.innerHTML = '<img src="/images/bold-circle.png" />';
          glory1.innerHTML = '<img src="/images/bold-circle.png" />';
          break;
      }
      //Rage Ragabash
      rage1.innerHTML = '<img src="/images/bold-circle.png" />';
    } else {
      //Renown Philodox
      glory1.innerHTML = '<img src="/images/bold-circle.png" />';
      glory2.innerHTML = '<img src="/images/bold-circle.png" />';
      wisdom1.innerHTML = '<img src="/images/bold-circle.png" />';
      //Rage Philodox
      rage1.innerHTML = '<img src="/images/bold-circle.png" />';
      rage2.innerHTML = '<img src="/images/bold-circle.png" />';
      rage3.innerHTML = '<img src="/images/bold-circle.png" />';
      //Random Gifts
      var gifLength = auspiceGifts.philodox.length - 1;
      var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
      gifts2.innerText = auspiceGifts.philodox[randomGift];
    }
  } else {
    chosenAuspice--;
    sheetAuspice.innerText = auspiceList[chosenAuspice];
    if (chosenAuspice == 0) {
      //Renown Anhroun
      glory1.innerHTML = '<img src="/images/bold-circle.png" />';
      glory2.innerHTML = '<img src="/images/bold-circle.png" />';
      honor1.innerHTML = '<img src="/images/bold-circle.png" />';
      //Rage Anhroun
      rage1.innerHTML = '<img src="/images/bold-circle.png" />';
      rage2.innerHTML = '<img src="/images/bold-circle.png" />';
      rage3.innerHTML = '<img src="/images/bold-circle.png" />';
      rage4.innerHTML = '<img src="/images/bold-circle.png" />';
      rage5.innerHTML = '<img src="/images/bold-circle.png" />';
    } else if (chosenAuspice == 1) {
      wisdom1.innerHTML = '<img src="/images/bold-circle.png" />';
      wisdom2.innerHTML = '<img src="/images/bold-circle.png" />';
      wisdom3.innerHTML = '<img src="/images/bold-circle.png" />';
      //Rage Theurge
      rage1.innerHTML = '<img src="/images/bold-circle.png" />';
      rage2.innerHTML = '<img src="/images/bold-circle.png" />';
    } else if (chosenAuspice == 2) {
      glory1.innerHTML = '<img src="/images/bold-circle.png" />';
      glory2.innerHTML = '<img src="/images/bold-circle.png" />';
      wisdom1.innerHTML = '<img src="/images/bold-circle.png" />';
      //Rage Galliard
      rage1.innerHTML = '<img src="/images/bold-circle.png" />';
      rage2.innerHTML = '<img src="/images/bold-circle.png" />';
      rage3.innerHTML = '<img src="/images/bold-circle.png" />';
      rage4.innerHTML = '<img src="/images/bold-circle.png" />';
    } else if (chosenAuspice == 3) {
      //Renown Ragabash
      var ragabashRenown = Math.floor(Math.random() * 10);
      switch (ragabashRenown) {
        case 1:
          wisdom1.innerHTML = '<img src="/images/bold-circle.png" />';
          wisdom2.innerHTML = '<img src="/images/bold-circle.png" />';
          wisdom3.innerHTML = '<img src="/images/bold-circle.png" />';
          break;
        case 2:
          glory1.innerHTML = '<img src="/images/bold-circle.png" />';
          glory2.innerHTML = '<img src="/images/bold-circle.png" />';
          glory3.innerHTML = '<img src="/images/bold-circle.png" />';
          break;
        case 3:
          honor1.innerHTML = '<img src="/images/bold-circle.png" />';
          honor2.innerHTML = '<img src="/images/bold-circle.png" />';
          honor3.innerHTML = '<img src="/images/bold-circle.png" />';
          break;
        case 4:
          wisdom1.innerHTML = '<img src="/images/bold-circle.png" />';
          wisdom2.innerHTML = '<img src="/images/bold-circle.png" />';
          honor1.innerHTML = '<img src="/images/bold-circle.png" />';
          break;
        case 5:
          glory1.innerHTML = '<img src="/images/bold-circle.png" />';
          glory2.innerHTML = '<img src="/images/bold-circle.png" />';
          wisdom1.innerHTML = '<img src="/images/bold-circle.png" />';
          break;
        case 6:
          honor1.innerHTML = '<img src="/images/bold-circle.png" />';
          honor2.innerHTML = '<img src="/images/bold-circle.png" />';
          glory1.innerHTML = '<img src="/images/bold-circle.png" />';
          break;
        case 7:
          honor1.innerHTML = '<img src="/images/bold-circle.png" />';
          honor2.innerHTML = '<img src="/images/bold-circle.png" />';
          wisdom1.innerHTML = '<img src="/images/bold-circle.png" />';
          break;
        case 8:
          honor1.innerHTML = '<img src="/images/bold-circle.png" />';
          glory1.innerHTML = '<img src="/images/bold-circle.png" />';
          wisdom1.innerHTML = '<img src="/images/bold-circle.png" />';
          break;
        case 9:
          glory1.innerHTML = '<img src="/images/bold-circle.png" />';
          glory2.innerHTML = '<img src="/images/bold-circle.png" />';
          honor1.innerHTML = '<img src="/images/bold-circle.png" />';
          break;
        case 0:
          wisdom1.innerHTML = '<img src="/images/bold-circle.png" />';
          wisdom2.innerHTML = '<img src="/images/bold-circle.png" />';
          glory1.innerHTML = '<img src="/images/bold-circle.png" />';
          break;
      }
      //Rage Ragabash
      rage1.innerHTML = '<img src="/images/bold-circle.png" />';
    } else {
      //Renown Philodox
      glory1.innerHTML = '<img src="/images/bold-circle.png" />';
      glory2.innerHTML = '<img src="/images/bold-circle.png" />';
      wisdom1.innerHTML = '<img src="/images/bold-circle.png" />';
      //Rage Philodox
      rage1.innerHTML = '<img src="/images/bold-circle.png" />';
      rage2.innerHTML = '<img src="/images/bold-circle.png" />';
      rage3.innerHTML = '<img src="/images/bold-circle.png" />';
    }
  }
}
function outputGifts() {
  //Breeds
  const chosenBreedGift = document.querySelector(".breed-select");
  if (breedSelection.value != 0) {
    if (chosenBreedGift.value != 0) {
      gifts1.innerText =
        chosenBreedGift.options[chosenBreedGift.selectedIndex].text;
    } else {
      if (breedSelection.value == 1) {
        var gifLength = breedGifts.homid.length - 1;
        var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
        gifts1.innerText = breedGifts.homid[randomGift];
      } else if (breedSelection.value == 2) {
        var gifLength = breedGifts.lupus.length - 1;
        var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
        gifts1.innerText = breedGifts.lupus[randomGift];
      } else if (breedSelection.value == 3) {
        var gifLength = breedGifts.metis.length - 1;
        var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
        gifts1.innerText = breedGifts.metis[randomGift];
      }
    }
  }

  //Auspice
  const chosenAuspiceGift = document.querySelector(".auspice-select");
  if (auspiceSelection.value != 0) {
    if (chosenAuspiceGift.value != 0) {
      gifts2.innerText =
        chosenAuspiceGift.options[chosenAuspiceGift.selectedIndex].text;
    } else {
      if (auspiceSelection.value == 1) {
        var gifLength = auspiceGifts.ahroun.length - 1;
        var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
        gifts2.innerText = auspiceGifts.ahroun[randomGift];
      } else if (auspiceSelection.value == 2) {
        var gifLength = auspiceGifts.theurge.length - 1;
        var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
        gifts2.innerText = auspiceGifts.theurge[randomGift];
      } else if (auspiceSelection.value == 3) {
        var gifLength = auspiceGifts.galliard.length - 1;
        var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
        gifts2.innerText = auspiceGifts.galliard[randomGift];
      } else if (auspiceSelection.value == 4) {
        var gifLength = auspiceGifts.ragabash.length - 1;
        var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
        gifts2.innerText = auspiceGifts.ragabash[randomGift];
      } else if (auspiceSelection.value == 5) {
        var gifLength = auspiceGifts.philodox.length - 1;
        var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
        gifts2.innerText = auspiceGifts.philodox[randomGift];
      }
    }
  }

  //Tribes
  const chosenTribeGift = document.querySelector(".tribe-select");
  if (tribeSelection.value != 0) {
    if (chosenTribeGift.value != 0) {
      gifts3.innerText =
        chosenTribeGift.options[chosenTribeGift.selectedIndex].text;
    } else {
      if (tribeSelection.value == 1) {
        var gifLength = tribeGifts.boneGnawers.length - 1;
        var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
        gifts3.innerText = tribeGifts.boneGnawers[randomGift];
      } else if (tribeSelection.value == 2) {
        var gifLength = tribeGifts.childrenOfGaia.length - 1;
        var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
        gifts3.innerText = tribeGifts.childrenOfGaia[randomGift];
      } else if (tribeSelection.value == 3) {
        var gifLength = tribeGifts.fianna.length - 1;
        var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
        gifts3.innerText = tribeGifts.fianna[randomGift];
      } else if (tribeSelection.value == 4) {
        var gifLength = tribeGifts.getOfFenris.length - 1;
        var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
        gifts3.innerText = tribeGifts.getOfFenris[randomGift];
      } else if (tribeSelection.value == 5) {
        var gifLength = tribeGifts.glassWalkers.length - 1;
        var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
        gifts3.innerText = tribeGifts.glassWalkers[randomGift];
      } else if (tribeSelection.value == 6) {
        var gifLength = tribeGifts.redTalons.length - 1;
        var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
        gifts3.innerText = tribeGifts.redTalons[randomGift];
      } else if (tribeSelection.value == 7) {
        var gifLength = tribeGifts.shadowLords.length - 1;
        var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
        gifts3.innerText = tribeGifts.shadowLords[randomGift];
      } else if (tribeSelection.value == 8) {
        var gifLength = tribeGifts.silentStriders.length - 1;
        var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
        gifts3.innerText = tribeGifts.silentStriders[randomGift];
      } else if (tribeSelection.value == 9) {
        var gifLength = tribeGifts.silverFangs.length - 1;
        var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
        gifts3.innerText = tribeGifts.silverFangs[randomGift];
      } else if (tribeSelection.value == 10) {
        var gifLength = tribeGifts.stargazer.length - 1;
        var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
        gifts3.innerText = tribeGifts.stargazer[randomGift];
      } else if (tribeSelection.value == 11) {
        var gifLength = tribeGifts.uktena.length - 1;
        var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
        gifts3.innerText = tribeGifts.uktena[randomGift];
      } else if (tribeSelection.value == 12) {
        var gifLength = tribeGifts.wendigo.length - 1;
        var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
        gifts3.innerText = tribeGifts.wendigo[randomGift];
      } else if (tribeSelection.value == 13) {
        var gifLength = tribeGifts.blackSpiralDancers.length - 1;
        var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
        gifts3.innerText = tribeGifts.blackSpiralDancers[randomGift];
      } else if (tribeSelection.value == 14) {
        var gifLength = tribeGifts.blackFuries.length - 1;
        var randomGift = Math.floor(Math.random() * (gifLength - 1 + 1)) + 1;
        gifts3.innerText = tribeGifts.blackFuries[randomGift];
      }
    }
  }
}

//ATTRIBUTES OUTPUT
function outputAttributesPoints() {
  if (randomAttributes.checked == true) {
    var randomPhysicalOption = Math.floor(Math.random() * 3);
    var randomSocialOption = Math.floor(Math.random() * 3);
    var randomMentalOption = Math.floor(Math.random() * 3);
    if (
      randomPhysicalOption == randomSocialOption &&
      randomSocialOption == randomMentalOption
    ) {
      randomPhysicalOption = 0;
      randomSocialOption = 1;
      randomMentalOption = 2;
    } else if (randomPhysicalOption == randomSocialOption) {
      randomPhysicalOption = 1;
      randomSocialOption = 2;
      randomMentalOption = 0;
    } else if (randomPhysicalOption == randomMentalOption) {
      randomPhysicalOption = 2;
      randomSocialOption = 1;
      randomMentalOption = 0;
    } else if (randomSocialOption == randomMentalOption) {
      randomPhysicalOption = 0;
      randomSocialOption = 2;
      randomMentalOption = 1;
    }
  }

  if (physical7.checked == true || randomPhysicalOption == 0) {
    var physicalOptions = Math.floor(Math.random() * 12);
    switch (physicalOptions) {
      case 0:
        str2.innerHTML = '<img src="/images/bold-circle.png" />';
        str3.innerHTML = '<img src="/images/bold-circle.png" />';
        str4.innerHTML = '<img src="/images/bold-circle.png" />';

        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        dex3.innerHTML = '<img src="/images/bold-circle.png" />';

        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 1:
        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        dex3.innerHTML = '<img src="/images/bold-circle.png" />';
        dex4.innerHTML = '<img src="/images/bold-circle.png" />';

        str2.innerHTML = '<img src="/images/bold-circle.png" />';
        str3.innerHTML = '<img src="/images/bold-circle.png" />';

        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 2:
        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina3.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina4.innerHTML = '<img src="/images/bold-circle.png" />';

        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        dex3.innerHTML = '<img src="/images/bold-circle.png" />';

        str2.innerHTML = '<img src="/images/bold-circle.png" />';
        str3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 3:
        str2.innerHTML = '<img src="/images/bold-circle.png" />';
        str3.innerHTML = '<img src="/images/bold-circle.png" />';
        str4.innerHTML = '<img src="/images/bold-circle.png" />';
        str5.innerHTML = '<img src="/images/bold-circle.png" />';

        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        dex3.innerHTML = '<img src="/images/bold-circle.png" />';

        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 4:
        str2.innerHTML = '<img src="/images/bold-circle.png" />';
        str3.innerHTML = '<img src="/images/bold-circle.png" />';
        str4.innerHTML = '<img src="/images/bold-circle.png" />';
        str5.innerHTML = '<img src="/images/bold-circle.png" />';

        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        dex3.innerHTML = '<img src="/images/bold-circle.png" />';

        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 5:
        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        dex3.innerHTML = '<img src="/images/bold-circle.png" />';
        dex4.innerHTML = '<img src="/images/bold-circle.png" />';
        dex5.innerHTML = '<img src="/images/bold-circle.png" />';

        str2.innerHTML = '<img src="/images/bold-circle.png" />';
        str3.innerHTML = '<img src="/images/bold-circle.png" />';

        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 6:
        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        dex3.innerHTML = '<img src="/images/bold-circle.png" />';
        dex4.innerHTML = '<img src="/images/bold-circle.png" />';
        dex5.innerHTML = '<img src="/images/bold-circle.png" />';

        str2.innerHTML = '<img src="/images/bold-circle.png" />';

        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 7:
        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina3.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina4.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina5.innerHTML = '<img src="/images/bold-circle.png" />';

        str2.innerHTML = '<img src="/images/bold-circle.png" />';
        str3.innerHTML = '<img src="/images/bold-circle.png" />';

        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 8:
        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina3.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina4.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina5.innerHTML = '<img src="/images/bold-circle.png" />';

        str2.innerHTML = '<img src="/images/bold-circle.png" />';

        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        dex3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 9:
        str2.innerHTML = '<img src="/images/bold-circle.png" />';
        str3.innerHTML = '<img src="/images/bold-circle.png" />';
        str4.innerHTML = '<img src="/images/bold-circle.png" />';

        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';

        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        dex3.innerHTML = '<img src="/images/bold-circle.png" />';
        dex4.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 10:
        str2.innerHTML = '<img src="/images/bold-circle.png" />';
        str3.innerHTML = '<img src="/images/bold-circle.png" />';
        str4.innerHTML = '<img src="/images/bold-circle.png" />';

        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina3.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina4.innerHTML = '<img src="/images/bold-circle.png" />';

        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 11:
        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        dex3.innerHTML = '<img src="/images/bold-circle.png" />';
        dex4.innerHTML = '<img src="/images/bold-circle.png" />';

        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina3.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina4.innerHTML = '<img src="/images/bold-circle.png" />';

        str2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
    }
  } else if (physical5.checked == true || randomPhysicalOption == 1) {
    var physicalOptions = Math.floor(Math.random() * 12);
    switch (physicalOptions) {
      case 0:
        str2.innerHTML = '<img src="/images/bold-circle.png" />';
        str3.innerHTML = '<img src="/images/bold-circle.png" />';
        str4.innerHTML = '<img src="/images/bold-circle.png" />';

        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        dex3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 1:
        str2.innerHTML = '<img src="/images/bold-circle.png" />';
        str3.innerHTML = '<img src="/images/bold-circle.png" />';
        str4.innerHTML = '<img src="/images/bold-circle.png" />';

        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 2:
        str2.innerHTML = '<img src="/images/bold-circle.png" />';
        str3.innerHTML = '<img src="/images/bold-circle.png" />';
        str4.innerHTML = '<img src="/images/bold-circle.png" />';
        str5.innerHTML = '<img src="/images/bold-circle.png" />';

        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 3:
        str2.innerHTML = '<img src="/images/bold-circle.png" />';
        str3.innerHTML = '<img src="/images/bold-circle.png" />';
        str4.innerHTML = '<img src="/images/bold-circle.png" />';
        str5.innerHTML = '<img src="/images/bold-circle.png" />';

        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 4:
        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        dex3.innerHTML = '<img src="/images/bold-circle.png" />';
        dex4.innerHTML = '<img src="/images/bold-circle.png" />';

        str2.innerHTML = '<img src="/images/bold-circle.png" />';
        str3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 5:
        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        dex3.innerHTML = '<img src="/images/bold-circle.png" />';
        dex4.innerHTML = '<img src="/images/bold-circle.png" />';

        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 6:
        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        dex3.innerHTML = '<img src="/images/bold-circle.png" />';
        dex4.innerHTML = '<img src="/images/bold-circle.png" />';
        dex5.innerHTML = '<img src="/images/bold-circle.png" />';

        str2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 7:
        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        dex3.innerHTML = '<img src="/images/bold-circle.png" />';
        dex4.innerHTML = '<img src="/images/bold-circle.png" />';
        dex5.innerHTML = '<img src="/images/bold-circle.png" />';

        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 8:
        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina3.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina4.innerHTML = '<img src="/images/bold-circle.png" />';

        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        dex3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 9:
        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina3.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina4.innerHTML = '<img src="/images/bold-circle.png" />';

        str2.innerHTML = '<img src="/images/bold-circle.png" />';
        str3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 10:
        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina3.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina4.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina5.innerHTML = '<img src="/images/bold-circle.png" />';

        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 11:
        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina3.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina4.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina5.innerHTML = '<img src="/images/bold-circle.png" />';

        str2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
    }
  } else if (physical3.checked == true || randomPhysicalOption == 2) {
    var physicalOptions = Math.floor(Math.random() * 10);
    switch (physicalOptions) {
      case 0:
        str2.innerHTML = '<img src="/images/bold-circle.png" />';
        str3.innerHTML = '<img src="/images/bold-circle.png" />';
        str4.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 1:
        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina3.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina4.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 2:
        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        dex3.innerHTML = '<img src="/images/bold-circle.png" />';
        dex4.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 3:
        str2.innerHTML = '<img src="/images/bold-circle.png" />';
        str3.innerHTML = '<img src="/images/bold-circle.png" />';

        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 4:
        str2.innerHTML = '<img src="/images/bold-circle.png" />';
        str3.innerHTML = '<img src="/images/bold-circle.png" />';

        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 5:
        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina3.innerHTML = '<img src="/images/bold-circle.png" />';

        str2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 6:
        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina3.innerHTML = '<img src="/images/bold-circle.png" />';

        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 7:
        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        dex3.innerHTML = '<img src="/images/bold-circle.png" />';

        str2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 8:
        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        dex3.innerHTML = '<img src="/images/bold-circle.png" />';

        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 9:
        dex2.innerHTML = '<img src="/images/bold-circle.png" />';
        stamina2.innerHTML = '<img src="/images/bold-circle.png" />';
        str2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
    }
  }

  if (social7.checked == true || randomSocialOption == 0) {
    var socialOptions = Math.floor(Math.random() * 12);
    switch (socialOptions) {
      case 0:
        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma3.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma4.innerHTML = '<img src="/images/bold-circle.png" />';

        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation3.innerHTML = '<img src="/images/bold-circle.png" />';

        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        appear3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 1:
        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation3.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation4.innerHTML = '<img src="/images/bold-circle.png" />';

        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma3.innerHTML = '<img src="/images/bold-circle.png" />';

        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        appear3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 2:
        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        appear3.innerHTML = '<img src="/images/bold-circle.png" />';
        appear4.innerHTML = '<img src="/images/bold-circle.png" />';

        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation3.innerHTML = '<img src="/images/bold-circle.png" />';

        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 3:
        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma3.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma4.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma5.innerHTML = '<img src="/images/bold-circle.png" />';

        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation3.innerHTML = '<img src="/images/bold-circle.png" />';

        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 4:
        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma3.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma4.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma5.innerHTML = '<img src="/images/bold-circle.png" />';

        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation3.innerHTML = '<img src="/images/bold-circle.png" />';

        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 5:
        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation3.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation4.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation5.innerHTML = '<img src="/images/bold-circle.png" />';

        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma3.innerHTML = '<img src="/images/bold-circle.png" />';

        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 6:
        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation3.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation4.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation5.innerHTML = '<img src="/images/bold-circle.png" />';

        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';

        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        appear3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 7:
        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        appear3.innerHTML = '<img src="/images/bold-circle.png" />';
        appear4.innerHTML = '<img src="/images/bold-circle.png" />';
        appear5.innerHTML = '<img src="/images/bold-circle.png" />';

        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma3.innerHTML = '<img src="/images/bold-circle.png" />';

        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 8:
        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        appear3.innerHTML = '<img src="/images/bold-circle.png" />';
        appear4.innerHTML = '<img src="/images/bold-circle.png" />';
        appear5.innerHTML = '<img src="/images/bold-circle.png" />';

        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';

        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 9:
        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma3.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma4.innerHTML = '<img src="/images/bold-circle.png" />';

        appear2.innerHTML = '<img src="/images/bold-circle.png" />';

        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation3.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation4.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 10:
        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma3.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma4.innerHTML = '<img src="/images/bold-circle.png" />';

        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        appear3.innerHTML = '<img src="/images/bold-circle.png" />';
        appear4.innerHTML = '<img src="/images/bold-circle.png" />';

        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 11:
        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation3.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation4.innerHTML = '<img src="/images/bold-circle.png" />';

        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        appear3.innerHTML = '<img src="/images/bold-circle.png" />';
        appear4.innerHTML = '<img src="/images/bold-circle.png" />';

        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
    }
  } else if (social5.checked == true || randomSocialOption == 1) {
    var socialOptions = Math.floor(Math.random() * 12);
    switch (socialOptions) {
      case 0:
        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma3.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma4.innerHTML = '<img src="/images/bold-circle.png" />';

        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 1:
        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma3.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma4.innerHTML = '<img src="/images/bold-circle.png" />';

        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        appear3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 2:
        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma3.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma4.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma5.innerHTML = '<img src="/images/bold-circle.png" />';

        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 3:
        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma3.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma4.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma5.innerHTML = '<img src="/images/bold-circle.png" />';

        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 4:
        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation3.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation4.innerHTML = '<img src="/images/bold-circle.png" />';

        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 5:
        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation3.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation4.innerHTML = '<img src="/images/bold-circle.png" />';

        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        appear3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 6:
        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation3.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation4.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation5.innerHTML = '<img src="/images/bold-circle.png" />';

        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 7:
        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation3.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation4.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation5.innerHTML = '<img src="/images/bold-circle.png" />';

        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 8:
        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        appear3.innerHTML = '<img src="/images/bold-circle.png" />';
        appear4.innerHTML = '<img src="/images/bold-circle.png" />';

        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 9:
        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        appear3.innerHTML = '<img src="/images/bold-circle.png" />';
        appear4.innerHTML = '<img src="/images/bold-circle.png" />';

        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 10:
        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        appear3.innerHTML = '<img src="/images/bold-circle.png" />';
        appear4.innerHTML = '<img src="/images/bold-circle.png" />';
        appear5.innerHTML = '<img src="/images/bold-circle.png" />';

        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 11:
        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        appear3.innerHTML = '<img src="/images/bold-circle.png" />';
        appear4.innerHTML = '<img src="/images/bold-circle.png" />';
        appear5.innerHTML = '<img src="/images/bold-circle.png" />';

        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
    }
  } else if (social3.checked == true || randomSocialOption == 2) {
    var socialOptions = Math.floor(Math.random() * 10);
    switch (socialOptions) {
      case 0:
        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma3.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma4.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 1:
        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        appear3.innerHTML = '<img src="/images/bold-circle.png" />';
        appear4.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 2:
        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation3.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation4.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 3:
        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma3.innerHTML = '<img src="/images/bold-circle.png" />';

        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 4:
        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma3.innerHTML = '<img src="/images/bold-circle.png" />';

        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 5:
        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        appear3.innerHTML = '<img src="/images/bold-circle.png" />';

        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 6:
        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        appear3.innerHTML = '<img src="/images/bold-circle.png" />';

        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 7:
        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation3.innerHTML = '<img src="/images/bold-circle.png" />';

        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 8:
        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        manipulation3.innerHTML = '<img src="/images/bold-circle.png" />';

        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 9:
        manipulation2.innerHTML = '<img src="/images/bold-circle.png" />';
        appear2.innerHTML = '<img src="/images/bold-circle.png" />';
        charisma2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
    }
  }

  if (mental7.checked == true || randomMentalOption == 0) {
    var mentalOptions = Math.floor(Math.random() * 12);
    switch (mentalOptions) {
      case 0:
        percep2.innerHTML = '<img src="/images/bold-circle.png" />';
        percep3.innerHTML = '<img src="/images/bold-circle.png" />';
        percep4.innerHTML = '<img src="/images/bold-circle.png" />';

        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        int3.innerHTML = '<img src="/images/bold-circle.png" />';

        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        wits3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 1:
        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        int3.innerHTML = '<img src="/images/bold-circle.png" />';
        int4.innerHTML = '<img src="/images/bold-circle.png" />';

        percep2.innerHTML = '<img src="/images/bold-circle.png" />';
        percep3.innerHTML = '<img src="/images/bold-circle.png" />';

        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        wits3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 2:
        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        wits3.innerHTML = '<img src="/images/bold-circle.png" />';
        wits4.innerHTML = '<img src="/images/bold-circle.png" />';

        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        int3.innerHTML = '<img src="/images/bold-circle.png" />';

        percep2.innerHTML = '<img src="/images/bold-circle.png" />';
        percep3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 3:
        percep2.innerHTML = '<img src="/images/bold-circle.png" />';
        percep3.innerHTML = '<img src="/images/bold-circle.png" />';
        percep4.innerHTML = '<img src="/images/bold-circle.png" />';
        percep5.innerHTML = '<img src="/images/bold-circle.png" />';

        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        int3.innerHTML = '<img src="/images/bold-circle.png" />';

        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 4:
        percep2.innerHTML = '<img src="/images/bold-circle.png" />';
        percep3.innerHTML = '<img src="/images/bold-circle.png" />';
        percep4.innerHTML = '<img src="/images/bold-circle.png" />';
        percep5.innerHTML = '<img src="/images/bold-circle.png" />';

        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        int3.innerHTML = '<img src="/images/bold-circle.png" />';

        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 5:
        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        int3.innerHTML = '<img src="/images/bold-circle.png" />';
        int4.innerHTML = '<img src="/images/bold-circle.png" />';
        int5.innerHTML = '<img src="/images/bold-circle.png" />';

        percep2.innerHTML = '<img src="/images/bold-circle.png" />';
        percep3.innerHTML = '<img src="/images/bold-circle.png" />';

        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 6:
        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        int3.innerHTML = '<img src="/images/bold-circle.png" />';
        int4.innerHTML = '<img src="/images/bold-circle.png" />';
        int5.innerHTML = '<img src="/images/bold-circle.png" />';

        percep2.innerHTML = '<img src="/images/bold-circle.png" />';

        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        wits3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 7:
        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        wits3.innerHTML = '<img src="/images/bold-circle.png" />';
        wits4.innerHTML = '<img src="/images/bold-circle.png" />';
        wits5.innerHTML = '<img src="/images/bold-circle.png" />';

        percep2.innerHTML = '<img src="/images/bold-circle.png" />';
        percep3.innerHTML = '<img src="/images/bold-circle.png" />';

        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 8:
        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        wits3.innerHTML = '<img src="/images/bold-circle.png" />';
        wits4.innerHTML = '<img src="/images/bold-circle.png" />';
        wits5.innerHTML = '<img src="/images/bold-circle.png" />';

        percep2.innerHTML = '<img src="/images/bold-circle.png" />';

        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        int3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 9:
        percep2.innerHTML = '<img src="/images/bold-circle.png" />';
        percep3.innerHTML = '<img src="/images/bold-circle.png" />';
        percep4.innerHTML = '<img src="/images/bold-circle.png" />';

        wits2.innerHTML = '<img src="/images/bold-circle.png" />';

        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        int3.innerHTML = '<img src="/images/bold-circle.png" />';
        int4.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 10:
        percep2.innerHTML = '<img src="/images/bold-circle.png" />';
        percep3.innerHTML = '<img src="/images/bold-circle.png" />';
        percep4.innerHTML = '<img src="/images/bold-circle.png" />';

        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        wits3.innerHTML = '<img src="/images/bold-circle.png" />';
        wits4.innerHTML = '<img src="/images/bold-circle.png" />';

        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 11:
        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        int3.innerHTML = '<img src="/images/bold-circle.png" />';
        int4.innerHTML = '<img src="/images/bold-circle.png" />';

        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        wits3.innerHTML = '<img src="/images/bold-circle.png" />';
        wits4.innerHTML = '<img src="/images/bold-circle.png" />';

        percep2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
    }
  } else if (mental5.checked == true || randomMentalOption == 1) {
    var mentalOptions = Math.floor(Math.random() * 12);
    switch (mentalOptions) {
      case 0:
        percep2.innerHTML = '<img src="/images/bold-circle.png" />';
        percep3.innerHTML = '<img src="/images/bold-circle.png" />';
        percep4.innerHTML = '<img src="/images/bold-circle.png" />';

        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        int3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 1:
        percep2.innerHTML = '<img src="/images/bold-circle.png" />';
        percep3.innerHTML = '<img src="/images/bold-circle.png" />';
        percep4.innerHTML = '<img src="/images/bold-circle.png" />';

        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        wits3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 2:
        percep2.innerHTML = '<img src="/images/bold-circle.png" />';
        percep3.innerHTML = '<img src="/images/bold-circle.png" />';
        percep4.innerHTML = '<img src="/images/bold-circle.png" />';
        percep5.innerHTML = '<img src="/images/bold-circle.png" />';

        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 3:
        percep2.innerHTML = '<img src="/images/bold-circle.png" />';
        percep3.innerHTML = '<img src="/images/bold-circle.png" />';
        percep4.innerHTML = '<img src="/images/bold-circle.png" />';
        percep5.innerHTML = '<img src="/images/bold-circle.png" />';

        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 4:
        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        int3.innerHTML = '<img src="/images/bold-circle.png" />';
        int4.innerHTML = '<img src="/images/bold-circle.png" />';

        percep2.innerHTML = '<img src="/images/bold-circle.png" />';
        percep3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 5:
        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        int3.innerHTML = '<img src="/images/bold-circle.png" />';
        int4.innerHTML = '<img src="/images/bold-circle.png" />';

        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        wits3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 6:
        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        int3.innerHTML = '<img src="/images/bold-circle.png" />';
        int4.innerHTML = '<img src="/images/bold-circle.png" />';
        int5.innerHTML = '<img src="/images/bold-circle.png" />';

        percep2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 7:
        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        int3.innerHTML = '<img src="/images/bold-circle.png" />';
        int4.innerHTML = '<img src="/images/bold-circle.png" />';
        int5.innerHTML = '<img src="/images/bold-circle.png" />';

        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 8:
        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        wits3.innerHTML = '<img src="/images/bold-circle.png" />';
        wits4.innerHTML = '<img src="/images/bold-circle.png" />';

        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        int3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 9:
        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        wits3.innerHTML = '<img src="/images/bold-circle.png" />';
        wits4.innerHTML = '<img src="/images/bold-circle.png" />';

        percep2.innerHTML = '<img src="/images/bold-circle.png" />';
        percep3.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 10:
        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        wits3.innerHTML = '<img src="/images/bold-circle.png" />';
        wits4.innerHTML = '<img src="/images/bold-circle.png" />';
        wits5.innerHTML = '<img src="/images/bold-circle.png" />';

        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 11:
        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        wits3.innerHTML = '<img src="/images/bold-circle.png" />';
        wits4.innerHTML = '<img src="/images/bold-circle.png" />';
        wits5.innerHTML = '<img src="/images/bold-circle.png" />';

        percep2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
    }
  } else if (mental3.checked == true || randomMentalOption == 2) {
    var mentalOptions = Math.floor(Math.random() * 10);
    switch (mentalOptions) {
      case 0:
        percep2.innerHTML = '<img src="/images/bold-circle.png" />';
        percep3.innerHTML = '<img src="/images/bold-circle.png" />';
        percep4.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 1:
        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        wits3.innerHTML = '<img src="/images/bold-circle.png" />';
        wits4.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 2:
        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        int3.innerHTML = '<img src="/images/bold-circle.png" />';
        int4.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 3:
        percep2.innerHTML = '<img src="/images/bold-circle.png" />';
        percep3.innerHTML = '<img src="/images/bold-circle.png" />';

        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 4:
        percep2.innerHTML = '<img src="/images/bold-circle.png" />';
        percep3.innerHTML = '<img src="/images/bold-circle.png" />';

        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 5:
        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        wits3.innerHTML = '<img src="/images/bold-circle.png" />';

        percep2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 6:
        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        wits3.innerHTML = '<img src="/images/bold-circle.png" />';

        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 7:
        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        int3.innerHTML = '<img src="/images/bold-circle.png" />';

        percep2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 8:
        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        int3.innerHTML = '<img src="/images/bold-circle.png" />';

        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
      case 9:
        int2.innerHTML = '<img src="/images/bold-circle.png" />';
        wits2.innerHTML = '<img src="/images/bold-circle.png" />';
        percep2.innerHTML = '<img src="/images/bold-circle.png" />';
        break;
    }
  }
}

//ABILITIES OUTPUT

// RADIOS FUNCTIONS
function blockPhysicalFiveThree() {
  randomAttributes.checked = false;
  physical5.disabled = true;
  physical3.disabled = true;
  if (social7.checked == true) {
    social5.disabled = false;
    social3.disabled = false;
    social7.checked = false;
  } else if (mental7.checked == true) {
    mental5.disabled = false;
    mental3.disabled = false;
    mental7.checked = false;
  }
}
function blockSocialFiveThree() {
  randomAttributes.checked = false;
  social5.disabled = true;
  social3.disabled = true;
  if (physical7.checked == true) {
    physical5.disabled = false;
    physical3.disabled = false;
    physical7.checked = false;
  } else if (mental7.checked == true) {
    mental5.disabled = false;
    mental3.disabled = false;
    mental7.checked = false;
  }
}
function blockMentalFiveThree() {
  randomAttributes.checked = false;
  mental5.disabled = true;
  mental3.disabled = true;
  if (physical7.checked == true) {
    physical5.disabled = false;
    physical3.disabled = false;
    physical7.checked = false;
  } else if (social7.checked == true) {
    social5.disabled = false;
    social3.disabled = false;
    social7.checked = false;
  }
}
function blockPhysicalThreeSeven() {
  randomAttributes.checked = false;
  physical7.disabled = true;
  physical3.disabled = true;
  if (mental5.checked == true) {
    mental7.disabled = false;
    mental3.disabled = false;
    mental5.checked = false;
  } else if (social5.checked == true) {
    social7.disabled = false;
    social3.disabled = false;
    social5.checked = false;
  }
}
function blockSocialThreeSeven() {
  randomAttributes.checked = false;
  social7.disabled = true;
  social3.disabled = true;
  if (physical5.checked == true) {
    physical7.disabled = false;
    physical3.disabled = false;
    physical5.checked = false;
  } else if (mental5.checked == true) {
    mental7.disabled = false;
    mental3.disabled = false;
    mental5.checked = false;
  }
}
function blockMentalThreeSeven() {
  randomAttributes.checked = false;
  mental7.disabled = true;
  mental3.disabled = true;
  if (physical5.checked == true) {
    physical7.disabled = false;
    physical3.disabled = false;
    physical5.checked = false;
  } else if (social5.checked == true) {
    social7.disabled = false;
    social3.disabled = false;
    social5.checked = false;
  }
}
function blockMentalFiveSeven() {
  randomAttributes.checked = false;
  mental7.disabled = true;
  mental5.disabled = true;
  if (social3.checked == true) {
    social7.disabled = false;
    social5.disabled = false;
    social3.checked = false;
  } else if (physical3.checked == true) {
    physical7.disabled = false;
    physical5.disabled = false;
    physical3.checked = false;
  }
}
function blockSocialFiveSeven() {
  randomAttributes.checked = false;
  social7.disabled = true;
  social5.disabled = true;
  if (mental3.checked == true) {
    mental7.disabled = false;
    mental5.disabled = false;
    mental3.checked = false;
  } else if (physical3.checked == true) {
    physical7.disabled = false;
    physical5.disabled = false;
    physical3.checked = false;
  }
}
function blockPhysicalFiveSeven() {
  randomAttributes.checked = false;
  physical7.disabled = true;
  physical5.disabled = true;
  if (mental3.checked == true) {
    mental7.disabled = false;
    mental5.disabled = false;
    mental3.checked = false;
  } else if (social3.checked == true) {
    social7.disabled = false;
    social5.disabled = false;
    social3.checked = false;
  }
}
function blockTalentsFiveSeven() {
  randomAbilities.checked = false;
  talents5.disabled = true;
  talents7.disabled = true;
  if (knowledge13.checked == true) {
    knowledge7.disabled = false;
    knowledge5.disabled = false;
    knowledge13.checked = false;
  } else if (skills13.checked == true) {
    skills7.disabled = false;
    skills5.disabled = false;
    skills13.checked = false;
  }
}
function blockSkillsFiveSeven() {
  randomAbilities.checked = false;
  skills5.disabled = true;
  skills7.disabled = true;
  if (knowledge13.checked == true) {
    knowledge7.disabled = false;
    knowledge5.disabled = false;
    knowledge13.checked = false;
  } else if (talents13.checked == true) {
    talents7.disabled = false;
    talents5.disabled = false;
    talents13.checked = false;
  }
}
function blockKnowledgeFiveSeven() {
  randomAbilities.checked = false;
  knowledge5.disabled = true;
  knowledge7.disabled = true;
  if (talents13.checked == true) {
    talents7.disabled = false;
    talents5.disabled = false;
    talents13.checked = false;
  } else if (skills13.checked == true) {
    skills7.disabled = false;
    skills5.disabled = false;
    skills13.checked = false;
  }
}
function blockTalents13Five() {
  randomAbilities.checked = false;
  talents13.disabled = true;
  talents5.disabled = true;
  if (knowledge7.checked == true) {
    knowledge13.disabled = false;
    knowledge5.disabled = false;
    knowledge7.checked = false;
  } else if (skills7.checked == true) {
    skills13.disabled = false;
    skills5.disabled = false;
    skills7.checked = false;
  }
}
function blockSkills13Five() {
  randomAbilities.checked = false;
  skills13.disabled = true;
  skills5.disabled = true;
  if (knowledge7.checked == true) {
    knowledge13.disabled = false;
    knowledge5.disabled = false;
    knowledge7.checked = false;
  } else if (talents7.checked == true) {
    talents13.disabled = false;
    talents5.disabled = false;
    talents7.checked = false;
  }
}
function blockKnowledge13Five() {
  randomAbilities.checked = false;
  knowledge13.disabled = true;
  knowledge5.disabled = true;
  if (talents7.checked == true) {
    talents13.disabled = false;
    talents5.disabled = false;
    talents7.checked = false;
  } else if (skills7.checked == true) {
    skills13.disabled = false;
    skills5.disabled = false;
    skills7.checked = false;
  }
}
function blockTalents13Seven() {
  randomAbilities.checked = false;
  talents13.disabled = true;
  talents7.disabled = true;
  if (knowledge5.checked == true) {
    knowledge13.disabled = false;
    knowledge7.disabled = false;
    knowledge5.checked = false;
  } else if (skills5.checked == true) {
    skills13.disabled = false;
    skills7.disabled = false;
    skills5.checked = false;
  }
}
function blockSkills13Seven() {
  randomAbilities.checked = false;
  skills13.disabled = true;
  skills7.disabled = true;
  if (knowledge5.checked == true) {
    knowledge13.disabled = false;
    knowledge7.disabled = false;
    knowledge5.checked = false;
  } else if (talents5.checked == true) {
    talents13.disabled = false;
    talents7.disabled = false;
    talents5.checked = false;
  }
}
function blockKnowledge13Seven() {
  randomAbilities.checked = false;
  knowledge13.disabled = true;
  knowledge7.disabled = true;
  if (talents5.checked == true) {
    talents13.disabled = false;
    talents7.disabled = false;
    talents5.checked = false;
  } else if (skills5.checked == true) {
    skills13.disabled = false;
    skills7.disabled = false;
    skills5.checked = false;
  }
}
function enableAbilitiesRadios() {
  talents13.checked = false;
  talents7.checked = false;
  talents5.checked = false;

  talents13.disabled = false;
  talents7.disabled = false;
  talents5.disabled = false;

  skills13.checked = false;
  skills7.checked = false;
  skills5.checked = false;

  skills13.disabled = false;
  skills7.disabled = false;
  skills5.disabled = false;

  knowledge5.checked = false;
  knowledge7.checked = false;
  knowledge13.checked = false;

  knowledge5.disabled = false;
  knowledge7.disabled = false;
  knowledge13.disabled = false;

  randomAbilities.checked = true;
  randomAbilities.disabled = false;
}
function enableAttributesRadios() {
  physical3.checked = false;
  physical5.checked = false;
  physical7.checked = false;

  physical3.disabled = false;
  physical5.disabled = false;
  physical7.disabled = false;

  social3.checked = false;
  social5.checked = false;
  social7.checked = false;

  social3.disabled = false;
  social5.disabled = false;
  social7.disabled = false;

  mental3.checked = false;
  mental5.checked = false;
  mental7.checked = false;

  mental3.disabled = false;
  mental5.disabled = false;
  mental7.disabled = false;

  randomAttributes.checked = true;
  randomAttributes.disabled = false;
}

//BUTTONS FUNCTIONS
function generateSheet(event) {
  event.preventDefault();

  cleanAttributes();
  cleanAbilities();
  cleanAdvantages();
  cleanRenown();

  outputAuspices();
  outputBreeds();
  outputConcepts();
  outputNames();
  outputTribes();
  outputGifts();

  outputAttributesPoints();

  enableAttributesRadios();
  enableAbilitiesRadios();
}

function cleanWithReset() {
  randomAttributes.checked = true;

  physical3.checked = false;
  physical5.checked = false;
  physical7.checked = false;

  physical3.disabled = false;
  physical5.disabled = false;
  physical7.disabled = false;

  social3.checked = false;
  social5.checked = false;
  social7.checked = false;

  social3.disabled = false;
  social5.disabled = false;
  social7.disabled = false;

  mental3.checked = false;
  mental5.checked = false;
  mental7.checked = false;

  mental3.disabled = false;
  mental5.disabled = false;
  mental7.disabled = false;
}



