import './App.css';
import Header from './component/header';
import Home from './home';
import About from './about';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Contact from './contact';

function App() {
  return (
    <Router>
    <div className="semuanya">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;