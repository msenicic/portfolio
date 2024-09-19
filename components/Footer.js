import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className="details">
                    <p><FontAwesomeIcon icon={faCalendar} />19.10.2002</p>
                    <Link href="https://goo.gl/maps/Hyyjd9KG2NajCmtS8" target='_blank'><FontAwesomeIcon icon={faLocationDot} />Kraljevo, Serbia</Link>
                </div>
                <p className='name'>Created by <span>Marko Senicic</span> | All rights reserved!</p>
                <div className="details reversed">
                    <Link href="https://github.com/msenicic" target='_blank'><FontAwesomeIcon icon={faGithub} />Github</Link>
                    <Link href="https://linkedin.com/in/marko-senicic-9554392ba" target='_blank'><FontAwesomeIcon icon={faLinkedin} />LinkedIn</Link>
                </div>
            </div>
        </footer>
    )
}