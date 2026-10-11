import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../lib/utils";

const GLYPHS = "!<>-_\\/[]{}=+*^?#$%&01";

// "Decrypts" text from random glyphs into the final string, left to right.
export default function useScramble(target, { duration = 1100, delay = 250 } = {}) {
  const [output, setOutput] = useState(() => (prefersReducedMotion() ? target : ""));

  useEffect(() => {
    if (prefersReducedMotion()) {
      setOutput(target);
      return undefined;
    }

    let frame;
    let start;

    const tick = (now) => {
      if (start === undefined) start = now + delay;
      const progress = Math.min(Math.max((now - start) / duration, 0), 1);
      const revealed = Math.floor(progress * target.length);

      let next = target.slice(0, revealed);
      for (let i = revealed; i < target.length; i += 1) {
        next += target[i] === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      setOutput(next);

      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, delay]);

  return output;
}
