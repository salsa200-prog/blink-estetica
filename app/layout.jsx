import './globals.css'

export const metadata = {
  title: 'BLINK Estética Automotiva',
  description: 'Estética automotiva na Barra da Tijuca',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
