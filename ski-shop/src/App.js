import {GiShoppingBag} from "react-icons/gi"
import RatingStars from "./components/RatingStars.js"
import './App.css';
import { useState, useEffect } from "react";
import ShoppingCart from "./components/ShoppingCart.js";
import products from "./products.js"
import logo from "../src/assets/logos/raw_logo.png"

function App() {

  const[cartsVisibility, setCartVisible] = useState(false);

  const[productsInCart, setProducts] = useState(
    JSON.parse(
      localStorage.getItem(
        "shopping-cart"
      )
    ) || []
  );

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart))
  }, [productsInCart])

  const addProductToCart = (product) =>{
    const newProduct = {
      ...product,
      count: 1,
    }
    setProducts([...productsInCart, newProduct,])
  }

  const onQuantityChange = (productId, count) =>{
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productId)
      if(productsIndex !== -1) {
        oldState[productsIndex].count = count
      }
      return [...oldState]
    })
  }

  const onProductRemove = (product) =>{
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === product.id)
      if(productsIndex !== -1) {
        oldState.splice(productsIndex, 1)
      }
      return [...oldState]
    })
  }
  
  return (
    <div className="App">
      <ShoppingCart 
        visibility = {cartsVisibility} 
        products={productsInCart}
        onClose={()=>setCartVisible(false)}
        onQuantityChange = {onQuantityChange}
        onProductRemove = {onProductRemove}
        />

      <header className="navbar">
        <img className="logo" src={logo} alt="logo"/>
        
        <button className="btn shopping-cart-btn" onClick={() => setCartVisible(true)}>
          <GiShoppingBag size={35}/>
            <span className="product-count">
              <h4>{productsInCart.length}</h4>
            </span>
        </button>
      </header>
      
      <main>
        <h2 className="title">
          Products
        </h2>
        <div className="products">

          {products.map((product) => (
            <div className="product" key={product.id}>

              <img className="product-image"
              src={product.image}
              alt={product.image}/>

              <h4 className="product-name">{product.name}</h4>
          
              <RatingStars rating={product.rating} />

              <p>{product.description}</p>

              <span className="product-price">{product.price}$</span>
          
              <div className="buttons">
                <button className="btn">Detail</button>
                <button className="btn" onClick={() => addProductToCart(product)}>Add to cart</button>
              </div>

            </div>
        ))}

        </div>
      </main>
    </div>
  );
}

export default App;
