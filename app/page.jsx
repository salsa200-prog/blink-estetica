import Image from "next/image";

const WHATSAPP = "5521969187827"; // (21) 96918-7827

const services = [
  {
    title: "Pintura Automotiva",
    desc: "Acabamento de alto padrão, correção e pintura completa.",
  },
  {
    title: "Polimento Técnico",
    desc: "Remoção de riscos e brilho profundo com técnica profissional.",
  },
  {
    title: "Cristalização Automotiva",
    desc: "Proteção, hidrorrepelência e visual renovado para a pintura.",
  },
  {
    title: "Lanternagem Estrutural",
    desc: "Recuperação e alinhamento com precisão e segurança.",
  },
  {
    title: "Acabamento e Detalhamento",
    desc: "Detalhamento completo para elevar o padrão do seu carro.",
  },
];

export default function Page() {
  const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "Olá! Quero um orçamento na BLINK Estética Automotiva."
  )}`;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Blink Estética"
              width={40}
              height={40}
              className="rounded-full bg-white"
              priority
            />
            <div className="leading-tight">
              <div className="font-semibold text-sm">BLINK ESTÉTICA</div>
              <div className="text-xs text-white/70">Barra da Tijuca - RJ</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-white/80">
            <a href="#servicos" className="hover:text-white">
              Serviços
            </a>
            <a href="#galeria" className="hover:text-white">
              Galeria
            </a>
            <a href="#contato" className="hover:text-white">
              Contato
            </a>
          </nav>

          <a
            href={waLink}
            className="bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-cyan-300 transition"
          >
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-20">
        <div className="relative h-[78vh] w-full overflow-hidden">
          <Image
            src="/hero.jpg"
            alt="BLINK Estética Automotiva"
            fill
            className="object-cover"
            priority
          />
          {/* overlay escuro */}
          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0">
            <div className="max-w-7xl mx-auto h-full px-5 flex items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs md:text-sm px-4 py-2 rounded-full bg-white/10 border border-white/15">
                  <span className="text-cyan-300">Onde estética vira padrão</span>
                  <span className="text-white/60">• Atendimento rápido</span>
                </div>

                <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
                  BLINK <span className="text-white">Estética Automotiva</span>
                </h1>

                <p className="mt-4 text-white/80 md:text-lg">
                  Especialistas em <b>Pintura</b>, <b>Polimento</b>,{" "}
                  <b>Cristalização</b> e <b>Lanternagem</b> na Barra da Tijuca.
                  Seu carro com acabamento de alto padrão.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={waLink}
                    className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition"
                  >
                    Solicitar orçamento no WhatsApp
                  </a>
                  <a
                    href="#galeria"
                    className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
                  >
                    Ver galeria
                  </a>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-4">
                    <div className="text-xs text-cyan-300 font-semibold">
                      Atendimento
                    </div>
                    <div className="text-sm text-white/80">
                      Seg - Sex • 08:00 - 18:00
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-4">
                    <div className="text-xs text-cyan-300 font-semibold">
                      Local
                    </div>
                    <div className="text-sm text-white/80">
                      Barra da Tijuca - RJ
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-4">
                    <div className="text-xs text-cyan-300 font-semibold">
                      WhatsApp
                    </div>
                    <div className="text-sm text-white/80">(21) 96918-7827</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-16">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold">Serviços</h2>
          <p className="text-white/60 mt-2">
            Confira alguns dos nossos principais serviços — acabamento
            profissional e padrão BLINK.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
              >
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-white/70 text-sm mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold">Nossa Galeria</h2>
          <p className="text-white/60 mt-2">
            Me mande suas fotos e eu coloco aqui no grid certinho.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-8 text-white/60">
            Galeria ainda vazia. Suba suas imagens em <b>/public</b> e eu te
            passo a lista pronta pra colar aqui.
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold">Contato</h2>
          <p className="text-white/60 mt-2">
            Atendimento rápido no WhatsApp. Fale com a gente!
          </p>

          <div className="mt-8">
            <a
              href={waLink}
              className="inline-flex bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition"
            >
              Enviar mensagem no WhatsApp
            </a>
          </div>

          <footer className="mt-10 text-xs text-white/40">
            © {new Date().getFullYear()} BLINK Estética Automotiva LTDA. Todos os
            direitos reservados.
          </footer>
        </div>
      </section>
    </main>
  );
}
