
import { Box } from '@chakra-ui/react';
import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Home from './components/Home';
import Kids from './components/Kids';
import Login from './components/Login';
import Men from './components/Men';
import Moredetails from './components/Moredetails';
import Navbar from './components/Navbar';
import Payment from './components/Payment';
import Search from './components/Search';
import Selection from './components/Selection';
import Success from './components/Success';
import Women from './components/Women';

function App() {
  return (
    <Box className='App'>
      <Navbar />
      <Filter/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/child" element={<Kids/>} />
        <Route path="/moredetails" element={<Moredetails/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/selection" element={<Selection/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </Box>
  );
}

export default App;
