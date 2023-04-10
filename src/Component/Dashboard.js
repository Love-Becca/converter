import React,{useContext} from 'react';
import { registered } from '../Helper/createUser';
import user from "../assets/user.png"
import { dashboardData } from '../Helper/displayData';
import '../Styles/Dashboard.css'
import ProductCard from './ProductCard';
import { LandingPageContext } from "../Context/LandingPageContext";

const Dashboard = () => {
    const {isFixed}= useContext(LandingPageContext)
    const registeredUser = registered();
    const displayCards = dashboardData.map((data,index)=>
    <ProductCard 
        key={index}
        img ={data.img}
        title = {data.title}
        description = {data.description}
        btn = {data.button}
    />)
    console.log(isFixed);
    return ( 
        <div className='Dashboard'>
            <h3>Convert your files to suitable format</h3>
            <div className={isFixed?"place_in_header":'show_user'}>
                <img src={user} alt='user'  width={"40px"}/>
                <p>{registeredUser.name}</p>
            </div>
            <div className='product_group'>
                {displayCards}
            </div>
        </div>
    );
}
 
export default Dashboard;