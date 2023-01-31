
import './App.css';
import Card from './components/superheroes';
import './components/superheroes.css';
import './components/superheroes.jsx';

function App() {
  return (
    <div className="App">
      {
        superheroes.map((superheroe) => 
        <superheroe name={superheroe.name} photo={superheroe.photo}
        universe={superheroe.universe} alterego={superheroe.alterego} occupation={superheroe.occupation}
        friends={superheroe.friends} superpower={superheroe.superpower}
        more={superheroe.more}></superheroe>)
      }
    </div>
  );
}

export default App;
