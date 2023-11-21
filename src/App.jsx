import "./App.css";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/header";
import { Know } from "./components/know/know";
import { Projects } from "./components/projects/Projects";

function App() {
  return (
    <>
      <Header />
      <Projects />
      <Know />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
