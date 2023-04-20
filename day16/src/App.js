import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import Cleanup from './Cleanup';
function App() {
  const [display,setDisplay]=useState(true)
  return (
    <div className="App">
            {display &&<Cleanup/>}
       <button onClick={()=>setDisplay(!display)}>Click</button>
      
    </div>
  );
}

export default App;
