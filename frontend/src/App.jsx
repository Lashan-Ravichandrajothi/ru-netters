import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './components/Navbar';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Player from './components/Players';
import { useParams } from 'react-router-dom';
import Plan from './pages/Plan';

function App() {
  const { playerId } = useParams(); // Extract player ID from URL
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
              path='/admin'
              element={<Admin />}
            />
            <Route 
              path="/admin/players"
              element={<Player />}
            />
            <Route 
              path="/coaching-plan"
              element={<Plan />}
            />
          </Routes>
        </div>
      </BrowserRouter> 
    </div>
  );
}

export default App;
