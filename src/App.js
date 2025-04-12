import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AppRoutes from "./routes/Routes";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Footer/>
    </Router>
  );
}

export default App;
