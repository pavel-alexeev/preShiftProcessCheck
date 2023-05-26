import "./NavBar.css";
import companyLogo from "../img/bg-logo.png";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar-sub">
        <div>
          <h1>Pre-Shift Process Check</h1>
        </div>
        <div className="logo">
          <img className="companyLogo" src={companyLogo} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
