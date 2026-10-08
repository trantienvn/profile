import {
  FiCloud,
  FiCode,
  FiCpu,
  FiFacebook,
  FiGithub,
} from 'react-icons/fi';

export const AppConfig = {
  name: 'Tran Van Tien',
  username: 'trantienvn',

  avatar: 'https://trantien.is-a.dev/profile/trantien.png',
  verticalAvatar: 'https://trantien.is-a.dev/profile/trantien.png',

  introduction:
    `IT Student & Fullstack Developer.\n` +
    `Building web applications with Angular, TypeScript & Node.js.\n` +
    `Interested in AI, software engineering and modern technologies.`,

  subscriptions: [
    {
      name: 'Open to Work',
      price: 'Internship / Junior',
      preferred: true,
    },
    {
      name: 'Freelance',
      price: 'Contact me',
    },
  ],

  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/trantienvn',
      icon: FiGithub,
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/0trantien0',
      icon: FiFacebook,
    },
  ],

  expertises: [
    {
      name: 'Fullstack Development',
      icon: FiCode,
      description:
        'Angular, TypeScript, JavaScript, HTML, CSS, SCSS, RxJS, Node.js, REST API, Express.js, SQL, MongoDB, Git & GitHub.',
    },
    {
      name: 'AI & Development Tools',
      icon: FiCpu,
      description:
        'Local LLM, AI-assisted development, Python, OpenAI-compatible APIs, computer vision and automation.',
    },
    {
      name: 'DevOps & Infrastructure',
      icon: FiCloud,
      description:
        'Docker, Git, GitHub, CI/CD fundamentals, Linux and deployment environments.',
    },
  ],

  analytics: {
    gaId: 'G-NF39CSC1T1',
  },

  giscusEnabled: true,
};