import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Products from './components/Products';
import Shopping from './components/Shopping';
import Sign from './components/Sign';
import Super from './components/Super';
import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"


function App() {
  return (
    <div>
      <Router>
        <Header />
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Super' element={<Super />} />
          <Route path='/Shopping' element={<Shopping />} />
          <Route path='/Sign' element={<Sign />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;


