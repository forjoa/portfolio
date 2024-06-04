// images
import pandaIcon from '../img/icons/panda-black-and-white-with-glasses.svg'

// icons
import { IconBrandInstagram, IconBrandX, IconBrandLinkedin, IconMail, IconCopyright, IconHeart } from '@tabler/icons-react'

// styles
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="f-container">
                <img src={pandaIcon} alt='panda-icon'/>
                <ul>
                    Social Media:
                    <li><a href='https://www.instagram.com/loveujoa/' target='_blank'><IconBrandInstagram /></a></li>
                    <li><a href='https://twitter.com/loveujoa' target='_blank'><IconBrandX /></a></li>
                    <li><a href='https://www.linkedin.com/in/joaquin-trujillo-851547254/' target='_blank'><IconBrandLinkedin /></a></li>
                    <li><a href='mailto:joaquin_trujillo@icloud.com' target='_blank'><IconMail /></a></li>
                </ul>
            </div>
            <div className="s-container">
                <p><IconCopyright />All rights reserved to Joaquin Trujillo</p>
                <span>Made with love and dedication <IconHeart color='red'/></span>
            </div>
        </footer>
    )
}

export default Footer