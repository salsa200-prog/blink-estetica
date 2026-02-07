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

export default function Home() {
  return (
    <>
      {/* HERO COM FUNDO */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/fachada.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* OVERLAY ESCURO */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* CONTEÚDO */}
        <div className="relative z-10 max-w-4xl px-6 mx-auto">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm">
            Onde estética vira padrão • Atendimento rápido
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            BLINK Estética Automotiva
          </h1>

          <p className="text-gray-300 max-w-xl mb-8">
            Especialistas em <strong>Pintura</strong>, <strong>Polimento</strong>,{" "}
            <strong>Cristalização</strong> e <strong>Lanternagem</strong> na Barra da Tijuca.
          </p>

          <div className="flex gap-4">
            <a
              href={`https://wa.me/${WHATSAPP}`}
              className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition"
            >
              Solicitar orçamento no WhatsApp
            </a>
            <a
              href="#galeria"
              className="border border-white/30 px-6 py-3 rounded-lg hover:border-cyan-400 transition"
            >
              Ver galeria
            </a>
          </div>
        </div>
      </section>
    </>
  );
}


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
