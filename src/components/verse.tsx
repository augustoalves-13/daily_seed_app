"use client"

import { useState, useEffect, useContext } from "react"
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react"
import { AppContext } from "@/context/AppContext"
import dayjs from "dayjs"

export function Verse() {
  const {verses} = useContext(AppContext)
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const currentVerse = verses[currentVerseIndex]

  const nextVerse = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentVerseIndex((prev) => (prev + 1) % verses.length)
      setIsAnimating(false)
    }, 300)
  }

  const prevVerse = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentVerseIndex((prev) => (prev - 1 + verses.length) % verses.length)
      setIsAnimating(false)
    }, 300)
  }

  useEffect(() => {
    const hour = dayjs().locale('pt-br').hour()
    setCurrentVerseIndex(hour > 6 ? 0 : hour > 12 && hour < 18 ? 1 : 2)
  }, [])

  return (
    <div className="card verse-card">
      <div className="card-content">
        <div className="verse-navigation">
          <button className="btn btn-icon" onClick={prevVerse}>
            <ChevronLeft size={20} />
          </button>

          <div className={`verse-content ${isAnimating ? "animating" : ""}`}>
            <blockquote className="verse-quote">{currentVerse?.text}</blockquote>

            <div className="verse-actions">
              <div className="verse-reference">{currentVerse?.reference}</div>

              {/* <button
                className={`btn btn-icon ${isFavorited ? "favorited" : ""} ${isHeartAnimating ? "heart-animating" : ""}`}
                onClick={toggleFavorite}
                style={{
                  background: isFavorited ? "rgba(239, 68, 68, 0.1)" : "transparent",
                  borderColor: isFavorited ? "rgba(239, 68, 68, 0.3)" : "var(--border-color)",
                }}
              >
                <Heart size={20} className={isFavorited ? "favorited" : ""} fill={isFavorited ? "#ef4444" : "none"} />
              </button> */}
            </div>
          </div>

          <button className="btn btn-icon" onClick={nextVerse}>
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Nova seção de explicação do versículo */}
        <div className="verse-explanation">
          <div className="explanation-title">
            <BookOpen size={18} />
            <span>Explicação</span>
          </div>
          <div className="explanation-content">
            {currentVerse?.explanation.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph.trim()}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
