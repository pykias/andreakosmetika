export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  duration: string;
  price: string;
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
  // Kosmetická ošetření
  {
    id: "1",
    name: "Klasická kosmetika",
    category: "Kosmetická ošetření",
    description: "Komplexní péče o pleť, která čistí, vyživuje a osvěžuje. Ideální volba pro pravidelnou údržbu a zachování zdravého vzhledu pleti.",
    duration: "60 min",
    price: "1 350 Kč"
  },
  {
    id: "2",
    name: "Speciální kosmetika (aqua, antipigmentační, liftingová)",
    category: "Kosmetická ošetření",
    description: "Intenzivní ošetření zaměřené na konkrétní potřeby vaší pleti. Ať už toužíte po hloubkové hydrataci, sjednocení tónu nebo zpevnění kontur, tato péče vám pomůže dosáhnout viditelných výsledků.",
    duration: "60 min",
    price: "1 550 Kč"
  },
  {
    id: "3",
    name: "Chemický peeling",
    category: "Kosmetická ošetření",
    description: "Účinná metoda pro obnovu a rozjasnění pleti. Pomáhá redukovat drobné nedokonalosti, pigmentové skvrny a jemné vrásky, pleť působí hladší a svěžejší.",
    duration: "60 min",
    price: "1 700 Kč"
  },
  {
    id: "4",
    name: "Mezoterapie",
    category: "Kosmetická ošetření",
    description: "Revitalizační ošetření, které dodává pleti potřebné živiny přímo tam, kde je potřebuje. Výsledkem je viditelně hydratovaná, pružnější a zářivější pleť.",
    duration: "60 min",
    price: "2 200–3 500 Kč"
  },
  {
    id: "5",
    name: "Carboxy / Hollywood peel",
    category: "Kosmetická ošetření",
    description: "Luxusní ošetření pro okamžitě zářivou a vypnutou pleť. Oblíbená volba před důležitými událostmi, kdy chcete vypadat co nejlépe.",
    duration: "60 min",
    price: "1 800 Kč"
  },
  {
    id: "6",
    name: "Studená plazma (součást kosmetiky)",
    category: "Kosmetická ošetření",
    description: "Moderní neinvazivní technologie podporující regeneraci a omlazení pleti. Vhodná pro ty, kdo hledají šetrnou cestu k viditelným výsledkům.",
    duration: "60 min",
    price: "1 690 Kč"
  },
  {
    id: "7",
    name: "Studená plazma – samostatně",
    category: "Kosmetická ošetření",
    description: "Cílené ošetření studenou plazmou pro rychlou regeneraci a revitalizaci pleti. Ideální doplněk k pravidelné péči.",
    duration: "60 min",
    price: "300 Kč"
  },
  {
    id: "8",
    name: "Péče o aknózní a problematickou pleť",
    category: "Kosmetická ošetření",
    description: "Specializované ošetření pro pleť náchylnou k nedokonalostem a zánětům. Pomáhá zklidnit, vyčistit a navrátit pleti rovnováhu.",
    duration: "60 min",
    price: "1 300–1 500 Kč"
  },
  {
    id: "9",
    name: "Hydrodermabraze",
    category: "Kosmetická ošetření",
    description: "Šetrná metoda hloubkového čištění a hydratace pleti v jednom. Zanechává pokožku dokonale čistou, jemnou a prosvětlenou.",
    duration: "60 min",
    price: "1 450 Kč"
  },
  // Permanentní make-up
  {
    id: "10",
    name: "Permanentní make-up – horní oční linky",
    category: "Permanentní make-up",
    description: "Jemné zvýraznění očí, které dodá pohledu hloubku a výraznost. Úspora času při každodenním líčení a dokonalý vzhled za všech okolností.",
    duration: "60 min",
    price: "2 500 Kč"
  },
  {
    id: "11",
    name: "Permanentní make-up – spodní oční linky",
    category: "Permanentní make-up",
    description: "Decentní podtržení spodního víčka pro ucelenější a definovanější pohled. Přirozené zvýraznění, které vydrží.",
    duration: "60 min",
    price: "2 000 Kč"
  },
  {
    id: "12",
    name: "Permanentní make-up – obě linky současně",
    category: "Permanentní make-up",
    description: "Kompletní rámování očí pro maximální efekt a harmonický výraz. Elegantní řešení pro ženy, které chtějí mít oči vždy dokonale zvýrazněné.",
    duration: "60 min",
    price: "4 000 Kč"
  },
  {
    id: "13",
    name: "Permanentní make-up – meziřasová linka",
    category: "Permanentní make-up",
    description: "Nejpřirozenější forma permanentního make-upu očí. Opticky zahušťuje řasy a dodává pohledu jemnou intenzitu bez viditelné linky.",
    duration: "60 min",
    price: "2 500 Kč"
  },
  {
    id: "14",
    name: "Permanentní make-up – rty",
    category: "Permanentní make-up",
    description: "Krásně definované a barevně sjednocené rty, které působí plnějším dojmem. Konec starostí s obtiskávajícím se rtěnkou a nepravidelným obrysem.",
    duration: "60 min",
    price: "4 900 Kč"
  },
  {
    id: "15",
    name: "Korekce PMU (do 4 měsíců)",
    category: "Permanentní make-up",
    description: "Oživení a úprava stávajícího permanentního make-upu. Vrátíme barvu, tvar i svěžest vašemu původnímu ošetření.",
    duration: "60 min",
    price: "1 000 Kč"
  },
  // Odstraňování a korekce
  {
    id: "16",
    name: "Laserové odstranění tetování (PMU i tetování na těle)",
    category: "Odstraňování a korekce",
    description: "Bezpečná a účinná metoda pro odstranění nežádoucího tetování. Vhodná jak pro permanentní make-up, tak pro tetování na těle.",
    duration: "60 min",
    price: "od 1 200 Kč / sezení"
  },
  {
    id: "17",
    name: "Chemické zesvětlení tetování",
    category: "Odstraňování a korekce",
    description: "Alternativní způsob redukce pigmentu v nežádoucím tetování. Šetrná volba pro ty, kdo chtějí tetování výrazně zesvětlit nebo připravit na překrytí.",
    duration: "60 min",
    price: "cena dle rozsahu"
  },
  {
    id: "18",
    name: "Odstraňování jizev (akné, operace, úrazy)",
    category: "Odstraňování a korekce",
    description: "Specializovaná péče zaměřená na zmírnění viditelnosti jizev různého původu. Pomáháme pleti obnovit hladší a jednotnější strukturu.",
    duration: "60 min",
    price: "800–3 500 Kč"
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
  mapUrl: "https://maps.google.com/?q=Brno-Bohunice",
  social: {
    facebook: "https://www.facebook.com/salonandrea",
    instagram: "https://www.instagram.com/salonandrea",
    google: "https://g.page/salonandrea"
  }
};