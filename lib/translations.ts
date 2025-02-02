export type Language = 'da' | 'en';

export const translations = {
  da: {
    navigation: {
      home: "Hjem",
      inventory: "Varer",
      planner: "Planlæg",
      challenges: "Udfordringer",
      settings: "Indstillinger"
    },
    home: {
      title: "Køleskabskammeraten",
      categories: "Kategorier",
      fresh: "Friskvarer",
      frozen: "Fryser",
      ingredients: "Ingredienser",
      expiresOn: "Holder til",
      features: "Funktioner",
      smartScanner: "Smart Scanner",
      shareKitchen: "Del Køleskab",
      mealWheel: "Måltids-hjulet",
      deals: "Tilbud",
      donateMeal: "Donér Mad",
      planMeal: "Planlæg måltid",
      startChallenge: "Start udfordring",
      addItems: "Tilføj varer"
    },
    inventory: {
      title: "Mine Varer",
      addNew: "Tilføj ny vare",
      search: "Søg efter varer...",
      quantity: "Mængde",
      expiryDate: "Udløbsdato",
      categories: {
        all: "Alle",
        fresh: "Friskvarer",
        frozen: "Fryser",
        pantry: "Skab"
      },
      expiresOn: "Udløber",
      daysLeft: "dage tilbage",
      expired: "Udløbet",
      today: "I dag",
      tomorrow: "I morgen",
      confirmDelete: "Er du sikker på, at du vil slette denne vare?"
    },
    planner: {
      title: "Måltidsplanlægger",
      createNew: "Opret ny plan",
      thisWeek: "Denne uge",
      nextWeek: "Næste uge",
      addMeal: "Tilføj måltid",
      completed: "Færdig",
      selectMealType: "Vælg måltidstype",
      confirmDelete: "Er du sikker på, at du vil slette dette måltid?",
      mealTypes: {
        breakfast: "Morgenmad",
        lunch: "Frokost",
        snack: "Mellemmåltid",
        dinner: "Aftensmad"
      }
    },
    challenges: {
      title: "Mad Udfordringer",
      listTitle: "Udfordringer Liste",
      freezerChallenge: {
        title: "Brug kun vare fra fryseren",
        description: "Lav et måltid kun med ingredienser fra fryseren"
      },
      vegetableChallenge: {
        title: "Lav et måltid kun med grøntsager",
        description: "Tilbered en ret udelukkende med grøntsager"
      },
      completeButton: "Fuldfør Udfordring",
      completed: "✓ Fuldført",
      points: "point",
      pointsOverview: "Pointoversigt og Badges",
      earnedPoints: "Optjente point:",
      badgesEarned: "Badges opnået:"
    },
    settings: {
      title: "Indstillinger",
      notifications: "Notifikationer",
      notificationsDesc: "Få påmindelser om udløbsdatoer",
      darkMode: "Mørk tilstand",
      darkModeDesc: "Skift mellem lys og mørk tilstand",
      language: "Sprog",
      languageDesc: "Vælg dit foretrukne sprog",
      statistics: "Statistik",
      reducedWaste: "Reduceret Madspild",
      savedDishes: "Gemte Retter",
      logout: "Log Ud"
    },
    scanner: {
      title: "Smart Scanner",
      instructions: "Scan stregkoden på din vare",
      manual: "Indtast manuelt",
      recentScans: "Seneste scanninger",
      addToInventory: "Tilføj til beholdning"
    },
    mealWheel: {
      title: "Måltids-hjulet",
      spin: "Drej hjulet",
      suggestion: "Forslag til måltid",
      tryAgain: "Prøv igen",
      save: "Gem forslag"
    },
    deals: {
      title: "Aktuelle Tilbud",
      nearby: "Butikker i nærheden",
      categories: "Kategorier",
      validUntil: "Gyldig til",
      save: "Gem tilbud"
    },
    donate: {
      title: "Donér Mad",
      nearby: "Organisationer i nærheden",
      instructions: "Sådan donerer du",
      contact: "Kontakt",
      schedule: "Book afhentning"
    }
  },
  en: {
    navigation: {
      home: "Home",
      inventory: "Inventory",
      planner: "Plan",
      challenges: "Challenges",
      settings: "Settings"
    },
    home: {
      title: "FridgeBuddy",
      categories: "Categories",
      fresh: "Fresh Items",
      frozen: "Freezer",
      ingredients: "Ingredients",
      expiresOn: "Expires on",
      features: "Features",
      smartScanner: "Smart Scanner",
      shareKitchen: "Share Kitchen",
      mealWheel: "Meal Wheel",
      deals: "Deals",
      donateMeal: "Donate Food",
      planMeal: "Plan meal",
      startChallenge: "Start challenge",
      addItems: "Add items"
    },
    inventory: {
      title: "My Inventory",
      addNew: "Add new item",
      search: "Search items...",
      quantity: "Quantity",
      expiryDate: "Expiry Date",
      categories: {
        all: "All",
        fresh: "Fresh",
        frozen: "Frozen",
        pantry: "Pantry"
      },
      expiresOn: "Expires",
      daysLeft: "days left",
      expired: "Expired",
      today: "Today",
      tomorrow: "Tomorrow",
      confirmDelete: "Are you sure you want to delete this item?"
    },
    planner: {
      title: "Meal Planner",
      createNew: "Create new plan",
      thisWeek: "This week",
      nextWeek: "Next week",
      addMeal: "Add meal",
      completed: "Completed",
      selectMealType: "Select meal type",
      confirmDelete: "Are you sure you want to delete this meal?",
      mealTypes: {
        breakfast: "Breakfast",
        lunch: "Lunch",
        snack: "Snack",
        dinner: "Dinner"
      }
    },
    challenges: {
      title: "Food Challenges",
      listTitle: "Challenges List",
      freezerChallenge: {
        title: "Use Only Freezer Items",
        description: "Make a meal using only ingredients from the freezer"
      },
      vegetableChallenge: {
        title: "Make a Vegetarian Meal",
        description: "Prepare a dish using only vegetables"
      },
      completeButton: "Complete Challenge",
      completed: "✓ Completed",
      points: "points",
      pointsOverview: "Points Overview and Badges",
      earnedPoints: "Points earned:",
      badgesEarned: "Badges earned:"
    },
    settings: {
      title: "Settings",
      notifications: "Notifications",
      notificationsDesc: "Get reminders about expiry dates",
      darkMode: "Dark Mode",
      darkModeDesc: "Switch between light and dark mode",
      language: "Language",
      languageDesc: "Choose your preferred language",
      statistics: "Statistics",
      reducedWaste: "Reduced Food Waste",
      savedDishes: "Saved Dishes",
      logout: "Log Out"
    },
    scanner: {
      title: "Smart Scanner",
      instructions: "Scan the barcode on your item",
      manual: "Enter manually",
      recentScans: "Recent scans",
      addToInventory: "Add to inventory"
    },
    mealWheel: {
      title: "Meal Wheel",
      spin: "Spin wheel",
      suggestion: "Meal suggestion",
      tryAgain: "Try again",
      save: "Save suggestion"
    },
    deals: {
      title: "Current Deals",
      nearby: "Nearby stores",
      categories: "Categories",
      validUntil: "Valid until",
      save: "Save deal"
    },
    donate: {
      title: "Donate Food",
      nearby: "Organizations nearby",
      instructions: "How to donate",
      contact: "Contact",
      schedule: "Schedule pickup"
    }
  }
} as const;

export type TranslationKeys = typeof translations.en; 