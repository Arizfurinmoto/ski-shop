import "../details.css"
import {AiFillCloseCircle} from "react-icons/ai"
import RatingStars from "./RatingStars"
import logo from "../assets/logos/raw_logo.png"

const Details = ({visibility, product, onClose}) => {

    return(
        <div className="detailModal" style={{display: visibility ? "block" : "none"}}>
            <div className="clickableSpace" onClick={onClose}/>
            <div className="details">

                <header className="header">
                    <div className="titleContainer">
                        <h2>{product.name}</h2>
                    </div>
                    <button className="close-btn" onClick={onClose}>
                        <AiFillCloseCircle size={30}/>
                    </button>
                </header>

                <section className="detailsContainer">

                    <div className="detailColumn">
                        <img className="detailImage" src={product.image} alt={"Zdjęcie " + product.name}></img>
                        <RatingStars rating={product.rating}/>
                        <div className="shortDescContainer">
                            <p className="shortDesc">{product.description}</p>
                        </div>
                        <div className="priceContainer">
                            <p className="price">Price: {product.price} $</p>
                        </div>
                    </div>

                    <div className="placeholder"/>

                    <div className="detailColumn">
                        <img src={logo} alt={"logo"}/>
                        {/* <div className="line"/> */}
                        <div className="longDescContainer">
                            <p className="shortDesc">{product.longdescription}</p>
                        </div>
                    </div>
                    
                </section>
            </div>
        </div>
    )
}

export default Details