import MenuItem from "./components/MenuItem";
import { menuCollection } from "./storage/menuStorage";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  console.log(menuCollection.length);
  return (
    <BrowserRouter>
      <div className="grid grid-cols-12 bg-slate-950">
        <Sidebar />

        <Routes>
          <Route path="/Home" element={<Home />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
