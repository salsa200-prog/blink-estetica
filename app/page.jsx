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

// ✅ Galeria deve ser fotos REAIS (não as imagens dos serviços)
// Por enquanto vou deixar vazio pra não repetir.
// Depois você sobe suas fotos reais no /public e preenche aqui.
const gallery = [];

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt="BLINK Estética Automotiva"
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
        </div>

        <header className="relative z-10 max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="BLINK" width={44} height={44} className="rounded-xl" />
            <div className="leading-tight">
              <div className="font-bold">BLINK ESTÉTICA</div>
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
            className="bg-cyan-400 text-black font-semibold px-4 py-2 rounded-xl hover:bg-cyan-300 transition"
          >
            Falar no WhatsApp
          </a>
        </header>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
          <div className="inline-flex items-center gap-2 bg-cyan-950/40 border border-cyan-500/20 px-4 py-2 rounded-full text-sm text-cyan-200">
            Onde estética vira padrão <span className="text-white/60">• Atendimento rápido</span>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            BLINK Estética Automotiva
          </h1>

          <p className="mt-4 text-white/80 max-w-2xl">
            Especialistas em <b>Pintura</b>, <b>Polimento</b>, <b>Cristalização</b> e <b>Lanternagem</b> na Barra da Tijuca.
            Seu carro com acabamento de alto padrão.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${WHATSAPP}`}
              className="bg-cyan-400 text-black font-semibold px-5 py-3 rounded-xl hover:bg-cyan-300 transition"
            >
              Solicitar orçamento no WhatsApp
            </a>
            <a
              href="#galeria"
              className="border border-white/20 text-white font-semibold px-5 py-3 rounded-xl hover:bg-white/5 transition"
            >
              Ver galeria
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-cyan-300 text-sm font-semibold">Atendimento</div>
              <div className="text-sm text-white/80">Seg - Sex • 08:00 - 18:00</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-cyan-300 text-sm font-semibold">Local</div>
              <div className="text-sm text-white/80">Barra da Tijuca - RJ</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-cyan-300 text-sm font-semibold">WhatsApp</div>
              <div className="text-sm text-white/80">(21) 96918-7827</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold">Serviços</h2>
        <p className="mt-2 text-white/60">
          Confira alguns dos nossos principais serviços — acabamento profissional e padrão BLINK.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-cyan-500/15 bg-white/5 overflow-hidden hover:border-cyan-500/40 transition"
            >
              <div className="relative aspect-[4/3]">
                <Image src={s.img} alt={s.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
              <div className="p-4">
                <div className="font-bold">{s.title}</div>
                <div className="text-sm text-white/70 mt-1">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold">Nossa Galeria</h2>
        <p className="mt-2 text-white/60">
          Aqui entram fotos reais do seu trabalho (não as imagens dos serviços).
        </p>

        {gallery.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70">
            Galeria ainda vazia. Suba 6–10 fotos reais na pasta <b>/public</b> e eu te passo a lista certinha pra colar aqui.
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((g) => (
              <div key={g.title} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <div className="relative aspect-[4/3]">
                  <Image src={g.img} alt={g.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="font-bold">{g.title}</div>
                  <div className="text-sm text-white/60">{g.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CONTATO */}
      <section id="contato" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold">Contato</h2>
        <p className="mt-2 text-white/60">Atendimento rápido no WhatsApp. Fale com a gente!</p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-cyan-500/15 bg-white/5 p-6">
            <div className="text-cyan-300 font-semibold">Nossa Unidade</div>
            <div className="mt-3 text-white/80">
              Rua Joathur Bueno, 272 <br />
              Barra da Tijuca - RJ
            </div>
            <div className="mt-4 text-white/80">
              <b>(21) 96918-7827</b> <br />
              <b>(21) 98222-7699</b> <br />
              <span className="text-white/60">(21) 2439-4259 (fixo)</span>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={`https://wa.me/${WHATSAPP}`}
                className="bg-cyan-400 text-black font-semibold px-4 py-2 rounded-xl hover:bg-cyan-300 transition"
              >
                WhatsApp
              </a>
              <a
                href="https://maps.app.goo.gl/5sGA78RixowreBFp8"
                target="_blank"
                className="border border-white/20 px-4 py-2 rounded-xl hover:bg-white/5 transition"
              >
                Como chegar
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="font-semibold">Solicitar Orçamento</div>
            <p className="text-white/60 mt-2">
              Clique abaixo e mande no WhatsApp:
              <br />• Modelo do carro
              <br />• Serviço desejado
              <br />• Fotos do local
            </p>

            <a
              href={`https://wa.me/${WHATSAPP}`}
              className="mt-6 inline-flex w-full justify-center bg-cyan-400 text-black font-semibold px-4 py-3 rounded-xl hover:bg-cyan-300 transition"
            >
              Enviar mensagem no WhatsApp
            </a>
          </div>
        </div>

        <footer className="mt-10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} BLINK Estética Automotiva LTDA. Todos os direitos reservados.
        </footer>
      </section>
    </main>
  );
}
