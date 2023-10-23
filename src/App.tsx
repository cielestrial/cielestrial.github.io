import { Route, Routes } from "react-router-dom";
import Background from "./pages/Background";
import Portfolio, { sections } from "./pages/Portfolio";

function App() {
  const sectionsArray: sections[] = [
    "Home",
    "About",
    "Projects",
    "Testimonials",
    "Contact",
  ];

  return (
    <Routes>
      <Route
        key="Portfolio"
        path="/"
        element={
          <Background>
            <Portfolio section="Home" />
          </Background>
        }
      />
      {sectionsArray.map((section) => (
        <Route
          key="Portfolio"
          path={"/" + section}
          element={
            <Background>
              <Portfolio section={section} />
            </Background>
          }
        />
      ))}
    </Routes>
  );
}

export default App;
