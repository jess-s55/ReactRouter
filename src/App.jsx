import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import  Blue from './components/blue.jsx';
import  Red from './components/red.jsx';
import  Home from './components/home.jsx'
import Green from './components/green.jsx'

function App() {
  

  return (
    <>
      <div id="container">
        
        <div id="navbar">
          <Link className="homeLink" to="/">Home</Link>
          <Link className="blueLink" to="/blue">Blue</Link>
          <Link className="redLink" to="/red">Red</Link>
          <Link className="greenLink" to="/green">Green</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/blue" element={ <Blue /> } />
            <Route path="/red" element={ <Red /> } />
            <Route path="/green" element={ <Green /> } />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
