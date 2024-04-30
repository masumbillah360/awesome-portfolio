"use client";

import { useEffect, useState } from "react";

const ScrollButton = () => {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1024) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);

  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {scrollTop && (
        <button
          onClick={bottomToTop}
          className="backToTop !bg-primary !dark:bg-primary-foreground"
        >
          &#8593;
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
