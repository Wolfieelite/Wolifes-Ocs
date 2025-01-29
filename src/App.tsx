import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Create from "./pages/Create";
import { ThemeProvider } from "@mui/material";

function App() {
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
