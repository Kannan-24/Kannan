import useClock from "../hooks/useClock";
import "./HeroScene.css";

// Animated layer over the hero illustration. The SVG uses the source image's own
// pixel grid (1374x1145), so every effect sits on the right spot and scales and
// floats with the picture. Light effects add light (mix-blend-mode: screen); the
// blink draws eyelids normally. Motion is off for visitors who prefer reduced
// motion (the clock stays, the speech bubble shows its first line).
// Positions were measured on the image; if the image changes, re-measure them.
const HeroScene = () => {
  // Pre-rendered HTML (and no-JS visitors) show 11:47; the browser shows live time.
  const [hours, minutes] = useClock("11:47").split(":");

  return (
    <>
      <svg className="hero-scene" viewBox="0 0 1374 1145" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="hs-lid-left" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8a4a2d" />
            <stop offset="1" stopColor="#a35634" />
          </linearGradient>
          <linearGradient id="hs-lid-right" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#b36239" />
            <stop offset="1" stopColor="#a85834" />
          </linearGradient>
          <filter id="hs-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" />
          </filter>
          <filter id="hs-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* Me: eyelids close for a moment every few seconds */}
        <g className="hs-anim">
          <g className="hs-lid">
            <ellipse cx="291" cy="358" rx="18" ry="7.5" fill="url(#hs-lid-left)" />
            <path className="hs-lash" d="M273.5 360 Q291 366.5 308.5 360" />
          </g>
          <g transform="rotate(-6 360.5 352.5)">
            <g className="hs-lid">
              <ellipse cx="360.5" cy="352.5" rx="18.5" ry="7" fill="url(#hs-lid-right)" />
              <path className="hs-lash" d="M342.5 354 Q360.5 360.5 378.5 354" />
            </g>
          </g>
        </g>

        {/* Watch on my wrist: buzz ripples, the screen lights up, a check pings up */}
        <g className="hs-anim hs-light">
          <ellipse className="hs-ripple" cx="665" cy="745" rx="26" ry="16" />
          <ellipse className="hs-ripple hs-ripple-2" cx="665" cy="745" rx="26" ry="16" />
          <polygon
            className="hs-watch-screen"
            points="642,738 680,742 688,751 648,749"
            filter="url(#hs-soft)"
          />
        </g>
        <g className="hs-anim hs-ping">
          <circle cx="684" cy="712" r="12" />
          <path d="M678.5 712.5 l4 4 l7.5 -8.5" />
        </g>

        {/* Monitor: the current line steps through the code, cursor at the line end */}
        <g className="hs-anim hs-light">
          <rect className="hs-code-line" x="766" y="-5.5" width="308" height="11" rx="2" />
          <g className="hs-code-caret-pos">
            <rect className="hs-code-caret" x="4" y="-5.5" width="2.5" height="11" />
          </g>
        </g>

        {/* Laptop: Build, Test, Deploy tick in turn, then "All Good!" lights up */}
        <g className="hs-anim hs-light" filter="url(#hs-glow)">
          <circle className="hs-tick hs-tick-1" cx="749" cy="566" r="13" />
          <circle className="hs-tick hs-tick-2" cx="742" cy="594" r="13" />
          <circle className="hs-tick hs-tick-3" cx="734" cy="622" r="13" />
          <rect className="hs-good" x="717" y="642" width="136" height="44" rx="12" />
        </g>

        {/* Coffee: steam rising from the mug */}
        <g className="hs-anim hs-light" filter="url(#hs-soft)">
          <path className="hs-steam hs-steam-1" d="M1216 634 c-7 -10 7 -20 0 -30 s-7 -20 0 -30" />
          <path className="hs-steam hs-steam-2" d="M1234 630 c7 -10 -7 -20 0 -30 s7 -20 0 -30" />
          <path className="hs-steam hs-steam-3" d="M1252 634 c-7 -10 7 -20 0 -30 s-7 -20 0 -30" />
        </g>

        {/* Cat: z z Z drifting up while it sleeps */}
        <g className="hs-anim hs-light">
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

      {/* Speech bubble by my head: typing dots, then a line, three lines in turn */}
      <div className="hs-bubble" aria-hidden="true">
        <span className="hs-bubble-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="hs-bubble-msg">Hi, I&apos;m Kannan 👋</span>
        <span className="hs-bubble-msg">Turning ideas into code…</span>
        <span className="hs-bubble-msg">Let&apos;s build something!</span>
      </div>
    </>
  );
};

export default HeroScene;
