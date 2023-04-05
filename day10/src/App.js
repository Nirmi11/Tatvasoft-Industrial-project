
import './App.css';
import ComponentA from './Component/ComponentA';

import context from './Component/UserContext';
function App() {
  return (
    <div className="App">
      
      <context.Provider value="Nirmi Nagori">
        <ComponentA />
      </context.Provider>
  
    </div>
  );
}

export default App;
