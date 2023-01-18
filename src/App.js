import './App.css';
import MainFeed from './components/main-feed';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EnteringProfile from './components/Entering-profile';

function App () {
  return (
    <div className="App">
      <Router>
        <Routes> 
        <Route path="/https://juancho3000.github.io/instagram-clone" element={<MainFeed/>}/>
        <Route path="/Entering-profile" element={<EnteringProfile/>}/>
      </Routes> 
      </Router>
    </div>
  );
}
export default App;