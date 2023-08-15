import "./App.css";
import About from "./components/About/About";
import Layout from "./components/Layout/Layout";
import Education from "./pages/Education/Education";
import Project from "./pages/Project/Project";
import TechStack from "./pages/TechStack/TechStack";
import WorkExp from "./pages/Work-exp/WorkExp";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div>
      <Layout />
      <div className="container">
        <About />
        <Education />
        <TechStack />
        <Project />
        <WorkExp />
        <Contact />
      </div>
      <ScrollToTop smooth />
    </div>
  );
}

export default App;
