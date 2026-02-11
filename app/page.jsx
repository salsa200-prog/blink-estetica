export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section
        className="min-h-screen flex items-center justify-center px-6 text-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/70 backdrop-blur-md p-10 rounded-xl max-w-4xl">
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-cyan-500/20 text-cyan-400">
            Onde estética vira padrão
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Oficina Estética Automotiva na{" "}
            <span className="text-cyan-400">Barra da Tijuca</span>
          </h1>

          <p className="text-gray-300 mb-8">
            Especialistas em pintura automotiva, polimento técnico e lanternagem
            estrutural com acabamento de alto padrão.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/5521969187827"
              target="_blank"
              className="bg-cyan-500 text-black px-6 py-3 rounded-md font-semibold hover:opacity-90"
            >
              Falar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-md hover:bg-cyan-500/10"
            >
              Ver serviços
            </a>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 bg-[#050b14]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nossos Serviços
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6">
          {[
            {
              title: "Pintura Automotiva",
              desc: "Correções, retoques e pintura completa com acabamento profissional.",
            },
            {
              title: "Polimento Técnico",
              desc: "Remoção de riscos e recuperação de brilho com técnica avançada.",
            },
            {
              title: "Lanternagem Estrutural",
              desc: "Recuperação estrutural com precisão e segurança.",
            },
            {
              title: "Acabamento e Detalhamento",
              desc: "Detalhamento completo para elevar o padrão do seu veículo.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#0b1627] p-6 rounded-xl border border-cyan-500/20"
            >
              <h3 className="text-xl font-bold mb-2 text-cyan-400">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
              <a
                href="https://wa.me/5521969187827"
                target="_blank"
                className="inline-block mt-4 text-cyan-400 text-sm"
              >
                Solicitar orçamento →
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
          {[1, 2, 3, 4, 5].map((i) => (
            <img
              key={i}
              src={`/galeria/${i}.jpg`}
              alt="Trabalho realizado pela Blink Estética Automotiva"
              className="rounded-xl object-cover h-60 w-full"
            />
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-sky-500 text-center">
        <h2 className="text-4xl font-bold mb-4 text-black">
          Agende seu serviço hoje mesmo
        </h2>
        <p className="mb-6 text-black/90">
          Atendimento rápido e profissional pelo WhatsApp
        </p>
        <a
          href="https://wa.me/5521969187827"
          target="_blank"
          className="bg-black text-cyan-400 px-8 py-4 rounded-md font-semibold"
        >
          Falar agora
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 bg-black">
        © {new Date().getFullYear()} BLINK Estética Automotiva — Barra da Tijuca
      </footer>

    </main>
  );
}
