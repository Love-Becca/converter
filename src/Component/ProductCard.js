import React from 'react';

const ProductCard = (props) => {
    return (
        <div className='product_card'>
            <img src={props.img} alt='product_img' width={"30px"} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <button>{props.btn}</button>
        </div>
    );
}
 
export default ProductCard;