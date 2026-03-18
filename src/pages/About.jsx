import React from "react";

function About() {
  return (
   <div className="bg-white rounded-2xl shadow-md p-6">
  <h1 className="text-3xl font-bold text-gray-800 mb-3">
    About <span className="text-indigo-600">This Project</span>
  </h1>

  <p className="text-gray-600 text-lg">
    This is a Character Explorer Dashboard built using 
    <span className="font-medium text-gray-800"> React</span> and 
    <span className="font-medium text-gray-800"> React Router</span>.
  </p>

  <p className="mt-3 text-gray-500">
    It demonstrates concepts like routing, nested routing, and dynamic routing 
    in a clean and interactive interface.
  </p>

  <p className="mt-3 text-gray-500">
    All character data is fetched from the 
    <span className="text-indigo-600 font-medium"> Rick and Morty API</span>.
  </p>
</div>
  );
}

export default About;
