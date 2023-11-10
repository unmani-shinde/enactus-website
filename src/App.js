import './App.css';
import EnactusHome from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EnactusNavBar from './components/NavBar';

function App() {
  return (  

    <div className="App">      
      <Router>
        <EnactusNavBar/>
        <Routes>
          <Route path="/" element={<EnactusHome/> } />
        </Routes>
      </Router>            
    </div>
  );
}

export default App;
