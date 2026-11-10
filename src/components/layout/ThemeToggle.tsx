"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";


export default function ThemeToggle() {

    const [dark, setDark] = useState(false)

    useEffect(() => {
        setDark(document.documentElement.classList.contains("dark"))
    }, [])


    function toggle() {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle("dark", next)

        try {
            localStorage.setItem("theme", next ? "dark" : "light")
        } catch {}
    }


  return (
    <button
    type="button"
    onClick={toggle}
    aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    className="cursor-pointer"
    >
        {dark ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  )
}
