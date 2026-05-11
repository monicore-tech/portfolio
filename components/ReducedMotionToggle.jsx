import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ReducedMotionToggle = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("reduced-motion");
    if (saved !== null) {
      setReducedMotion(JSON.parse(saved));
    } else {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setReducedMotion(prefersReduced);
    }
  }, []);

  const toggle = () => {
    const newVal = !reducedMotion;
    setReducedMotion(newVal);
    localStorage.setItem("reduced-motion", JSON.stringify(newVal));
    if (newVal) {
      document.documentElement.classList.add("reduce-motion");
    } else {
      document.documentElement.classList.remove("reduce-motion");
    }
  };

  useEffect(() => {
    if (reducedMotion) {
      document.documentElement.classList.add("reduce-motion");
    } else {
      document.documentElement.classList.remove("reduce-motion");
    }
  }, [reducedMotion]);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
      className="fixed bottom-4 right-4 z-50 bg-white dark:bg-black border border-black dark:border-white px-3 py-1 text-[10px] uppercase font-bold tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
    >
      Motion: {reducedMotion ? "OFF" : "ON"}
    </motion.button>
  );
};

export default ReducedMotionToggle;
