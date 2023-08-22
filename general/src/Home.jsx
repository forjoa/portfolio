import './styles/home.css'
import { useRef } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'
import Projects from './Projects'

const Home = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

    const sentence = "Y soy desarrollador web".split("")

    const hover = {
        scale: 1.2,
        color: '#465E73',
        cursor: 'pointer'
    }

    return (
        <>
            <div ref={ref} className="general-home">

                <motion.div className='title container' style={{ y: textY }}>
                    <h2 className="title name">
                        Hola, mi nombre es Joaquin
                    </h2>
                    <div className='title im'>
                        {sentence.map((letter, index) => {
                            return (
                                <motion.span whileHover={hover} key={index}>
                                    {letter}
                                </motion.span>
                            )
                        })}
                    </div>
                </motion.div>

                <div className="full-img" style={{ y: backgroundY }}></div>
                <div className="img"></div>
            </div>
            <Projects />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam reprehenderit illo saepe, praesentium deserunt sed sequi. Magnam saepe, aspernatur tempora minus dolor aliquam nihil vitae minima consequatur nam. Nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam reprehenderit illo saepe, praesentium deserunt sed sequi. Magnam saepe, aspernatur tempora minus dolor aliquam nihil vitae minima consequatur nam. Nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam reprehenderit illo saepe, praesentium deserunt sed sequi. Magnam saepe, aspernatur tempora minus dolor aliquam nihil vitae minima consequatur nam. Nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam reprehenderit illo saepe, praesentium deserunt sed sequi. Magnam saepe, aspernatur tempora minus dolor aliquam nihil vitae minima consequatur nam. Nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam reprehenderit illo saepe, praesentium deserunt sed sequi. Magnam saepe, aspernatur tempora minus dolor aliquam nihil vitae minima consequatur nam. Nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam reprehenderit illo saepe, praesentium deserunt sed sequi. Magnam saepe, aspernatur tempora minus dolor aliquam nihil vitae minima consequatur nam. Nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam reprehenderit illo saepe, praesentium deserunt sed sequi. Magnam saepe, aspernatur tempora minus dolor aliquam nihil vitae minima consequatur nam. Nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam reprehenderit illo saepe, praesentium deserunt sed sequi. Magnam saepe, aspernatur tempora minus dolor aliquam nihil vitae minima consequatur nam. Nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam reprehenderit illo saepe, praesentium deserunt sed sequi. Magnam saepe, aspernatur tempora minus dolor aliquam nihil vitae minima consequatur nam. Nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam reprehenderit illo saepe, praesentium deserunt sed sequi. Magnam saepe, aspernatur tempora minus dolor aliquam nihil vitae minima consequatur nam. Nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam reprehenderit illo saepe, praesentium deserunt sed sequi. Magnam saepe, aspernatur tempora minus dolor aliquam nihil vitae minima consequatur nam. Nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam reprehenderit illo saepe, praesentium deserunt sed sequi. Magnam saepe, aspernatur tempora minus dolor aliquam nihil vitae minima consequatur nam. Nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam reprehenderit illo saepe, praesentium deserunt sed sequi. Magnam saepe, aspernatur tempora minus dolor aliquam nihil vitae minima consequatur nam. Nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam reprehenderit illo saepe, praesentium deserunt sed sequi. Magnam saepe, aspernatur tempora minus dolor aliquam nihil vitae minima consequatur nam. Nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam reprehenderit illo saepe, praesentium deserunt sed sequi. Magnam saepe, aspernatur tempora minus dolor aliquam nihil vitae minima consequatur nam. Nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam reprehenderit illo saepe, praesentium deserunt sed sequi. Magnam saepe, aspernatur tempora minus dolor aliquam nihil vitae minima consequatur nam. Nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam reprehenderit illo saepe, praesentium deserunt sed sequi. Magnam saepe, aspernatur tempora minus dolor aliquam nihil vitae minima consequatur nam. Nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam reprehenderit illo saepe, praesentium deserunt sed sequi. Magnam saepe, aspernatur tempora minus dolor aliquam nihil vitae minima consequatur nam. Nostrum.</p>
                        
        </>
    )
}

export default Home