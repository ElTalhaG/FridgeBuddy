const emojiMapDA: { [key: string]: string } = {
  // Fruits in Danish map
  "dansk æble": "🍎",
  "dansk pære": "🍐",
  "dansk appelsin": "🍊",
  "dansk citron": "🍋",
  "dansk banan": "🍌",
  "dansk vindrue": "🍇",
  "dansk vandmelon": "🍉",
  "dansk jordbær": "🍓",
  "dansk kirsebær": "🍒",
  "dansk fersken": "🍑",
  "dansk mango": "🥭",
  "dansk ananas": "🍍",
  "dansk kokosnød": "🥥",
  "dansk kiwi": "🥝",
  "dansk tomat": "🍅",
  "dansk oliven": "🫒",
  "dansk blåbær": "🫐",

  // Vegetables in Danish map
  "dansk majs": "🌽",
  "dansk broccoli": "🥦",
  "dansk agurk": "🥒",
  "dansk peberfrugt": "🫑",
  "dansk gulerod": "🥕",
  "dansk kartoffel": "🥔",
  "danske søde kartofler": "🍠",
  "dansk aubergine": "🍆",
  "dansk grøn salat": "🥬",
  "dansk spinat": "🥬",
  "danske svampe": "🍄",
  "dansk hvidløg": "🧄",
  "dansk løg": "🧅",
  "danske ærter": "🫛",

  // Meat & Seafood in Danish map
  "dansk kylling": "🍗",
  "dansk kød": "🥩",
  "dansk bacon": "🥓",
  "dansk pølse": "🌭",
  "dansk hamburger": "🍔",
  "dansk fisk": "🐟",
  "danske rejer": "🦐",
  "dansk blæksprutte": "🦑",
  "dansk krabbe": "🦀",

  // Dairy & Eggs in Danish map
  "danske æg": "🥚",
  "dansk mælk": "🥛",
  "dansk ost": "🧀",
  "dansk smør": "🧈",

  // Bread & Grains in Danish map
  "dansk brød": "🍞",
  "dansk croissant": "🥐",
  "dansk bagel": "🥯",
  "danske pandekager": "🥞",
  "dansk vaffel": "🧇",
  "dansk bolle": "🥖",
  "dansk pretzel": "🥨",
  "dansk ris": "🍚",
  "dansk spaghetti": "🍝",

  // Sweets & Desserts in Danish map
  "dansk is": "🍦",
  "dansk kage": "🍰",
  "dansk småkage": "🍪",
  "dansk chokolade": "🍫",
  "dansk slik": "🍬",
  "dansk slikkepind": "🍭",
  "dansk donut": "🍩",
  "dansk muffin": "🧁",
  "dansk tærte": "🥧",

  // Drinks in Danish map
  "dansk kaffe": "☕",
  "dansk te": "🍵",
  "dansk juice": "🧃",
  "dansk smoothie": "🥤",
  "dansk vin": "🍷",
  "dansk øl": "🍺",
  "dansk cocktail": "🍸",
  "dansk vand": "💧",

  // Prepared Foods in Danish map
  "dansk pizza": "🍕",
  "dansk sandwich": "🥪",
  "dansk taco": "🌮",
  "dansk burrito": "🌯",
  "dampede dumplings": "🥟",
  suppe: "🥣",
  "blandet salat": "🥗",
  "dansk popcorn": "🍿",

  // Condiments & Spices in Danish map
  "dansk salt": "🧂",
  "dansk chili": "🌶️",
  "dansk olie": "🫗",
  "dansk eddike": "🧉",
  "dansk soya sauce": "🍶",

  // Other in Danish map
  "dansk madpakke": "🍱",
  "dansk gryde": "🍲",
  "dansk skål med mad": "🥘",
}

const emojiMapEN: { [key: string]: string } = {
  // Fruits in English map
  "english apple": "🍎",
  "english pear": "🍐",
  "english orange": "🍊",
  "english lemon": "🍋",
  "english banana": "🍌",
  "english grapes": "🍇",
  "english watermelon": "🍉",
  "english strawberry": "🍓",
  "english cherry": "🍒",
  "english peach": "🍑",
  "english mango": "🥭",
  "english pineapple": "🍍",
  "english coconut": "🥥",
  "english kiwi": "🥝",
  "english tomato": "🍅",
  "english olive": "🫒",
  "english blueberry": "🫐",

  // Vegetables in English map
  "english corn": "🌽",
  "english broccoli": "🥦",
  "english cucumber": "🥒",
  "english bell pepper": "🫑",
  "english carrot": "🥕",
  "english potato": "🥔",
  "english sweet potato": "🍠",
  "english eggplant": "🍆",
  "english green lettuce": "🥬",
  "english spinach": "🥬",
  "english mushroom": "🍄",
  "english garlic": "🧄",
  "english onion": "🧅",
  "english peas": "🫛",

  // Meat & Seafood in English map
  "english chicken": "🍗",
  "english meat": "🥩",
  "english bacon": "🥓",
  "english sausage": "🌭",
  "english hamburger": "🍔",
  "english fish": "🐟",
  "english shrimp": "🦐",
  "english squid": "🦑",
  "english crab": "🦀",

  // Dairy & Eggs in English map
  "english eggs": "🥚",
  "english milk": "🥛",
  "english cheese": "🧀",
  "english butter": "🧈",

  // Bread & Grains in English map
  "english bread": "🍞",
  "english croissant": "🥐",
  "english bagel": "🥯",
  "english pancakes": "🥞",
  "english waffle": "🧇",
  "english bun": "🥖",
  "english pretzel": "🥨",
  "english rice": "🍚",
  "english spaghetti": "🍝",

  // Sweets & Desserts in English map
  "english ice cream": "🍦",
  "english cake": "🍰",
  "english cookie": "🍪",
  "english chocolate": "🍫",
  "english candy": "🍬",
  "english lollipop": "🍭",
  "english donut": "🍩",
  "english muffin": "🧁",
  "english pie": "🥧",

  // Drinks in English map
  "english coffee": "☕",
  "english tea": "🍵",
  "english juice": "🧃",
  "english smoothie": "🥤",
  "english wine": "🍷",
  "english beer": "🍺",
  "english cocktail": "🍸",
  "english water": "💧",

  // Prepared Foods in English map
  "english pizza": "🍕",
  "english sandwich": "🥪",
  "english taco": "🌮",
  "english burrito": "🌯",
  "steamed dumplings": "🥟",
  soup: "🥣",
  "mixed salad": "🥗",
  "english popcorn": "🍿",

  // Condiments & Spices in English map
  "english salt": "🧂",
  "english chili": "🌶️",
  "english oil": "🫗",
  "english vinegar": "🧉",
  "english soy sauce": "🍶",

  // Other in English map
  "english lunch box": "🍱",
  "english pot": "🍲",
  "english food bowl": "🥘",
}

export type Language = 'da' | 'en';

export function suggestEmoji(itemName: string, language: Language): string {
  const lowercaseName = itemName.toLowerCase()
  const emojiMap = language === 'da' ? emojiMapDA : emojiMapEN
  const prefix = language === 'da' ? 'dansk ' : 'english '
  
  // First try exact match with prefix
  const prefixedName = prefix + lowercaseName
  if (emojiMap[prefixedName]) {
    return emojiMap[prefixedName]
  }

  // Then try partial matches
  for (const [key, emoji] of Object.entries(emojiMap)) {
    const keyWithoutPrefix = key.replace(prefix, '').toLowerCase()
    if (lowercaseName.includes(keyWithoutPrefix) || keyWithoutPrefix.includes(lowercaseName)) {
      return emoji
    }
  }
  
  return "🍽️" // Default emoji if no match is found
} 