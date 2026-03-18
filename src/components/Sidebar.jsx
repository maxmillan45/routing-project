import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white h-screen p-4 w-64">

      <h2 className="text-xl font-bold mb-6">Dashboard</h2>

      <nav className="flex flex-col gap-4">
        <Link to="/dashboard" className="hover:text-yellow-400">
          Home
        </Link>

        <Link to="/dashboard/characters" className="hover:text-yellow-400">
          Characters
        </Link>

        <Link to="/dashboard/about" className="hover:text-yellow-400">
          About
        </Link>
      </nav>

    </div>
  );
}

export default Sidebar;