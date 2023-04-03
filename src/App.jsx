import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import Hero from "./hero-section/Hero";
import Welcome from "./welcome-text/Welcome";
import Producten from "./onze-producten/Producten";
import Service from "./service-section/Service";
import Reference from "./reference/Reference";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Hero />
      <Welcome />
      <Producten />
      <Service />
      <Reference />
    </BrowserRouter>
  );
}

export default App;
