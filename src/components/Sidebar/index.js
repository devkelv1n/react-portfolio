import { NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className='nav-bar'>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact="true" activeclassname="active" to="/react-portfolio/" onClick={() => setShowNav(false)}> 
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/react-portfolio/about" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/react-portfolio/contact" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
                <FontAwesomeIcon 
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#80ffdb"
                    size="3x"
                    className='close-icon' />
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/kelvin-wong-501271137">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/devkelv1n">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon 
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#80ffdb"
                size="3x"
                className='hamburger-icon' />
        </div>
    )
} 


export default Sidebar