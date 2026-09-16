import { Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";x
import Contact from "../pages/Contact"

function Navbar({ greeting}) {
  return (
    <nav>
      <h1>Hello Nani {greeting}</h1>
      <Link to = "../pages/Home">Home</Link>
      <Link to = "../pages/About">About</Link>
      <Link to = "../pages/Contact">Contact</Link>
    </nav>
  );
}

export default Navbar;