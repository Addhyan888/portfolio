import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Props {
  text: string;
  speed?: number;
}

export default function Terminal({ text, speed = 50 }: Props) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-black/50 backdrop-blur rounded-lg p-4 font-mono text-green-400"
    >
      <div className="flex gap-2 mb-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="whitespace-pre-wrap">
        <span className="text-purple-400">$ </span>
        {displayText}
        <span className="animate-pulse">_</span>
      </div>
    </motion.div>
  );
}
