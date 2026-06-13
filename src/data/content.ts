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
    "Hi! I'm Romina, a Computer Engineer from Iowa State University. I develop firmware and software solutions as part of the IoT team at Radio Systems PetSafe Europe in Dublin, Ireland. In case you're curious — PetSafe is a pet technology company, not as much about radios as the name suggests.",
    "When I'm not debugging firmware at odd hours, I'm chasing a better tennis backhand, hunting for the perfect shot to photograph, or lost somewhere in a good book or film.",
  ],

  skills: {
    technical: [
      { name: 'Embedded C + FreeRTOS', level: 90 },
      { name: 'AWS IoT', level: 90 },
      { name: 'Mobile Development', level: 70 },
      { name: 'Web Development', level: 60 },
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
    { name: 'Tennis', color: 'bg-lime-400 text-stone-900', blurb: 'Working on that serve.', image: '/tennis.jpg' },
    { name: 'Photography', color: 'bg-orange-400 text-stone-900', blurb: 'Finding the perfect shot.' },
    { name: 'Drawing', color: 'bg-violet-400 text-white', blurb: 'Pencils and pixels.' },
    { name: 'Reading', color: 'bg-sky-400 text-white', blurb: 'Never enough pages.' },
    { name: 'Film', color: 'bg-rose-400 text-white', blurb: 'Always hunting a good plot twist.' },
    { name: 'Sushi', color: 'bg-yellow-300 text-stone-900', blurb: 'A deep and important passion.' },
  ],

  now: {
    reading: { title: 'The Anniversary', author: 'Alex Finlay', genre: 'Thriller', take: "Halfway in and already can't trust anyone." },
    watching: { title: 'Backrooms', type: 'Film', genre: 'Horror', take: 'Went twice. Still thinking about it.' },
    tennis: { status: 'Meath Senior Tour Graded Open 2026', record: '12W – 2L', note: 'Leinster Spring League Doubles Champions, May 2026' },
  },
};
