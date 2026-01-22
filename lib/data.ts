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
    name: "Dámský střih a foukaná",
    category: "Kadeřnictví",
    description: "Profesionální střih podle vašich představ včetně mytí, střihu a finálního stylingu fénem.",
    price: "od 650 Kč",
    duration: "60 min"
  },
  {
    id: "2",
    name: "Pánský střih",
    category: "Kadeřnictví",
    description: "Moderní pánský střih včetně mytí a základního stylingu.",
    price: "od 350 Kč",
    duration: "30 min"
  },
  {
    id: "3",
    name: "Barvení a melír",
    category: "Barvení",
    description: "Profesionální barvení vlasů s použitím šetrných barev. Melírování, tónování nebo celkové barvení.",
    price: "od 1200 Kč",
    duration: "120 min"
  },
  {
    id: "4",
    name: "Balayage / Ombré",
    category: "Barvení",
    description: "Moderní techniky barvení pro přirozený vzhled s jemnými přechody.",
    price: "od 2500 Kč",
    duration: "180 min"
  },
  {
    id: "5",
    name: "Společenský účes",
    category: "Styling",
    description: "Elegantní účes pro vaši speciální příležitost - svatby, plesy, promoce.",
    price: "od 800 Kč",
    duration: "60 min"
  },
  {
    id: "6",
    name: "Keratin a regenerace",
    category: "Péče o vlasy",
    description: "Hloubková regenerace vlasů pomocí keratinové kúry pro hebké a lesklé vlasy.",
    price: "od 1500 Kč",
    duration: "90 min"
  },
  {
    id: "7",
    name: "Trvalá ondulace",
    category: "Styling",
    description: "Moderní trvalá pro objem a tvar vlasů, který vydrží několik měsíců.",
    price: "od 1800 Kč",
    duration: "120 min"
  },
  {
    id: "8",
    name: "Prodlužování vlasů",
    category: "Speciální služby",
    description: "Profesionální prodlužování vlasů metodou keratin nebo micro ring.",
    price: "od 3500 Kč",
    duration: "180 min"
  }
];

export const reviews: Review[] = [
  {
    id: "1",
    name: "Markéta N.",
    rating: 5,
    text: "Skvělý přístup a profesionální služby. Andrea vždy ví, co mým vlasům prospěje nejlépe. Vřele doporučuji!",
    date: "2024-01-15"
  },
  {
    id: "2",
    name: "Jana K.",
    rating: 5,
    text: "Chodím sem už několik let a vždy odcházím spokojená. Příjemné prostředí a milý personál.",
    date: "2024-01-10"
  },
  {
    id: "3",
    name: "Petra S.",
    rating: 5,
    text: "Nejlepší salon v Bohunicích! Andrea má zlaté ruce a vždy mi poradí s péčí o vlasy.",
    date: "2023-12-20"
  },
  {
    id: "4",
    name: "Lucie M.",
    rating: 5,
    text: "Perfektní balayage, přesně podle mých představ. Oceňuji individuální přístup a péči.",
    date: "2023-12-15"
  },
  {
    id: "5",
    name: "Eva D.",
    rating: 5,
    text: "Profesionální služby za rozumné ceny. Vždy se sem ráda vracím.",
    date: "2023-11-28"
  },
  {
    id: "6",
    name: "Tereza V.",
    rating: 5,
    text: "Andrea je úžasná! Vždy pochopí, co chci, a výsledek předčí mé očekávání.",
    date: "2023-11-20"
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800",
    alt: "Moderní účes",
    category: "Účesy"
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800",
    alt: "Barvení vlasů",
    category: "Barvení"
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800",
    alt: "Interiér salonu",
    category: "Salon"
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
    alt: "Společenský účes",
    category: "Účesy"
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800",
    alt: "Balayage",
    category: "Barvení"
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800",
    alt: "Kadeřnické křeslo",
    category: "Salon"
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1553521041-d168abd31de3?w=800",
    alt: "Krátký střih",
    category: "Účesy"
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1581404732211-15320e300e32?w=800",
    alt: "Melírování",
    category: "Barvení"
  }
];

export const salonInfo = {
  name: "Salon Andrea Bohunice",
  address: "Lány 3, 625 00 Brno-Bohunice",
  phone: "+420 123 456 789",
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
    facebook: "https://facebook.com/salonandreabohunice",
    instagram: "https://instagram.com/salon_andrea_bohunice",
    google: "https://g.page/salon-andrea-bohunice"
  },
  bookingUrl: "https://booking.example.com/salon-andrea",
  mapUrl: "https://maps.google.com/?q=Salon+Andrea+Bohunice+Lany+3+Brno"
};