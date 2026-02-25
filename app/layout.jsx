import "./globals.css";

export const metadata = {
  title: "BLINK Estética Automotiva",
  description: "Oficina estética automotiva na Barra da Tijuca",
  icons: {
    icon: "/icon.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
