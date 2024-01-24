// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Niteesh1', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/Profile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Niteesh1/Profile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Daimler',
          description:
            'Mercedes Benz Financial Services.',
          imageUrl:
            'https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/02/02/1011128-untitled-design-5.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Foodie App',
          description:
            'A Food delivery app',
          imageUrl:
            'data:image/png;base64,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',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Niteesh Kumar',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'Ega Niteeshkumar',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: 'niteesh_reddy3/',
    youtube: 'niteeshkumarreddy8049', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://niteesh1.github.io/Profile/',
    phone: '',
    email: 'eganiteesh@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Angular',
    'DevOps',
    'JavaScript',
    'React.js',
    'Node.js',
    'SpringBoot',
    'MySQL',
    'Jira',
    'Git',
    'Docker',
    'Java',
    'CSS',
    'Python',
    'Gitlab',
  ],
  experiences: [
    {
      company: 'CGI',
      position: 'Software Engineer',
      from: 'September 2022',
      to: 'Present',
      companyLink: 'https://www.cgi.com/en',
    },
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'July 2019',
    //   to: 'August 2021',
    //   companyLink: 'https://example.com',
    // },
  ],
  certifications: [
    {
      name: 'Full Stack deveopler',
      body: 'Java with Springboot',
      year: 'December 2022',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Sree Vidyanikethan Engineering College',
      degree: 'B Tech',
      from: '2018',
      to: '2022',
    },
    {
      institution: 'Sree Chaitanya Jr College',
      degree: 'Class 12',
      from: '2015',
      to: '2017',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 3, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://niteesh1.github.io/Profile/"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
