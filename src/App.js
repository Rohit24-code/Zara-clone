
import { Box } from '@chakra-ui/react';
import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import Kids from './components/Kids';
import Login from './components/Login';
import Men from './components/Men';
import Moredetails from './components/Moredetails';
import Navbar from './components/Navbar';
import Payment from './components/Payment';
import Search from './components/Search';
import Selection from './components/Selection';
import Signin from './components/Signin';
import Success from './components/Success';
import Women from './components/Women';
import PrivateRoute from './Context/PrivateRoute';

function App() {
  return (
    <Box className='App'>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/child" element={<Kids/>} />
        <Route path="/moredetails" element={<Moredetails/>} />
        <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>} />
        <Route path="/selection" element={<Selection/>} />
        <Route path="/payment" element={<PrivateRoute><Payment/></PrivateRoute>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/signin" element={<Signin/>} />
      </Routes>
    </Box>
  );
}

export default App;
