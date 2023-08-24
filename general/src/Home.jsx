import './styles/home.css'
import { useRef } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'
import Projects from './Projects'
import Footer from './Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        AOS.init()
    }, [])

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
            <div ref={ref} className="general-home" data-aos="zoom-in-down">

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

                <div className="full-img" style={{ y: backgroundY }} data-aos="zoom-in-down"></div>
                <div className="img" data-aos="zoom-in-down"></div>
            </div>
            <Projects />
            <Footer />
        </>
    )
}

export default Home