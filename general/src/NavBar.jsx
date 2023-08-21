import { Link } from 'react-router-dom'
import Me from './img/profile_photo.jpg'
import './styles/navbar.css'

const NavBar = () => {
    return (
        <nav className='navbar'>
            <img 
                src={Me} 
                className='me'
                alt='this is me'
            />
            <ul className='list'>
                <li>
                    <Link to="/home">Inicio</Link>
                </li>
                <li>
                    <Link to="/about">Sobre mí</Link>
                </li>
                <li>
                    <Link to="/notes">Notas</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar