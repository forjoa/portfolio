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
        scale: 1.5,
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
                        {sentence.map((letter, index) => (
                            <motion.span
                                whileHover={hover}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                onClick={() => console.log('enter')}
                                key={index}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                <div className="full-img" style={{ y: backgroundY }}></div>
                <div className="img"></div>
            </div>
            <Projects />
        </>
    )
}

export default Home