export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  duration?: string;
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
    price: "1 350 Kč",
    duration: "75–90 min"
  },
  {
    id: "2",
    name: "Speciální kosmetika (aqua, antipigmentační, liftingová)",
    category: "Kosmetická ošetření",
    description: "Intenzivní ošetření zaměřené na konkrétní potřeby vaší pleti. Ať už toužíte po hloubkové hydrataci, sjednocení tónu nebo zpevnění kontur, tato péče vám pomůže dosáhnout viditelných výsledků.",
    price: "od 1 550 Kč",
    duration: "75–90 min"
  },
  {
    id: "3",
    name: "Chemický peeling",
    category: "Kosmetická ošetření",
    description: "Účinná metoda pro obnovu a rozjasnění pleti. Pomáhá redukovat drobné nedokonalosti, pigmentové skvrny a jemné vrásky, pleť působí hladší a svěžejší.",
    price: "1 700 Kč",
    duration: "75–90 min"
  },
  {
    id: "4",
    name: "Mezoterapie",
    category: "Kosmetická ošetření",
    description: "Revitalizační ošetření, které dodává pleti potřebné živiny přímo tam, kde je potřebuje. Výsledkem je viditelně hydratovaná, pružnější a zářivější pleť.",
    price: "2 200–3 500 Kč",
    duration: "75–90 min"
  },
  {
    id: "5",
    name: "Carboxy / Hollywood peel",
    category: "Kosmetická ošetření",
    description: "Luxusní ošetření pro okamžitě zářivou a vypnutou pleť. Oblíbená volba před důležitými událostmi, kdy chcete vypadat co nejlépe.",
    price: "1 800 Kč",
    duration: "75–90 min"
  },
  {
    id: "6",
    name: "Studená plazma (součást kosmetiky)",
    category: "Kosmetická ošetření",
    description: "Moderní neinvazivní technologie podporující regeneraci a omlazení pleti. Vhodná pro ty, kdo hledají šetrnou cestu k viditelným výsledkům.",
    price: "1 690 Kč",
    duration: "75–90 min"
  },
  {
    id: "7",
    name: "Studená plazma – samostatně (10 min.)",
    category: "Kosmetická ošetření",
    description: "Cílené ošetření studenou plazmou pro rychlou regeneraci a revitalizaci pleti. Ideální doplněk k pravidelné péči.",
    price: "300 Kč"
  },
  {
    id: "8",
    name: "Péče o aknózní a problematickou pleť",
    category: "Kosmetická ošetření",
    description: "Specializované ošetření pro pleť náchylnou k nedokonalostem a zánětům. Pomáhá zklidnit, vyčistit a navrátit pleti rovnováhu.",
    price: "1 300–1 500 Kč",
    duration: "75–90 min"
  },
  {
    id: "9",
    name: "Hydrodermabraze",
    category: "Kosmetická ošetření",
    description: "Šetrná metoda hloubkového čištění a hydratace pleti v jednom. Zanechává pokožku dokonale čistou, jemnou a prosvětlenou.",
    price: "1 450 Kč",
    duration: "75–90 min"
  },
  // Permanentní make-up
  {
    id: "10",
    name: "Permanentní make-up – horní oční linky",
    category: "Permanentní make-up",
    description: "Jemné zvýraznění očí, které dodá pohledu hloubku a výraznost. Úspora času při každodenním líčení a dokonalý vzhled za všech okolností.",
    price: "2 500 Kč"
  },
  {
    id: "11",
    name: "Permanentní make-up – spodní oční linky",
    category: "Permanentní make-up",
    description: "Decentní podtržení spodního víčka pro ucelenější a definovanější pohled. Přirozené zvýraznění, které vydrží.",
    price: "2 000 Kč"
  },
  {
    id: "12",
    name: "Permanentní make-up – obě linky současně",
    category: "Permanentní make-up",
    description: "Kompletní rámování očí pro maximální efekt a harmonický výraz. Elegantní řešení pro ženy, které chtějí mít oči vždy dokonale zvýrazněné.",
    price: "4 000 Kč"
  },
  {
    id: "13",
    name: "Permanentní make-up – meziřasová linka",
    category: "Permanentní make-up",
    description: "Nejpřirozenější forma permanentního make-upu očí. Opticky zahušťuje řasy a dodává pohledu jemnou intenzitu bez viditelné linky.",
    price: "2 500 Kč"
  },
  {
    id: "14",
    name: "Permanentní make-up – rty",
    category: "Permanentní make-up",
    description: "Krásně definované a barevně sjednocené rty, které působí plnějším dojmem. Konec starostí s obtiskávajícím se rtěnkou a nepravidelným obrysem.",
    price: "4 900 Kč"
  },
  {
    id: "15",
    name: "Korekce PMU (do 4 měsíců)",
    category: "Permanentní make-up",
    description: "Oživení a úprava stávajícího permanentního make-upu. Vrátíme barvu, tvar i svěžest vašemu původnímu ošetření.",
    price: "1 000 Kč"
  },
  {
    id: "15a",
    name: "Oživení tvaru a barvy – do 1 roku",
    category: "Permanentní make-up",
    description: "Od korekce do jednoho roku.",
    price: "1 500 Kč"
  },
  {
    id: "15b",
    name: "Oživení tvaru a barvy – do 2 let",
    category: "Permanentní make-up",
    description: "Oživení barvy a tvaru ve druhém roce po aplikaci.",
    price: "1 800 Kč"
  },
  {
    id: "15c",
    name: "Oživení tvaru a barvy – 3 roky a více",
    category: "Permanentní make-up",
    description: "Oživení starší aplikace permanentního make-upu (3 roky a více).",
    price: "3 500 Kč"
  },
  {
    id: "15d",
    name: "Předělávka z jiného salonu",
    category: "Permanentní make-up",
    description: "Korekce a předělávka permanentního make-upu provedeného v jiném salonu.",
    price: "+ 20 % k ceně"
  },
  // Odstraňování a korekce
  {
    id: "16",
    name: "Odstraňování PMU",
    category: "Odstraňování a korekce",
    description: "Bezpečná a účinná metoda pro odstranění nežádoucího tetování. Vhodná pro permanentní make-up.",
    price: "od 1 200 Kč / sezení"
  },
  {
    id: "16",
    name: "Odstraňování laserem tetování po těle",
    category: "Odstraňování a korekce",
    description: "Bezpečná a účinná metoda pro odstranění nežádoucího tetování. Vhodná pro odstranění trvalého tetování po těle.",
    price: "od 500 Kč / dle osobní domluvy"
  },
  {
    id: "17",
    name: "Chemické zesvětlení tetování",
    category: "Odstraňování a korekce",
    description: "Alternativní způsob redukce pigmentu v nežádoucím tetování. Šetrná volba pro ty, kdo chtějí tetování výrazně zesvětlit nebo připravit na překrytí.",
    price: "cena dle rozsahu"
  },
  {
    id: "18",
    name: "Odstraňování jizev (akné, operace, úrazy)",
    category: "Speciální procedury",
    description: "Specializovaná péče zaměřená na zmírnění viditelnosti jizev různého původu. Pomáháme pleti obnovit hladší a jednotnější strukturu.",
    price: "800–3 500 Kč"
  },
  // Speciální procedury
  {
    id: "19",
    name: "Obličejová liftingová masáž",
    category: "Speciální procedury",
    description: "Speciální masážní technika zaměřená na zpevnění a lifting obličejových svalů. Stimuluje krevní oběh, zlepšuje pružnost pleti a pomáhá redukovat známky stárnutí. Lze využít samostatně i jako doplněk ke kosmetickému ošetření. Školení v Liana Academy – Masérské kurzy Brno.",
    price: "1 100 Kč",
    duration: "45 min"
  },
  {
    id: "20",
    name: "Terapie světlem",
    category: "Speciální procedury",
    description: "Moderní fototerapie využívající různé vlnové délky světla pro regeneraci a omlazení pleti. Pomáhá při léčbě akné, pigmentových skvrn a podporuje celkovou revitalizaci pokožky.",
    price: "cena dle rozsahu"
  },
  {
    id: "21",
    name: "HIFU",
    category: "Speciální procedury",
    description: "Neinvazivní liftingová metoda využívající fokusovaný ultrazvuk pro zpevnění a omlazení pleti. Stimuluje tvorbu kolagenu v hlubších vrstvách kůže pro dlouhotrvající efekt.",
    price: "cena dle rozsahu"
  }
];

export const reviews: Review[] = [
  {
    id: "1",
    name: "Veronika Bílovská",
    rating: 5,
    text: "Jsem moc spokojená. Andrejka je velice šikovná a příjemná. Dokonale vyslechla mé přání. Děkuji jí za to.",
    date: ""
  },
  {
    id: "2",
    name: "Barbora Oujeská",
    rating: 5,
    text: "S první návštěvou jsem byla spokojena. Cítila jsem se více sebevědoměji. Pleť jsem měla hezky vyčištěnou a hydratovanou. Andrejka je moc příjemná a šikovná.",
    date: ""
  },
  {
    id: "3",
    name: "Martin Hořínek",
    rating: 5,
    text: "Do tohoto salónku jsem přišel s fakt hodně špatným akné, horší stav jsem snad ani neviděl. Už po 6 měsících pravidelného chození ale není skoro poznat, že jsem nějaké akné vůbec měl. Moc se mi líbí přístup – Andrejka je velmi komunikativní, vše srozumitelně vysvětlí a během léčby se průběžně ptá, jestli je všechno v pořádku. Salónek můžu jedině doporučit.",
    date: ""
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: "7",
    src: "/red_light-ak.webp",
    alt: "Terapie červeným světlem",
    category: "Ošetření"
  },
  {
    id: "8",
    src: "/salon-interier.webp",
    alt: "Interiér salonu Andrea",
    category: "Salon"
  },
  {
    id: "9",
    src: "/salon-interier-2.webp",
    alt: "Interiér salonu Andrea",
    category: "Salon"
  },
  {
    id: "10",
    src: "/salon-lehatko.webp",
    alt: "Kosmetické lehátko v salonu",
    category: "Salon"
  },
  {
    id: "11",
    src: "/salon-venku.webp",
    alt: "Salon Andrea zvenku",
    category: "Salon"
  }
];

export const salonInfo = {
  name: "Salón Andrea Starý Lískovec",
  address: "U Pošty 288/2, 625 00 Brno-Starý Lískovec",
  phone: "+420 604 160 553",
  email: "andrea.breznai@seznam.cz",
  ico: "69723320",
  mapUrl: "https://maps.google.com/?q=U+Pošty+288/2,+Brno-Starý+Lískovec",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100063762675215",
    google: "https://g.page/salonandrea"
  }
};