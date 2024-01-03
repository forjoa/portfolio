// icons
import { IconArrowBigDownFilled, IconArrowBigLeftFilled, IconArrowBigRightFilled, IconArrowBigUpFilled, IconTriangle, IconSquare, IconCircle, IconX, IconArrowDown } from '@tabler/icons-react'

// languages
import react from '../img/carrousel/react.png'
import css from '../img/carrousel/css-3.png'
import html from '../img/carrousel/html-5.png'
import js from '../img/carrousel/js.png'
import node from '../img/carrousel/node.png'
import php from '../img/carrousel/php.png'
import sql from '../img/carrousel/sql.png'
import typescript from '../img/carrousel/typescript.png'

// imports 
import ScrollCarousel from 'scroll-carousel-react'

const Console = () => {

    return (
        <div className="consola">
            <div className="consola-content">
                <h1>I make web applications, <br />web design & <span className='retro'>retro</span> || <span className='modern'>modern</span> style</h1>
                <ScrollCarousel autoplay speed={1}>
                    <div>
                        <img src={react} alt="Imagen 1" />
                    </div>
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
                        <img src={node} alt="Imagen 3" />
                    </div>
                    <div>
                        <img src={php} alt="Imagen 3" />
                    </div>
                    <div>
                        <img src={sql} alt="Imagen 3" />
                    </div>
                    <div>
                        <img src={typescript} alt="Imagen 3" />
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