import pandaIcon from '../img/icons/panda-black-and-white-with-glasses.svg'

import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <header>
            <img src={pandaIcon} />
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/'>About</Link>
            </nav>
            <ul>
                <li>GitHub</li>
                <li>Resume</li>
            </ul>
        </header>
    )
}

export default Home