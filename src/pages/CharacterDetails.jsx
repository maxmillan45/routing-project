import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Info from "./Info";
import Episodes from "./Episodes";

function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(data => setCharacter(data));
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div>
      {/* SHOW ONCE HERE */}
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />

      {/* PASS DATA */}
      <Info character={character} />
      <Episodes character={character} />
    </div>
  );
}

export default CharacterDetails;