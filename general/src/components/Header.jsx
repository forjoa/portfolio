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
            <img src={pandaIcon} className='panda-icon'/>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/'>About</Link>
            </nav>
            <ul className='header-list'>
                <li><a href='https://www.github.com/forjoa'>GitHub <IconArrowUpRight size={20}/></a></li>
                <li><a href='#'>Resume <IconArrowUpRight size={20}/></a></li>
            </ul> 
        </header>
    )
}

export default Header