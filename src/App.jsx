import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import Hero from "./hero-section/Hero";
import Welcome from "./welcome-text/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Hero />
      <Welcome />
    </BrowserRouter>
  );
}

export default App;
