import './App.css';
import Intro from './components/Body/Intro';
import Skills from './components/Body/Skills/Skills';
import { Route, Routes } from 'react-router';
import Work from './components/Body/Work/Work';
import Contact from './components/Body/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Intro/>}/>
        <Route exact path="/work" element={<Work/>}/>
        <Route exact path="/skill" element={<Skills/>}/>
        <Route exact path="/contact" element={<Contact/>}/>

      </Routes>

    </div>
  );
}

export default App;