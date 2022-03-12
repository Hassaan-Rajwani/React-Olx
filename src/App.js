import './App.css';
import Router from './components/config/router';
import { store, persistor } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="">
          <Router />
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App;