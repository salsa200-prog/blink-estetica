import Image from "next/image";

const WHATSAPP = "5521969187827";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Blink Estética"
              width={40}
              height={40}
              priority
            />
            <div className="leading-tight">
              <strong className="block text-sm tracking-wide">
                BLINK ESTÉTICA
              </strong>
              <span className="block text-xs text-gray-400">
                Barra da Tijuca - RJ
              </span>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#servicos" className="hover:text-white">
              Serviços
            </a>
            <a href="#contato" className="hover:text-white">
              Contato
            </a>
          </nav>

          <a
            href={`https://wa.me/${WHATSAPP}`}
            className="bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-cyan-300 transition"
          >
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative flex items-center min-h-screen pt-32"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="inline-block mb-4 px-4 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300">
            Onde estética vira padrão • Atendimento rápido
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            BLINK Estética Automotiva
          </h1>

          <p className="text-gray-300 max-w-xl mb-8">
            Especialistas em <strong>Pintura</strong>,{" "}
            <strong>Polimento</strong>,{" "}
            <strong>Cristalização</strong> e{" "}
            <strong>Lanternagem</strong> na Barra da Tijuca.  
            Seu carro com acabamento de alto padrão.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href={`https://wa.me/${WHATSAPP}`}
              className="bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-cyan-300 transition"
            >
              Solicitar orçamento no WhatsApp
            </a>

            <a
              href="#servicos"
              className="border border-white/30 px-6 py-3 rounded-full hover:bg-white/10 transition"
            >
              Ver serviços
            </a>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-10">Serviços</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["Pintura Automotiva", "Acabamento premium e correções"],
            ["Polimento Técnico", "Brilho profundo e proteção"],
            ["Cristalização", "Proteção e estética renovada"],
            ["Lanternagem", "Recuperação estrutural precisa"],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
            >
              <strong className="block mb-2">{title}</strong>
              <span className="text-sm text-gray-400">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Contato</h2>
        <p className="text-gray-400 mb-6">
          Atendimento rápido direto no WhatsApp
        </p>

        <a
          href={`https://wa.me/${WHATSAPP}`}
          className="inline-block bg-cyan-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-cyan-300 transition"
        >
          Enviar mensagem no WhatsApp
        </a>
      </section>

      <footer className="text-center text-xs text-gray-500 py-6">
        © {new Date().getFullYear()} BLINK Estética Automotiva LTDA.
      </footer>
    </main>
  );
}
