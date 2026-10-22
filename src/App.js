import logo from './logo.svg';
import './App.css';
import Raju from './pages/raju';
import Navbar from './navbar';
 import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './login';
import Kumar from './kumar';
import Home from './home';
import About from './about';
import Gopi from './gopi';
import './raju.css';

function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/raj" element={<Raju/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about'element={<About/>}/>
    <Route path='/gopi' element={<Gopi/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;

