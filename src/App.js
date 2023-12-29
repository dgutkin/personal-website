import './styles/App.css';

import NavBar from './components/NavBar';
import About from './pages/About';
import Projects from './pages/Projects';

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
