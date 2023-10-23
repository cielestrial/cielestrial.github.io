import { Route, Routes } from "react-router-dom";
import Background from "./pages/Background";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Routes>
      <Route
        key="Base"
        path="/"
        element={
          <Background>
            <Portfolio section="Home" />
          </Background>
        }
      />
    </Routes>
  );
}

export default App;
