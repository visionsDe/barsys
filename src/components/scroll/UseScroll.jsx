import { useEffect } from "react";
const UseScroll = (callback) => {
  useEffect(() => {
    const handleScroll = () => {
      callback(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [callback]);
};
export default UseScroll;