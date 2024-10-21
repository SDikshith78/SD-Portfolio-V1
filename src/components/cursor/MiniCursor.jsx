import React, { useEffect, useState } from "react";
import "./MiniCursor.css";
import gsap from "gsap";

function MiniCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState({ xscale: 1, yscale: 1 });
  const [prevPos, setPrevPos] = useState({ xprev: 0, yprev: 0 });

  useEffect(() => {
    let timeout;

    const circleChaptaKaro = () => {
      window.addEventListener("mousemove", (dets) => {
        clearTimeout(timeout);

        // Clamp scale values using gsap.utils.clamp
        const xscale = gsap.utils.clamp(0.8, 1.2, (dets.clientX - prevPos.xprev) / 100);
        const yscale = gsap.utils.clamp(0.8, 1.2, (dets.clientY - prevPos.yprev) / 100);

        // Update position and scale
        setPosition({ x: dets.clientX, y: dets.clientY });
        setScale({ xscale, yscale });

        // Update previous position
        setPrevPos({ xprev: dets.clientX, yprev: dets.clientY });

        // Reset scale after 100ms
        timeout = setTimeout(() => {
          setScale({ xscale: 1, yscale: 1 });
        }, 100);
      });
    };

    circleChaptaKaro();

    return () => {
      window.removeEventListener("mousemove", circleChaptaKaro);
      clearTimeout(timeout);
    };
  }, [prevPos]);

  return (
    <div className="mini-cursor">
      <div
        id="minicircle"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale.xscale}, ${scale.yscale})`,
        }}
      ></div>
    </div>
  );
}

export default MiniCursor;
