import { BrowserRouter } from 'react-router';

import App from './App';
import { StateProvider } from './utils/ContextProvider';

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <StateProvider>
        <App />
      </StateProvider>
    </BrowserRouter>
  );
}
