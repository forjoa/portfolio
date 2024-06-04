// portraits
import ToDo from '../img/projects/to-do-list.png'
import Dictionary from '../img/projects/dictionary.png'
import CodeMatch from '../img/projects/codematch.png'
import Marvel from '../img/projects/marvel.png'
import ECommerce from '../img/projects/e-commerce.png'
import FastTranslation from '../img/projects/fast-translation.png'
import VideoNet from '../img/projects/video-net.png'
import Dashboard from '../img/projects/dashboard-next.png'
import ECommerceNext from '../img/projects/e-commerce-next.png'

// languages
import languagesInfo from './languagesInfo.ts'

const projects : PorjectI[] = [
  {
    image: ECommerceNext,
    title: 'E-commerce',
    description:
      'Fully customizable online store with full control over products and orders.',
    languages: [
      languagesInfo.next,
      languagesInfo.ts,
      languagesInfo.supabase,
    ],
    repository: 'https://github.com/forjoa/inventory-control',
  },
  {
    image: Dashboard,
    title: 'Dashboard',
    description:
      'Dashboard to control the inventory of our e-commerce where we can also see the orders we have, their status, our customers, and store analytics.',
    languages: [
      languagesInfo.next,
      languagesInfo.ts,
      languagesInfo.supabase,
    ],
    repository: 'https://github.com/forjoa/inventory-control',
  },
  {
    image: VideoNet,
    title: 'VideoNet',
    description:
      'Exclusive social network for content creators and consumers on the Youtube platform.',
    languages: [
      languagesInfo.react,
      languagesInfo.node,
      languagesInfo.sql,
    ],
    repository: 'https://github.com/forjoa/video-net',
  },
  {
    image: CodeMatch,
    title: 'Codematch',
    description:
      'My final degree project, a website where developers can showcase their work, and users can contact them directly. It is still under construction.',
    languages: [
      languagesInfo.react,
      languagesInfo.node,
      languagesInfo.sql,
    ],
    repository: 'https://github.com/forjoa/webs4u/tree/main/frontend',
  },
  {
    image: Dictionary,
    title: 'Programming Dictionary',
    description:
      'A dictionary, with included search, that contains (not yet) all programming terms alphabetically ordered.',
    languages: [
      languagesInfo.react,
      languagesInfo.css,
    ],
    repository: 'https://dictionary-cyan-eight.vercel.app/',
  },
  {
    image: FastTranslation,
    title: 'Fast Translation',
    description:
      'A translator with language detector using the Google Cloud Translation API to simplify the translation task.',
    languages: [
      languagesInfo.react,
      languagesInfo.ts,
    ],
    repository: 'https://fast-translation-rose.vercel.app/',
  },
  {
    image: ToDo,
    title: 'To-Do List Web',
    description:
      'Web app made with React.js, Node.js, and SQL. Created to store tasks with statuses like "Completed" and "Not completed".',
    languages: [
      languagesInfo.node,
      languagesInfo.react,
      languagesInfo.sql,
    ],
    repository: 'https://github.com/forjoa/to-do-list',
  },
  {
    image: Marvel,
    title: 'Marvel Characters',
    description:
      'Web with all the information about Marvel characters, using the API that Marvel provides to developers. It includes pagination and a search feature.',
    languages: [
      languagesInfo.react,
    ],
    repository: 'https://github.com/forjoa/marvel',
  },
  {
    image: ECommerce,
    title: 'E-Commerce Template',
    description:
      'Template made based on PHP for any online store, with an interface to manage the store inventory and the database.',
    languages: [
      languagesInfo.html,
      languagesInfo.css,
      languagesInfo.js,
      languagesInfo.php,
      languagesInfo.sql,
    ],
    repository: 'https://github.com/forjoa/pekas',
  },
]

export default projects
