import logo from './logo.svg';
import './App.css';



function App() {
  const Nayoks = ['Hamim', 'Asif','Ontu','Ashik','Seam','Jihad', 'Rabul']

  const friends = [
    {Name:'Seam', Job:'Student'},
    {Name:'Ashik', Job:'Student'},
    {Name:'Jihad', Job:'Student'},
    {Name:'Robiul', Job:'Student'},
    {Name:'Omit', Job:'Student'},
    {Name:'Rahim', Job:'Student'}
                 
  ]
  return (
    <div className="App">
      {
        Nayoks.map(Nayok => <Person name={Nayok}></Person>)
      }
      {
        friends.map(friend => <Friend name={friend.Name} Job={friend.Job}></Friend>)
      }
    </div>
  );
}

function Person(props){
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p></p>
    </div>
  )
}

function Friend(props){
  return (
    <div className='friend'>
      <h3>{props.name}</h3>
      <p>{props.Job}</p>
    </div>
  )
}

export default App;
