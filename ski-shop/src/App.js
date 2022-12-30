import {GiShoppingBag} from "react-icons/gi"
import RatingStars from "./components/RatingStars.js"
import './App.css';

const products = [
  {
		id: 1,
		name: "Vivamus vitae",
		rating: 4.3,
		description:
			"Vivamus vitae neque accumsan, ultrices nisl et, viverra magna. Fusce nec maximus sem.",
		price: 199,
		image: require("./assets/images/product-1.png"),
	},
]

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <h3 className="logo">Logo</h3>
        <button className="btn shopping-cart-btn">
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
