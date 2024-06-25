import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Teams from './components/Teams';
import EnactusHome2 from './pages/Home2';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App" >
      <Router>
        <Routes>
          <Route path='/' element={<EnactusHome2/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/navigation' element={<NavigationBar/>}></Route>
          <Route path='/teams' element={<Teams/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
