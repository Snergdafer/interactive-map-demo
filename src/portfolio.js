const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jesse Etherington',
  role: 'Mobile Engineer',
  description:
    "I have 3 years of in-office and remote experience coding for projects ranging from Proprietary Sales Apps to Cryptocurrency DApps. I bring my love of gaming, music, and ideation to my work. I’m also passionate about the outdoors, spending lots of time at my family’s cabin.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'C# Calculator',
    description:
      'A simple calculator I built in .Net Maui to demonstrate my C# Skills.',
    stack: ['C#', 'XAML', 'Maui'],
    livePreview: 'https://github.com/Snergdafer/calculator'
  },
  {
    name: 'Albatross',
    description:
      'An app used internally by the sales team at Blue Raven Solar. Handled everything from customer contacts to Geolocation to complex forms. (Link Unavailable)',
    stack: ['React Native', 'Redux', 'Redux Saga'],
    livePreview: '',
  },
  {
    name: 'Sensory Staff',
    description:
      'A website made for breweries to manage their inventories and regulatory documents.',
    stack: ['Inertia', 'Laravel', 'SQLite'],
    livePreview: 'https://www.sensorystaff.com',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'React Native',
  'React',
  'Node',
  'C#',
  'SQLite',
  'JavaScript',
  'TypeScript',
  'PHP',
  'Laravel',
  'Xcode',
  "Android Studio",
  'HTML',
  'CSS',
  'Redux',
  'SASS',
  'Git',
  'CI/CD',
  'Jest',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jesse.etherington@gmail.com',
}

export { header, about, projects, skills, contact }
