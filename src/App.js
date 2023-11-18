import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import {FaBars} from "react-icons/fa";
import {useRef } from "react";
import Home from "./components/Home";
import Hotels from "./components/Hotels";
import Favourite from "./components/Favourite";
import Footer from "./components/Footer";
import Detail from "./components/Detail";

function App() {
  const Ref=useRef();
  const handleClick=()=>{
    Ref.current.classList.toggle("small");
  }


  return (
  <BrowserRouter> 
      <div className="navbar" ref={Ref}>
        <Link to="/" onClick={handleClick}>Home</Link>
        <Link to="/hotels" onClick={handleClick}>Hotels</Link>
        <Link to="/favourite" onClick={handleClick}>Favourite</Link>
        <Link className="bars"><FaBars onClick={handleClick} /></Link>
      </div>
      <div className="routes">
        <Routes>
          <Route element={<Home />} path="/"/>
          <Route element={<Hotels />} path="/hotels"/>
          <Route element={<Favourite />} path="/favourite"/>
          <Route element={<Detail />} path="/detail/:id"/>
        </Routes>
      </div>
      <div className="footer-card">
        <Footer/>
      </div>
  </BrowserRouter>
)}

export default App;
