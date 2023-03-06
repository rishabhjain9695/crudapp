import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { incNumber,decNumber } from './action/index';
function App() {
  const mystate=useSelector((state)=>state.changeTheNumber);
  const dispatch=useDispatch();
  return (
    <div className="App">
       <p>increment or decrement</p>
       <button onClick={()=>dispatch(decNumber())}>-</button> <span>{mystate} </span> <button onClick={()=>{dispatch(incNumber())}}>+</button>
    </div>
  );
}

export default App;
