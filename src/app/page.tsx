import { Verse } from "@/components/verse"
import { VerseHistory } from "@/components/verse-history"
import { Share, Sparkles } from "lucide-react"
import { Subscription } from "@/components/subscription"
import { FloatingElements } from "@/components/floating-elements"
import { LogoIcon } from "@/components/logo-icon"
import { ThemeToggle } from "@/components/theme-toogle"

export default function Home() {
  return (
    <main className="main-layout">
      <FloatingElements />

      <div className="container main-content">
        <header className="header">
          <div className="logo-section">
            <div className="logo-container">
              <div className="logo-circle">
                <LogoIcon />
              </div>
              <div className="logo-sparkle">
                <Sparkles size={12} color="white" />
              </div>
            </div>
            <div>
              <h1 className="app-title">Daily Seed</h1>
              <p className="app-subtitle">Plante uma semente de fé todos os dias</p>
            </div>
          </div>
          <ThemeToggle />
        </header>

        <section style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                background: "linear-gradient(45deg, var(--seed-beige), var(--seed-white), var(--seed-beige))",
                padding: "0.75rem 1.5rem",
                borderRadius: "2rem",
                marginBottom: "2rem",
                boxShadow: "0 8px 25px var(--shadow)",
                border: "1px solid var(--border-color)",
                animation: "fadeInUp 0.8s ease-in-out",
              }}
            >
              <div
                style={{
                  width: "0.75rem",
                  height: "0.75rem",
                  background: "var(--seed-leaf)",
                  borderRadius: "50%",
                  animation: "pulse 2s infinite",
                  boxShadow: "0 2px 8px var(--shadow)",
                }}
              ></div>
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "var(--seed-olive)",
                }}
              >
                Semente do Dia
              </span>
              <div
                style={{
                  width: "0.75rem",
                  height: "0.75rem",
                  background: "var(--seed-brown)",
                  borderRadius: "50%",
                  animation: "pulse 2s infinite",
                  boxShadow: "0 2px 8px var(--shadow)",
                }}
              ></div>
            </div>

            <Verse />

            <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
              <button className="btn btn-primary">
                <Share size={16} />
                Compartilhar Semente
              </button>
            </div>
          </div>

          <div className="grid-2" style={{ marginTop: "5rem" }}>
            <VerseHistory />
            <Subscription />
          </div>
        </section>

        <footer className="footer">
          <div className="footer-content">
            <LogoIcon size={16} style={{ animation: "float 3s ease-in-out infinite" }} />
            <p>© {new Date().getFullYear()} Daily Seed. Cultivando fé, colhendo esperança.</p>
            <span
              style={{
                fontSize: "1.125rem",
                animation: "float 3s ease-in-out infinite",
                animationDelay: "1s",
              }}
            >
              ✨
            </span>
          </div>
        </footer>
      </div>
    </main>
  )
}
