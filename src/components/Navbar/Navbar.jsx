import Logo from "../../assets/img/FormeaseLogos.png";
import Profile from "../../assets/img/Profile.jpg";
import { GoBell } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="outer-div">
      <nav className="navbar">
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
          <input type="text" placeholder="Search exams here" />
        </div>
        <GoBell className="bell" />
        <img src={Profile} alt="" />
      </nav>
    </div>
  );
};

export default Navbar;
