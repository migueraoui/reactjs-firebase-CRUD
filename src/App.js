import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Writer from "./components/Writer";
import Reader from "./components/Reader";
import Updater from "./components/Updater";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Writer/>}/>
          <Route path="/writer" element={<Writer/>}/>
          <Route path="/reader" element={<Reader/>}/>
          <Route path="/updater" element={<Updater/>}/>
        </Routes>  
      </Router> 
    </div>
  );
}

export default App;
