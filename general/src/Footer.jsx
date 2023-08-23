import './styles/footer.css'
import linkedinIcon from './img/icons/linkedin.svg'
import githubIcon from './img/icons/github.svg'
import instagramIcon from './img/icons/instagram.svg'

const Footer = () => {
    return (
        <footer>
            <a className='footer-link' 
                href='https://www.linkedin.com/in/joaquin-trujillo-851547254/'
                target='_blank'
            >
                LinkedIn
                <br />
                <img src={linkedinIcon} />
            </a>
            <a className='footer-link' 
                href='https://github.com/forjoa'
                target='_blank'
            >
                GitHub
                <br />
                <img src={githubIcon} />
            </a>
            <a className='footer-link' 
                href='https://www.instagram.com/loveujoa/'
                target='_blank'
            >
                Instagram
                <br />
                <img src={instagramIcon} />
            </a>
        </footer>
    )
}

export default Footer