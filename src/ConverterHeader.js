import React,{useState}from "react";
import './Converter.css'

const Header = (props) => {
    const [toggle, setToggle] = useState(false);
    const toggleNavBar = ()=>setToggle(!toggle)

    console.log(toggle);
    return (
        <>
            <header>
                <nav>
                    <div className="hamburger-menu" onClick={toggleNavBar}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={toggle?"hamburger-open":"hamburger-close"}>
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