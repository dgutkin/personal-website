import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import About from './pages/About';
import Projects from './pages/Projects';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
