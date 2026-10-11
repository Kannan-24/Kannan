import { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { TOAST_EVENT } from "../../lib/utils";
import "./Toaster.css";

const Toaster = () => {
  const [message, setMessage] = useState(null);
  const timer = useRef();

  useEffect(() => {
    const onToast = (event) => {
      setMessage((prev) => ({ text: event.detail, id: (prev?.id ?? 0) + 1 }));
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setMessage(null), 2400);
    };
    window.addEventListener(TOAST_EVENT, onToast);
    return () => {
      window.removeEventListener(TOAST_EVENT, onToast);
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <div className="toaster" role="status" aria-live="polite">
      {message && (
        <div className="toast" key={message.id}>
          <FaCheck aria-hidden="true" />
          <span>{message.text}</span>
        </div>
      )}
    </div>
  );
};

export default Toaster;
