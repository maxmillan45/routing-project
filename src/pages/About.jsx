import React from "react";

function About() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">About</h1>

      <p>
        This is a Character Explorer Dashboard built using React and React Router.
      </p>

      <p className="mt-2">
        It demonstrates routing, nested routing, and dynamic routing.
      </p>

      <p className="mt-2">
        Data is fetched from the Rick and Morty API.
      </p>
    </div>
  );
}

export default About;
