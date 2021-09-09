import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import NavBar from './components/NavBar';
import Page from './containers/Page';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar path='/' />
        <Page path='/'/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
