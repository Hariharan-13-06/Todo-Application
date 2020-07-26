import React from 'react';
import './Logo.png';
import './Header.css';
function Header() {
    return (
        <div className="header">
            <img 
                className="header_logo"
                src="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg" 
                alt="Logo here!!" 
            />
            <nav>
                <p>Hello!!</p>
            </nav>
            
        </div>
    )
}

export default Header
