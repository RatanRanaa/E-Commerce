import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Product from './Components/Product';
import ProductsContextProvider from './Global/ProductsContext';

function App() {
  return (
    <>
    <ProductsContextProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </Router>
    </ProductsContextProvider>
    </>
  );
}

export default App;
