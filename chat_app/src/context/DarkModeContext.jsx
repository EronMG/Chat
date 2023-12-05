// DarkModeContext.js

import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [dark, setDark] = useState("bg-[#5d5b8d]");

  const toggleDarkMode = () => {
    const newDarkValue = dark === "bg-black" ? "bg-[#5d5b8d]" : "bg-black";

    const elementIds = [
      "dark1",
      "dark2",
      "dark3",
      "dark4",
      "dark5",
      "dark10",
      "darkIcon",
      "darkIcon1",
      // Add more element IDs as needed
    ];

    const toggleElement = (id, backgroundColor, boxShadow, color) => {
      const element = document.getElementById(id);
      if (element) {
        element.style.backgroundColor = backgroundColor;
        element.style.boxShadow = boxShadow;
        if (color) {
          element.style.color = color;
        }
      }
    };

    elementIds.forEach((id) => {
      switch (id) {
        case "dark1":
          toggleElement(
            id,
            newDarkValue === "bg-black" ? "#27263b" : "#5d5b8d",
            newDarkValue === "bg-black" ? "0 0 115px rgba(18, 40, 64)" : "none"
          );
          break;
        case "dark2":
          toggleElement(
            id,
            newDarkValue === "bg-black" ? "#27263b" : "#3e3c61"
          );
          break;
        case "dark3":
          toggleElement(
            id,
            newDarkValue === "bg-black" ? "#070a21" : "#a7bcff"
          );
          break;
        case "dark4":
          toggleElement(
            id,
            newDarkValue === "bg-black" ? "#151524" : "#ddddf7"
          );
          break;
        case "dark5":
          toggleElement(id, newDarkValue === "bg-black" ? "#5d5b8d" : "white");
          break;
        case "dark10":
          toggleElement(
            id,
            newDarkValue === "bg-black" ? "#5d5b8d" : "white",
            newDarkValue === "bg-black" ? "" : "none",
            newDarkValue === "bg-black" ? "white" : "#2f2d52"
          );
          break;
        case "darkIcon":
        case "darkIcon1":
          toggleElement(
            id,
            newDarkValue === "bg-black" ? "" : "none",
            newDarkValue === "bg-black" ? "" : "none",
            newDarkValue === "bg-black" ? "white" : "#5b5b8d"
          );
          break;

        // Add more cases as needed
        default:
          break;
      }
    });

    setDark(newDarkValue);
  };

  return (
    <DarkModeContext.Provider value={{ toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
