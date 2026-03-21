import { useEffect, useState } from "react";

function Episodes({ character }) {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    if (!character) return;

    // Fetch all episodes
    Promise.all(
      character.episode.map(url =>
        fetch(url).then(res => res.json())
      )
    ).then(data => setEpisodes(data));
  }, [character]);

  return (
    <div>
      <h3>Episodes</h3>

      {episodes.length === 0 ? (
        <p>Loading episodes...</p>
      ) : (
        <ul>
          {episodes.map(ep => (
            <li key={ep.id}>
              {ep.name} ({ep.episode})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Episodes;