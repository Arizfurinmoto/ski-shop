import products from "../products"
import RatingStars from "./RatingStars"

const Product = (product, addProductToCart) =>{
    return(
        <div
            className="product"
            key={product.id}>
            <img
            className="prodyct-image"
            src={product.image}
            alt={product.image}
            />
            <h4 className="product-name">{product.name}</h4>
          
          <RatingStars rating={product.rating} />
          <p>{product.description}</p>
          <span className="product-price">{product.price}$</span>
          <div className="buttons">
            <button className="btn">Detail</button>
            <button className="btn" 
              onClick={() => addProductToCart(product)}>
              Add to cart
              </button>
          </div>
        </div>
    )
}

export default Product