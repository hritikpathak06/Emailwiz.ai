"use client";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/context/ThemeContext";
import React from "react";

const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();
  return (
    <div>
      <Switch id="theme switcher" onClick={toggleTheme} />
    </div>
  );
};

export default ThemeSwitcher;
