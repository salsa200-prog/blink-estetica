import "./globals.css";

export const metadata = {
  title: "BLINK Estética Automotiva | Barra da Tijuca",
  description:
    "Oficina estética automotiva especializada em pintura, polimento e cristalização na Barra da Tijuca.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
