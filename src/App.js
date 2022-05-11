import logo from './logo.svg';
import './App.css';
import Landing from './Component/Landing';
import Error from './Component/Error';
import Movies from './Component/Movies';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import NavBar from './Component/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="*" element={<Error />} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
