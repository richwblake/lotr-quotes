import CharacterList from "./CharacterList";
import characters from "./db.js";
import Header from "./Header";
import "./index.css"

const App = () => {
  return (
    <div>
      <Header />
      <CharacterList characters={characters.characters} />
    </div>
  );
};

export default App;
