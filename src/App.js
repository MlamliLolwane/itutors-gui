import Home from './views/global/home';
import About from './views/global/about';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faSearch, faTimes, faSort } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

library.add(faStar, faSearch, faTimes, faSort)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Global Routes */}
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
