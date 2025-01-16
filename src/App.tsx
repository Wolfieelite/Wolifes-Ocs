import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Create from "./pages/Create";

function App() {
  console.log("hello world");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/createoc"
          element={<Create />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
