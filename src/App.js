import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import Button from '@mui/material/Button';

function App() {
    const [count, setCount] = useState(0);

    const countHandler = () => {
        setCount(count + 1);
    };

    return (
        <div className='App'>
            <Nav />
            <h1>Hello World</h1>
            <p>This is your count {count}</p>
            <Button onClick={countHandler} variant='contained'>
                By 1
            </Button>
        </div>
    );
}

export default App;
