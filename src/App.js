import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Projects from './pages/Projects';
import NavigationBar from './components/NavigationBar';
import EnactusHome2 from './pages/Home2';

function App() {
  return (
    <div className="App" >
      <Router>
        <Routes>
          <Route path='/' element={<EnactusHome2/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/navigation' element={<NavigationBar/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
