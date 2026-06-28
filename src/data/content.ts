export const site = {
  name: 'Romina Rivadeneira',
  email: 'rivrom18@gmail.com',
  location: 'Dundalk, Ireland',

  // Rotating subtitle in the hero — add/remove as you like
  roles: ['Firmware Engineer', 'IoT Builder', 'Tennis Fanatic', 'Pixel Chaser', 'Venezuelan in Ireland'],

  social: {
    github: 'https://github.com/rrivaden03',
    linkedin: 'https://www.linkedin.com/in/rrivaden/',
  },

  about: [
    "Hi! I'm Romina, originally from Venezuela. Left home for a Computer Engineering degree in Iowa — cold winters, good people — which turned out to be good practice. Currently living in Dundalk, Ireland, a move that made more sense than expected. Turns out the Irish and Venezuelans are the same craic, just in different languages. I build firmware and IoT software for connected pet products at PetSafe Brands — smart feeders, GPS collars, automatic litterboxes — the kind of things your pet uses but definitely doesn't appreciate.",
    "When I'm not debugging firmware at odd hours, I'm chasing a better tennis backhand, hunting for the perfect shot to photograph, or lost somewhere in a good book or film.",
  ],

  skills: {
    technical: [
      { name: 'Embedded Firmware', blurb: 'Eight years of C, FreeRTOS, and hardware that lies about its own behavior.' },
      { name: 'Cloud & IoT', blurb: 'Connecting devices to the cloud and keeping them there. Daily work, not a side skill.' },
      { name: 'Scripting & Tooling', blurb: 'Whatever makes the job less annoying. Usually works on the second try.' },
      { name: 'Web Development', blurb: 'Not the day job, but it shows up. This site is evidence.' },
    ],
    hardware: [
      'Espressif (ESP32)',
      'Nordic Semiconductor',
      'NXP (Marvell)',
      'Infineon (Cypress)',
      'Silicon Labs (SiLabs)',
      'Wi-Fi + BLE',
      'OTA Firmware Updates',
      'MQTT',
      'Amazon FreeRTOS',
    ],
    soft: [
      'Patience: firmware-grade. Intermittent bugs are not allowed to win.',
      'Good at finding the gap — whether it\'s in the code, the system, or the team.',
      'Can explain BLE pairing to a product manager and a hardware engineer in the same breath. Both leave satisfied.',
    ],
  },

  experienceIntro: "Eight years, two countries, same company. The problems kept changing — new chips, new protocols, new products — and the mission made it easy to stay. Building things that help pet parents feel safe and connected to their animals is the kind of work I would've called a dream job before I knew what a real job looked like. Turns out it was the first one I landed.",

  experience: [
    {
      company: 'Radio Systems PetSafe Europe Ltd (PetSafe Brands, but in Europe)',
      role: 'Firmware & IoT Software Engineer',
      location: 'Dundalk, Ireland',
      period: '2020 — Present',
      current: true,
      tenureNote: '8+ yrs · same company',
      bullets: [
        'Develop firmware for IoT pet products — smart feeders, automatic litterboxes, GPS trackers, and containment systems',
        'Architect a shared embedded platform covering device provisioning, cloud communication, and OTA firmware updates',
        'Work across Espressif, Nordic, NXP, Infineon, and Silicon Labs Wi-Fi and BLE modules in C + FreeRTOS on AWS IoT',
        'Own components from first commit to launch — and everything that comes after',
        'Work directly with customer service and QA when products ship — and when they don\'t behave',
      ],
      tags: {
        hw:    ['Espressif', 'Nordic', 'NXP (Marvell)', 'Infineon (Cypress)', 'Silicon Labs'],
        sw:    ['C', 'FreeRTOS', 'AWS IoT'],
        proto: ['BLE', 'Wi-Fi', 'OTA'],
      },
    },
    {
      company: 'PetSafe Brands (formerly Radio Systems Corporation)',
      role: 'Firmware & IoT Software Engineer',
      location: 'Knoxville, TN, USA',
      period: '2017 — 2020',
      current: false,
      bullets: [
        'Built firmware for IoT pet products in C + FreeRTOS across Wi-Fi and BLE microcontrollers',
        'Worked across Espressif, NXP, and Cypress modules — the embedded foundations that carried into the European role',
        'Supported product launches and kept things running as part of the embedded team',
      ],
      tags: {
        hw:    ['Espressif', 'NXP (Marvell)', 'Cypress'],
        sw:    ['C', 'FreeRTOS', 'AWS IoT'],
        proto: ['BLE', 'Wi-Fi'],
      },
    },
  ],

  education: [
    {
      school: 'Iowa State University',
      degree: 'B.S. Computer Engineering',
      location: 'Ames, IA',
      period: '2017',
      bullets: ['Computer Engineering graduate — Go Cyclones!'],
    },
  ],

  hobbies: [
    { name: 'Tennis', color: 'bg-lime-400 text-stone-900', blurb: 'Doubles champion. Serves still pending.', badge: '🏆 Doubles Champs', image: '/tennis-team.jpg', alt: 'Romina and her Leinster League tennis team holding championship shields at Carlow LTC', objectPos: '60% 50%', scale: 1.2 },
    { name: 'Photography', color: 'bg-orange-400 text-stone-900', blurb: 'Phone in hand. The crow didn\'t even flinch.', image: '/cliffs.jpg', alt: 'A crow perched at the Cliffs of Moher, Ireland', objectPos: 'center' },
    { name: 'Reading', color: 'bg-sky-400 text-white', blurb: 'Dark, tense, mysterious, and somehow also hopeful.', progress: { current: 25, goal: 53 }, genres: ['Thriller', 'Sci-Fi', 'Romance', 'Historical Fiction', 'Non-Fiction'] },
    { name: '& Also', color: 'bg-stone-700 text-white', also: [
      'On repeat today: Billy Talent, Rawayana, Bad Bunny, Gorillaz. The algorithm has trust issues.',
      'The sketchbook is full of promising first pages.',
      'Sushi. Non-negotiable.',
      'Games: online with friends, solo for the story. The backlog is not improving.',
    ]},
  ],

  personalFacts: [
    'Will learn your dog\'s name before yours.',
    'Will re-grip your racket before you notice it needs it.',
    'Spotify Wrapped is always confused. So is everyone else.',
    'Will make you arepas. This is not an offer made lightly.',
    'Berlin four times, with Germany and Austria well covered. Tries German everywhere. The locals are very gracious about it.',
  ],

  gallery: [
    { src: '/gallery/vienna-rathaus-night.jpg',      alt: 'Vienna City Hall (Rathaus) illuminated at night, Gothic spires soaring against a dark sky with a Christmas tree at its base', caption: 'Wiener Rathaus, Vienna', portrait: true,  width: 1350, height: 1800 },
    { src: '/gallery/berlin-cathedral-spree.jpg',    alt: 'Berliner Dom and tourist boats on the Spree river on a sunny day', caption: 'Berliner Dom & Spree, Berlin', portrait: false, width: 1800, height: 1350 },
    { src: '/gallery/blarney-portal.jpg',            alt: 'Blarney Castle framed through a circular stone opening', caption: 'Blarney Castle, Ireland', portrait: false, width: 1800, height: 1350 },
    { src: '/gallery/eisbach-surfer.jpg',            alt: 'Surfer riding the Eisbach Wave in Munich\'s Englischer Garten, crowd watching from the bridge', caption: 'Eisbach Wave, Munich', portrait: false, width: 1800, height: 1350 },
    { src: '/gallery/howth-marina.jpg',              alt: 'Panoramic view of Howth Marina on a calm day, pier and lighthouse stretching into Dublin Bay', caption: 'Howth, Ireland', portrait: false, width: 1800, height: 739 },
    { src: '/gallery/salzburg-fortress.jpg',         alt: 'Austrian flag flying over Salzburg at blue hour from Hohensalzburg Fortress, city lights and the Salzach river below', caption: 'Hohensalzburg Fortress, Salzburg', portrait: true,  width: 1350, height: 1800 },
    { src: '/gallery/schonbrunn-willkommen.jpg',     alt: '"Willkommen" illuminated star sign at Schönbrunn Palace Christmas market at night, Vienna', caption: 'Weihnachtsmarkt Schloss Schönbrunn, Vienna', portrait: false, width: 1800, height: 1350 },
    { src: '/gallery/berlin-hackesche-hofe.jpg',     alt: 'Looking straight up through the ornate tile-covered courtyards of Hackesche Höfe in Berlin, Christmas tree below', caption: 'Hackesche Höfe, Berlin', portrait: true,  width: 1350, height: 1800 },
    { src: '/gallery/grass-tennis-court.jpg',        alt: 'Aryna Sabalenka mid-swing on the grass court at the Berlin Open 2025, packed stands and blue summer sky behind her', caption: 'Berlin Open (WTA), Berlin', portrait: false, width: 1800, height: 1350 },
    { src: '/gallery/stuttgart-library.jpg',         alt: 'Stadtbibliothek Stuttgart interior — white minimalist architecture with stacked floors of bookshelves', caption: 'Stadtbibliothek, Stuttgart', portrait: false, width: 1800, height: 1350 },
    { src: '/gallery/gluhwein-berlin.jpg',           alt: 'Glühwein mug at Berliner Weihnachtszeit Christmas market at Alexanderplatz, Ferris wheel glowing in the background', caption: 'Alexanderplatz, Berlin', portrait: true,  width: 1350, height: 1800 },
    { src: '/gallery/mercedes-museum.jpg',           alt: 'Vintage Mercedes-Benz W196 racing cars on display in the Mercedes-Benz Museum, Stuttgart', caption: 'Mercedes-Benz Museum, Stuttgart', portrait: false, width: 1800, height: 1350 },
    { src: '/gallery/munich-park-dog.jpg',           alt: 'White fluffy dog sniffing at the edge of a pond in the Englischer Garten, Munich, person strolling through autumn leaves behind', caption: 'Englischer Garten, Munich', portrait: true,  width: 1350, height: 1800 },
    { src: '/gallery/cliffs-bird-friend.jpg',        alt: 'A friend at the Cliffs of Moher, leaning on the stone wall as a seagull soars overhead in the winter light', caption: 'Cliffs of Moher, Ireland', portrait: false, width: 1800, height: 1350 },
    { src: '/gallery/galway-beach-break.jpg',        alt: 'The Jungle Beach Break kiosk closed for the evening on the Salthill promenade, Galway Bay stretching out behind it at dusk', caption: 'Salthill, Galway', portrait: false, width: 1800, height: 1350 },
    { src: '/gallery/galway-sunset-silhouette.jpg',  alt: 'A person silhouetted against the golden sunset over Galway Bay, standing on the rocky shoreline', caption: 'Galway Bay, Ireland', portrait: false, width: 1800, height: 1350 },
    { src: '/gallery/stuttgart-spring-festival.jpg', alt: 'Wellenflug swing carousel in full spin at the Stuttgart Spring Festival, two people watching from below', caption: 'Stuttgarter Frühlingsfest, Stuttgart', portrait: true,  width: 1350, height: 1800 },
    { src: '/gallery/berlin-staatsoper-dog.jpg',     alt: 'A completely unbothered dog lounging on the red carpet outside the Staatsoper für alle at Bebelplatz during the Fête de la Musique in Berlin', caption: 'Staatsoper für alle, Berlin', portrait: false, width: 1800, height: 1350 },
    { src: '/gallery/german-town-vineyards.jpg',     alt: 'Panoramic view over Esslingen am Neckar old town, with terraced vineyards in the foreground and wooded hills behind', caption: 'Esslingen am Neckar, Germany', portrait: false, width: 1800, height: 1350 },
    { src: '/gallery/clogherhead-beach.jpg',         alt: 'A dog silhouetted on the vast wet sands of Clogherhead Beach at dawn, standing alone against a soft pink and blue sunrise sky, reflection shimmering in the low tide below', caption: 'Clogherhead, Ireland', portrait: false, width: 1800, height: 1350 },
  ],

  projects: [
    {
      name: 'Dundalk Tennis Club',
      description: 'A full-stack site for the club I play for — events, news, memberships, and a headless CMS. Built alongside a fellow club player who happens to be an experienced web developer and has been patient enough to introduce me to every tool on that stack. What started as "how hard can it be" turned into a Next.js monorepo.',
      stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Sanity CMS'],
      url: 'https://dundalkltc.com',
      status: 'Live',
    },
  ],

  now: {
    reading: { title: 'The Anniversary', author: 'Alex Finlay', genre: 'Thriller', take: "Halfway in and already can't trust anyone." },
    watching: { title: 'Backrooms', type: 'Film', genre: 'Horror', take: 'Went twice. Still thinking about it.' },
    tennis: { status: 'Glasnevin LTC Senior Tour 1000 Open 2026', record: '14W – 4L', note: 'Leinster Spring League Doubles Champions, May 2026' },
  },
};
