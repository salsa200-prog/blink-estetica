import Image from "next/image";

const WHATSAPP = "5521969187827"; // (21) 96918-7827

const services = [
  {
    title: "Pintura Automotiva",
    desc: "Acabamento de alto padrão, correção e pintura completa.",
    img: "/pintura-automotiva.jpg",
  },
  {
    title: "Polimento Técnico",
    desc: "Remoção de riscos e brilho profundo com técnica profissional.",
    img: "/polimento-tecnico.png",
  },
  {
    title: "Cristalização Automotiva",
    desc: "Proteção, hidrorrepelência e visual renovado para a pintura.",
    img: "/cristalizacao-automotiva.jpg",
  },
  {
    title: "Lanternagem Estrutural",
    desc: "Recuperação e alinhamento com precisão e segurança.",
    img: "/lanternagem-estrutural.jpg",
  },
  {
    title: "Acabamento e Detalhamento",
    desc: "Detalhamento completo para elevar o padrão do seu carro.",
    img: "/acabamento-detalhamento.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO COM FUNDO FIXO */}
      <section
        className="relative min-h-screen"
        style={{
          backgroundImage: "url('/fachada.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* overlay escuro */}
        <div className="absolute inset-0 bg-black/70" />

        {/* HEADER */}
        <header className="relative z-10 max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Blink Estética Automotiva"
              width={44}
              height={44}
              className="rounded-full"
            />
            <div className="leading-tight">
              <div className="font-extrabold">BLINK ESTÉTICA</div>
              <div className="text-xs text-white/70">Barra da Tijuca - RJ</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#servicos" className="hover:text-white">Serviços</a>
            <a href="#galeria" className="hover:text-white">Galeria</a>
            <a href="#contato" className="hover:text-white">Contato</a>
          </nav>

          <a
            href={`https://wa.me/${WHATSAPP}`}
            className="bg-cyan-400 text-black px-5 py-2.5 rounded-xl font-semibold hover:bg-cyan-300 transition"
          >
            Falar no WhatsApp
          </a>
        </header>

        {/* CONTEÚDO HERO */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-10 pb-16">
          <span className="inline-block mb-5 px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-sm border border-cyan-400/20">
            Onde estética vira padrão • Atendimento rápido
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            BLINK Estética Automotiva
          </h1>

          <p className="text-white/80 mt-4 max-w-2xl">
            Especialistas em <b>Pintura</b>, <b>Polimento</b>, <b>Cristalização</b> e{" "}
            <b>Lanternagem</b> na Barra da Tijuca. Seu carro com acabamento de alto padrão.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={`https://wa.me/${WHATSAPP}`}
              className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition"
            >
              Solicitar orçamento no WhatsApp
            </a>
            <a
              href="#galeria"
              className="border border-white/20 px-6 py-3 rounded-xl hover:border-cyan-400/60 transition"
            >
              Ver galeria
            </a>
          </div>

          {/* mini cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-10 max-w-4xl">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur">
              <div className="text-cyan-300 font-semibold text-sm">Atendimento</div>
              <div className="text-white/80 text-sm">Seg - Sex • 08:00 - 18:00</div>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur">
              <div className="text-cyan-300 font-semibold text-sm">Local</div>
              <div className="text-white/80 text-sm">Barra da Tijuca - RJ</div>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur">
              <div className="text-cyan-300 font-semibold text-sm">WhatsApp</div>
              <div className="text-white/80 text-sm">(21) 96918-7827</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-extrabold">Serviços</h2>
        <p className="text-white/70 mt-2">
          Confira alguns dos nossos principais serviços — acabamento profissional e padrão BLINK.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-cyan-400/40 transition"
            >
              <div className="relative h-40">
                <Image src={s.img} alt={s.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold">{s.title}</h3>
                <p className="text-white/70 text-sm mt-2">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GALERIA (depois a gente coloca as fotos novas) */}
      <section id="galeria" className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-extrabold">Nossa Galeria</h2>
        <p className="text-white/70 mt-2">
          Me mande as fotos novas que você quer usar e eu monto o grid certinho aqui.
        </p>
      </section>

      {/* CONTATO */}
      <section id="contato" className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-extrabold">Contato</h2>
        <p className="text-white/70 mt-2">Atendimento rápido no WhatsApp. Fale com a gente!</p>

        <div className="mt-8">
          <a
            href={`https://wa.me/${WHATSAPP}`}
            className="inline-flex bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition"
          >
            Enviar mensagem no WhatsApp
          </a>
        </div>

        <footer className="mt-12 text-white/50 text-sm">
          © {new Date().getFullYear()} BLINK Estética Automotiva LTDA. Todos os direitos reservados.
        </footer>
      </section>
    </main>
  );
}
