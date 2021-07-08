import { useEffect, useState } from "react";

const useShowNav = (ref) => {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let prevScroll = window.pageYOffset;

    const onScroll = (e) => {
      let currentScroll = window.pageYOffset;
      prevScroll > currentScroll ? setShowNav(true) : setShowNav(false);
      prevScroll = currentScroll;
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return showNav;
};

export default useShowNav;
