import {Routes , Route} from "react-router-dom" 
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Nav from "./components/Navbar";
function App() {
  return (
    <>
    < Nav  />
    <Routes>
        <Route path = "/" element = {Home} />
        <Route path = "./pages/About" element = {About} />
        <Route path = "./pages/Contact" element = {Contact} />
    </Routes>
    </>
  );
}

export default App;