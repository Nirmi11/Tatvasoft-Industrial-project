import Users from './Users';
import './App.css';

function App() {
  const users=[{
    id:1,
    name:"nirmi"
  },
  {
    id:2,
    name:"naisha"
  },
  {
    id:3,
    name:"naina"
  }
];
  return (
    <div className="App">
{
  users.map((user)=>{return <Users user={user}/> })
    
    }
    
    
    </div>
  );
}

export default App;
