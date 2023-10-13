// images
import pandaIcon from '../img/icons/panda-black-and-white-with-glasses.svg'

// components
import { Link } from 'react-router-dom'
import { IconArrowUpRight } from '@tabler/icons-react'

// styles
import '../styles/Header.css'

const Header = () => {
    return (
        <header>
            <Link to='/' className='panda-icon-a'><img src={pandaIcon} className='panda-icon' /></Link>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </nav>
            <ul className='header-list'>
                <li><a href='https://www.github.com/forjoa' target='_blank'>GitHub <IconArrowUpRight size={20} /></a></li>
                <li><a href='#' target='_blank'>Resume <IconArrowUpRight size={20} /></a></li>
            </ul>
        </header>
    )
}

export default Header