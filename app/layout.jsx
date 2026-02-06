export const metadata = {
  title: "BLINK Estética Automotiva | Barra da Tijuca",
  description:
    "BLINK Estética Automotiva - Pintura, Polimento, Cristalização e Lanternagem na Barra da Tijuca. Atendimento rápido no WhatsApp.",
  openGraph: {
    title: "BLINK Estética Automotiva - Onde estética vira padrão",
    description:
      "Especialistas em Pintura, Polimento e Cristalização Automotiva na Barra da Tijuca",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial" }}>
        {children}
      </body>
    </html>
  );
}
