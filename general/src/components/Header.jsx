import pandaIcon from '../img/icons/panda-black-and-white-with-glasses.svg'

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <img src={pandaIcon} />
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/'>About</Link>
            </nav>
            <ul>
                <li><a href='https://www.github.com/forjoa'>GitHub</a></li>
                <li><a href='#'>Resume</a></li>
            </ul>
        </header>
    )
}

export default Header