import React from 'react'
import logo from "../../Assets/Icons/Logo.jpg"
const Header = () => {
    return (
        <>
            <header className="header">
                <div className='header__container'>
                    <img src={logo} alt="Logo" className="header__logo" />
                    <nav className="header__nav">
                        <a href="/" className="header__link">XM Homepage</a>
                        <a href="#support" className="header__link">Support</a>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default Header