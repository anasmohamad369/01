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
  colorHex: string;
  textColor: string;
  level: number;
  durationMonths: string;
  skillsLearned: string[];
  quote: string;
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
  name: "B. SAI TEJA",
  title: "HEAD COACH & FOUNDER • TEJA TAEKWONDO CLUB",
  belt: "BLACK BELT 2ND DAN",
  experience: "Elite International Competitor",
  specialty: "High-Performance Training, Technical Precision & Martial Arts Values",
  bio: "An elite international competitor, gold medalist, and certified coach from the Taekwondo Federation of India. Dedicated to guiding students through high-performance training, technical precision, and martial arts values.",
  image: "/images/coach-sai-teja.jpg",
  accolades: [
    {
      icon: "Award",
      title: "Certified - Taekwondo Federation of India",
    },
    {
      icon: "Globe",
      title: "International Player Level 2 (1 Gold, 1 Bronze Medal)",
    },
    {
      icon: "Trophy",
      title: "National Youth Games Gold Medalist in Goa",
    },
    {
      icon: "Shield",
      title: "Black Belt 2nd Dan",
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

export const BELT_RANKS: BeltRank[] = [
  {
    name: "WHITE BELT",
    colorHex: "#FFFFFF",
    textColor: "#1C1C1C",
    level: 1,
    durationMonths: "2-3 Months",
    skillsLearned: ["Bow of respect (Charyeot Gyeongnae)", "Front snap kick (Ap Chagi)", "Middle punch (Momtong Jireugi)"],
    quote: "Purity of intention—the blank canvas ready to receive martial arts wisdom.",
  },
  {
    name: "YELLOW",
    colorHex: "#FACC15",
    textColor: "#1C1C1C",
    level: 2,
    durationMonths: "3-4 Months",
    skillsLearned: ["Taegeuk Il Jang Poomsae", "Roundhouse kick (Dollyo Chagi)", "Low block (Arae Makgi)"],
    quote: "The earth receiving the rays of the rising sun.",
  },
  {
    name: "GREEN",
    colorHex: "#22C55E",
    textColor: "#FFFFFF",
    level: 3,
    durationMonths: "4-6 Months",
    skillsLearned: ["Taegeuk Sam Jang Poomsae", "Axe kick (Naeryeo Chagi)", "One-step sparring (Han Bon Gyorugi)"],
    quote: "The seed sprouting into a strong, resilient plant.",
  },
  {
    name: "BLUE",
    colorHex: "#3B82F6",
    textColor: "#FFFFFF",
    level: 4,
    durationMonths: "6-8 Months",
    skillsLearned: ["Taegeuk Oh Jang Poomsae", "Side kick (Yop Chagi)", "Free sparring & chest guard counter"],
    quote: "Reaching high towards the sky as skill matures.",
  },
  {
    name: "RED",
    colorHex: "#DC2626",
    textColor: "#FFFFFF",
    level: 5,
    durationMonths: "10-12 Months",
    skillsLearned: ["Taegeuk Chil Jang & Pal Jang", "Spinning hook kick (Dwi Huryeo Chagi)", "Board breaking"],
    quote: "Signifying danger—exercising supreme self-control.",
  },
  {
    name: "BLACK BELT",
    colorHex: "#111827",
    textColor: "#FFFFFF",
    level: 6,
    durationMonths: "Kukkiwon Dan Level",
    skillsLearned: ["Koryo Poomsae Mastery", "Full Contact Olympic Sparring", "Indomitable Spirit (Baekjeolboolgool)"],
    quote: "The culmination of years of dedication—a new journey begins.",
  },
];

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
