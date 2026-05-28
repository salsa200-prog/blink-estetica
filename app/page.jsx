"use client";

import { useEffect, useMemo, useState } from "react";

function PhoneIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 4.18 2 2 0 0 1 5.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L9.1 9.91a16 16 0 0 0 5 5l1.48-1.13a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function PinIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function Home() {
  const [showPromo, setShowPromo] = useState(false);
  const [open, setOpen] = useState(false);

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [tipo, setTipo] = useState("");
  const [servico, setServico] = useState("");
  const [descricao, setDescricao] = useState("");

  const whatsappNumber = "5521969187827";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPromo(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const whatsappLink = useMemo(() => {
    return `https://wa.me/${whatsappNumber}`;
  }, []);

  const scrollToId = (id) => {
    setOpen(false);

    const el = document.getElementById(id);

    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const enviarWhatsApp = () => {
    const msg =
      `Olá! Quero solicitar orçamento.\n\n` +
      `Nome: ${nome || "-"}\n` +
      `Telefone/WhatsApp: ${telefone || "-"}\n` +
      `Tipo de atendimento: ${tipo || "-"}\n` +
      `Serviço de interesse: ${servico || "-"}\n\n` +
      `Descrição: ${descricao || "-"}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      msg
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="bg-black text-white overflow-x-hidden">
      {showPromo && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-yellow-400/30 bg-gradient-to-br from-green-700 via-green-600 to-blue-700 p-8 shadow-2xl">
            <button
              onClick={() => setShowPromo(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-2xl font-bold text-white transition hover:bg-black/50"
            >
              ×
            </button>

            <div className="text-center">
              <span className="mb-4 inline-block rounded-full bg-yellow-400 px-5 py-2 text-sm font-bold uppercase tracking-widest text-black shadow-lg">
                Promoção Especial Copa do Mundo
              </span>

              <h2 className="mb-6 text-4xl font-black leading-tight text-white md:text-5xl">
                PROMOÇÃO
          
                COPA DO MUNDO
              </h2>

              <p className="mx-auto mb-6 max-w-xl text-lg leading-relaxed text-white/90">
                Veículos vindo pela seguradora ganham
                <span className="font-black text-yellow-300">
                  {" "}
                  POLIMENTO TECNICO GRÁTIS
                </span>
              </p>

              <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/90">
                Clientes do site ganham
                <span className="font-black text-yellow-300"> 10% OFF EM SERVIÇOS PARTICULAR</span>
              </p>

              <div className="flex justify-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 text-black font-bold py-3 px-6 transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)] active:scale-95"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between h-20">
            <button
              type="button"
              className="flex items-center gap-3 text-left"
              onClick={() => scrollToId("hero")}
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/10 border border-white/10">
                <img
                  src="/logo.png"
                  alt="BLINK Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="text-2xl font-bold text-white">
                  BLINK{" "}
                  <span className="text-cyan-400">
                    ESTÉTICA AUTOMOTIVA
                  </span>
                </div>
              </div>
            </button>

            <ul className="hidden md:flex items-center gap-8">
              {[
                ["servicos", "Serviços"],
                ["galeria", "Galeria"],
                ["contato", "Contato"],
              ].map(([id, label]) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => scrollToId(id)}
                    className="text-gray-300 hover:text-cyan-400 font-medium transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-6 text-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-5xl">
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">
            Oficina Estética Automotiva na
            <span className="text-cyan-400"> Barra da Tijuca</span>
          </h1>

          <p className="text-gray-300 text-lg mt-6 max-w-3xl mx-auto">
            Especialistas em lanternagem, pintura, polimento técnico e
            acabamento premium.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mt-10">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 text-black font-bold py-3 px-6 transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)] active:scale-95"
            >
              WhatsApp
            </a>

            <button
              type="button"
              onClick={() => scrollToId("servicos")}
              className="border border-cyan-400 text-cyan-400 px-7 py-3 rounded-lg hover:bg-cyan-400/10 transition"
            >
              Ver Serviços
            </button>
          </div>
        </div>
      </section>
      {/* SEGURADORAS */}
<section className="bg-[#050b14] py-20">
  <div className="mx-auto max-w-7xl px-6 text-center">

    <h2 className="mb-3 text-3xl font-extrabold md:text-4xl">
      Trabalhamos com as melhores seguradoras do mercado
    </h2>

    <p className="mx-auto mb-12 max-w-2xl text-gray-400">
      Atendimento ágil para sinistros, aprovação rápida e suporte completo
      durante todo o processo.
    </p>

    <div className="grid gap-6 md:grid-cols-4">

      {[
        {
          nome: "Porto Seguro",
          img: "/porto.png",
        },
        {
          nome: "Azul Seguros",
          img: "/azul.png",
        },
        {
          nome: "Itaú Seguros",
          img: "/itau.png",
        },
        {
          nome: "Demais Seguradoras",
          img: "/demais.png",
        },
      ].map((s) => (
        <div
          key={s.nome}
          className="group rounded-2xl border border-white/10 bg-[#0b1627]/70 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]"
        >

          <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl bg-black/30 p-3">
            <img
              src={s.img}
              alt={s.nome}
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <h3 className="mt-5 text-lg font-bold text-white">
            {s.nome}
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Atendimento especializado para veículos segurados.
          </p>

        </div>
      ))}

    </div>
  </div>
</section>
      <section id="servicos" className="py-20 bg-[#050b14]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12">
            Nossos Serviços
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Pintura Automotiva",
              "Polimento Técnico",
              "Lanternagem",
              "Detalhamento",
              "Acabamento",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#0b1627] border border-cyan-500/15 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
              >
                <h3 className="text-xl font-bold">{item}</h3>

                <p className="text-gray-400 mt-3">
                  Serviço profissional com acabamento premium.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="py-20 bg-black">
        <h2 className="text-4xl font-bold text-center mb-12">
          Nossa Galeria de Trabalhos
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            "/galeria/1.jpg",
            "/galeria/2.jpg",
            "/galeria/3.jpg",
            "/galeria/4.jpg",
            "/galeria/5.jpg",
            "/galeria/6.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-[#0b1627]/40 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]"
            >
              <img
                src={src}
                alt={`Trabalho realizado ${i + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 bg-[#0a1220]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center">
            Entre em Contato
          </h2>

          <p className="text-center text-gray-400 mt-3">
            Atendimento rápido no WhatsApp. Fale com a gente!
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* ESQUERDA */}
            <div className="rounded-2xl bg-black/40 border border-white/10 p-8">
              <h3 className="text-2xl font-extrabold text-cyan-400">
                Nossa Unidade
              </h3>

              <div className="mt-6 rounded-xl bg-[#0b1627] border border-cyan-500/15 p-6">
                <p className="text-cyan-300 font-bold">
                  Unidade Barra da Tijuca
                </p>

                <p className="text-gray-300 mt-2">
                  Rua Joathur Bueno, 272
                </p>

                <p className="text-gray-300">
                  Barra da Tijuca - RJ
                </p>

                <div className="mt-4 space-y-2 text-cyan-300 font-semibold">
                  <p>(21) 96918-7827</p>
                  <p>(21) 98222-7699</p>
                </div>
              </div>

              {/* MAPA */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  src="https://www.google.com/maps?q=Rua+Joathur+Bueno,+272+Barra+da+Tijuca+RJ&output=embed"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa BLINK Estética Automotiva"
                  className="w-full"
                ></iframe>
              </div>

              <div className="mt-6 rounded-xl bg-[#0b1627] border border-cyan-500/15 p-6">
                <p className="text-cyan-300 font-bold">
                  Horário de Funcionamento
                </p>

                <p className="text-gray-200 mt-2 font-semibold">
                  Segunda a Sexta: 08:00–18:00
                </p>
              </div>

              <div className="mt-6 rounded-xl bg-[#0b1627] border border-cyan-500/15 p-6">
                <p className="text-cyan-300 font-bold">
                  Telefone Fixo
                </p>

                <p className="text-gray-200 mt-2 font-semibold">
                  (21) 2439-4259
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 text-black font-bold py-3 hover:bg-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]"
                >
                  <PhoneIcon className="w-5 h-5" />
                  WhatsApp
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rua+Joathur+Bueno,+272+Barra+da+Tijuca+RJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-cyan-600 font-bold py-3 hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                >
                  <PinIcon className="w-5 h-5" />
                  Como Chegar
                </a>
              </div>
            </div>

            {/* DIREITA */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
              <h3 className="text-2xl font-extrabold">
                Solicitar Orçamento
              </h3>

              <div className="mt-6 space-y-5">
                <div>
                  <label className="text-sm font-semibold text-gray-200">
                    Nome Completo
                  </label>

                  <input
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Seu nome completo"
                    className="mt-2 w-full rounded-xl bg-[#0b1627] border border-white/10 px-4 py-3 text-gray-100 placeholder:text-gray-500 outline-none focus:border-cyan-400/60"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-200">
                    Telefone / WhatsApp
                  </label>

                  <input
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="(00) 00000-0000"
                    className="mt-2 w-full rounded-xl bg-[#0b1627] border border-white/10 px-4 py-3 text-gray-100 placeholder:text-gray-500 outline-none focus:border-cyan-400/60"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-200">
                    Tipo de Atendimento
                  </label>

                  <select
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    className="mt-2 w-full rounded-xl bg-[#0b1627] border border-white/10 px-4 py-3 text-gray-200 outline-none focus:border-cyan-400/60"
                  >
                    <option value="">Selecione...</option>
                    <option value="Orçamento">Orçamento</option>
                    <option value="Agendamento">Agendamento</option>
                    <option value="Sinistro / Seguradora">
                      Sinistro / Seguradora
                    </option>
                    <option value="Dúvidas">Dúvidas</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-200">
                    Serviço de Interesse
                  </label>

                  <select
                    value={servico}
                    onChange={(e) => setServico(e.target.value)}
                    className="mt-2 w-full rounded-xl bg-[#0b1627] border border-white/10 px-4 py-3 text-gray-200 outline-none focus:border-cyan-400/60"
                  >
                    <option value="">Selecione o serviço...</option>
                    <option value="Pintura Automotiva">
                      Pintura Automotiva
                    </option>
                    <option value="Polimento Técnico">
                      Polimento Técnico
                    </option>
                    <option value="Lanternagem">
                      Lanternagem
                    </option>
                    <option value="Detalhamento">
                      Detalhamento
                    </option>
                    <option value="Acabamento">
                      Acabamento
                    </option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-200">
                    Descrição do Serviço
                  </label>

                  <textarea
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    placeholder="Descreva o serviço necessário..."
                    rows={5}
                    className="mt-2 w-full rounded-xl bg-[#0b1627] border border-white/10 px-4 py-3 text-gray-100 placeholder:text-gray-500 outline-none focus:border-cyan-400/60 resize-none"
                  />
                </div>

                <button
                  type="button"
                  onClick={enviarWhatsApp}
                  className="w-full rounded-xl bg-cyan-500 text-black font-extrabold py-3 hover:bg-cyan-600 transition inline-flex items-center justify-center gap-2"
                >
                  Enviar pelo WhatsApp
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}</section>

      </section>

      <footer className="border-t border-cyan-500/10 bg-[#050b14] py-8">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm tracking-wide text-gray-500">
            © 2026{" "}
            <span className="font-semibold text-cyan-400">
              BLINK Estética Automotiva
            </span>
            . Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
