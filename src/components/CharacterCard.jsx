import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  return (
    <Link to={`/dashboard/characters/${character.id}`}>
      <div className="bg-white shadow-md rounded-lg p-4 hover:scale-105 transition">

        <img 
          src={character.image} 
          alt={character.name} 
          className="w-full rounded"
        />

        <h3 className="mt-2 text-lg font-semibold">
          {character.name}
        </h3>

      </div>
    </Link>
  );
}

export default CharacterCard;