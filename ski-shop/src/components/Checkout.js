import {AiFillCloseCircle} from "react-icons/ai"
import {FaUserCircle, FaShoppingCart} from "react-icons/fa"
import "../checkout.css"
import countries from "../countries"

const Checkout = ({visibility, onClose, products, outcome}) => {
    
    return(
        <div style={{display: visibility ? "block" : "none"}}>
            <div className="checoutModal" style={{display: visibility ? "block" : "none"}}>

                <div className="checkout">

                    <header className="header">
                        <div className="titleContainer">
                            <h2>Checkout</h2>
                        </div>
                        <button className="close-btn" onClick={onClose}>
                            <AiFillCloseCircle size={30}/>
                        </button>
                    </header>

                    <form  className="formContainer">

                        <div className="column">
                            <section className="personalInf">
                                <header className="columnHeader">
                                    <FaUserCircle size={30}/>
                                    <h2 className="info1">Personal Information</h2>
                                </header>

                                <div className="inputsContainer">
                                

                                    <div className="rowInputs">

                                            <label>
                                                <h1 className="inputHeader">First name</h1>
                                                <input type="text" className="inputs" placeholder="Jamal"/> 
                                            </label>

                                            <label className="label2">
                                                <h1 className="inputHeader">Last name</h1>
                                                <input type="text" className="inputs" placeholder="Musiala"/> 
                                            </label>

                                    </div>

                                    <div className="rowInputs">

                                        <label>
                                            <h1 className="inputHeader">Country</h1>
                                            <select>
                                                {countries.map((country) => {
                                                return <option value={country} key={countries.indexOf(country)}>{country}</option>
                                            })}
                                            </select>
                                        </label>

                                        <label className="label2">
                                            <h1 className="inputHeader">City</h1>
                                            <input type="text" className="inputs" placeholder="Munchen"/> 
                                        </label>

                                    </div>

                                    <div className="rowInputs">

                                        <label className="label4">
                                            <h1 className="inputHeader">Postal Code</h1>
                                            <input type="text" className="inputs" placeholder="00-000"/> 
                                        </label>

                                        <label className="label5">
                                            <h1 className="inputHeader">Street</h1>
                                            <input type="text" className="inputs" placeholder="Sabener"/> 
                                        </label>

                                        <label className="label5">
                                            <h1 className="inputHeader">Number</h1>
                                            <input type="number" className="inputs" placeholder="51"/> 
                                        </label>

                                    </div>
                                    <div className="rowInputs">

                                        <label className="label3">
                                            <h1 className="inputHeader">Email</h1>
                                            <input type="text" className="inputs" placeholder="ski-master@shop.com"/> 
                                        </label>

                                    </div>

                                     <div className="rowInputs">

                                        <label className="label3">
                                            <h1 className="inputHeader">Phone Number</h1>
                                            <input type="tel" className="inputs" placeholder="111 222 333"/> 
                                        </label>

                                    </div>

                                    
                                
                                </div>
                            </section>
                        </div>

                        <div className="column2">
                            
                            <section className="personalInf">

                                <header className="columnHeader">
                                    <FaShoppingCart size={30}/>
                                    <h2 className="info1">Your order</h2>
                                </header>
                                            
                                {products.map((product) => {
                                    return(
                                        // <h1>{product.name} x {product.count}</h1>
                                        <div className="productCheckoutBox">

                                            <div className="productCheckoutContent">
                                                <div className="productNameAndQ">
                                                    <p>{product.name} x {product.count}</p>
                                                </div>
                                                <p>{product.price * product.count} $</p>
                                            </div>

                                        </div>
                                    )
                                })}

                                <div className="separator"/>

                                <h1 className="totalCheckout">Total: {outcome} $</h1>

                            </section>

                            <input type="reset" className="submitCheckout" name="p" value="Submit"/>

                        </div>

                    </form>

                </div>
                
            </div>
        </div>
    )
}

export default Checkout