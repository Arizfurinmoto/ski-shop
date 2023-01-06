import "../shoppingCart.css"
import { useEffect } from "react"
import {AiFillCloseCircle} from "react-icons/ai"
import {RiDeleteBin6Line} from "react-icons/ri"

const ShoppingCart = ({visibility, products, onProductRemove, onClose, onQuantityChange, outcome, calculateTotalPrice}) => {
    
    useEffect(() => {
    calculateTotalPrice()
  })

    return (
        <div 
            className="modal" 
            style={{display: visibility
                ? "block"
                : "none", 
            
            }}>
            <div className="clickableSpace" onClick={onClose}/>
            <div className="shoppingCart">
                <div className="header">
                    <h2>Shopping cart</h2>
                    <button className="btn close-btn" onClick={onClose}>
                        <AiFillCloseCircle size={30}/>
                    </button>
                </div>
            <div className="cart-products">
                {/* If product.length equals 0 then display <span> */}
                {products.length === 0 && (
                <span className="empty-text">Your basket is currently empty.
                </span>
                )}

                {products.map((product) => (
                    <div 
                        className="cart-product" 
                        key={product.id}>
                        <img 
                            src={product.image} 
                            alt={product.name}
                        />
                        <div className="product-info">
                            {product.count > 1 && (<h3>{product.name} x {product.count}</h3>)}
                            {product.count === "1" && (<h3>{product.name}</h3>)}
                        <span className="product-price">
                            {Math.round(product.price * product.count * 100)/100} $             
                        </span>
                        </div>

                        <select 
                            className="count" 
                            value={product.count}
                            onChange={(event) => {
                                onQuantityChange(
                                    product.id, 
                                    event.target
                                    .value
                                );
                            }}>
                            {[
                            ...Array(
                                10
                            ).keys(),
                            ].map(number => {
                                const num = number + 1;
                                return <option value={num} key={num}>{num}</option>
                            })}
                                
                        </select>
                        <button className="btn remove-btn" onClick={() =>onProductRemove(product)            
                        }>
                        <RiDeleteBin6Line size={20}/>    
                        </button>   

                    </div>
                ))}
                {products.length > 0 && (
                    <>
                    <h2 className="total">Total: {Math.round(outcome * 100)/100} $</h2>
                    <button className="checkout-btn">Proceed to checkout</button>
                    </> 
                )}
                </div>    
            </div>
            
        </div>
    );
}

export default ShoppingCart