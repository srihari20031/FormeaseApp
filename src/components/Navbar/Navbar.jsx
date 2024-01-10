import Logo from "../../assets/img/FormeaseLogo.png";
import Profile from "../../assets/img/Profile.jpg";
import { GoBell } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import "./navbar.css"


const Navbar = () => {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={Logo} alt="" />
        <a className="navbar-brand" href="#">
          Home
        </a>
        <a className="navbar-brand" href="#">
          Result
        </a>
        <a className="navbar-brand" href="#">
          FAQ
        </a>
        <a className="navbar-brand" href="#">
          About Us
        </a>
        <a className="navbar-brand" href="#">
          Contact Us
        </a>
        <div className="searchbar">
            <CiSearch />
            <input type="text" placeholder="Search exams here"/>
        </div>
        <GoBell className="bell" />
        <img src={Profile} alt="" />
      </nav>
    
  );
};

export default Navbar;
