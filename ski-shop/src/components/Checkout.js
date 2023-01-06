
const Checkout = ({visibility}) => {
    return(
        <div style={{display: visibility ? "block" : "none"}}>
            <h1>Hi I am a Checkout modal!</h1>
        </div>
    )
}

export default Checkout