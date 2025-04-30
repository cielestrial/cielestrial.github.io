import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { StateProvider } from './utils/ContextProvider';

export default function AppWrapper() {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <StateProvider>
        <App />
      </StateProvider>
    </BrowserRouter>
  );
}
