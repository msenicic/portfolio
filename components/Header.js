'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faXmark, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { trueHeight } from '@/helpers/trueHeight';

export default function Header() {
    const [active, setActive] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const headerRef = useRef(null);
    const vh = trueHeight();

    const navActive = () =>{
        setActive((prev) => !prev);
    }

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        const hashLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
    
        hashLinks.forEach(link => {
          link.addEventListener('click', e => {
            const target = document.getElementById(e.target.hash.slice(1));
    
            if (target) {
              e.preventDefault();
              window.scrollTo(0,target.offsetTop - headerRef.current.offsetHeight)
            }
          });
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);

            hashLinks.forEach(link => {
                link.removeEventListener('click');
            });
        };
    }, []);

    return (
        <header ref={headerRef} className={scrollPosition > 0 ? 'active' : null}>
            <div className="container">
                <div className="logo">
                    {active ? (<Link onClick={navActive} href="/"><FontAwesomeIcon icon={faCode} size='lg' /><span>MSenicic</span></Link>) 
                            : (<Link href="/"><FontAwesomeIcon icon={faCode} size='lg' /><span>MSenicic</span></Link>)}
                </div>
                <nav className={active ? "active" : null}>
                    <ul>
                        <li><Link onClick={navActive} href="#home">Home</Link></li>
                        <li><Link onClick={navActive} href="#about">About</Link></li>
                        <li><Link onClick={navActive} href="#projects">Projects</Link></li>
                        <li><Link onClick={navActive} href="#contact">Contact</Link></li>
                    </ul>
                    <FontAwesomeIcon onClick={navActive} icon={faXmark} size='3x'/>
                </nav>
                <div className="button" onClick={navActive}>
                    <FontAwesomeIcon icon={faBarsStaggered} size='lg' />
                </div>
            </div>
        </header>
    )
}