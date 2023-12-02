"use client";
import { useTheme } from "next-themes";
import React, { FC, useEffect, useState } from "react";

import { BiMoon, BiSun } from "react-icons/bi";
import { CiCloudSun } from "react-icons/ci";
export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <div className="flex-items-center justify-center mx-4">
      {theme === "light" ? (
        <BiMoon
          className="cursor-pointer"
          fill="black"
          syze={30}
          onClick={() => setTheme("dark")}
        />
      ) : (
        <BiSun
          className="cursor-pointer"
          syze={30}
          onClick={() => setTheme("light")}
        />
      )}
    </div>
  );
};
