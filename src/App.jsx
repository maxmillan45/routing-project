import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import About from "./pages/About";
import CharacterDetails from "./pages/CharacterDetails";
import Info from "./pages/Info";
import Episodes from "./pages/Episodes";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Redirect root to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<Dashboard />}>

          {/* Default page */}
          <Route index element={<Home />} />

          {/* Other pages */}
          <Route path="about" element={<About />} />
          <Route path="characters" element={<Characters />} />

          {/* Dynamic Route */}
          <Route path="characters/:id" element={<CharacterDetails />}>

            {/* Default tab (important!) */}
            <Route index element={<Info />} />

            {/* Nested routes */}
            <Route path="info" element={<Info />} />
            <Route path="episodes" element={<Episodes />} />

          </Route>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;