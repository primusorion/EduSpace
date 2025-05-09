import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Modules from './pages/Modules';
import Quizzes from './pages/Quizzes';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/quizzes" element={<Quizzes />} /> {/* Simplified route */}
      </Routes>
    </>
  );
}

export default App;
