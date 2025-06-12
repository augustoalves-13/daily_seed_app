"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Heart, BookOpen } from "lucide-react"

// Dados simulados de versículos com explicações
const verses = [
  {
    id: 1,
    text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
    reference: "João 3:16",
    explanation: `Este versículo é frequentemente chamado de "o evangelho em miniatura" porque resume a essência da mensagem cristã em uma única frase.

    A expressão "de tal maneira" indica a intensidade e profundidade do amor de Deus pela humanidade. Este amor é tão grande que levou Deus a oferecer seu único Filho como sacrifício pelos pecados do mundo.

    A palavra "mundo" aqui se refere a toda a humanidade, mostrando que o amor de Deus é universal e não limitado a um grupo específico. A promessa de "vida eterna" representa não apenas uma existência sem fim, mas uma qualidade de vida em comunhão com Deus.

    Este versículo enfatiza que a salvação vem pela fé ("todo aquele que nele crê") e não por obras ou méritos próprios.`,
  },
  {
    id: 2,
    text: "O Senhor é o meu pastor, nada me faltará.",
    reference: "Salmos 23:1",
    explanation: `Este é o primeiro versículo do famoso Salmo 23, escrito pelo rei Davi, que era pastor antes de se tornar rei de Israel.

    A metáfora do pastor era muito significativa na cultura antiga. Um bom pastor guiava, protegia e cuidava de suas ovelhas com dedicação total, muitas vezes arriscando a própria vida por elas.

    Ao declarar "O Senhor é o meu pastor", Davi expressa sua confiança total em Deus como seu guia e protetor. A frase "nada me faltará" não significa necessariamente abundância material, mas sim que todas as necessidades essenciais serão supridas.

    Este versículo estabelece o tema de todo o Salmo 23: a completa confiança em Deus como provedor e protetor em todas as circunstâncias da vida.`,
  },
  {
    id: 3,
    text: "Tudo posso naquele que me fortalece.",
    reference: "Filipenses 4:13",
    explanation: `Este versículo, escrito pelo apóstolo Paulo enquanto estava preso, é frequentemente citado como fonte de inspiração e força.

    No contexto original, Paulo estava falando sobre sua capacidade de estar contente em qualquer situação - na abundância ou na escassez. Ele não está dizendo que pode fazer literalmente qualquer coisa, mas que pode enfrentar qualquer circunstância com a força que Cristo lhe dá.

    A palavra grega traduzida como "fortalece" (endunamoō) significa "capacitar internamente, fortalecer". Isso sugere que a força vem de dentro, através da presença de Cristo no crente.

    Este versículo nos ensina sobre a suficiência de Cristo e como podemos encontrar força nEle para enfrentar os desafios da vida, sejam eles grandes ou pequenos.`,
  },
  {
    id: 4,
    text: "Porque eu bem sei os planos que tenho para vós, diz o Senhor; planos de paz, e não de mal, para vos dar um futuro e uma esperança.",
    reference: "Jeremias 29:11",
    explanation: `Este versículo foi originalmente escrito para os israelitas exilados na Babilônia, oferecendo esperança em um momento de grande desespero nacional.

    A palavra hebraica para "planos" (machashavah) implica pensamentos cuidadosamente elaborados, não ideias casuais. Isso sugere que Deus tem intenções específicas e bem planejadas para Seu povo.

    Os "planos de paz" (shalom em hebraico) referem-se não apenas à ausência de conflito, mas a um bem-estar completo - físico, emocional e espiritual.

    "Futuro e esperança" indica que Deus não apenas tem boas intenções para o presente, mas também para o futuro. Mesmo em meio ao sofrimento, há a promessa de que Deus está trabalhando para um propósito maior e melhor.`,
  },
  {
    id: 5,
    text: "Mas os que esperam no Senhor renovarão as suas forças; subirão com asas como águias; correrão, e não se cansarão; andarão, e não se fatigarão.",
    reference: "Isaías 40:31",
    explanation: `Este versículo faz parte de uma passagem onde Isaías está consolando o povo de Israel durante um período de grande dificuldade.

    A palavra hebraica para "esperar" (qavah) não significa apenas aguardar passivamente, mas implica uma expectativa ativa e confiante. É uma espera cheia de esperança e confiança.

    A metáfora das águias é particularmente poderosa. As águias são conhecidas por voar acima das tempestades, simbolizando a capacidade de se elevar acima das dificuldades da vida quando confiamos em Deus.

    A progressão de "voar", "correr" e "andar" representa diferentes níveis de energia e esforço. A promessa é que, com a força renovada por Deus, podemos enfrentar tanto os momentos extraordinários (voar) quanto as rotinas diárias (andar) sem nos esgotar espiritualmente.`,
  },
]

export function Verse() {
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [favorites, setFavorites] = useState<number[]>([])
  const [isHeartAnimating, setIsHeartAnimating] = useState(false)

  const currentVerse = verses[currentVerseIndex]
  const isFavorited = favorites.includes(currentVerse.id)

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

  const toggleFavorite = () => {
    setIsHeartAnimating(true)
    setTimeout(() => setIsHeartAnimating(false), 600)

    if (isFavorited) {
      setFavorites((prev) => prev.filter((id) => id !== currentVerse.id))
      // Toast simulation
      console.log("Removido dos favoritos 💔")
    } else {
      setFavorites((prev) => [...prev, currentVerse.id])
      // Toast simulation
      console.log("Semente favoritada! 🌱❤️")
    }
  }

  // Simula a mudança diária do versículo
  useEffect(() => {
    const today = new Date()
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24))
    setCurrentVerseIndex(dayOfYear % verses.length)
  }, [])

  return (
    <div className="card verse-card">
      <div className="card-content">
        <div className="verse-navigation">
          <button className="btn btn-icon" onClick={prevVerse}>
            <ChevronLeft size={20} />
          </button>

          <div className={`verse-content ${isAnimating ? "animating" : ""}`}>
            <blockquote className="verse-quote">{currentVerse.text}</blockquote>

            <div className="verse-actions">
              <div className="verse-reference">{currentVerse.reference}</div>

              <button
                className={`btn btn-icon ${isFavorited ? "favorited" : ""} ${isHeartAnimating ? "heart-animating" : ""}`}
                onClick={toggleFavorite}
                style={{
                  background: isFavorited ? "rgba(239, 68, 68, 0.1)" : "transparent",
                  borderColor: isFavorited ? "rgba(239, 68, 68, 0.3)" : "var(--border-color)",
                }}
              >
                <Heart size={20} className={isFavorited ? "favorited" : ""} fill={isFavorited ? "#ef4444" : "none"} />
              </button>
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
            {currentVerse.explanation.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph.trim()}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
