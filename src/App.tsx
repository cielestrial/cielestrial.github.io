import { Route, Routes } from 'react-router-dom';

import Background from './pages/Background';
import Portfolio from './pages/Portfolio';

export default function App() {
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
