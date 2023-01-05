import "../details.css"
import {AiFillCloseCircle} from "react-icons/ai"

const Details = ({visibility, product, onClose}) => {
    
    return(
        <div className="detailModal" style={{display: visibility ? "block" : "none"}}>
            <div className="clickableSpace" onClick={onClose}/>
            <div className="details" key={product.id}>

                <header className="header">
                    <div className="titleContainer">
                        <h2>{product.name}</h2>
                    </div>
                    <button className="close-btn" onClick={onClose}>
                        <AiFillCloseCircle size={30}/>
                    </button>
                </header>

                <section className="detailsContainer">
                    <div className="imageBlock">
                        <img className="detailImage" src={product.image} alt={"Zdjęcie " + product.name}></img>
                    </div>
                </section>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

export default Details