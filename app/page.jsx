"use client";

import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const scrollToId = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const whatsapp = "https://wa.me/5521969187827";

  return (
    <main className="bg-black text-white">
      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-cyan-600 to-sky-500 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4" />
                <span>(21) 96918-7827 / (21) 98222-7699</span>
              </div>
              <div className="flex items-center gap-2">
                <PinIcon className="w-4 h-4" />
                <span>Barra da Tijuca - RJ</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4" />
              <span>Atendimento rápido no WhatsApp</span>
            </div>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="bg-black/90 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Brand */}
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToId("hero")}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-sky-600 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.png"
                  alt="BLINK Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="leading-tight">
                <div className="text-lg md:text-2xl font-bold text-white">
                  BLINK{" "}
                  <span className="text-cyan-400">ESTÉTICA AUTOMOTIVA</span>
                </div>
                <p className="text-xs text-cyan-400 font-semibold hidden md:block">
                  Onde estética vira padrão
                </p>
              </div>
            </div>

            {/* Desktop menu */}
            <ul className="hidden md:flex items-center gap-6 lg:gap-8">
              <li>
                <button
                  onClick={() => scrollToId("servicos")}
                  className="text-gray-300 hover:text-cyan-400 font-medium transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToId("porque")}
                  className="text-gray-300 hover:text-cyan-400 font-medium transition-colors"
                >
                  Por que nós?
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToId("avaliacoes")}
                  className="text-gray-300 hover:text-cyan-400 font-medium transition-colors"
                >
                  Avaliações
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToId("galeria")}
                  className="text-gray-300 hover:text-cyan-400 font-medium transition-colors"
                >
                  Galeria
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToId("contato")}
                  className="text-gray-300 hover:text-cyan-400 font-medium transition-colors"
                >
                  Contato
                </button>
              </li>

              <li>
                <a
                  href={whatsapp}
                  target="_blank"
                  className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold h-9 px-4 rounded-md inline-flex items-center justify-center"
                >
                  WhatsApp
                </a>
              </li>
            </ul>

            {/* Mobile button */}
            <button
              className="md:hidden text-white"
              aria-label="Abrir menu"
              onClick={() => setOpen((v) => !v)}
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </nav>

          {/* Mobile menu */}
          {open && (
            <div className="md:hidden pb-4">
              <div className="bg-gray-900/70 border border-cyan-500/20 rounded-xl p-4">
                <div className="grid gap-2">
                  <button
                    onClick={() => scrollToId("servicos")}
                    className="text-left px-3 py-2 rounded-lg text-gray-200 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    Serviços
                  </button>
                  <button
                    onClick={() => scrollToId("porque")}
                    className="text-left px-3 py-2 rounded-lg text-gray-200 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    Por que nós?
                  </button>
                  <button
                    onClick={() => scrollToId("avaliacoes")}
                    className="text-left px-3 py-2 rounded-lg text-gray-200 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    Avaliações
                  </button>
                  <button
                    onClick={() => scrollToId("galeria")}
                    className="text-left px-3 py-2 rounded-lg text-gray-200 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    Galeria
                  </button>
                  <button
                    onClick={() => scrollToId("contato")}
                    className="text-left px-3 py-2 rounded-lg text-gray-200 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    Contato
                  </button>

                  <a
                    href={whatsapp}
                    target="_blank"
                    className="mt-2 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-4 py-3 rounded-lg text-center"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
<section
  id="hero"
  className="relative min-h-screen flex items-center justify-center px-6 text-center"
  style={{
    backgroundImage: "url('/hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay escuro SUAVE */}
  <div className="absolute inset-0 bg-black/55"></div>

  {/* Conteúdo */}
  <div className="relative z-10 max-w-5xl">

    {/* Selo */}
    <span className="inline-flex items-center gap-2 mb-6 px-5 py-2 text-sm font-medium rounded-full bg-cyan-500/15 text-cyan-400 backdrop-blur">
      ✦ Onde estética vira padrão
    </span>

    {/* Título */}
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
      Oficina Estética Automotiva na{" "}
      <span className="text-cyan-400">Barra da Tijuca</span>
    </h1>

    {/* Subtítulo */}
    <p className="text-gray-200 text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
      Especialistas em lanternagem, pintura e polimento técnico.
      Qualidade, transparência e confiança em cada detalhe.
    </p>

    {/* Botões */}
    <div className="flex gap-4 justify-center flex-wrap">
      <a
        href="https://wa.me/5521969187827"
        target="_blank"
        className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black px-7 py-3 rounded-lg font-semibold transition"
      >
        WhatsApp
      </a>

      <a
        href="#servicos"
        className="border border-cyan-400 text-cyan-400 px-7 py-3 rounded-lg hover:bg-cyan-400/10 transition"
      >
        Ver Serviços
      </a>
    </div>
  </div>
</section>
      {/* SEGURADORAS */}
<section className="py-14 bg-gradient-to-b from-black to-[#050b14]">
  <div className="max-w-6xl mx-auto px-6 text-center">
    
    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
      Trabalhamos com as melhores seguradoras do mercado
    </h3>

    <p className="text-gray-400 mb-8">
      Atendemos todos os sinistros com agilidade e profissionalismo
    </p>

    <div className="flex flex-wrap justify-center gap-6">
      <div className="bg-white/10 backdrop-blur-md px-10 py-5 rounded-xl border border-white/20">
        <span className="text-white font-bold text-lg">Porto Seguro</span>
      </div>

      <div className="bg-white/10 backdrop-blur-md px-10 py-5 rounded-xl border border-white/20">
        <span className="text-white font-bold text-lg">Azul Seguros</span>
      </div>

      <div className="bg-white/10 backdrop-blur-md px-10 py-5 rounded-xl border border-white/20">
        <span className="text-white font-bold text-lg">Itaú Seguros</span>
      </div>

      <div className="bg-white/10 backdrop-blur-md px-10 py-5 rounded-xl border border-white/20">
        <span className="text-white font-bold text-lg">
          e demais seguradoras
        </span>
      </div>
    </div>

  </div>
</section>
      {/* SOBRE A BLINK */}
<section className="py-20 bg-gradient-to-b from-[#050b14] to-black">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
      Sobre a <span className="text-cyan-400">BLINK Estética Automotiva</span>
    </h2>

    <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10">
      Aqui você encontra qualidade, transparência e confiança. Lanternagem,
      pintura e acabamento com foco em precisão, cuidado e excelência.
      Transformamos a estética do seu veículo em um padrão de qualidade superior
      na Barra da Tijuca.
    </p>

    <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base">
      <div className="flex items-center gap-2 text-cyan-400 font-semibold">
        ✓ <span className="text-gray-200">Desde 2019</span>
      </div>

      <div className="flex items-center gap-2 text-cyan-400 font-semibold">
        ✓ <span className="text-gray-200">Resultados que falam por si</span>
      </div>

      <div className="flex items-center gap-2 text-cyan-400 font-semibold">
        ✓ <span className="text-gray-200">Cuidado em cada detalhe</span>
      </div>
    </div>

  </div>
</section>




      {/* Seções (precisa ter esses IDs pro menu funcionar) */}
      <section id="servicos" className="py-20 bg-[#050b14]">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6">
          {[
            "Pintura Automotiva",
            "Polimento Técnico",
            "Lanternagem Estrutural",
            "Acabamento e Detalhamento",
          ].map((item) => (
            <div
              key={item}
              className="bg-[#0b1627] p-6 rounded-xl border border-cyan-500/20"
            >
              <h3 className="text-xl font-bold mb-2 text-cyan-400">{item}</h3>
              <p className="text-gray-300">Serviço premium com padrão BLINK.</p>
              <a
                href={whatsapp}
                target="_blank"
                className="inline-block mt-4 text-cyan-400 text-sm"
              >
                Solicitar orçamento →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="porque" className="py-20 bg-black">
        <h2 className="text-3xl font-bold text-center mb-12">Por que nós?</h2>
        <div className="max-w-5xl mx-auto px-6 text-gray-300 text-center">
          Qualidade, transparência e confiança em cada detalhe.
        </div>
      </section>

      <section id="avaliacoes" className="py-20 bg-[#050b14]">
        <h2 className="text-3xl font-bold text-center mb-12">Avaliações</h2>
        <div className="max-w-5xl mx-auto px-6 text-gray-300 text-center">
          Clientes satisfeitos e resultados que falam por si.
        </div>
      </section>

      <section id="galeria" className="py-20 bg-black">
        <h2 className="text-3xl font-bold text-center mb-12">Galeria</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <img
              key={i}
              src={`/galeria/${i}.jpg`}
              alt="Trabalho realizado"
              className="rounded-xl object-cover h-60 w-full"
            />
          ))}
        </div>
      </section>

      <section id="contato" className="py-20 bg-[#050b14] text-center">
        <h2 className="text-3xl font-bold mb-4">Contato</h2>
        <p className="text-gray-300 mb-8">Atendimento rápido no WhatsApp.</p>
        <a
          href={whatsapp}
          target="_blank"
          className="bg-cyan-500 text-black px-8 py-4 rounded-md font-semibold"
        >
          Falar agora
        </a>
      </section>

      <footer className="py-10 text-center text-gray-500 bg-black">
        © {new Date().getFullYear()} BLINK Estética Automotiva
      </footer>
    </main>
  );
}

/* ÍCONES (sem depender de biblioteca) */
function PhoneIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  );
}

function PinIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 6v6l4 2" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function MenuIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12h16" />
      <path d="M4 6h16" />
      <path d="M4 18h16" />
    </svg>
  );
}
