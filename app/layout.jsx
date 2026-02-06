export const metadata = {
  title: "BLINK Estética Automotiva | Barra da Tijuca",
  description:
    "BLINK Estética Automotiva - Pintura, Polimento, Cristalização e Lanternagem na Barra da Tijuca. Atendimento rápido no WhatsApp.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body style={{ margin: 0, fontFamily: "system-ui, Arial" }}>{children}</body>
    </html>
  );
}
