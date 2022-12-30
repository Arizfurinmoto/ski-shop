import {GiShoppingBag} from "react-icons/gi"
import RatingStars from "./components/RatingStars.js"
import './App.css';
import { useState } from "react";
import ShoppingCart from "./components/ShoppingCart.js";

const products = [
  {
		id: 1,
		name: "Narty Salomon",
		rating: 3.7,
		description:
			"Super narty na zimę i na lato.",
		price: 500,
		image: require("./assets/images/product-1.jpg"),
	},
  {
		id: 2,
		name: "Kask Rossignol Jednorożec",
		rating: 5.0,
		description:
			"Znakomity kask dla dziewczynek w wieku do 10 lat i studentów informatyki w wieku 20-26 lat",
		price: 420.20,
		image: require("./assets/images/product-2.png"),
	},
]

function App() {
  const[cartsVisibility, setCartVisible] = useState(false);
  const[productsInCart, setProducts] = useState([]);
  
  return (
    <div className="App">
      <ShoppingCart visibility = {cartsVisibility} products={productsInCart}/>
      <div className="navbar">
        <h3 className="logo">Logo</h3>
        <button className="btn shopping-cart-btn" onClick={() => setCartVisible(true)}>
          <GiShoppingBag size={24}/>
        </button>
      </div>
      <main>
        <h2 className="title">
          Products
        </h2>
        <div className="products">
          {products.map((product) => (
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
            <button className="btn">Add to cart</button>
          </div>
        </div>
        ))}
        </div>
      </main>
    </div>
  );
}

export default App;
