"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button className="flex active:scale-80 siz-6 rounded-xl p-2 transition-all">
      {theme === "dark" ? (
        <SunIcon onClick={() => setTheme("light")} className="size-6" />
      ) : (
        <MoonIcon onClick={() => setTheme("dark")} className="size-6" />
      )}
    </button>
  );
}
