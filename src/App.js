
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ProductProvider } from './components/Context/ProductProvider';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import More from './components/Pages/NavPages/More'
import OfferZone from './components/Pages/NavPages/OfferZone';
function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/offerzone' element={<OfferZone /> } />
          <Route path='/more' element={<More /> } />
        </Routes>
      </ProductProvider>
    </div>
  );
}

export default App;
