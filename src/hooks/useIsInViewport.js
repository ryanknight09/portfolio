import { useState, useEffect, useRef } from "react";

const useIsInViewport = () => {
  const elementRef = useRef();
  const [isInViewPort, setIsInViewPort] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isInViewPort = !!entries[0]?.isIntersecting;

        setIsInViewPort(isInViewPort);
      },
      { threshold: "0.2" }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  return { elementRef, isInViewPort };
};

export default useIsInViewport;
