import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PathButton from './Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = useCallback(() => {
        setButton(window.innerWidth > 960);
    }, [setButton]);

    window.addEventListener('resize', showButton);

    useEffect(() => {
        showButton();
    }, [showButton])

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='link navbar-logo' onClick={closeMobileMenu}>
                        <i className='fa-solid fa-user-astronaut' />
                        GALACTIC GAZETTE
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/magazines' className='link nav-links' onClick={closeMobileMenu}>
                                Magazines&nbsp;<i className="fa-solid fa-newspaper"></i>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/cart' className='link nav-links' onClick={closeMobileMenu}>
                                Cart&nbsp;<i className="fa-solid fa-cart-shopping" />
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/log-in' className='link nav-links-mobile' onClick={closeMobileMenu}>
                                LOG IN <i className='fa-solid fa-user' />
                            </Link>
                        </li>
                    </ul>
                    {button && <PathButton styl='outlined'>LOG IN <i className='fa-solid fa-user' /></PathButton>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;