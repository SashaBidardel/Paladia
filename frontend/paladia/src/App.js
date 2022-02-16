import './App.css';
import Navbar from './views/Navbar/Navbar.jsx'
import Cards from './views/Cards/Cards';
import Home from "./views/Home/Home.jsx";
import Search from "./views/Search/Search.jsx";
import Footer from "./views/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Home />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
