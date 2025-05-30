import Navbar from './components/Navbar';
import Sidebars from './components/Sidebars';


import './components/FirstSection.css';
import './App.css';


import FirstSection from './components/FirstSection';

/**
 * Single‑section demo with a mini‑page column that scrolls even when the
 * cursor is outside it.  We now animate the wheel movement so the scroll
 * feels smoother (ease‑out inertia).
 */
function App() {

// App.js  ── ADD THIS       // already present – just here for context



  return (
    <div className="App">
      <Sidebars/>
      <FirstSection />
      <Navbar/>

    </div>
  );
}

export default App;
