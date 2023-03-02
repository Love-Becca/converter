import React from "react";
import './Converter.css'

const Header = (props) => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li onClick={()=>props.loadState && props.getFile()}>Download</li>
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