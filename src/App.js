import NavBar from './components/NavBar';
import About from './pages/About';
import Projects from './pages/Projects';

import './styles/App.css';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <About/>
        <Projects/>
    </div>
  );
}

export default App;
