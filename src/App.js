import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import { HomeApp } from './Pages/Home/index';
import { Characters } from './Pages/Characters';
import { Planets } from './Pages/Planets';
import { NavbarApp } from './Components/Navbar';
import { FooterApp } from './Components/Footer';
import { DetailCharacter } from './Pages/Characters/DetailsCharacters';

function App() {

  return (
    <div>
      <NavbarApp/>
      <Routes>
        <Route path='/' element={<HomeApp/>} />
        <Route path='/characters/' element={<Characters/>} />
        <Route path='/planets' element={<Planets/>} />
        <Route path='/details/:linkname' element={<DetailCharacter/>} />
      </Routes>
      <FooterApp/>
    </div>
  );
}

export default App;
