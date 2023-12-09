import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Crossfade from './components/Crossfade';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Crossfade children={<Home />} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;