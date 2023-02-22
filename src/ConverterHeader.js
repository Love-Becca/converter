import React from "react";
import './Converter.css'

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>Download</li>
                        <li>About</li>
                        <li>Sign in</li>
                        <li className="click">Sign up</li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
 
export default Header;