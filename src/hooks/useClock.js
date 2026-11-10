import { useSyncExternalStore } from "react";

// Current local time as "HH:MM" (24-hour), updated on each minute change.
const format = (date) =>
  `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;

const subscribe = (onChange) => {
  let timer;
  const msToNextMinute = () => 60000 - (Date.now() % 60000) + 50;
  const tick = () => {
    onChange();
    timer = setTimeout(tick, msToNextMinute());
  };
  timer = setTimeout(tick, msToNextMinute());
  // Background tabs throttle timers, so refresh as soon as the tab is visible again.
  document.addEventListener("visibilitychange", onChange);
  return () => {
    clearTimeout(timer);
    document.removeEventListener("visibilitychange", onChange);
  };
};

// `serverTime` is what the pre-rendered HTML shows (and hydration expects);
// the browser then switches to the visitor's current time.
export default function useClock(serverTime) {
  return useSyncExternalStore(subscribe, () => format(new Date()), () => serverTime);
}
