import { useState, useEffect } from "react";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const useBreakpoint = () => {
  const [screenSize, setScreenSize] = useState<string>("");

  useEffect(() => {

    const handleResize = () => {
      const width = window.innerWidth;

      if (width < breakpoints.sm) {
        setScreenSize("xs"); // Extra small screens (below sm)
      } else if (width >= breakpoints.sm && width < breakpoints.md) {
        setScreenSize("sm");
      } else if (width >= breakpoints.md && width < breakpoints.lg) {
        setScreenSize("md");
      } else if (width >= breakpoints.lg && width < breakpoints.xl) {
        setScreenSize("lg");
      } else if (width >= breakpoints.xl && width < breakpoints["2xl"]) {
        setScreenSize("xl");
      } else {
        setScreenSize("2xl");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export default useBreakpoint;
