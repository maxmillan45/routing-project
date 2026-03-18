import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

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
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />

      {/* Tabs */}
      <Link to="info">Info</Link> | 
      <Link to="episodes">Episodes</Link>

      <Outlet />
    </div>
  );
}

export default CharacterDetails;