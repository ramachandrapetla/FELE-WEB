import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import FeleNavbar from './components/Navbar/FeleNavbar';
import Team from './components/Team/Team';
import Home from './components/Home/Home'
import Mentors from './components/Mentors/Mentors';
import Meetings from './components/Meetings/Meetings';
import Reports from './components/Reports/Reports';

function App() {
  return (
    <Router>
      <FeleNavbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/team" element={<Team />}/>
        <Route path="/mentors" element={<Mentors />}/>
        <Route path="/meetings" element={<Meetings />}/>
        <Route path="/reports" element={<Reports />}/>
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
