import { useEffect, useState } from "react";

function Episodes({ character }) {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    if (!character || !character.episode) return;

    const fetchEpisodes = async () => {
      try {
        const results = await Promise.all(
          character.episode.map(url =>
            fetch(url).then(res => res.json())
          )
        );

        setEpisodes(results);
      } catch (err) {
        console.error("Error fetching episodes:", err);
      }
    };

    fetchEpisodes();
  }, [character]);

  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold mb-2">Episodes</h3>

      {episodes.length === 0 ? (
        <p>Loading episodes...</p>
      ) : (
        <ul className="space-y-2">
          {episodes.map(ep => (
            <li key={ep.id} className="bg-gray-100 p-2 rounded">
              {ep.name} ({ep.episode})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Episodes;