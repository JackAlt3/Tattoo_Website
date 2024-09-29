import React, { useEffect, useState } from 'react';

function Midtext() {
  const texts = ["Animation", "NEXT", "React", "Component"]; // Array of texts
  const [currentTextIndex, setCurrentTextIndex] = useState(0); // Index of the current text
  const [letters, setLetters] = useState([]); // State to store letters
  const [isDisappearing, setIsDisappearing] = useState(false); // State to handle disappearance

  useEffect(() => {
    // Set letters for the current text
    const titleText = texts[currentTextIndex]; 
    const lettersArray = titleText.split("").map((ltr, idx) => ({
      letter: ltr,
      delay: `${idx * 100}ms`
    }));

    setLetters(lettersArray);

    // Trigger the disappearing animation after 5 seconds
    const timer = setTimeout(() => {
      setIsDisappearing(true); // Trigger the disappear animation
    }, 5000); // 5 seconds delay before disappearing

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, [currentTextIndex, isDisappearing]); // Depend on currentTextIndex and isDisappearing

  useEffect(() => {
    if (isDisappearing) {
      // Wait for fade-out to finish before switching to the next text
      const timer = setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Cycle through texts
        setIsDisappearing(false); // Reset disappearance state
      }, 500); // Match this duration to the fade-out animation duration

      return () => clearTimeout(timer); // Cleanup on component unmount
    }
  }, [isDisappearing]); // Depend only on isDisappearing

  let parentStyle = {
    width: '50%',
    height: '20vh',
    display: 'flex',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={parentStyle}>
      {/* Embedded CSS */}
      <style>{`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        .title {
          font-size: 5rem;
          text-transform: uppercase;
          font-family: "Oswald", sans-serif;
          white-space: nowrap; /* Prevent text wrapping */
        }

        .title .ltr {
          display: inline-block;
          opacity: 0;
          animation: fade-in 500ms ease-in-out var(--delay) forwards;
        }

        .title.disappearing .ltr {
          opacity: 1; /* Ensure opacity is 1 before animation */
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
            transform: translateY(0); /* Start from the final position */
            opacity: 1;
          }
          to {
            transform: translateY(-0.5em);
            opacity: 0;
          }
        }
      `}</style>

      {/* Title with animated letters */}
      <div className={`title ${isDisappearing ? 'disappearing' : ''}`}>
        {letters.map((ltrObj, idx) => (
          <span
            key={idx}
            className="ltr"
            style={{ 
              "--delay": isDisappearing ? `${(letters.length - idx - 1) * 100}ms` : ltrObj.delay 
            }}
          >
            {ltrObj.letter}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Midtext;
