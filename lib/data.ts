export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  duration: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export const services: Service[] = [
  {
    id: "1",
    name: "Základní ošetření pleti",
    category: "Kosmetická ošetření",
    description: "Čištění pleti, peeling, maska podle typu pleti, sérum a závěrečná péče.",
    price: "od 850 Kč",
    duration: "60 min"
  },
  {
    id: "2",
    name: "Hloubkové čištění pleti",
    category: "Kosmetická ošetření",
    description: "Důkladné čištění pleti včetně ultrazvukové špachtle, extrakce a zklidňující masky.",
    price: "od 1200 Kč",
    duration: "90 min"
  },
  {
    id: "3",
    name: "Anti-age ošetření",
    category: "Anti-aging",
    description: "Luxusní ošetření s použitím anti-age produktů, masáž obličeje a lifting maska.",
    price: "od 1500 Kč",
    duration: "90 min"
  },
  {
    id: "4",
    name: "Chemický peeling",
    category: "Speciální ošetření",
    description: "Profesionální chemický peeling pro obnovu pleti a redukci vrásek.",
    price: "od 1800 Kč",
    duration: "60 min"
  },
  {
    id: "5",
    name: "Mikrojehličkování",
    category: "Speciální ošetření",
    description: "Stimulace kolagenu pomocí mikrojehliček pro zpevnění a omlazení pleti.",
    price: "od 2500 Kč",
    duration: "90 min"
  },
  {
    id: "6",
    name: "Lash lifting + barvení",
    category: "Řasy a obočí",
    description: "Trvalá na řasy pro přirozený vzhled bez nutnosti používání řasenky.",
    price: "od 990 Kč",
    duration: "60 min"
  },
  {
    id: "7",
    name: "Úprava a barvení obočí",
    category: "Řasy a obočí",
    description: "Profesionální tvarování obočí voskem nebo pinzetou včetně barvení.",
    price: "od 350 Kč",
    duration: "30 min"
  },
  {
    id: "8",
    name: "Relaxační masáž obličeje",
    category: "Masáže",
    description: "Uvolňující masáž obličeje, krku a dekoltu s použitím aromatických olejů.",
    price: "od 650 Kč",
    duration: "45 min"
  },
  {
    id: "9",
    name: "Permanentní makeup - obočí",
    category: "Permanentní makeup",
    description: "Microblading nebo pudrové obočí pro dlouhodobý efekt.",
    price: "od 4500 Kč",
    duration: "120 min"
  },
  {
    id: "10",
    name: "Depilace voskem - horní ret",
    category: "Depilace",
    description: "Šetrná depilace horního rtu teplým voskem.",
    price: "150 Kč",
    duration: "15 min"
  },
  {
    id: "11",
    name: "Depilace voskem - nohy celé",
    category: "Depilace",
    description: "Kompletní depilace nohou včetně lýtek a stehen.",
    price: "od 750 Kč",
    duration: "60 min"
  },
  {
    id: "12",
    name: "Brazilská depilace",
    category: "Depilace",
    description: "Intimní depilace teplým voskem.",
    price: "od 650 Kč",
    duration: "45 min"
  }
];

export const reviews: Review[] = [
  {
    id: "1",
    name: "Markéta N.",
    rating: 5,
    text: "Skvělý přístup a profesionální služby. Andrea vždy ví, co mé pleti prospěje nejlépe. Vřele doporučuji!",
    date: "2024-01-15"
  },
  {
    id: "2",
    name: "Jana K.",
    rating: 5,
    text: "Navštěvuji salon pravidelně už 3 roky. Vždy odcházím spokojená a relaxovaná. Nejlepší kosmetika v Bohunicích!",
    date: "2024-01-20"
  },
  {
    id: "3",
    name: "Petra S.",
    rating: 5,
    text: "Profesionální přístup, příjemné prostředí a skvělé výsledky. Moje pleť nikdy nevypadala lépe!",
    date: "2024-01-28"
  },
  {
    id: "4",
    name: "Lucie M.",
    rating: 5,
    text: "Andrea je úžasná kosmetička s mnohaletými zkušenostmi. Vždy poradí, co je pro mou pleť nejlepší.",
    date: "2024-02-05"
  },
  {
    id: "5",
    name: "Tereza V.",
    rating: 5,
    text: "Doporučila mi kamarádka a nelituji. Příjemná atmosféra a viditelné výsledky už po prvním ošetření.",
    date: "2024-02-10"
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800",
    alt: "Kosmetické ošetření",
    category: "Ošetření"
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800",
    alt: "Relaxační masáž",
    category: "Masáže"
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800",
    alt: "Kosmetické produkty",
    category: "Produkty"
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800",
    alt: "Interiér salonu",
    category: "Salon"
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800",
    alt: "Permanentní makeup",
    category: "Makeup"
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800",
    alt: "Kosmetické křeslo",
    category: "Salon"
  }
];

export const salonInfo = {
  name: "Kosmetický salon Andrea Bohunice",
  address: "Dlouhá 123, 625 00 Brno-Bohunice",
  phone: "+420 777 123 456",
  email: "info@salonandrea.cz",
  ico: "12345678",
  openingHours: {
    monday: "9:00 - 18:00",
    tuesday: "9:00 - 18:00",
    wednesday: "9:00 - 18:00",
    thursday: "9:00 - 20:00",
    friday: "9:00 - 18:00",
    saturday: "9:00 - 14:00",
    sunday: "Zavřeno"
  },
  social: {
    facebook: "https://www.facebook.com/salonandrea",
    instagram: "https://www.instagram.com/salonandrea",
    google: "https://g.page/salonandrea"
  }
};