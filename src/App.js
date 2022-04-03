// import logo from '../assets/logo.jpg';
import {Career, Contact, CyclingRoutsMaps, Home, Improving, MovingGoods, Navbar, PublicBike, Register, Union } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className = "gradient__bg">
      <Navbar />
      <Home />
      <CyclingRoutsMaps />
      <PublicBike />
      <Register />
      <MovingGoods />
      <Improving />
      <Union />
      <Contact />
      <Career />
     
      </div>

      </div>
  );
}

export default App;
