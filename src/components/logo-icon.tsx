import { Sprout } from "lucide-react"

export function LogoIcon({ size = 24, ...props }: { size?: number; [key: string]: any }) {
  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }} {...props}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--seed-olive)",
          borderRadius: "50%",
          opacity: 0.2,
         //  animation: "pulse 2s infinite",
        }}
      ></div>
      <Sprout color="var(--seed-beige)" size={size} strokeWidth={2.5} />
    </div>
  )
}
