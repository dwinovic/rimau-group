import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import './App.css';
import Routes from './configs/router';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
