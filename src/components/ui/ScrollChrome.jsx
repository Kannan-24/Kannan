import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollChrome.css";

// Reading-progress bar + back-to-top button, driven by one rAF-throttled listener.
const ScrollChrome = () => {
  const barRef = useRef(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
      setShowTop(window.scrollY > 700);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <div ref={barRef} className="scroll-progress-bar" />
      </div>
      <button
        type="button"
        className={`back-to-top ${showTop ? "is-shown" : ""}`}
        onClick={() => window.scrollTo({ top: 0 })}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <FaArrowUp aria-hidden="true" />
      </button>
    </>
  );
};

export default ScrollChrome;
