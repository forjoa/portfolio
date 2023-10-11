import pandaIcon from '../img/icons/panda-black-and-white-with-glasses.svg'

const Home = () => {
    return (
        <header>
            <img src={pandaIcon} />
            <nav>
                <a>Home</a>
                <a>About</a>
            </nav>
            <ul>
                <li>GitHub</li>
                <li>Resume</li>
            </ul>
        </header>
    )
}

export default Home