
const Checkout = ({visibility, onClose}) => {
    return(
        <div style={{display: visibility ? "block" : "none"}}>
            <h1>Hi I am going to be the Checkout modal!</h1>
            <button onClick={onClose}>Close</button>
        </div>
    )
}

export default Checkout