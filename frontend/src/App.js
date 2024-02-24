import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './components/Navbar';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Player from './pages/Player';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <div className="pages">
          <Routes>
            <Route 
              path='/'
              element={<Home />}
            />
            <Route 
              path='/about'
              element={<About />}
            />
            <Route 
              path='/dashboard'
              element={<Dashboard />}
            />
            <Route 
              path='/login'
              element={<Login />}
            />
            <Route 
              path='/login/admin'
              element={<Admin />}
            />
            <Route 
              path='/playerview'
              element={<Player />}
            />
          </Routes>
        </div>
      </BrowserRouter> 
    </div>
  );
}

export default App;
