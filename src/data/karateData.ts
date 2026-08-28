export interface KarateClass {
  id: string;
  category: "Kids" | "Youth" | "Adults" | "Families" | "All Programs";
  title: string;
  ageRange: string;
  subtitle?: string;
  beltFocus: string;
  schedule: string;
  duration: string;
  intensity: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  description: string;
  features: string[];
  badge: string;
  image: string;  
  iconName?: string;
} 

export interface BeltRank {
  name: string;
  koreanName: string;
  geupOrDan: string;
  colorHex: string;
  textColor: string;
  stripeColorHex?: string;
  level: number;
  category: "core" | "geup" | "dan";
  durationMonths: string;
  poomsae: string;
  skillsLearned: string[];
  breakingRequirement: string;
  usefulnessBenefit: string;
  quote: string;
}

export interface BeltBenefit {
  id: string;
  title: string;
  category: "Physical" | "Mental" | "Defense" | "Recognition";
  icon: string;
  summary: string;
  details: string[];
  statNumber: string;
  statLabel: string;
}


export interface Accolade {
  icon: string;
  title: string;
}

export interface Instructor {
  name: string;
  title: string;
  belt: string;
  experience: string;
  specialty: string;
  bio: string;
  image: string;
  accolades: Accolade[];
  philosophy: string;
}

export interface ShopItem {
  id: string;
  name: string;
  category: "Uniforms" | "Belts" | "Gear" | "Accessories";
  price: number;
  rating: number;
  image: string;
  isPopular?: boolean;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  snippet: string;
  image: string;
}

export const HEAD_COACH: Instructor = {
  name: "MASTER B. SAI TEJA",
  title: "FOUNDER & HEAD MASTER • TEJA TAEKWONDO ACADEMY",
  belt: "BLACK BELT 3RD DAN",
  experience: "International Player & Guinness World Record Holder",
  specialty: "High-Performance Olympic Sparring, Technical Precision & Guinness World Record Training",
  bio: "Master B. Sai Teja is a 3rd Dan Black Belt, International Player, Guinness World Record Holder, and the visionary Founder of Teja Taekwondo Academy. Certified by the Taekwondo Federation of India and Kukkiwon, he is dedicated to guiding students through elite performance training, technical precision, and martial arts mastery.",
  image: "/images/coach.jpg",
  accolades: [
    {
      icon: "Award",
      title: "Founder & Head Master - Teja Taekwondo Academy",
    },
    {
      icon: "Trophy",
      title: "Guinness World Record Holder",
    },
    {
      icon: "Globe",
      title: "International Player Level 2 (1 Gold, 1 Bronze Medal)",
    },
    {
      icon: "Shield",
      title: "Kukkiwon Certified Black Belt 3rd Dan",
    },
  ],
  philosophy: "Taekwondo is not about defeating others; it is about mastering yourself. Our training cultivates a strong body, a calm mind, and an indomitable spirit to conquer all challenges in life.",
};

export const INSTRUCTORS: Instructor[] = [HEAD_COACH];

export const TAEKWONDO_TENETS = [
  { name: "Courtesy", korean: "Ye Ui", desc: "Showing respect, humility, and polite manners to all." },
  { name: "Integrity", korean: "Yom Chi", desc: "Adhering to high moral standards and honest principles." },
  { name: "Perseverance", korean: "In Nae", desc: "Never giving up despite obstacles or difficulty." },
  { name: "Self-Control", korean: "Guk Gi", desc: "Mastering one's emotions, actions, and physical power." },
  { name: "Indomitable Spirit", korean: "Baekjul Boolgool", desc: "Unwavering courage in the face of adversity." },
];

export const CLASSES_DATA: KarateClass[] = [
  {
    id: "little-tigers",
    category: "Kids",
    title: "LITTLE TIGERS",
    subtitle: "Ages 4–7 • Coordination, Focus, and Fun",
    ageRange: "Ages 4 – 7",
    beltFocus: "White to Yellow Belt",
    schedule: "Mon, Wed, Fri • 4:30 PM",
    duration: "45 Mins",
    intensity: "Beginner",
    description: "Foundational martial arts designed for young children to build motor skills, discipline, respect, and confidence through fun games and structured Taekwondo techniques.",
    features: [
      "Motor coordination & balance agility",
      "Bully resistance & active focus",
      "Fun character building & team games",
    ],
    badge: "Kids Favorite",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80",
    iconName: "Smile",
  },
  {
    id: "olympic-sparring",
    category: "Youth",
    title: "OLYMPIC SPARRING",
    subtitle: "Ages 8+ • Competitive Sport Taekwondo",
    ageRange: "Ages 8+",
    beltFocus: "Yellow to Black Belt",
    schedule: "Tue, Thu, Sat • 5:30 PM",
    duration: "60 Mins",
    intensity: "Intermediate",
    description: "High-performance Olympic-style sparring (Kyorugi) featuring advanced kicking techniques, electronic chest guard tactics, speed, agility, and tournament competition.",
    features: [
      "High-velocity spinning & axe kick drills",
      "Electronic scoring PSS sparring tactics",
      "National & state tournament competition squad",
    ],
    badge: "Competitive Sport",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    iconName: "Swords",
  },
  {
    id: "self-defense",
    category: "Adults",
    title: "SELF-DEFENSE",
    subtitle: "All Ages • Practical Hapkido Techniques",
    ageRange: "All Ages",
    beltFocus: "All Belt Levels",
    schedule: "Mon, Wed, Sat • 6:45 PM",
    duration: "60 Mins",
    intensity: "All Levels",
    description: "Practical real-world self-defense combining joint locks, pressure points, situational awareness, and non-violent conflict resolution for all age groups.",
    features: [
      "Practical joint locks & escape counters",
      "Real-world situational defense & reflex drills",
      "Full-body conditioning & confidence building",
    ],
    badge: "Practical Defense",
    image: "https://images.unsplash.com/photo-1508215885820-4585e56135c8?auto=format&fit=crop&w=800&q=80",
    iconName: "Shield",
  },
];

export const TAEKWONDO_BELT_BENEFITS: BeltBenefit[] = [
  {
    id: "physical-athleticism",
    title: "Explosive Athleticism & High-Kick Flexibility",
    category: "Physical",
    icon: "Activity",
    summary: "Systematic belt progression builds leg power, dynamic balance, hip mobility, and cardiovascular endurance unmatched by standard gym workouts.",
    details: [
      "Dynamic leg flexibility through progressive kicking arc drills",
      "Core stability required for single-leg chambering and rotational strikes",
      "High-intensity interval conditioning improving aerobic & anaerobic capacity",
      "Speed and reflex reaction enhancement through target pad work"
    ],
    statNumber: "3.5x",
    statLabel: "Greater Flexibility & Core Balance"
  },
  {
    id: "mental-tenets",
    title: "Character Building & The 5 Tenets",
    category: "Mental",
    icon: "Brain",
    summary: "Every belt test requires demonstrating non-physical virtues: Courtesy, Integrity, Perseverance, Self-Control, and Indomitable Spirit.",
    details: [
      "Courtesy (Ye Ui): Showing deep respect to masters, peers, and opponents",
      "Integrity (Yom Chi): Knowing right from wrong and taking moral ownership",
      "Perseverance (In Nae): Overcoming plateaus and difficult technical moves",
      "Self-Control (Guk Gi): Controlling temper and power inside and outside the dojang",
      "Indomitable Spirit (Baekjul Boolgool): Standing strong against adversity"
    ],
    statNumber: "100%",
    statLabel: "Focus on Moral Leadership"
  },
  {
    id: "practical-defense",
    title: "Practical Self-Defense & Situational Calm",
    category: "Defense",
    icon: "ShieldAlert",
    summary: "Belts train real-world distance management, evasive footwork, release from grabs, and instant threat neutralizing kicks.",
    details: [
      "Long-range kicking deterrence keeping attackers outside striking distance",
      "Close-range wrist releases, joint manipulations (Hapkido integration)",
      "Adrenaline control during simulated spar pressure and threat scenarios",
      "Situational awareness to defuse conflict before physical escalation"
    ],
    statNumber: "0.2s",
    statLabel: "Reflex Reaction Time"
  },
  {
    id: "kukkiwon-recognition",
    title: "Global Kukkiwon Accreditation & Dan Rank",
    category: "Recognition",
    icon: "Globe2",
    summary: "Earn internationally recognized Dan certification from Kukkiwon (World Taekwondo Headquarters in Seoul, South Korea).",
    details: [
      "Lifetime official registration in the World Taekwondo Dan database",
      "Worldwide validity across 200+ countries and international dojangs",
      "Pathway to Olympic sparring, national refereeing, and coaching degrees",
      "Respected milestone for college applications, resumes, and martial arts pedigree"
    ],
    statNumber: "200+",
    statLabel: "Nations Recognizing Kukkiwon Ranks"
  }
];

// Complete Kukkiwon 10-Geup, Poom, and Dan Belt Progression
export const TAEKWONDO_BELT_RANKS: BeltRank[] = [
  {
    name: "WHITE BELT",
    koreanName: "Baek Tti",
    geupOrDan: "10th Geup",
    colorHex: "#FFFFFF",
    textColor: "#1C1C1C",
    level: 1,
    category: "core",
    durationMonths: "2-3 Months",
    poomsae: "Gibon Dongjak (Basic Movements)",
    skillsLearned: ["Bow of Respect (Charyeot Gyeongnae)", "Front Snap Kick (Ap Chagi)", "Middle Punch (Momtong Jireugi)", "Low Block (Arae Makgi)"],
    breakingRequirement: "Single Hand Strike on Soft Board",
    usefulnessBenefit: "Establishes foundation of discipline, respect, balance, and basic motor coordination.",
    quote: "Purity of intention—the blank canvas ready to receive martial arts wisdom.",
  },
  {
    name: "YELLOW STRIPE",
    koreanName: "Hwang-Tti Seon",
    geupOrDan: "9th Geup",
    colorHex: "#FFFFFF",
    stripeColorHex: "#FACC15",
    textColor: "#1C1C1C",
    level: 2,
    category: "geup",
    durationMonths: "2-3 Months",
    poomsae: "Taegeuk 1 Jang (Il Jang - Keon / Light)",
    skillsLearned: ["High Punch (Eolgul Jireugi)", "Inside Middle Block (Momtong An Makgi)", "Walking Stance (Ap Seogi)"],
    breakingRequirement: "Front Snap Kick Board Break",
    usefulnessBenefit: "Reinforces consistency and introduces directional footwork stances.",
    quote: "The first ray of morning sunlight touching the fertile soil.",
  },
  {
    name: "YELLOW BELT",
    koreanName: "Hwang Tti",
    geupOrDan: "8th Geup",
    colorHex: "#FACC15",
    textColor: "#1C1C1C",
    level: 3,
    category: "core",
    durationMonths: "3-4 Months",
    poomsae: "Taegeuk 2 Jang (Ee Jang - Tae / Joyfulness)",
    skillsLearned: ["Roundhouse Kick (Dollyo Chagi)", "High Block (Eolgul Makgi)", "Long Stance (Ap Kobi)"],
    breakingRequirement: "Roundhouse Kick Power Break",
    usefulnessBenefit: "Develops hip rotational power, kicking height, and upper head defense reflexes.",
    quote: "The earth receiving warmth as seeds begin to germinate beneath.",
  },
  {
    name: "GREEN STRIPE",
    koreanName: "Nok-Tti Seon",
    geupOrDan: "7th Geup",
    colorHex: "#FACC15",
    stripeColorHex: "#22C55E",
    textColor: "#1C1C1C",
    level: 4,
    category: "geup",
    durationMonths: "3-4 Months",
    poomsae: "Taegeuk 3 Jang (Sam Jang - Ri / Fire & Sun)",
    skillsLearned: ["Knife-Hand Strike (Sonnal Mok Chigi)", "Back Stance (Dwit Kobi)", "Axe Kick (Naeryeo Chagi)"],
    breakingRequirement: "Hammerfist Power Break",
    usefulnessBenefit: "Teaches rapid weight shifting, open-palm defense, and vertical downward kicks.",
    quote: "The initial green sprout breaking through the topsoil.",
  },
  {
    name: "GREEN BELT",
    koreanName: "Nok Tti",
    geupOrDan: "6th Geup",
    colorHex: "#22C55E",
    textColor: "#FFFFFF",
    level: 5,
    category: "core",
    durationMonths: "4-5 Months",
    poomsae: "Taegeuk 4 Jang (Sa Jang - Jin / Thunder)",
    skillsLearned: ["Side Kick (Yop Chagi)", "Spear-Hand Strike (Pyeon Sonkkeut Chireugi)", "Swallow-Form Strike (Jebipoom Mok Chigi)"],
    breakingRequirement: "Side Kick Power Board Break",
    usefulnessBenefit: "Develops linear penetrative kicking power and 1-step controlled sparring accuracy.",
    quote: "The plant growing tall, leafy, and resilient against winds.",
  },
  {
    name: "BLUE STRIPE",
    koreanName: "Cheong-Tti Seon",
    geupOrDan: "5th Geup",
    colorHex: "#22C55E",
    stripeColorHex: "#3B82F6",
    textColor: "#FFFFFF",
    level: 6,
    category: "geup",
    durationMonths: "4-5 Months",
    poomsae: "Taegeuk 5 Jang (Oh Jang - Son / Wind)",
    skillsLearned: ["Back Kick (Dwi Chagi)", "Elbow Target Strike (Palgup Chigi)", "Spinning Counter Stances"],
    breakingRequirement: "Back Kick Counter Break",
    usefulnessBenefit: "Builds explosive turning back-kick counter-attacks against aggressive rushers.",
    quote: "Branches extending upwards reaching towards the sky.",
  },
  {
    name: "BLUE BELT",
    koreanName: "Cheong Tti",
    geupOrDan: "4th Geup",
    colorHex: "#3B82F6",
    textColor: "#FFFFFF",
    level: 7,
    category: "core",
    durationMonths: "5-6 Months",
    poomsae: "Taegeuk 6 Jang (Yook Jang - Gam / Water)",
    skillsLearned: ["Spin Hook Kick (Dwi Huryeo Chagi)", "Outside Palm Block (Momtong Bakkat Makgi)", "Olympic Hogu Free Sparring"],
    breakingRequirement: "Spinning Hook Kick Board Break",
    usefulnessBenefit: "Teaches fluid adaptability, electronic scoring sparring, and 360 rotational kicking.",
    quote: "The sky toward which the plant grows into a towering tree.",
  },
  {
    name: "RED STRIPE",
    koreanName: "Hong-Tti Seon",
    geupOrDan: "3rd Geup",
    colorHex: "#3B82F6",
    stripeColorHex: "#DC2626",
    textColor: "#FFFFFF",
    level: 8,
    category: "geup",
    durationMonths: "5-6 Months",
    poomsae: "Taegeuk 7 Jang (Chil Jang - Gan / Mountain)",
    skillsLearned: ["Tiger Stance (Beom Seogi)", "Crescent Kick (Bandal Chagi)", "Low Knife-Hand Block"],
    breakingRequirement: "Jumping Front Kick Height Break",
    usefulnessBenefit: "Masters absolute balance on cat/tiger stances and intense target focus.",
    quote: "Intense heat of the setting sun—warning of formidable martial skill.",
  },
  {
    name: "RED BELT",
    koreanName: "Hong Tti",
    geupOrDan: "2nd Geup",
    colorHex: "#DC2626",
    textColor: "#FFFFFF",
    level: 9,
    category: "core",
    durationMonths: "6-8 Months",
    poomsae: "Taegeuk 8 Jang (Pal Jang - Gon / Earth)",
    skillsLearned: ["Jumping Double Kick (Twio Chagi)", "Double Upper Punch", "Multi-Board Power Breaking"],
    breakingRequirement: "2-Inch Wooden Board Jump Break",
    usefulnessBenefit: "Prepares peak physical power, supreme self-control, and assistant leadership duties.",
    quote: "Signifying danger—the practitioner must exercise extreme emotional self-control.",
  },
  {
    name: "RED-BLACK / POOM",
    koreanName: "Poom / High Red",
    geupOrDan: "1st Geup (Pre-Dan Candidate)",
    colorHex: "#DC2626",
    stripeColorHex: "#111827",
    textColor: "#FFFFFF",
    level: 10,
    category: "geup",
    durationMonths: "6-12 Months",
    poomsae: "All Taegeuk Poomsae 1–8 Master Review",
    skillsLearned: ["Kukkiwon Dan Examination Prep", "Advanced Self-Defense Wrist Locks", "Continuous Olympic Sparring Strategy"],
    breakingRequirement: "3-Board Speed & Power Combination Break",
    usefulnessBenefit: "Final candidate bridge to Black Belt—testing physical stamina, philosophy, and courage.",
    quote: "The dawn before sunrise—preparing to cross into black belt mastery.",
  },
  {
    name: "BLACK BELT 1ST DAN",
    koreanName: "Heuk Tti (1st Dan / Poom)",
    geupOrDan: "1st Dan Kukkiwon Certified",
    colorHex: "#111827",
    stripeColorHex: "#FACC15",
    textColor: "#FFFFFF",
    level: 11,
    category: "dan",
    durationMonths: "Kukkiwon Registered (1st Year)",
    poomsae: "Koryo Poomsae (Learned by Black Belts)",
    skillsLearned: ["Koryo Poomsae Precision", "Master Class Olympic Sparring", "Instructor Assistant Certification", "Indomitable Spirit"],
    breakingRequirement: "4-Board Multi-Directional Flying Break",
    usefulnessBenefit: "Official Kukkiwon international recognition. The student now becomes a serious seeker of truth.",
    quote: "Opposite of white, signifying maturity and invulnerability to darkness. A new journey begins.",
  },
  {
    name: "BLACK BELT 2ND DAN",
    koreanName: "Heuk Tti (2nd Dan)",
    geupOrDan: "2nd Dan Kukkiwon Certified",
    colorHex: "#111827",
    stripeColorHex: "#FACC15",
    textColor: "#FFFFFF",
    level: 12,
    category: "dan",
    durationMonths: "Kukkiwon Registered (2+ Years)",
    poomsae: "Keumgang Poomsae (Diamond Stability)",
    skillsLearned: ["Keumgang Poomsae Mastery", "Elite Tournament Coaching", "Hapkido Advanced Self-Defense", "Mentorship"],
    breakingRequirement: "Brick & High Flying Spin Break",
    usefulnessBenefit: "Demonstrated technical excellence and mentorship under Master B. Sai Teja.",
    quote: "Diamond-like strength and unshakeable inner tranquility.",
  },
  {
    name: "BLACK BELT 3RD DAN",
    koreanName: "Heuk Tti (3rd Dan)",
    geupOrDan: "3rd Dan Kukkiwon Certified",
    colorHex: "#111827",
    stripeColorHex: "#FACC15",
    textColor: "#FFFFFF",
    level: 13,
    category: "dan",
    durationMonths: "Kukkiwon Registered Master",
    poomsae: "Taebaek Poomsae (Mountain Majesty)",
    skillsLearned: ["Taebaek Poomsae Mastery", "Guinness World Record Performance", "International Competition Excellence", "Academy Leadership"],
    breakingRequirement: "Multi-Target Speed & Power Demonstration",
    usefulnessBenefit: "Held by Founder Master B. Sai Teja—symbolizing international competitive excellence and Guinness World Record achievement.",
    quote: "The lofty mountain standing firm, guiding new generations toward martial arts perfection.",
  }
];

export const BELT_RANKS: BeltRank[] = TAEKWONDO_BELT_RANKS.filter(b => b.category === "core" || b.name.includes("BLACK BELT"));


export const SHOP_ITEMS: ShopItem[] = [
  {
    id: "teja-dobok-uniform",
    name: "Teja Taekwondo Pro WTF Approved Dobok",
    category: "Uniforms",
    price: 109.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
  },
  {
    id: "sparring-chest-protector",
    name: "Reversible Red/Blue Sparring Chest Guard (Hogu)",
    category: "Gear",
    price: 64.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
  },
  {
    id: "kukkiwon-satin-black-belt",
    name: "Kukkiwon Embroidered Satin Black Belt",
    category: "Belts",
    price: 44.99,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1614059046121-0a68d0eb9170?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "double-kicking-target-paddle",
    name: "Teja Pro Double Kicking Target Paddle",
    category: "Gear",
    price: 29.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
  },
];

export const ARTICLES: Article[] = [
  {
    id: "teja-poomsae-secrets",
    title: "Teja Club Guide: Mastering Taegeuk Poomsae Rhythm & Breath Control",
    category: "Poomsae",
    readTime: "5 min read",
    date: "Aug 26, 2026",
    snippet: "Poomsae is an expressive martial dance of defense and attack. Learn how master judges score stance stability and power delivery.",
    image: "https://images.unsplash.com/photo-1508215885820-4585e56135c8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "high-kick-flexibility",
    title: "3 Essential Dynamic Stretches to Unlock Head-Height Taekwondo Kicks",
    category: "Training",
    readTime: "4 min read",
    date: "Aug 20, 2026",
    snippet: "Unlock hip mobility and hamstring elasticity with Teja Taekwondo's proven daily stretching routine.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "kukkiwon-dan-test-prep",
    title: "Preparing for Your Kukkiwon Black Belt Examination at Teja Taekwondo Club",
    category: "Dan Grading",
    readTime: "6 min read",
    date: "Aug 14, 2026",
    snippet: "What to expect during your 1st Dan examination: Poomsae execution, free sparring, board breaking, and oral philosophy.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
  },
];
