export default function Home() {
  return (
    <main className="bg-[#050b14]">

      {/* HERO */}
      <section
        className="min-h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/70 p-10 rounded-xl max-w-4xl">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-400">
            Onde estética vira padrão
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Oficina Estética Automotiva na{" "}
            <span className="text-cyan-400">Barra da Tijuca</span>
          </h1>

          <p className="text-gray-300 mb-8">
            Especialistas em lanternagem, pintura e polimento técnico.
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
      <section id="servicos" className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nossos Principais Serviços
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6">
          {[
            "Pintura Automotiva",
            "Polimento Técnico",
            "Cristalização Automotiva",
            "Lanternagem Estrutural",
            "Acabamento e Detalhamento",
          ].map((s) => (
            <div
              key={s}
              className="bg-[#0b1627] p-6 rounded-xl border border-cyan-500/20"
            >
              <h3 className="text-xl font-bold mb-2 text-cyan-400">{s}</h3>
              <p className="text-gray-300">
                Serviço profissional com padrão BLINK.
              </p>
              <a
                href="https://wa.me/5521969187827"
                className="inline-block mt-4 text-sm text-cyan-400"
              >
                Fazer orçamento →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* GALERIA */}
      <section className="py-20 bg-black">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nossa Galeria de Trabalhos
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[1,2,3,4,5].map((i) => (
            <img
              key={i}
              src={`/galeria/${i}.jpg`}
              className="rounded-xl object-cover"
            />
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-sky-500 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Agende seu serviço hoje mesmo
        </h2>
        <p className="mb-6 text-black/90">
          Atendimento rápido pelo WhatsApp
        </p>
        <a
          href="https://wa.me/5521969187827"
          className="bg-black text-cyan-400 px-8 py-4 rounded-md font-semibold"
        >
          Falar no WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 bg-black">
        © 2024 BLINK Estética Automotiva
      </footer>

    </main>
  );
}
