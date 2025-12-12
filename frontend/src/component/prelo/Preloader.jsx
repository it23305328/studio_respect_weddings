import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2000); // start fade-out after 2s
    const finishTimer = setTimeout(() => onFinish(), 2500); // remove preloader after 2.5s
    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <img
        src="images/hero/my.png"
        alt="Preloader"
        className="preloader-image"
      />
    </div>
  );
};

export default Preloader;
