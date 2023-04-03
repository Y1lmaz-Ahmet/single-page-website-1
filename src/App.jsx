import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import Hero from "./hero-section/Hero";
import Welcome from "./welcome-text/Welcome";
import Producten from "./onze-producten/Producten";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Hero />
      <Welcome />
      <Producten />
    </BrowserRouter>
  );
}

export default App;
