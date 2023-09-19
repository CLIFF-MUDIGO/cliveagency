import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Client from "./pages/clients";
import Contact from "./pages/contact";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/client" element={<Client />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
