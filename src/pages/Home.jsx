import React from "react";

function Home() {
  return (
 <div className="bg-white rounded-2xl shadow-md p-6">
  <h1 className="text-3xl font-bold text-gray-800 mb-2">
    Welcome to <span className="text-indigo-600">Character Explorer</span> 
  </h1>

  <p className="text-gray-600 text-lg">
    Discover and explore characters from the Rick and Morty universe.
  </p>

  <p className="mt-3 text-gray-500">
    Use the sidebar to navigate between pages and view detailed information.
  </p>
</div>
  );
}

export default Home;