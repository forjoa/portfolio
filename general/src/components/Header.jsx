// images
import pandaIcon from '../img/icons/panda-black-and-white-with-glasses.svg'

// icons 
import { IconAt } from '@tabler/icons-react'
import { IconArrowUpRight } from '@tabler/icons-react'

// components
import { Link } from 'react-router-dom'

// styles
import '../styles/Header.css'

// react imports
import { useState } from 'react'

const Header = () => {
    const [ulOpen, setUlOpen] = useState(false)

    return (
        <header>
            <Link to='/' className='panda-icon-a'><img src={pandaIcon} className='panda-icon' /><span>Joaquin</span></Link>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </nav>
            <div className={`header-list ${ulOpen ? 'open' : 'closed'}`} >
                <div className="at" onClick={e => setUlOpen(!ulOpen)} style={{ display: 'none' }}><IconAt /></div>
                <ul>
                    <li><a href='https://www.github.com/forjoa' target='_blank'>GitHub <IconArrowUpRight size={20} /></a></li>
                    <li><a href='#' target='_blank'>Resume <IconArrowUpRight size={20} /></a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header