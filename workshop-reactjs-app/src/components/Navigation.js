import { NavLink } from "react-router-dom";

function Navigation() {
    return (
      <div className="navigation">
          <ul>
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/About">About</NavLink>
          </ul>
      </div>
    );
}

export default Navigation;