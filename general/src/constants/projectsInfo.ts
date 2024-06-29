// portraits
import Dictionary from '../img/projects/dictionary.png'
import CodeMatch from '../img/projects/codematch.png'
import FastTranslation from '../img/projects/fast-translation.png'
import VideoNet from '../img/projects/video-net.png'
import Dashboard from '../img/projects/dashboard-next.png'
import ECommerceNext from '../img/projects/e-commerce-next.png'
import Noted from '../img/projects/noted.png'
import Talk from '../img/projects/talk.png'

// languages
import languagesInfo from './languagesInfo.ts'

const projects: PorjectI[] = [
  {
    image: Talk,
    title: 'Talk',
    description:
      'Your new favorite Next.js chat aplication, it works by managing users with a unique username and individual conversations. It uses Next.js, Tailwind, Socket.io and Turso DB.',
    languages: [languagesInfo.next],
    repository: 'https://talk-axvc.onrender.com/',
  },
  {
    image: ECommerceNext,
    title: 'E-commerce',
    description:
      'Fully customizable online store with full control over products and orders.',
    languages: [languagesInfo.next, languagesInfo.ts, languagesInfo.supabase],
    repository: 'https://github.com/forjoa/inventory-control',
  },
  {
    image: Dashboard,
    title: 'Dashboard',
    description:
      'Dashboard to control the inventory of our e-commerce where we can also see the orders we have, their status, our customers, and store analytics.',
    languages: [languagesInfo.next, languagesInfo.ts, languagesInfo.supabase],
    repository: 'https://github.com/forjoa/inventory-control',
  },
  {
    image: VideoNet,
    title: 'VideoNet',
    description:
      'Exclusive social network for content creators and consumers on the Youtube platform.',
    languages: [languagesInfo.react, languagesInfo.node, languagesInfo.sql],
    repository: 'https://github.com/forjoa/video-net',
  },
  {
    image: CodeMatch,
    title: 'Codematch',
    description:
      'My final degree project, a website where developers can showcase their work, and users can contact them directly. It is still under construction.',
    languages: [languagesInfo.react, languagesInfo.node, languagesInfo.sql],
    repository: 'https://github.com/forjoa/webs4u/tree/main/frontend',
  },
  {
    image: Noted,
    title: 'Noted',
    description:
      'Minimalist notes aplication, it does not need to use a database cause it use local storage to save all notes.',
    languages: [languagesInfo.react, languagesInfo.ts],
    repository: 'https://noted-blue.vercel.app/',
  },
  {
    image: Dictionary,
    title: 'Programming Dictionary',
    description:
      'A dictionary, with included search, that contains (not yet) all programming terms alphabetically ordered.',
    languages: [languagesInfo.react, languagesInfo.css],
    repository: 'https://dictionary-cyan-eight.vercel.app/',
  },
  {
    image: FastTranslation,
    title: 'Fast Translation',
    description:
      'A translator with language detector using the Google Cloud Translation API to simplify the translation task.',
    languages: [languagesInfo.react, languagesInfo.ts],
    repository: 'https://fast-translation-rose.vercel.app/',
  }
]

export default projects
