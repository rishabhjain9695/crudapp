import logo from './logo.svg';
import './App.css';

import { Route ,Routes} from 'react-router-dom';

import Modals from './Modal';
import Home2 from './Home2';



function App() {
  return (
   <Routes>
    {/* <Route path='/' element={<Modals/>}/> */}
    <Route path='/' element={<Modals/>}/>
  
   
    {/* <Route path='/a' element={<Home2/>}/> */}
   </Routes>
   
  );
}

export default App;
