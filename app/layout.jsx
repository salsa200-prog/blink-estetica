export const metadata = {
  title: "BLINK Estética Automotiva | Barra da Tijuca",
  description:
    "BLINK Estética Automotiva - Pintura, Polimento e Cristalização na Barra da Tijuca, RJ.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
