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
  <div className="p-6">
  <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md">
    
    <img
      src={character.image}
      alt={character.name}
      className="w-40 h-40 rounded-full mx-auto"
    />

    <h2 className="text-xl font-bold text-center mt-4">
      {character.name}
    </h2>

    <div className="mt-4 text-center">
      <p><span className="font-semibold">Status:</span> {character.status}</p>
      <p><span className="font-semibold">Species:</span> {character.species}</p>
    </div>

    {/* Episodes component */}
    <Episodes character={character} />

  </div>
</div>
  );
}

export default CharacterDetails;