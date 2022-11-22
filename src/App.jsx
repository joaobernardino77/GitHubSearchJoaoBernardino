import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/User";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/:user" element={<User />} />
    </Routes>
  );
}

export default App;
