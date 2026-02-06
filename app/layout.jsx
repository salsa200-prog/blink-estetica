export const metadata = {
  title: "Blink Estética Automotiva",
  description: "Estética automotiva profissional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
