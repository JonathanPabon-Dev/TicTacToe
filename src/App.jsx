import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Game } from "./components/Game/Game";
import { ScientistTable } from "./components/ScientistTable/ScientistTable";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <h1>
        TIC <span className="primary">TAC</span> TOE
      </h1>
      <Routes>
        <Route path="/" exact element={<Game />} />
        <Route path="/table" element={<ScientistTable />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
