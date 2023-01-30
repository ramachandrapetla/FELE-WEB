import './FeleNavbar.css'

function FeleNavbar() {
  return (
    <div className="fele-navbar">
      <div className="logo">
        <h3>FELE</h3>
      </div>
      <div className="nav-links">
        <div className="navbar-item">
          <a href="/">Home</a>
        </div>
        <div className="navbar-item">   
          <a href="#home">Mentors</a>
        </div>
        <div className="navbar-item">   
          <a href="/team">Team</a>
        </div>
        <div className="navbar-item">  
          <a href="#home">Meetings</a>
        </div>
        <div className="navbar-item">  
          <a href="#home">Delivarables</a>
        </div>
        <div className="navbar-item">  
          <a href="#home">Weekly Reports</a>
        </div>
        <div className="navbar-item">  
          <a href="#home">References</a>
        </div>
      </div>
    </div>
  );
}

export default FeleNavbar;