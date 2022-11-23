import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/:user" element={<User />} />
    </Routes>
  );
}

export default App;
