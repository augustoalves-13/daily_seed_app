"use client"

// import { useState } from "react"
// import { Moon, Sun } from "lucide-react"
// import { useTheme } from "next-themes"

export function ThemeToggle() {
  // const { setTheme } = useTheme()
  // const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="theme-toggle">
      {/* <button
        className="btn btn-icon"
        onClick={() => setIsOpen(!isOpen)}
        style={{ border: "1px solid var(--border-color)" }}
      >
        <Sun
          size={20}
          style={{
            transform: "rotate(0deg) scale(1)",
            transition: "all 0.3s ease",
          }}
        />
        <Moon
          size={20}
          style={{
            position: "absolute",
            transform: "rotate(90deg) scale(0)",
            transition: "all 0.3s ease",
          }}
        />
        <span className="sr-only">Alternar tema</span>
      </button>

      {isOpen && (
        <div className="theme-dropdown">
          <div
            className="theme-option"
            onClick={() => {
              setTheme("light")
              setIsOpen(false)
            }}
          >
            Claro
          </div>
          <div
            className="theme-option"
            onClick={() => {
              setTheme("dark")
              setIsOpen(false)
            }}
          >
            Escuro
          </div>
          <div
            className="theme-option"
            onClick={() => {
              setTheme("system")
              setIsOpen(false)
            }}
          >
            Sistema
          </div>
        </div>
      )} */}
    </div>
  )
}
