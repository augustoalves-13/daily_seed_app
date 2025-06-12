"use client"

export function FloatingElements() {
  return (
    <div className="floating-elements">
      {/* Elementos flutuantes animados */}
      <div
        className="floating-emoji"
        style={{
          top: "5rem",
          left: "2.5rem",
          animationDelay: "0s",
          animationDuration: "3s",
        }}
      >
        🌱
      </div>
      <div
        className="floating-emoji"
        style={{
          top: "10rem",
          right: "5rem",
          fontSize: "1.25rem",
          opacity: 0.5,
          animationDelay: "1s",
          animationDuration: "4s",
        }}
      >
        🌿
      </div>
      <div
        className="floating-emoji"
        style={{
          top: "15rem",
          left: "25%",
          fontSize: "1rem",
          opacity: 0.4,
          animationDelay: "2s",
          animationDuration: "5s",
        }}
      >
        🕊️
      </div>
      <div
        className="floating-emoji"
        style={{
          bottom: "10rem",
          right: "2.5rem",
          animationDelay: "0.5s",
          animationDuration: "3.5s",
        }}
      >
        🌾
      </div>
      <div
        className="floating-emoji"
        style={{
          bottom: "15rem",
          left: "4rem",
          fontSize: "1.25rem",
          opacity: 0.5,
          animationDelay: "1.5s",
          animationDuration: "4.5s",
        }}
      >
        🍃
      </div>
      <div
        className="floating-emoji"
        style={{
          top: "33%",
          right: "25%",
          fontSize: "1rem",
          opacity: 0.4,
          animationDelay: "2.5s",
          animationDuration: "6s",
        }}
      >
        🌳
      </div>

      {/* Círculos de fundo */}
      <div
        className="floating-circle"
        style={{
          top: "2.5rem",
          left: "33%",
          width: "8rem",
          height: "8rem",
          background: "linear-gradient(45deg, rgba(107, 142, 35, 0.1), rgba(61, 153, 112, 0.1))",
        }}
      ></div>
      <div
        className="floating-circle"
        style={{
          bottom: "5rem",
          right: "33%",
          width: "6rem",
          height: "6rem",
          background: "linear-gradient(45deg, rgba(245, 245, 220, 0.2), rgba(166, 124, 82, 0.1))",
          animationDelay: "1s",
        }}
      ></div>
      <div
        className="floating-circle"
        style={{
          top: "50%",
          left: "2.5rem",
          width: "4rem",
          height: "4rem",
          background: "linear-gradient(45deg, rgba(61, 153, 112, 0.15), rgba(107, 142, 35, 0.15))",
          animationDelay: "2s",
        }}
      ></div>
    </div>
  )
}
