export const site = {
  name: 'Romina Rivadeneira',
  email: 'rivrom18@gmail.com',
  location: 'Dublin, Ireland',

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
    soft: [
      'Self-Motivation',
      'Communication & Empathy',
      'Problem-Solving',
      'Patience',
    ],
  },

  experience: [
    {
      company: 'Radio Systems PetSafe Europe',
      role: 'Firmware & IoT Software Engineer',
      location: 'Dundalk, Ireland',
      period: '2020 — Present',
      current: true,
      bullets: [
        'Developing firmware and embedded software for connected pet products',
        'Building and maintaining IoT cloud integrations on AWS',
        'Working across the full stack from bare-metal C to mobile app connectivity',
      ],
      tags: ['C', 'FreeRTOS', 'AWS IoT', 'Embedded'],
    },
    {
      company: 'Radio Systems Corporation (PetSafe)',
      role: 'Software Engineer',
      location: 'Knoxville, TN, USA',
      period: '2017 — 2020',
      current: false,
      bullets: [
        'Contributed to firmware and software for pet technology products',
        'Worked on IoT-connected device platforms and cloud services',
      ],
      tags: ['C', 'IoT', 'Embedded'],
    },
  ],

  education: [
    {
      school: 'Iowa State University',
      degree: 'B.S. Computer Engineering',
      location: 'Ames, IA',
      period: '2013 — 2017',
      bullets: ['Computer Engineering graduate — Go Cyclones!'],
    },
  ],

  projects: [
    {
      name: 'Connected Pet Products',
      folder: 'proj-1',
      description: 'IoT-enabled pet devices developed at PetSafe — connecting hardware to the cloud.',
      tags: ['IoT', 'Embedded C', 'AWS'],
    },
    {
      name: 'Miniature Greenhouses',
      folder: 'proj-2',
      description: 'Automated environmental control systems for miniature greenhouse units.',
      tags: ['Hardware', 'Sensors', 'Automation'],
    },
    {
      name: 'Bike-Share',
      folder: 'proj-3',
      description: 'A bike-sharing data platform and analysis project.',
      tags: ['Web', 'Data Analysis'],
    },
    {
      name: 'Aptus',
      folder: 'proj-4',
      description: 'Mobile application project.',
      tags: ['Mobile'],
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
