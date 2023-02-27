import logo from './logo.svg';
import './App.css';
// import Table from './Table';
import { Route ,Routes} from 'react-router-dom';
import Home2 from './Home2';
import Modals from './Modal';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Modals/>}/>
    <Route path='/a' element={<Home2/>}/>
   </Routes>
   
  );
}

export default App;
