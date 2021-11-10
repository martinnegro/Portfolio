import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import LangsContextProvider from './contexts/LangsContext';
import './App.css';
import NavBar from './components/NavBar';
import Page from './containers/Page';
import store from './redux/store';
import LangsButtons from './components/LangsButtons';


function App() {
  return (
    <Provider store={store}>
      <LangsContextProvider>
        <BrowserRouter>
          <LangsButtons path='/'></LangsButtons>
          <NavBar path='/' />
          <Page path='/'/>
        </BrowserRouter>
      </LangsContextProvider>
    </Provider>
  );
}

export default App;
