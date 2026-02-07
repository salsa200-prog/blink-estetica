export default function Home() {
  return (
    <main className="min-h-screen">

      {/* TOPO */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur border-b border-cyan-500/20 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Blink" className="w-10 h-10" />
            <div>
              <p className="font-bold text-white">
                BLINK <span className="text-cyan-400">ESTÉTICA AUTOMOTIVA</span>
              </p>
              <p className="text-xs text-cyan-400">Onde estética vira padrão</p>
            </div>
          </div>

          <a
            href="https://wa.me/5521969187827"
            className="bg-cyan-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-cyan-600"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        className="min-h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/70 p-8 rounded-xl max-w-3xl">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-400">
            Onde estética vira padrão
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Estética Automotiva na{" "}
            <span className="text-cyan-400">Barra da Tijuca</span>
          </h1>

          <p className="text-gray-300 mb-6">
            Lanternagem, pintura e polimento técnico com padrão profissional.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/5521969187827"
              className="bg-cyan-500 text-black px-6 py-3 rounded-md font-semibold"
            >
              Falar no WhatsApp
            </a>

            <a
              href="#servicos"
              className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-md"
            >
              Ver serviços
            </a>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 bg-black">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nossos Serviços
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
          {[
            "Pintura Automotiva",
            "Polimento Técnico",
            "Cristalização",
            "Lanternagem",
            "Detalhamento",
          ].map((s) => (
            <div
              key={s}
              className="bg-gray-900 p-6 rounded-xl border border-cyan-500/10 hover:border-cyan-500/40 transition"
            >
              <h3 className="text-xl font-bold mb-2">{s}</h3>
              <p className="text-gray-400">
                Serviço profissional com acabamento de alto padrão.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-sky-500 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Agende agora pelo WhatsApp
        </h2>
        <p className="mb-6 text-black/90">
          Atendimento rápido e profissional
        </p>

        <a
          href="https://wa.me/5521969187827"
          className="bg-black text-cyan-400 px-8 py-4 rounded-md font-semibold"
        >
          Falar agora
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-10 text-center text-gray-500">
        © 2024 BLINK Estética Automotiva — Barra da Tijuca
      </footer>

    </main>
  );
}
