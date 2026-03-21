function Info({ character }) {
  return (
    <div>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
    </div>
  );
}

export default Info;