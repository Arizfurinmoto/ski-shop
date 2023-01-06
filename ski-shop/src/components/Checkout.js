import {AiFillCloseCircle} from "react-icons/ai"
import "../checkout.css"

const Checkout = ({visibility, onClose}) => {
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
            </div>
        </div>
        </div>
    )
}

export default Checkout