
import './App.css';
import Card from './components/superheroes';

function App() {
  return (
    <div className="App">
      {
        superheroes.map((superheroe) => 
        <Superheroe name={superheroe.name} photo={superheroe.photo}
        universe={superheroe.universe} alterego={superheroe.alterego} occupation={superheroe.occupation}
        friends={superheroe.friends} superpower={superheroe.superpower}
        more={superheroe.more}></Superheroe>)
      }
    </div>
  );
}

export default App;
