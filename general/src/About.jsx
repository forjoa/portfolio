import './styles/about.css'
import AOS from 'aos'
import { useEffect } from 'react'
import Footer from './Footer.jsx'

// my photos
import meOne from './img/me/me-1.jpeg'
import meTwo from './img/me/me-2.jpeg'
import meThree from './img/me/me-3.jpeg'
import meFour from './img/me/me-4.jpeg'

// languages icons
import java from './img/java.png'
import js from './img/js.png'
import react from './img/react.png'
import node from './img/node.png'

// studied
import ccc from './img/ccc.svg'
import udemy from './img/udemy.png'
import yt from './img/yt.jpg'
import chatgpt from './img/chatgpt.png'

const About = () => {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
            <main className="main-about" data-aos="zoom-in-down">
                <section className="section-about" data-aos="zoom-in-down">
                    <div className="about-content">
                        <h1 className="about-title">¿Quién soy?</h1>
                        <p className="about-text">
                            Soy programador full stack, pero la palabra que mejor me caracteriza es 'autodidacta',
                            cuando me gusta algo, no paro de aprender sobre eso y en este caso, es la programación.
                            Podría decir que soy un apasionado por la tecnología pero realmente soy curioso, curioso
                            por saber cuáles son los límites de cada cosa que se puede programar o de cada cosa que
                            se puede crear.
                        </p>
                    </div>
                    <div className="about-images">
                        <img src={meOne} />
                        <img src={meTwo} />
                        <img src={meThree} />
                        <img src={meFour} />
                    </div>
                </section>
                <section className="section-preference" data-aos="zoom-in-down">
                    <div className="about-content">
                        <h1 className="about-title">?Qué prefiero¿</h1>
                        <p className="about-text">
                            Todo, o la gran mayoría de cosas que he aprendido en el ámbito de la programación han sido
                            gracias a Java, empezando por la lógica de programación, tipos de variables, bucles y
                            estructuras de control. Sin embargo, luego de intentar nuevas cosas, casi todos mi proyectos
                            realizados, están hechos con React.js en el frontend y Node.js en la parte de backend
                        </p>
                    </div>
                    <div className="about-images">
                        <img src={js} />
                        <img src={java} />
                        <img src={node} />
                        <img src={react} />
                    </div>
                </section>
                <section className='learning' data-aos="zoom-in-down">
                    <div className="about-content">
                        <h1 className="about-title">¿Cómo aprendí?</h1>
                        <p className="about-text">
                            Mis inicios como programador se dieron por la FP de Desarrollo de Aplicaciones Web, iniciando en 2022,
                            con el lenguaje de enseñanza siendo Java, además de los principios básicos de HTML y CSS. Luego, por 
                            mis ansías de aprender, continué con cursos en Udemy más a fondo. Cada cosa que necesito o me gustaría 
                            aprender, las encuentro en YouTube; y en caso de ser una duda extrema, siempre está bien consultar a 
                            ChatGPT.
                        </p>
                    </div>
                    <div className="about-images">
                        <img src={ccc} />
                        <img src={udemy} />
                        <img src={yt} />
                        <img src={chatgpt} />
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default About 