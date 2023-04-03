
import PureComp from './Component/PureComp';
import Title from './Component/Title';
import InputRef from './Component/InputRef';
import React from 'react';
import './App.css';

function App() {
  const [name, setName] = React.useState('Nirmi');
  const [title, setTitle] = React.useState('hello');
  return (
    <div className="App">
      <hr></hr>
      <h2>Task - 1 - Performance enhancement using pure components</h2>
      <PureComp name={name} />
      <button onClick={() => setName('nirmi')}>Set name to nirmi</button>
      <button onClick={() => setName('noor')}>Set name to noor</button>
      <hr></hr>
      <h2>Task - 2 - Performance enhancement using memo</h2>
      <Title title={title} />
      <button onClick={() => setTitle('Welcome')}>Set title to Welcome</button>
      <button onClick={() => setTitle('Bye')}>Set title to Bye</button>
      <hr></hr>
      <h2>Refs in class components</h2>
      <InputRef />
    </div>
  );
}

export default App;
