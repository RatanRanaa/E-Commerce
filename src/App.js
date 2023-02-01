import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Product from './Components/Product';
import ProductsContextProvider from './Global/ProductsContext';
import CartContextProvider from './Global/CartContext';
import Cart from './Components/Cart';
import Contact from './Components/Contact';
import SignIn from './Components/SignIn';

function App() {
  return (
    <>
    <ProductsContextProvider>
      <CartContextProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
    </Router>
    </CartContextProvider>
    </ProductsContextProvider>
    </>
  );
}

export default App;
