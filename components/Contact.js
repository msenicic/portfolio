import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="text">
                    <h3>Contact</h3>
                    <h1>You can email me or call me!</h1>
                </div>
                <div className="contact-details">
                    <div className="wrapper">
                        <div className="image">
                            <FontAwesomeIcon icon={faEnvelope} size="2xl"/>
                        </div>
                        <div className="details">
                            <h4>Mail</h4>
                            <Link href="mailto:markosenicic22@gmail.com" target='_blank'>markosenicic22@gmail.com</Link>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="image">
                            <FontAwesomeIcon icon={faPhone} size="2xl"/>
                        </div>
                        <div className="details">
                            <h4>Tel</h4>
                            <Link href="tel:+381648742828" target='_blank'>+381648742828</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}