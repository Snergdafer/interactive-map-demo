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
    "This experience has opened my eyes to the pace at which new technologies grow and adapt to market needs. I'm exited to grow into my next role as a Mid Level Developer",
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
      'A simple calculator I built in .Net Maui to demonstrate my C# Skills',
    stack: ['C#', 'XAML', 'Maui'],
    livePreview: 'https://github.com/Snergdafer/calculator'
  },
  {
    name: 'ArcGis Map Demo',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Javascript', 'ArcGis', 'React'],
    livePreview: 'https://github.com',
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
