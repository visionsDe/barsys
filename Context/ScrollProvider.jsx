import React, { createContext, useEffect, useState } from "react";

export const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
  const [scrollEvent, setScrollEvent] = useState(null);
  useEffect(() => {
    window.onscroll = (e) => setScrollEvent(e);
  }, []);
  return (
    <ScrollContext.Provider value={scrollEvent}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
