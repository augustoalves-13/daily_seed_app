"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Sparkles, Gift } from "lucide-react"

export function Subscription() {
  const [phone, setPhone] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulação de envio
    setTimeout(() => {
      setIsLoading(false)
      setPhone("")
      console.log("Bem-vindo ao Daily Seed! 🌱✨")
    }, 1500)
  }

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
        .replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3")
        .replace(/(\d{2})(\d{0,5})/, "($1) $2")
        .replace(/(\d{0,2})/, "($1")
    }
    return value
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    setPhone(formatted)
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">
          <div style={{ position: "relative" }}>
            <div
              style={{
                padding: "0.75rem",
                background: "linear-gradient(45deg, var(--seed-olive), var(--seed-leaf))",
                borderRadius: "50%",
                boxShadow: "0 8px 25px var(--shadow)",
              }}
            >
              <Phone size={20} color="white" />
            </div>
            <div
              style={{
                position: "absolute",
                top: "-0.25rem",
                right: "-0.25rem",
                width: "1.5rem",
                height: "1.5rem",
                background: "linear-gradient(45deg, var(--seed-brown), var(--seed-olive))",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "bounce 1s infinite",
              }}
            >
              <Sparkles size={12} color="white" />
            </div>
          </div>
          <span
            style={{
              background: "linear-gradient(45deg, var(--seed-olive), var(--seed-leaf))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Receba no WhatsApp
          </span>
        </h2>
        <p
          style={{
            textAlign: "center",
            lineHeight: "1.5",
            color: "var(--text-secondary)",
            fontSize: "0.875rem",
            marginTop: "0.5rem",
          }}
        >
          🌱 Plante uma semente de fé todos os dias! Receba versículos inspiradores direto no seu WhatsApp.
        </p>
      </div>

      <div className="card-content">
        <form onSubmit={handleSubmit} className="subscription-form">
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              <Phone size={16} />
              Número do WhatsApp
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="(11) 99999-9999"
              value={phone}
              onChange={handlePhoneChange}
              className="form-input"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
            style={{
              width: "100%",
              padding: "1rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {isLoading ? (
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    border: "2px solid white",
                    borderTop: "2px solid transparent",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                  }}
                ></div>
                Plantando sua semente...
              </div>
            ) : (
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Gift size={20} />
                Plantar Minha Semente Grátis
              </div>
            )}
          </button>
        </form>

        <div className="subscription-benefits">
          <div className="benefits-list">
            <div className="benefit-item">
              <div className="benefit-dot leaf"></div>
              <span>100% Gratuito</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-dot olive"></div>
              <span>Sem Spam</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-dot brown"></div>
              <span>Cancele Quando Quiser</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
