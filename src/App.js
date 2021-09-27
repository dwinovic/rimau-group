import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import Routes from './configs/router';
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyle } from './styles';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
