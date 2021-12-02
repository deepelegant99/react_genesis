import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [count, setCount] =useState(0)
  
  const countHandler = () =>{
    setCount(count+1)
  } 

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>This is your count {count}</p>
      <button onClick={countHandler}>By 1</button>
    </div>
  );
}

export default App;
