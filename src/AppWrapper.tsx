import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { StateProvider } from './utils/ContextProvider';

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <StateProvider>
        <App />
      </StateProvider>
    </BrowserRouter>
  );
};

export default AppWrapper;
