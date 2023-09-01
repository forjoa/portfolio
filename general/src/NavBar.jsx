import { Link } from 'react-router-dom'
import Me from './img/profile_photo.jpg'
import './styles/navbar.css'
import AOS from 'aos'
import { useEffect } from 'react'

const NavBar = () => {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <header className='header'>
            <nav className='navbar' data-aos="zoom-in-down">
                <div className='navbar-content'>
                    <img
                        src={Me}
                        className='me'
                        alt='this is me'
                    />
                    <ul className='list'>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/about">Sobre mí</Link>
                        </li>
                        <li>
                            <Link to="/notes">Notas</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}


export default NavBar