// portraits
import ToDo from '../img/projects/to-do-list.png'
import TipCalculator from '../img/projects/tip-calculator.png'
import Dictionary from '../img/projects/dictionary.png'
import CodeMatch from '../img/projects/codematch.png'
import Marvel from '../img/projects/marvel.png'
import ECommerce from '../img/projects/e-commerce.png'
import FastTranslation from '../img/projects/fast-translation.png'

// languages
import languagesInfo from './languagesInfo.js'

const projects = [
    {
        image: CodeMatch,
        title: 'Codematch',
        description: 'Mi trabajo final de grado, un sitio web donde los desarrolladores puedan mostrar sus trabajos, y los usuarios puedan contactar con ellos directamente. Aún se encuentra en construcción.',
        languages: {
            react: languagesInfo.react,
            node: languagesInfo.node,
            sql: languagesInfo.sql,
        },
        // repository: 'https://github.com/forjoa/webs4u/tree/main/frontend'
    },
    {
        image: Dictionary,
        title: 'Programming Dictionary',
        description: 'Un diccionario, con buscador incluido, que contiene (aún no) todos los terminos de programación ordenados alfabeticamente.',
        languages: {
            react: languagesInfo.react,
            css: languagesInfo.css
        },
        repository: 'https://dictionary-cyan-eight.vercel.app/'
    },
    {
        image: FastTranslation,
        title: 'Fast Translation',
        description: 'Un traductor con detector de idioma usando la API de Google Cloud Translation para simplificar la tarea de traducción',
        languages: {
            react: languagesInfo.react,
            ts: languagesInfo.ts
        },
        repository: 'https://fast-translation-rose.vercel.app/'
    },
    {
        image: ToDo,
        title: 'To-Do List Web',
        description: 'Web app hecha con React.js, Node.js y SQL. Realizada para almacenar tareas con estados como "Completada" y "No completada".',
        languages: {
            node: languagesInfo.node,
            react: languagesInfo.react,
            sql: languagesInfo.sql,
        },
        repository: 'https://github.com/forjoa/to-do-list'
    },
    {
        image: Marvel,
        title: 'Marvel Characters',
        description: 'Web con toda la informacion de los personajes de Marvel, usando la API que Marvel brinda a los desarrolladores. Cuenta con una paginación y un buscador incluido.',
        languages: {
            react: languagesInfo.react
        },
        repository: 'https://github.com/forjoa/marvel'
    },
    {
        image: ECommerce,
        title: 'Plantilla E-Commerce',
        description: 'Plantilla hecha a base de PHP realizada para cualquier comercio online, con una interfaz en la que se puede manejar el inventario de la tienda y la base de datos.',
        languages: {
            html: languagesInfo.html,
            css: languagesInfo.css,
            js: languagesInfo.js,
            php: languagesInfo.php,
            sql: languagesInfo.sql
        },
        repository: 'https://github.com/forjoa/pekas'
    },
]

export default projects
