import Lenis from 'lenis'
import Landing from "./Landing";
import ProjectsShowCase from "./ProjectsShowCase";
import Skills from "./Skills";
import About from "./About";
import ProfessionalLinks from "./ProfessionalLinks";
import Connect from "./Connect";
import Footer from "./Footer";
import PreLoader from "./PreLoader";
import Loader from "./Loader";
import UiButton from "./preloader/UiButton";
import Resume from "./Resume";

import { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BurgerMenu from "./router/BurgerMenu";
import MiniCursor from "./cursor/MiniCursor";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [showPreLoader, setShowPreLoader] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [showLanding, setShowLanding] = useState(false);
  const [fade, setFade] = useState(false);
  const [currentSection, setCurrentSection] = useState('home'); // Track current section

  // Handle when the loader finishes
  const handleLoaderFinish = () => {
    setTimeout(() => {
      setShowLoader(false);
      setShowLanding(true);
      setFade(true);
      ScrollTrigger.refresh();
    }, 100);
  };

  // Handle button click to hide preloader and show loader
  const handleUiButtonClick = () => {
    setShowPreLoader(false);
    setTimeout(() => {
      setShowLoader(true);
    }, 200);
  };

  // Ensure ScrollTrigger is set up correctly on page load and refresh
  useLayoutEffect(() => {
    if (!showLanding) return; // Prevent running when not showing landing
  
    const sections = document.querySelectorAll("section");
  
    sections.forEach((section, i) => {
      const bgColor = section.getAttribute("data-bg");
  
      ScrollTrigger.create({
        trigger: section,
        start: "top 50%",
        onEnter: () => {
          const sectionId = section.getAttribute("id");
          setCurrentSection(sectionId); // Update current section
          gsap.to("body", {
            backgroundColor: bgColor,
            duration: 1.1,
            ease: "power1.inOut",
          });
        },
        onLeaveBack: () => {
          const prevColor = i === 0 ? "#fff" : sections[i - 1].getAttribute("data-bg");
          gsap.to("body", {
            backgroundColor: prevColor,
            duration: 1.1,
            ease: "power1.inOut",
          });
        },
      });
    });
  
    // Refresh ScrollTrigger after everything is loaded
    ScrollTrigger.refresh();
  
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [showLanding]); // Add showLanding as a dependency
  

  useEffect(()=>{
    // Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

  })


  return (
    <div>
      <div className="overflow-hidden relative">
        {showPreLoader && <PreLoader />}
        {showLoader ? (
          <Loader onFinish={handleLoaderFinish} />
        ) : (
          !showLanding && <UiButton onButtonClick={handleUiButtonClick} />
        )}

        {showLanding && (
          <div
            className={`transition-opacity duration-1000 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            
            <BurgerMenu />

            {/* Conditionally render MiniCursor here */}
            {currentSection !== 'professional-links' && (
              <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999 }}>
                <MiniCursor />
              </div>
            )}

            <section id="home">
              <Landing />
            </section>

            <section data-bg="#ffdfaa" id="projects">
              <ProjectsShowCase
                title="Projects"
                video1="/videos/PokemonVid.mp4"
                video2="/videos/modernPortfolio.mkv"
                img1="/images/pokemonImg.png"
                img2="/images/ModernPortfolio.png"
                p1="An interactive web app showcasing Pokémon cards with search, filter, and favorite features. Users can log in, like, and save their favorite cards in a personalized collection."
                p2="A modern web portfolio showcasing dynamic mouse effects, text hover interactions, and more."
                gitrepo1="https://github.com/SDikshith78/Pokemon-Card-Collection"
                gitrepo2="https://github.com/SDikshith78/modern-web-portfolio-application"
                host1="https://pokemon-cards-2c64a.web.app/"
                host2="https://modern-web-portfolio-application.netlify.app/"
              />
            </section>

            <section data-bg="#fabbdd">
              <ProjectsShowCase
                video1="/videos/Netflix.mkv"
                video2="/videos/Figma.mp4"
                img1="/images/Netflix.jpg"
                img2="/images/Figmaimg.png"
                p1="A Netflix clone with Firebase for secure accounts, Axios, and React Router."
                p2="A local grocery case study and its prototype."
                gitrepo1="https://github.com/SDikshith78/Netflix-India-Clone"
                gitrepo2="https://www.behance.net/gallery/180066621/Local-Grocery-App-Case-Study-and-Prototype"
                host1="https://sdikshith-netflix-clone.web.app/"
                host2="https://www.behance.net/gallery/180066621/Local-Grocery-App-Case-Study-and-Prototype"
              />
            </section>

            <section data-bg="#e0e0e0" id="skills">
              <Skills />
            </section>
            <section data-bg="#000000" style={{ height: "100vh" }} id="about">
              <About />
            </section>

            <section data-bg="#D5F5E6" id="resume">
              <Resume />
            </section>

            <section data-bg="#000000" id="professional-links">
              <ProfessionalLinks />
            </section>

            <section data-bg="#fff" id="connect">
              <Connect />
            </section>

            <section data-bg="#0f172a" style={{ height: "65vh" }}>
              <Footer />
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
