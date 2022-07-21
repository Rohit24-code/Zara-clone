
import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import Kids from './components/Kids';
import Login from './components/Login';
import Men from './components/Men';
import Moredetails from './components/Moredetails';
import Navbar from './components/Navbar';
import Women from './components/Women';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/child" element={<Kids/>} />
        <Route path="/moredetails" element={<Moredetails/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </>
  );
}

export default App;
