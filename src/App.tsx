import { Route, Routes } from "react-router-dom";
import Background from "./pages/Background";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Background>
            <Portfolio />
          </Background>
        }
      />
    </Routes>
  );
}

export default App;
