import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import About from "./hero-section/About";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <About />
    </BrowserRouter>
  );
}

export default App;
