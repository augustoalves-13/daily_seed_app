import { Heart, Calendar } from "lucide-react"

// Dados simulados de versículos anteriores
const previousVerses = [
  {
    date: "07/06/2025",
    text: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a minha destra fiel.",
    reference: "Isaías 41:10",
    isFavorite: true,
  },
  {
    date: "06/06/2025",
    text: "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.",
    reference: "Provérbios 3:5",
    isFavorite: false,
  },
  {
    date: "05/06/2025",
    text: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.",
    reference: "Mateus 11:28",
    isFavorite: true,
  },
  {
    date: "04/06/2025",
    text: "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha.",
    reference: "1 Coríntios 13:4",
    isFavorite: false,
  },
]

export function VerseHistory() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">
          <Calendar size={20} />
          <span
            style={{
              background: "linear-gradient(45deg, var(--seed-olive), var(--seed-leaf))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Sementes Anteriores
          </span>
          <div
            style={{
              width: "0.5rem",
              height: "0.5rem",
              background: "var(--seed-leaf)",
              borderRadius: "50%",
              animation: "pulse 2s infinite",
            }}
          ></div>
        </h2>
      </div>
      <div className="card-content">
        <div className="verse-history">
          {previousVerses.map((verse, index) => (
            <div key={index} className="verse-history-item">
              <div className="verse-history-header">
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span className="verse-history-reference">{verse.reference}</span>
                  {verse.isFavorite && <Heart size={16} className="favorited" fill="#ef4444" />}
                </div>
                <span className="verse-history-date">
                  <div
                    style={{
                      width: "0.25rem",
                      height: "0.25rem",
                      background: "var(--seed-leaf)",
                      borderRadius: "50%",
                    }}
                  ></div>
                  {verse.date}
                </span>
              </div>
              <p className="verse-history-text">{verse.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
