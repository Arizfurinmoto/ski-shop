import {AiFillCloseCircle} from "react-icons/ai"
import {FaUserCircle} from "react-icons/fa"
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

                    <section className="formContainer">

                        <div className="column">
                            <section>
                                <header className="columnHeader">
                                    <FaUserCircle size={30}/>
                                    <h2 className="info1">Personal Information</h2>
                                </header>

                                <form className="inputsContainer">
                                    <label>
                                        <h1 className="inputHeader">Name</h1>
                                        <input type="text" className="inputs" placeholder="Name"/> 
                                    </label>
                                </form>

                            </section>
                        </div>

                        <div className="column">

                        </div>

                    </section>

                </div>
                
            </div>
        </div>
    )
}

export default Checkout