import './App.css';
import Search from "./views/Search/Search.jsx";
import Navbar from './views/Navbar/Navbar.jsx'
import Category from "./views/Home/components/Category/Category.jsx";
import Cards from './views/Cards/Cards';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Search />
      <Category />
      <Cards />
    </div>
  );
}

export default App;
