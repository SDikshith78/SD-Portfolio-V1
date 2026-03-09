import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Cypher from "/public/Cypher";
import CypherTwo from "/public/CypherTwo";
import CypherThree from "/public/CypherThree";
import CypherFour from "/public/CypherFour";
import { OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [visibleModel, setVisibleModel] = useState(null);
  const [terminalText, setTerminalText] = useState("");
  const [bootComplete, setBootComplete] = useState(false);

  const containerRef = useRef();
  const aboutCardRef = useRef();
  const skillsRef = useRef([]);

  const terminalLines = [
    "> Initializing profile...",
    "> Loading developer data...",
    "> System Activated",
  ];

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 40%",
      onEnter: () => {
        setVisibleModel(0);
        startCypherAnimations();

        gsap.fromTo(
          aboutCardRef.current,
          { opacity: 0, x: 80 },
          { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" },
        );

        startTerminal();
      },
    });

    return () => trigger.kill();
  }, []);

  useEffect(() => {
    if (bootComplete) {
      gsap.fromTo(
        skillsRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.08,
          duration: 0.5,
          ease: "back.out(2)",
        },
      );
    }
  }, [bootComplete]);

  const startCypherAnimations = () => {
    setTimeout(() => setVisibleModel(1), 1490);
    setTimeout(() => setVisibleModel(2), 3600);
    setTimeout(() => setVisibleModel(3), 5800);
  };

  const startTerminal = () => {
    let lineIndex = 0;

    const typeLine = () => {
      if (lineIndex >= terminalLines.length) {
        setTimeout(() => setBootComplete(true), 400);
        return;
      }

      const line = terminalLines[lineIndex];
      let charIndex = 0;
      let currentText = "";

      const typeChar = () => {
        if (charIndex < line.length) {
          currentText += line[charIndex];
          setTerminalText((prev) => {
            const lines = prev.split("\n");
            lines[lineIndex] = currentText;
            return lines.join("\n");
          });

          charIndex++;
          setTimeout(typeChar, 20);
        } else {
          setTerminalText((prev) => prev + "\n");
          lineIndex++;

          setTimeout(typeLine, 500);
        }
      };

      typeChar();
    };

    typeLine();
  };

  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Tailwind CSS",
    "GSAP",
    "Figma",
    "Blender",
    "Adobe Photoshop",
    "Adobe After effects",
    "Adobe Premiere Pro",
  ];

  return (
    <div
      ref={containerRef}
      className="model_style bg-black relative"
      style={{ width: "100%", height: "100vh", display: "flex" }}
    >
      <h1 className="title text-5xl absolute left-[7%] mt-20 text-blue-500">
        About Me
      </h1>

      <Canvas camera={{ position: [10, -0.3, 40], fov: 7 }} className="model">
        <directionalLight intensity={4} position={[0, 10, 10]} />
        <ambientLight />
        <OrbitControls target={[1, 1.5, 0]} enableZoom={false} />

        <Suspense fallback={null}>
          <group scale={[1.5, 1.5, 1.5]} position={[-0.5, 0, 0]}>
            {visibleModel === 0 && <Cypher />}
            {visibleModel === 1 && <CypherTwo />}
            {visibleModel === 2 && <CypherThree />}
            {visibleModel === 3 && <CypherFour />}
          </group>
        </Suspense>
      </Canvas>

      <div
        ref={aboutCardRef}
        className="aboutCard absolute right-[23%] top-[14%] w-[523px] max-md:w-[90%] max-md:relative max-md:mx-auto max-md:top-0 max-md:right-0"
      >
        {!bootComplete && (
          <pre className="terminal">
            {terminalText}
            <span className="cursor">_</span>
          </pre>
        )}

        {bootComplete && (
          <div className="aboutContent ">
            <div className="scanline"></div>

            <div className="flex items-center gap-4 mb-6 cursor-pointer">
              <img
                src="/images/profile.png"
                alt="Sai Dikshith"
                className="profileImg"
              />

              <div>
                <h2 className="name-color text-xl text-cyan-400 font-semibold cursor-pointer">
                  Sai Dikshith Ajalade
                </h2>
                <p className="text-sm text-gray-400">Frontend Developer</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs mb-6 text-gray-300 cursor-pointer">
              <p>
                <span className="text-cyan-400">Unit:</span>
                <br />
                SDikshith
              </p>

              <p>
                <span className="text-cyan-400">DOB:</span>
                <br />
                955990028 UTC
              </p>

              <p>
                <span className="text-cyan-400">Location:</span>
                <br />
                Mangaluru, Karnataka
              </p>

              <p>
                <span className="text-cyan-400">Status:</span>
                <br />
                Activated
              </p>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed mb-4 cursor-pointer">
              I'm a front-end developer with a passion for crafting seamless,
              responsive interfaces using HTML, CSS, JavaScript, React.js, and
              Tailwind CSS. As a creative developer, I bring life to web
              experiences with smooth animations powered by GSAP, Locomotive
              Scroll.
            </p>

            <p className="text-sm text-gray-300 leading-relaxed mb-6 cursor-pointer">
              My expertise in UI/UX design, using Figma, ensures every
              interaction is intuitive and_delightful. I also love blending
              creativity with technology through 3D modeling in Blender and
              video editing in After Effects and Premiere Pro. I'm driven by a
              desire to create captivating digital experiences that leave a
              lasting impression.
            </p>

            {/* <div className="skills">
              {skills.map((skill, i) => (
                <span
                  key={skill}
                  ref={(el) => (skillsRef.current[i] = el)}
                  className="skill"
                >
                  {skill}
                </span>
              ))}
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
