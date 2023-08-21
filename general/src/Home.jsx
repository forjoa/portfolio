import './styles/home.css'
import { useRef } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'
import NavBar from './NavBar.jsx'

const Home = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

    const sentence = 'Y soy desarrollador web'.split("")

    

    return (
        <>
            <div
                ref={ref}
                className="general-home"
            >
                <NavBar />

                <motion.div className='title container' style={{ y: textY }}>
                    <h2
                        className="title name"
                    >
                        Hola, mi nombre es Joaquin
                    </h2>
                    <h1
                        className='title im'
                    >
                        {sentence.map((letter, index) => {
                            return (
                                <motion.span whileHover={{ scale: 1.2, color: '#123159', cursor: 'pointer' }} key={index}>
                                    {letter}
                                </motion.span>
                            )
                        })}
                    </h1>
                </motion.div>  

                <div className="full-img" style={{ y: backgroundY }}></div>
                <div className="img"></div>
            </div>

        </>
    )
}

export default Home