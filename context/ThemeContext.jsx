"use client";

import { createContext, useCallback, useEffect, useMemo, useState } from "react";

export const ThemeContext = createContext();

const getFromStorage = () => {
  // for before the ssr has rendered
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "dark";
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => getFromStorage());

  const toggle = useCallback(() => {
    setTheme(theme == "light" ? "dark" : "light");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const store = useMemo(
    () => ({
      theme: theme,
      toggle: toggle,
    }),
    [theme, toggle]
  );

  return <ThemeContext.Provider value={store}>{children}</ThemeContext.Provider>;
};
