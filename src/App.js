import './App.css';
// import EnactusHome from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import EnactusNavBar from './components/NavBar';
import EnactusHome2 from './pages/Home2';
import Tatpar from './pages/Tatpar';

function App() {
  return (  

    <div className="App">      
      <Router>
        {/* <EnactusNavBar/> */}
        <Routes>
          <Route path="/" element={<EnactusHome2/> } />
          <Route path="/tatpar" element={<Tatpar/>} />
        </Routes>
      </Router>            
    </div>
  );
}

export default App;
