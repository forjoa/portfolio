// components
import Header from './Header.tsx'
import Console from './Console.tsx'
import Projects from './Projects.tsx'
import Footer from './Footer.tsx'

// styles
import '../styles/Home.css'

const Home = () => {
    return (
        <>
            <Header />
            <Console />
            <Projects />
            <Footer />
        </>
    )
}

export default Home