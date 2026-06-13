export const site = {
  name: 'Romina Rivadeneira',
  email: 'rivrom18@gmail.com',
  location: 'Dundalk, Ireland',

  // Rotating subtitle in the hero — add/remove as you like
  roles: ['Firmware Engineer', 'IoT Builder', 'Tennis Fanatic', 'Pixel Chaser'],

  social: {
    github: 'https://github.com/rrivaden03',
    linkedin: 'https://www.linkedin.com/in/rrivaden/',
    twitter: 'https://twitter.com/RomiRiv',
    twitch: 'https://www.twitch.tv/rrivaden03',
  },

  about: [
    "Hi! I'm Romina, a Computer Engineer from Iowa State University, currently living in Dundalk, Ireland. I build firmware and IoT software for connected pet products at PetSafe Brands; smart feeders, GPS collars, automatic litterboxes — the kind of things your pet uses but definitely doesn't appreciate.",
    "When I'm not debugging firmware at odd hours, I'm chasing a better tennis backhand, hunting for the perfect shot to photograph, or lost somewhere in a good book or film.",
  ],

  skills: {
    technical: [
      { name: 'Embedded Firmware', level: 90 },
      { name: 'Cloud & IoT', level: 85 },
      { name: 'Scripting & Tooling', level: 60 },
      { name: 'Web Development', level: 50 },
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
      'Self-Motivation',
      'Communication & Empathy',
      'Problem-Solving',
      'Patience',
    ],
  },

  experience: [
    {
      company: 'PetSafe Brands (formerly Radio Systems PetSafe Europe)',
      role: 'Firmware & IoT Software Engineer',
      location: 'Dundalk, Ireland',
      period: '2020 — Present',
      current: true,
      tenureNote: '8+ yrs · same company',
      bullets: [
        'Develop firmware for IoT pet products — smart feeders, automatic litterboxes, and GPS containment systems',
        'Architect a shared embedded platform covering product onboarding, cloud communication protocols, and OTA firmware updates',
        'Work across Espressif, Nordic, NXP (Marvell), Infineon (Cypress), and Silicon Labs Wi-Fi and BLE modules using C + FreeRTOS on AWS IoT',
        'Own embedded components through full development, launch, and sustaining phases across cross-functional teams',
        'Support customer service and QA teams during product deployment and operation',
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
        'Contributed to firmware development for IoT pet products using C + FreeRTOS on Wi-Fi and BLE microcontrollers',
        'Built experience across Espressif, NXP (Marvell), and Cypress modules — building the embedded foundations that carried into the European role',
        'Supported product launches and sustaining phases as part of the embedded sub-team within the connected team',
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
    { name: 'Tennis', color: 'bg-lime-400 text-stone-900', blurb: 'Doubles champion. Serves still pending.', image: '/tennis.jpg', objectPos: '50% 85%' },
    { name: 'Photography', color: 'bg-orange-400 text-stone-900', blurb: 'Phone in hand. The crow didn\'t even flinch.', image: '/cliffs.jpg', objectPos: 'center' },
    { name: 'Reading', color: 'bg-sky-400 text-white', blurb: 'Dark, tense, mysterious, and somehow also hopeful.', progress: { current: 23, goal: 53 }, genres: ['Thriller', 'Sci-Fi', 'Romance', 'Historical Fiction', 'Non-Fiction'] },
    { name: '& Also', color: 'bg-stone-700 text-white', also: [
      'On repeat today: Billy Talent, Rawayana, Bad Bunny, Gorillaz. The algorithm has trust issues.',
      'Will draw it. Won\'t finish it.',
      'Sushi. Non-negotiable.',
      'Video games. Occasionally. Competitively.',
    ]},
  ],

  personalFacts: [
    'Will learn your dog\'s name before yours.',
    'Will re-grip your racket before you notice it needs it.',
    'Spotify Wrapped is always confused. So is everyone else.',
  ],

  now: {
    reading: { title: 'The Anniversary', author: 'Alex Finlay', genre: 'Thriller', take: "Halfway in and already can't trust anyone." },
    watching: { title: 'Backrooms', type: 'Film', genre: 'Horror', take: 'Went twice. Still thinking about it.' },
    tennis: { status: 'Meath Senior Tour Graded Open 2026', record: '12W – 2L', note: 'Leinster Spring League Doubles Champions, May 2026' },
  },
};
