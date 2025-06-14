'use client'

import { AppContext } from "@/context/AppContext"
import dayjs from "dayjs"
import { Calendar } from "lucide-react"
import { useContext } from "react"

export function VerseHistory() {
  const {history} = useContext(AppContext)

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
          {history.map((verse, index) => (
            <div key={index} className="verse-history-item">
              <div className="verse-history-header">
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span className="verse-history-reference">{verse.reference}</span>
                  {/* {verse.isFavorite && <Heart size={16} className="favorited" fill="#ef4444" />} */}
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
                  {dayjs(verse.date).format('DD/MM/YYYY')}
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
