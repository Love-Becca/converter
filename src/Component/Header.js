import React,{useState, useContext, useRef, useEffect}from "react";
import { NavLink, Outlet, redirect, useLocation } from "react-router-dom";
import '../Styles/Converter.css'
import { LandingPageContext } from "../Context/LandingPageContext";
import {registered} from "../Helper/createUser.js"

const Header = (props) => {
    const {convertFiles, isFixed, updateIsFixed} = useContext(LandingPageContext)
    const [toggle, setToggle] = useState(false);
    const toggleNavBar = ()=>setToggle(!toggle)
    const location = useLocation();
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
          const offset = window.pageYOffset;
          const threshold = headerRef.current.offsetHeight * 0.5;
          updateIsFixed(offset > threshold);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, [updateIsFixed]);

    return (
        <>
            <header className={isFixed ? 'fixed' : ''} ref={headerRef}>
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