import "./globals.css";

export const metadata = {
  title: "BLINK Estética Automotiva",
  description:
    "Pintura, Polimento, Cristalização e Lanternagem na Barra da Tijuca - RJ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
