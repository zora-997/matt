import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Hero from "../pages/Hero";
import AboutSection from "../pages/AboutSection";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import ServicesItem from "../pages/ServicesItem";
import AllProjects from "../pages/AllProjects";
import ProjectItem from "../pages/ProjectItem";
import MattSchool from "../pages/MattSchool";
import MattFurnishing from "../pages/MattFurnishing";
// import ImplementedProjects from "../pages/ImplementedProjects";
import HomeButton from "../components/HomeButton";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        index
        path="/"
        element={
          <div className="h-full">
            <Hero /> <AboutSection />
            {/* <ImplementedProjects /> */}
            <Services />
            <Projects />
            <HomeButton />
          </div>
        }
      />
      <Route
        path="/about"
        element={
          <div className="h-full">
            <About />
          </div>
        }
      />
      <Route
        path="/mattschool"
        element={
          <div className="h-full">
            <MattSchool />
          </div>
        }
      />
      <Route
        path="/mattfurnishing"
        element={
          <div className="h-full">
            <MattFurnishing />
          </div>
        }
      />
      <Route
        path="/services/*"
        element={
          <div className="h-full">
            <ServicesItem />
          </div>
        }
      />
      <Route
        path="/all-projects"
        element={
          <div className="h-full">
            <AllProjects />
          </div>
        }
      />
      <Route
        path="/all-projects/*"
        element={
          <div className="h-full">
            <ProjectItem />
          </div>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
