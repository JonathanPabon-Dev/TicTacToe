import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { RouterProvider, createHashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Game } from "./components/Game/Game.jsx";
import { ScientistTable } from "./components/ScientistTable/ScientistTable.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Game />,
  },
  {
    path: "/table",
    element: <ScientistTable />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
