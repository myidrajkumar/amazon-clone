import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='checkout' element={<h1>I am heading!!!</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
