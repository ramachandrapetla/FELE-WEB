import './App.css';
import FeleNavbar from './Navbar/FeleNavbar';
import Team from './Team/Team';
import Home from './Home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <FeleNavbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/team" element={<Team />}/>
      </Routes>
    </Router>
    
    // <Router>
    //     <FeleNavbar />
    //     <Routes>
    //       <Route exact path="/" >
    //         <div>Home page</div>
    //       </Route>
    //       <Route exact path="/team" >
    //         <Team />
    //       </Route>
    //     </Routes>
    // </Router>
  );
}

export default App;
