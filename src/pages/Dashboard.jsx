import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex">

      {/* Sidebar */}
      <div className="w-64 min-h-screen bg-gray-900 text-white flex flex-col p-6 shadow-lg">
        <Link to="/dashboard">Home</Link><br />
        <Link to="/dashboard/characters">Characters</Link><br />
        <Link to="/dashboard/about">About</Link>
      </div>

      {/* Content */}
      <div className="p-4 w-3/4">
        <Outlet />
      </div>

    </div>
  );
}

export default Dashboard;