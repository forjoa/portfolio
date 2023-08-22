// portraits
import ToDo from '../img/projects/to-do-list.png'
import TipCalculator from '../img/projects/tip-calculator.png'

// languages
import languagesInfo from './languagesInfo.js'

const projects = [
    {
        image: ToDo,
        title: 'To-Do List Web',
        description: 'Web app hecha con React.js, Node.js y SQL. Realizada para almacenar tareas con estados como "Completada" y "No completada".',
        languages: {
            node: languagesInfo.node,
            react: languagesInfo.react,
            sql: languagesInfo.sql,
        },
    },
    {
        image: TipCalculator,
        title: 'Tip Calculator',
        description: 'Calculador de propinas en base a la cuenta total y al número de personas que pagarán, además se le agrega el procentaje respecto al total.',
        languages: {
            html: languagesInfo.html,
            css: languagesInfo.css,
            js: languagesInfo.js,
        }
    }
]

export default projects
