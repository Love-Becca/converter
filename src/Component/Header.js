import React,{useState, useContext}from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import '../Styles/Converter.css'
import { LandingPageContext } from "../Context/LandingPageContext";

const Header = (props) => {
    const {convertFiles } = useContext(LandingPageContext)
    const [toggle, setToggle] = useState(false);
    const toggleNavBar = ()=>setToggle(!toggle)
    const location = useLocation();
    
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
                        <NavLink to="/"><li onClick={()=>location.pathname==='/'? convertFiles():undefined}>{location.pathname==='/'?"Download":"Home"}</li></NavLink>
                        <NavLink to="convert"><li>Convert</li></NavLink>
                        <NavLink to="login"><li>Login</li></NavLink>
                        <NavLink to="signup" className={({isActive}) =>isActive? 'active': undefined}><li>Sign up</li></NavLink>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    );
}
 
export default Header;