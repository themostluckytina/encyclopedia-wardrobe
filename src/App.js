
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Class from "./Class";
import Clothes from "./Clothes";
import Ties from "./Ties";
import Shoes from './Shoes';
import './App.css';
import Pants from "./Pants";
import Hats from "./Hats";
import Style from "./Style";

function App() {
  return <Router>

    <nav>
      <Link to = '/.home' className='link'>Стартовая</Link>
      <Link to = '/.class' className='link'>Классификация</Link>
      <Link to = '/.clothes' className='link'> Oдежда</Link>
      <Link to = '/.style' className='link'> Стили</Link>
      <Link to = '/.shoes' className='link'>Обувь</Link>
      <Link to = '/.pants' className='link'>Брюки</Link>
      <Link to = '/.ties' className='link'>Галстуки</Link>
      <Link to = '/.hats' className='link'>Головные уборы</Link>
    </nav>
    
    <Routes>
    <Route path='/.home' element={<Home />} />
    <Route path='/.class' element ={<Class />} /> 
    <Route path='/.clothes' element ={<Clothes />} /> 
    <Route path='/.style' element ={<Style />} /> 
    <Route path='/.shoes' element ={<Shoes />} /> 
    <Route path='/.pants' element ={<Pants />} /> 
    <Route path='/.ties' element ={<Ties />} /> 
    <Route path='/.hats' element ={<Hats />} /> 
  </Routes>
 
</Router>


}
   
export default App;