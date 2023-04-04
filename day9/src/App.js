
import './App.css';
import UserList from './Component/UserList';
import HOC from './Component/HOC';
import RenderProps from './Componen/RenderProps';

function App() {
  const users = [
    {
      id: 1,
      name: 'abc'
    },
    {
      id: 2,
      name: 'xyz'
    },
    {
      id: 3,
      name: 'pqr'
    }
  ]
  
  return (
    <div className="App">
      {users.map((user) => <HOC OriginalComponent={<UserList />} data={user} />)}
      <RenderProps render={() => { return (<h3>I am coming from RenderProps</h3>) }} />
    </div>
  );
}


export default App;
