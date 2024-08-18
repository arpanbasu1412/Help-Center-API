import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Service } from "./pages/Service";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";



const App = () => {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
          </Routes>
          <Footer/>
        </Router>

      </div>
    </>
  );
};

export default App;


// npm run dev