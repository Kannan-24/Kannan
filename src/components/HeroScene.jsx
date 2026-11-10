import useClock from "../hooks/useClock";
import "./HeroScene.css";

// Animated layer over the hero illustration. The SVG uses the source image's own
// pixel grid (1374x1145), so every effect sits on the right spot and scales and
// floats with the picture. Effects only add light (mix-blend-mode: screen), and
// everything except the clock is hidden for visitors who prefer reduced motion.
// Positions were measured on the image; if the image changes, re-measure them.
const HeroScene = () => {
  // Pre-rendered HTML (and no-JS visitors) show 11:47; the browser shows live time.
  const [hours, minutes] = useClock("11:47").split(":");

  return (
    <svg className="hero-scene" viewBox="0 0 1374 1145" aria-hidden="true" focusable="false">
      <defs>
        <filter id="hs-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        <filter id="hs-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      {/* Monitor: the current line steps through the code, cursor at the line end */}
      <g className="hs-anim">
        <rect className="hs-code-line" x="766" y="-5.5" width="308" height="11" rx="2" />
        <g className="hs-code-caret-pos">
          <rect className="hs-code-caret" x="4" y="-5.5" width="2.5" height="11" />
        </g>
      </g>

      {/* Laptop: Build, Test, Deploy tick in turn, then "All Good!" lights up */}
      <g className="hs-anim" filter="url(#hs-glow)">
        <circle className="hs-tick hs-tick-1" cx="749" cy="566" r="13" />
        <circle className="hs-tick hs-tick-2" cx="742" cy="594" r="13" />
        <circle className="hs-tick hs-tick-3" cx="734" cy="622" r="13" />
        <rect className="hs-good" x="717" y="642" width="136" height="44" rx="12" />
      </g>

      {/* Coffee: steam rising from the mug */}
      <g className="hs-anim" filter="url(#hs-soft)">
        <path className="hs-steam hs-steam-1" d="M1216 634 c-7 -10 7 -20 0 -30 s-7 -20 0 -30" />
        <path className="hs-steam hs-steam-2" d="M1234 630 c7 -10 -7 -20 0 -30 s7 -20 0 -30" />
        <path className="hs-steam hs-steam-3" d="M1252 634 c-7 -10 7 -20 0 -30 s-7 -20 0 -30" />
      </g>

      {/* Cat: z z Z drifting up while it sleeps */}
      <g className="hs-anim">
        <text className="hs-z hs-z-1" x="1060" y="940">z</text>
        <text className="hs-z hs-z-2" x="1060" y="940">z</text>
        <text className="hs-z hs-z-3" x="1060" y="940">Z</text>
      </g>

      {/* Desk clock: live time (the painted digits were removed from the image) */}
      <text className="hs-clock" x="1095.5" y="648" textAnchor="middle">
        {hours}
        <tspan className="hs-clock-colon">:</tspan>
        {minutes}
      </text>
    </svg>
  );
};

export default HeroScene;
