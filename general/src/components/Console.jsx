// icons
import { IconArrowBigDownFilled, IconArrowBigLeftFilled, IconArrowBigRightFilled, IconArrowBigUpFilled, IconTriangle, IconSquare, IconCircle, IconX, IconArrowDown } from '@tabler/icons-react'

// languages
import css from '../img/carrousel/css3.svg'
import html from '../img/carrousel/html5.svg'
import js from '../img/carrousel/javascript.svg'
import typescript from '../img/carrousel/typescript.svg'
import react from '../img/carrousel/react.svg'
import node from '../img/carrousel/nodedotjs.svg'
import express from '../img/carrousel/express.svg'
import tailwind from '../img/carrousel/tailwindcss.svg'
import mysql from '../img/carrousel/mysql.svg'
import postgre from '../img/carrousel/postgresql.svg'
import next from '../img/carrousel/nextdotjs.svg'
import supabase from '../img/carrousel/supabase.svg'

// imports 
import ScrollCarousel from 'scroll-carousel-react'

const Console = () => {

    return (
        <div className="consola">
            <div className="consola-content">
                <h1>I make web applications, <br />web design & <span className='retro'>retro</span> || <span className='modern'>modern</span> style</h1>
                <ScrollCarousel autoplay speed={1} margin={50}>
                    <div>
                        <img src={html} alt="Imagen 2" />
                    </div>
                    <div>
                        <img src={css} alt="Imagen 3" />
                    </div>
                    <div>
                        <img src={js} alt="Imagen 3" />
                    </div>
                    <div>
                        <img src={typescript} alt="Imagen 3" />
                    </div>
                    <div>
                        <img src={react} alt="Imagen 1" />
                    </div>
                    <div>
                        <img src={next} alt="Imagen 3" />
                    </div>
                    <div>
                        <img src={node} alt="Imagen 3" />
                    </div>
                    <div>
                        <img src={express} alt="Imagen 3" />
                    </div>
                    <div>
                        <img src={tailwind} alt="Imagen 3" />
                    </div>
                    <div>
                        <img src={supabase} alt="Imagen 3" />
                    </div>
                    <div>
                        <img src={mysql} alt="Imagen 3" />
                    </div>
                    <div>
                        <img src={postgre} alt="Imagen 3" />
                    </div>
                </ScrollCarousel>
            </div>
            <div className="controller">
                <section className="layout">
                    <div className="top"><IconArrowBigUpFilled /></div>
                    <div className="left"><IconArrowBigLeftFilled /></div>
                    <div className="right"><IconArrowBigRightFilled /></div>
                    <div className="down"><IconArrowBigDownFilled /></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
                <section className="layout">
                    <div className="top triangle"><IconTriangle /></div>
                    <div className="left square"><IconSquare /></div>
                    <div className="right circle"><IconCircle /></div>
                    <div className="down x"><IconX /></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
            </div>
            <div className="continue">
                <IconArrowDown size={48} />
            </div>
        </div>
    )
}

export default Console