import { useState } from 'react';
import './App.css';
import { NEW_CHARACTER } from './consts';
import CharacterAttributes from './characterAttributes/CharacterAttributes';



function App() {
  const [characterOne, setCharacterOne] = useState<typeof NEW_CHARACTER>(NEW_CHARACTER);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <CharacterAttributes character={characterOne} updateCharacter={setCharacterOne} />
      </section>
    </div>
  );
}

export default App;
