import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/home/Home"
import Contact from './pages/contact/Contact';
import OrderHistory from './pages/orderHistory/OrderHistory';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Products from './pages/Products/Products';
import RamDairy from './Shops/Dairy/RamDairy';
import Admin from './pages/Admin/Admin';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/OrderHistory' element={<OrderHistory/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/RamDairy' element={<RamDairy/>}/>
        <Route path='/Admin' element={<Admin/>}/>
      </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App; 
 