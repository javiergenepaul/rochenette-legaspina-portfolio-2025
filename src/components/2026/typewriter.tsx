"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  /** ms to wait after fully typing a word before deleting */
  pauseMs?: number;
  /** ms per character when typing */
  typeSpeed?: number;
  /** ms per character when deleting */
  deleteSpeed?: number;
  className?: string;
}

export function Typewriter({
  words,
  pauseMs = 1800,
  typeSpeed = 80,
  deleteSpeed = 45,
  className,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed === current) {
      // Fully typed — pause then start deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && displayed === "") {
      // Fully deleted — move to next word
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      const next = isDeleting
        ? current.slice(0, displayed.length - 1)
        : current.slice(0, displayed.length + 1);
      timeout = setTimeout(() => setDisplayed(next), isDeleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, pauseMs, typeSpeed, deleteSpeed]);

  return (
    <span className={className}>
      {displayed}
      <span className="inline-block w-px animate-pulse ml-0.5 bg-current">&nbsp;</span>
    </span>
  );
}
