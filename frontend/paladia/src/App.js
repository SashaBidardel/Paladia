import './App.css';
import Navbar from './views/Navbar/Navbar.jsx'
import Home from "./views/Home/Home.jsx";
import Search from "./views/Search/Search.jsx";
import Footer from "./views/Footer/Footer.jsx";
import Filter from "./views/Filter/Filter.jsx";
import Category from "./views/Home/components/Category/Category.jsx";
import Recommend from "./views/Home/components/Recommend/Recommend.jsx";
import { useState } from 'react';

function App() {
  const [ searchText, setSearchText ] = useState("");
  const [ showHome, setShowHome ] = useState(true);

  const hide = value => setShowHome(value);

  return (
    <div className="App">
      <Navbar onHide={hide}/>
      <Search setSearchText={setSearchText} />
      <Home showHome={showHome}>
        <Category onHide={hide}/>
        <Recommend />
      </Home>
      <Filter showHome={showHome} searchText={searchText} />
      <Footer />
    </div>
  );
}

export default App;
