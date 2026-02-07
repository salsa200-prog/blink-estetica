import "./globals.css";

export const metadata = {
  title: "BLINK Estética Automotiva",
  description:
    "Pintura, Polimento, Cristalização e Lanternagem na Barra da Tijuca - RJ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
  <header className="flex items-center justify-between px-6 py-4 bg-black">
    <div className="flex items-center gap-3">
      <img
        src="/logo.png"
        alt="Blink Estética Automotiva"
        className="h-10 w-auto"
      />
      <span className="text-white font-bold text-lg">
        BLINK Estética
      </span>
    </div>

    <a
      href="https://wa.me/5521969187827"
      target="_blank"
      rel="noreferrer"
      className="bg-cyan-500 hover:bg-cyan-600 text-black px-4 py-2 rounded-md text-sm font-semibold"
    >
      Falar no WhatsApp
    </a>
  </header>

  {children}
</body>

    </html>
  );
}
