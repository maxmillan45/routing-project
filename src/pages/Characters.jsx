import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(data => setCharacters(data.results));
  }, []);

  //  DELETE FUNCTION
  const handleDelete = (id) => {
    const updated = characters.filter(char => char.id !== id);
    setCharacters(updated);
  };

  return (
    <div className="p-6">

      {/* ➕ CREATE BUTTON */}
      <button className="mb-6 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
        + Add Character
      </button>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {characters.map(char => (
          <div
            key={char.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            {/* IMAGE */}
            <Link to={`/dashboard/characters/${char.id}`}>
              <img
                src={char.image}
                alt={char.name}
                className="w-full h-60 object-cover"
              />
            </Link>

            {/* CONTENT */}
            <div className="p-4">
              <h3 className="text-lg font-bold">{char.name}</h3>

              <p className="text-sm text-gray-500">
                {char.status} • {char.species}
              </p>

              {/* BUTTONS */}
              <div className="flex justify-between mt-4">
                <Link
                  to={`/dashboard/characters/${char.id}`}
                  className="text-blue-500 hover:underline"
                >
                  View
                </Link>

                <button
                  onClick={() => handleDelete(char.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;