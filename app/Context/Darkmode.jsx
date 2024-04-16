"use client";
import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const Darkmode = ({ children }) => {
  // Retrieve the initial darkMode state from local storage or default to false
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  // Update local storage whenever darkMode state changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export { Darkmode, ThemeContext };
