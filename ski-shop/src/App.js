import {GiShoppingBag} from "react-icons/gi"
import RatingStars from "./components/RatingStars.js"
import './App.css';
import { useState, useEffect } from "react";
import ShoppingCart from "./components/ShoppingCart.js";
import Details from "./components/Details.js";
import Checkout from "./components/Checkout.js";
import products from "./products.js"
import logo from "../src/assets/logos/raw_logo.png"

function App() {

  const [cartsVisibility, setCartVisible] = useState(false);
  const [detailVisibility, setDetailVisibility] = useState(false)
  const [checkoutVisibility, setCheckoutVisibility] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [totalPrice, setTotalPrice] = useState(0)

  const[productsInCart, setProducts] = useState(
    JSON.parse(
      localStorage.getItem(
        "shopping-cart"
      )
    ) || []
  );

  const calculateTotalPrice = () =>{
    let outcome = 0
    for (let i = 0; i<productsInCart.length; i++){
      outcome = outcome + productsInCart[i].price * productsInCart[i].count
    }
    setTotalPrice(outcome)
  }

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
        outcome = {totalPrice}
        calculateTotalPrice = {calculateTotalPrice}
        onCheckoutOpen = {() => setCheckoutVisibility(true)}
        />

      <Details
        visibility={detailVisibility}
        product={selectedProduct}
        onClose={() => setDetailVisibility(false)}
      />

      <Checkout
        visibility={checkoutVisibility}
        onClose={() => setCheckoutVisibility(false)}
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
        <h2 className="title">Products</h2>
        <div className="line"/>
        {/* LIST OF PRODUCTS */}
        <div className="products">

          {products.map((product) => (
            <div className="product" key={product.id}>

              <img className="product-image"
              src={product.image}
              alt={"Obraz dla " + product.name}/>

              <h4 className="product-name">{product.name}</h4>
          
              <RatingStars rating={product.rating} />

              <p>{product.description}</p>

              <span className="product-price">{product.price} $</span>
          
              <div className="buttons">
                <button className="btn" onClick={() => { setDetailVisibility(true); setSelectedProduct(product) }}>Detail</button>
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
