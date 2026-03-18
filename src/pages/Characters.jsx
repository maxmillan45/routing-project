import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {characters.map(char => (
        <Link to={`/dashboard/characters/${char.id}`} key={char.id}>
          <div>
            <img src={char.image} alt={char.name} />
            <h3>{char.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Characters;