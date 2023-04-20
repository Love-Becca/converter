import React, {useState} from 'react';
import FileModal from "./FileModal.js"

const ProductCard = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [clickedProduct, setClickedProduct] = useState("");

    const handleModalOpen = ()=>{
        setIsOpen(true)
        setClickedProduct(props.id);
    }

    const handleModalClose = ()=>{
        setIsOpen(false)
    }
    return (
        <div className='product_card'>
            <img src={props.img} alt='product_img' width={"30px"} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <button onClick={handleModalOpen} className='modal_button'>{props.btn}</button>
            {isOpen && <FileModal open={isOpen} onClose={handleModalClose} clicked_card={clickedProduct}/>}
        </div>
    );
}
 
export default ProductCard;