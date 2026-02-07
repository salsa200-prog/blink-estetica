import "./globals.css";

export const metadata = {
  title: "BLINK Estética Automotiva | Barra da Tijuca",
  description:
    "Pintura, Polimento e Cristalização Automotiva na Barra da Tijuca. Atendimento rápido no WhatsApp.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
