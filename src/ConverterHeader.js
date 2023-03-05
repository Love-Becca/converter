import React,{useState}from "react";
import { NavLink } from "react-router-dom";
import './Converter.css'

const Header = (props) => {
    const [toggle, setToggle] = useState(false);
    const toggleNavBar = ()=>setToggle(!toggle)

    console.log(toggle);
    return (
        <>
            <header>
                <nav>
                    <div className={toggle?"hamburger-menu slide-forward":"hamburger-menu slide-backward"} onClick={toggleNavBar}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={toggle?"hamburger-open":"hamburger-close"}>
                        <li onClick={()=>props.loadState && props.getFile()}>Download</li>
                        <li>About</li>
                        <li>Sign in</li>
                        <NavLink to="signup" style={({isActive}) =>isActive? 'active': undefined}><li>Sign up</li></NavLink>
                    </ul>
                </nav>
            </header>
        </>
    );
}
 
export default Header;