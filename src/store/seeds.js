export const systemIds = [
  30004759, // 1dq1-a
  30000142, // Jita
];

export const structureIds = [
  1022734985679, // 1dq Thetastar
];

export const stationIds = [
  60003760, // Jita 4-4
]

export const itemIds = [
  // Fuel Blocks
  4246, // Hydrogen  

  // Complex Outputs
  16671, // Titanium Carbide

  // Intermediate Outputs
  16654, // Titanium Chromide
  16658, // Silicon Diborite

  // Raw Inputs
  16638, // Titanium
  16641, // Chromium
  16635, // Evaporite Deposits
  16636, // Silicates
]; 

export const planetResources = {
  "7utb-f": [
    ["gas",52,61,68,69,37],
    ["temperate",99,50,61,23,30],
    ["gas",57,63,67,66,36],
    ["gas",56,63,69,72,20],
    ["gas",56,60,68,71,34],
    ["ice",100,100,48,40,57],
    ["ice",100,100,44,42,57]
  ],
  "f-9pxr": [
    ["storm",68,75,43,50,67],
    ["gas",48,51,60,59,18],
    ["gas",44,52,58,57,18],
    ["gas",44,53,58,60,30],
    ["ice",87,100,39,35,47]
  ],
  "y5c-yd": [
    ["lava",29,15,81,41,34],
    ["barren",29,52,62,58,32],
    ["lava",33,5,79,43,44],
    ["temperate",18,67,66,51,80],
    ["storm",62,69,46,48,58],
    ["storm",45,48,62,66,34],
    ["gas",44,55,60,58,23],
    ["gas",47,55,59,61,23],
    ["gas",49,55,60,57,31],
    ["ice",87,91,39,38,44]
  ],
  "q-o2ul": [
    ["barren",32,63,73,62,39],
    ["barren", 35,57,69,59,40],
    ["gas",54,58,62,65,28],
    ["temperate",63,73,17,95,65],
    ["barren", 34,59,72,60,42],
    ["gas",55,58,62,67,18],
    ["gas",53,57,61,69,18],
    ["ice",100,100,50,36,49]
  ]
};
export const pi = {
  AUTO: "Autotrophs",
  BASE: "Base Metals",
  CARBON: "Carbon Compounds",
  COMPLEX: "Complex Organisms",
  CS: "Non-CS Crystals",
  HEAVY: "Heavy Metals",
  ION: "Ionic Solutions",
  LIQUID: "Aqueous Liquids",
  MAGMA: "Felsic Magma",
  MICRO: "Microorganisms",
  NOBLE: "Noble Gas",
  REACTIVE: "Reactive Gas",
  PLANK: "Planktic Colonies",
  PLASMA: "Suspended Plasma",
}

export const planetTypes = {
  "barren": [pi.LIQUID, pi.BASE, pi.CARBON, pi.MICRO, pi.NOBLE],
  "gas": [pi.LIQUID, pi.BASE, pi.ION, pi.NOBLE, pi.REACTIVE],
  "ice": [pi.LIQUID, pi.HEAVY, pi.MICRO, pi.NOBLE, pi.PLANK],
  "lava": [pi.BASE, pi.MAGMA, pi.HEAVY, pi.CS, pi.PLASMA],
  "oceanic": [pi.LIQUID, pi.CARBON, pi.COMPLEX, pi.MICRO, pi.PLANK],
  "plasma": [pi.BASE, pi.HEAVY, pi.NOBLE, pi.CS, pi.PLASMA],
  "storm": [pi.LIQUID, pi.BASE, pi.ION, pi.NOBLE, pi.PLASMA],
  "temperate": [pi.LIQUID, pi.AUTO, pi.CARBON, pi.COMPLEX, pi.MICRO],
}
