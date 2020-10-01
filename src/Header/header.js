import React, {useEffect, useState} from "react";
import './header.css';
import {Link, withRouter} from 'react-router-dom';


const Navigation = (props) => {
    //const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [route, setRoute] = useState('');

    useEffect(() => {
        setRoute(props.location.pathname);
    }, [props.location]);

    /*useEffect(() => {
        return ((!typeof window !=== 'object'));

        const handleResize = () => {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);*/

       function toggleNav() {
            const mainNav = document.getElementsByClassName("main-nav")[0];

            mainNav.classList.toggle("nav-open");
        }


    const showNav = () => {
        return (
            <header className="App-header">

                <Link to="/" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 361.67 184.08" className="logo">
                        <path d="M65,102.58s8.77,6.84,11.62,11c9.08,13.12,13,24.3,5.64,41.15-8.11,18.46-30.53,21.77-44.11,16.25C28,166.8,23.49,153.25,26.5,139.67c2.88-13,9.11-24,17.76-34.22-9.11-5.36-17.36-9.24-24.9-16.61-8.19-8-15.1-21.24-9.55-35.27,5.9-14.92,19.31-24.77,36.43-27.41,4.25-.66,11.65-.24,16,3.71a21.87,21.87,0,0,1,6.21,8.49c.93,2.53,1.76,5.16-2.18,7.81-1.8,1.22-4.94,1.1-5.74-.47-6.89-13.49-21.71-6.72-31.91,5-8.52,9.78-6.12,20.64,3,29.74,5.72,5.69,21.06,15.1,21.06,15.1a22.17,22.17,0,0,1,2.21-2.73c7.83-8.37,14.24-16.3,22.45-24.31,1.52-1.49,2.94-3.71,5.82-2.25,2.67,1.35,2.87,3.51,3,6.2.51,10.81,1.6,18.29,1.43,29.89,0,3-1.3,5.24-5,5s-6-2.5-6-5.59c-.1-3.88-.54-4.74-.91-9.6Zm8.08,35.91c-2.06-17.61-17.17-25.42-17.17-25.42s-21.85,22.66-16.51,40.69c1.72,5.79,8.24,8,15.53,6.47C66.18,157.86,73.31,152.11,73.11,138.49Z"/><path d="M116.19,59c3.19-4.91,8.52-14.09,11.55-18.52,1.42-2.09,3.24-4.13,6.12-3.55,3.34.68,3.55,2.44,4,4.78.41,2,.06,7.53.06,7.53,4.93-6.52,10-11.3,18.89-8.52,2.83.89,4.26,12.7-1.08,12.71C145,53.49,138,61.05,138,71.88c0,4.8.09,10.08.31,14.87.11,2.41-1,5.66-5.77,5.27-2.11-.17-3.44-2.42-3.5-4.09-.38-11.06.21-29,0-32.3C124.72,63.14,116.19,74,116.19,74s.4,18.11-.48,24.71a12.06,12.06,0,0,1-12.16,10.93c-8.44-.55-12.12-8.11-11.67-15.54.42-7,9.23-17.33,15.29-23.6,0,0,.21-2.36-.25-2.06a12.45,12.45,0,0,1-4.46,1.45c-15.91,1-18.84-17.65-12.94-30.3,2.61-5.6,11.52-8.23,17.6-6.4,7.32,2.22,8.11,7.26,9.14,13.81C116.61,49.23,116.19,59,116.19,59Zm-15.47,1.64c4.25.55,6.77-2.17,7-6,.08-1.2,0-4.91,0-6.08.06-4-3.79-5.28-6.27-5-4.63.46-6.16,4.08-6,8.36S96.43,60.12,100.72,60.67Zm7,22s-6.17,7.22-6.85,10.91-.09,5.14,1.13,6.42c1.6,1.68,4.92-.13,5.41-2.12C108.65,92.89,107.8,83.2,107.75,82.63Z"/><path d="M129.82,144.53c-5.47-6.78-6.95-14.57-2.39-23.09a12.72,12.72,0,0,1,16.73-5.87c5.3,2.25,8.32,7.47,7.7,14-.11,6.2-2.84,9.57-7,14.35-.62.73-2.1,2.21-2.1,2.21a15.25,15.25,0,0,0,2.56,2.09c3.93,2.41,8,3.37,11.29,1.71,4.41-2.25,5.69-6.21,5.59-12.56a31,31,0,0,0-8.42-21c-2.26-2.4-3-4.92-.11-6.88s4.7-3.9,9.13.08c6.83,6.1,11.16,19.8,9.06,31.9-2.36,13.61-10.2,18.37-21.47,17.32-7-.65-14.26-7.45-14.26-7.45a27.07,27.07,0,0,1-2.49,2.11c-9.91,6.47-17.4,3.36-25.34-3.67a46.26,46.26,0,0,1-3.62-4s-2.32,2.51-4.68,5.66c-1.37,1.83-3.7,2.37-6.26,1.06-2.19-1.12-2.4-3.86-1.23-6A86.29,86.29,0,0,1,99,137.37s-1.71-2.68-3.2-4.9c-2-2.9-5.15-8.39-7-11.38-2.78-4.42-1.81-7.46,1.46-9.4,3.59-2.13,5.26,1.64,8.64,6.86,2.7,4.19,4.57,7.52,6.7,11.09,0,0,0-.36,2.93-3.52,2.11-2.28,4.74-5.79,7.35-4.26,3.16,1.87,3.48,3.92.84,7.84,0,0-1.44,1.74-3.33,4.15-.87,1.13-2.86,3.59-2.86,3.59a35,35,0,0,0,2.49,2.82C118.57,145.79,122.19,148.86,129.82,144.53Zm6.91-4.72c3.82-3.61,6.79-7.6,5.81-12.59a4.22,4.22,0,0,0-5-3.09c-2.15.43-4.09,3.8-4.12,5.76C133.39,134.4,134.16,136.89,136.73,139.81Z"/><path d="M192.5,130.9c-4.21-1.75-6.35,5.29-6.48,9.08s.36,7.2-.7,10.8c-.84,2.86-2.8,3.84-5.36,3.77-3.2-.1-4.19-2.82-4-5.12.71-10.19-.27-20.36.39-30.54.25-4,2.37-4.47,5.81-4.47,4,0,4.41,2.18,4.36,5.19,0,2.06,0,4.13,0,6.5a13.2,13.2,0,0,1,5.15-5.58A8.42,8.42,0,0,1,203.15,125c2.27,5.22.88,12.55,1.23,17.93.39,6,3.7,7.19,7,7.34,3.7.16,8.6-1.75,10.6-9.49,1.67-6.49-.53-13.24-5.23-16.47-6-4.16-8.72-3.37-12.49-5.68-4.62-2.83-9.39-7.83-9.31-14.58.09-7.24,6-14.31,12.12-16.06,9.76-2.83,14.81.15,19.58,5,3.89,4,2.74,11.75-1.74,11.45-3.72-.24-3.53-1.9-6.53-4.47-3.48-3-7-3-10-.29a6.27,6.27,0,0,0-1.42,7c1.63,4.06,8.46,5.51,10.49,6.27,12.15,4.57,19.14,18.56,15.58,31-4.71,16-14.64,19.69-28,17.34-7.08-1.21-10.65-5.64-11-13.65C193.85,142.19,195.52,132.16,192.5,130.9Z"/><path d="M187.13,61.15c1.36-24-14.69-31.38-20.67-30.46-4.09.63-8.17,4.38-11.09,2.73-5.28-3-3-10,3-12.42a26.18,26.18,0,0,1,29.5,6.62c12.26,13.22,11.6,25.93,9.49,51-.71,8.48-7.36,13.61-12.2,15.46s-11,3-16.1-.21a15.42,15.42,0,0,1-7.51-14.79C162.91,66,173.39,57.75,187.13,61.15Zm-1.66,10.22c-1.62-1-12-1.71-13.51,6.83-.44,2.46-.11,5.76,2.5,6.69s4.78.8,7.55-1.86C185.47,79.7,185.47,71.37,185.47,71.37Z"/><path d="M281.71,149.76c-.3-4.83,3.31-10.11,5.62-14.27,3.95-7.1,22.2-32.07,27.81-38.09,1.41-1.52,3.44-4.39,6.12-2.47s4.11,4.52,1.75,7.51c-5.79,7.34-11.16,15-16.68,22.58-3.82,5.22-6.78,10.45-11.05,16.72-1.64,2.42-4.48,8.78-1.87,11.39,2.8,2.8,4.79.57,5.82-.49,1.3-1.34,3.06-2.71,4.31-4.1,2.56-2.83,4.66-1.56,6.83.59s3.11,4.38.18,6.74c-1.95,1.56-3.7,3.38-5.75,4.79-4.36,3-10.31,6.11-15.78,2.9S281.28,156.13,281.71,149.76Z"/><path d="M279.4,124.72c-10,0-15.36-6.63-15.27-18.67.1-13.11,7.32-21.6,18.92-21.52,7.49.06,15.53,4.49,15.53,19.31C298.58,119.41,290.2,124.75,279.4,124.72Zm10.05-18.27c.52-5.51-1.41-10.86-7.11-10.86-6.44,0-9.47,4.44-8.66,11.83.41,3.71,1.93,7.87,7.25,7.9S289.42,111.92,289.45,106.45Z"/><path d="M252.48,130.52c-2-9.84-4.12-21.44-6.25-31.27-.68-3.16-.15-5.87,3.3-6.49,2.52-.46,6.65.1,7.16,4.21,1.74,14.62,4.42,26.3,5.3,40.39.16,2.55.24,5.86-2.69,7.34a7,7,0,0,1-8.48-1c-4.44-4-8.63-9.81-12.17-14.94-2.24-3.25-4.63-7-6.78-10.32-1.85-2.85-1.88-6.23,1-8.46,3.46-2.68,5.52,1.46,7,3.33C244.08,118.6,252.13,130.68,252.48,130.52Z"/><path d="M147.5,74c.24-3.73-.13-7.47.31-11.18A4.24,4.24,0,0,1,152.34,59c6,0,5.49,9.39,5.4,12.43-.17,5.61-.19,9.79-.57,15.39-.15,2.27-1.6,4.41-3.89,4.52-2.13.11-4.11-.32-4.78-2.45C147,84,147.76,79,147.5,74Z"/><path d="M71.71,61.38C69.4,61.16,67.29,60.1,67.1,57c-.21-3.41,3.85-6.73,7.53-7.6,2.62-.63,5.36,1.37,5.45,4.92S76.58,61.5,71.71,61.38Z"/><path d="M161.78,46.84c.35-2.32,2.32-4.86,5.27-4.34A4.89,4.89,0,0,1,171,48.3a5.22,5.22,0,0,1-5.42,4.43C163,52.41,161.4,49.5,161.78,46.84Z"/><path d="M340.08,119.6c2.58-25.91-14.49-34.69-21-34-4.46.5-9.05,4.38-12.14,2.45-5.6-3.5-2.76-11,3.79-13.33a28.39,28.39,0,0,1,31.67,8.54c12.68,14.89,11.39,28.63,7.94,55.74-1.16,9.16-8.6,14.41-13.94,16.19s-12.05,2.7-17.44-1a16.74,16.74,0,0,1-7.46-16.38C313.6,123.75,325.34,115.28,340.08,119.6Zm-2.27,11c-1.71-1.13-12.91-2.41-15,6.78-.59,2.65-.39,6.23,2.4,7.36s5.15,1.09,8.27-1.67C337.43,139.63,337.81,130.61,337.81,130.61Z"/>
                    </svg>
                    {/*<img src={process.env.PUBLIC_URL + '/images/logo.svg'} className="logo" alt="Sigrid Stensvold" />*/}
                    <h2>designer <span className="ampersand">&</span> web developer</h2>
                </Link>

                <nav className="main-nav">
                    <i className="fas fa-hamburger menu-icon" onClick={toggleNav}></i>
                    <i className="fas fa-times close-icon" onClick={toggleNav}></i>
                    <ul>
                        <li>
                            <Link to="/" className={`${route === '/' ? 'main-nav-active-link portfolio-link' : 'portfolio-link'}`} onClick={toggleNav}>Portfolio</Link>
                            <ul>
                                <li>
                                    <Link to="/">Graphic Design</Link>
                                </li>

                                <li>
                                    <Link to="/portfolio">Illustration</Link>
                                </li>

                                <li>
                                    <Link to="/portfolio">Motion Design</Link>
                                </li>

                                <li>
                                    <Link to="/portfolio">Painting</Link>
                                </li>

                                <li>
                                    <Link to="/portfolio">Web Development</Link>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <Link to="/resume" className={`${route === '/resume' ? 'main-nav-active-link' : ''}`} onClick={toggleNav}>Resume</Link>
                        </li>
                        <li>
                            <Link to="/about" className={`${route === '/about' ? 'main-nav-active-link about-link' : 'about-link'}`} onClick={toggleNav}>About Me</Link>
                        </li>

                        <li>
                            <Link to="/contact" className={`${route === '/contact' ? 'main-nav-active-link' : ''}`} onClick={toggleNav}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            )
        };


        return(
            <div>
                {showNav()}
            </div>
        )
};


export default withRouter(Navigation);