// components
import Header from './Header.jsx'

// styles
import '../styles/Home.css'

const Home = () => {
    return (
        <>
            <Header />
            <div className="consola">
                <div className="consola-content">
                    <h1>I make websites </h1>
                </div>
                <div class="controller">
                    <div class="d-pad">
                        <div class="button up"></div>
                        <div class="button left"></div>
                        <div class="button right"></div>
                        <div class="button down"></div>
                    </div>
                    <div class="action-buttons">
                        <div class="button triangle"></div>
                        <div class="button circle"></div>
                        <div class="button x"></div>
                        <div class="button square"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home