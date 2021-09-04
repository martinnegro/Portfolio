import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Page from './containers/Page';

function App() {
  return (
    <BrowserRouter>
      
      <NavBar path='/' />
      <Page path='/'/>
      
    </BrowserRouter>
  );
}

export default App;
