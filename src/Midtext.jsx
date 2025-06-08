import React, { useEffect, useState } from 'react';

function Midtext() {
  const texts = [
    "you.", "your story.", "your vibe.", "your soul.", "your scars.",
    "your journey.", "your fire.", "your truth.", "your shadow.", 
    "your art.", "your edge.", "your chaos.", 
    "your peace.", "your past.", "your future."
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [letters, setLetters] = useState([]);
  const [isDisappearing, setIsDisappearing] = useState(false);

  useEffect(() => {
    const titleText = texts[currentTextIndex];
    const lettersArray = titleText.split("").map((ltr, idx) => ({
      letter: ltr === " " ? "\u00A0" : ltr,
      delay: `${idx * 100}ms`
    }));
    setLetters(lettersArray);

    const timer = setTimeout(() => {
      setIsDisappearing(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentTextIndex, isDisappearing]);

  useEffect(() => {
    if (isDisappearing) {
      const timer = setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsDisappearing(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isDisappearing]);

  return (
    <span style={{ display: 'inline-block' }}>
      <style>{`
        @font-face {
          font-family: 'Moontime';
          src: url('/assets/moontime.ttf') format('truetype');
        }

        .title {
          font-family: 'Moontime', cursive;
          font-size: 4.5rem;
          color: #fff9c4;
          white-space: nowrap;
          text-shadow:
            0 0 5px #fff176,
            0 0 10px #ffeb3b,
            0 0 20px #fdd835,
            0 0 40px #fdd835,
            0 0 80px #fdd835;
        }

        .title .ltr {
          display: inline-block;
          opacity: 0;
          animation: fade-in 500ms ease-in-out var(--delay) forwards;
        }

        .title.disappearing .ltr {
          opacity: 1;
          animation: fade-out 500ms ease-in-out var(--delay) forwards;
        }

        @keyframes fade-in {
          from {
            transform: translateY(0.5em);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fade-out {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(-0.5em);
            opacity: 0;
          }
        }
      `}</style>

      <span className={`title ${isDisappearing ? 'disappearing' : ''}`}>
        {letters.map((ltrObj, idx) => (
          <span
            key={idx}
            className="ltr"
            style={{ "--delay": isDisappearing ? `${(letters.length - idx - 1) * 100}ms` : ltrObj.delay }}
          >
            {ltrObj.letter}
          </span>
        ))}
      </span>
    </span>
  );
}

export default Midtext;

