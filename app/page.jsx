"use client";

import { useMemo, useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  // Form (Contato)
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [tipo, setTipo] = useState("");
  const [servico, setServico] = useState("");
  const [descricao, setDescricao] = useState("");

  const whatsappNumber = "5521969187827";
  const whatsappLink = useMemo(
    () => `https://wa.me/${whatsappNumber}`,
    [whatsappNumber]
  );

  const scrollToId = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
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
            <button
              type="button"
              className="flex items-center gap-3 cursor-pointer text-left"
              onClick={() => scrollToId("hero")}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden bg-white/10 border border-white/10">
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
            </button>

            {/* Desktop menu */}
            <ul className="hidden md:flex items-center gap-6 lg:gap-8">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToId("servicos")}
                  className="text-gray-300 hover:text-cyan-400 font-medium transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToId("porque")}
                  className="text-gray-300 hover:text-cyan-400 font-medium transition-colors"
                >
                  Por que nós?
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToId("avaliacoes")}
                  className="text-gray-300 hover:text-cyan-400 font-medium transition-colors"
                >
                  Avaliações
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToId("galeria")}
                  className="text-gray-300 hover:text-cyan-400 font-medium transition-colors"
                >
                  Galeria
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToId("contato")}
                  className="text-gray-300 hover:text-cyan-400 font-medium transition-colors"
                >
                  Contato
                </button>
              </li>

              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold h-9 px-4 rounded-md inline-flex items-center justify-center"
                >
                  WhatsApp
                </a>
              </li>
            </ul>

            {/* Mobile button */}
            <button
              type="button"
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
                    type="button"
                    onClick={() => scrollToId("servicos")}
                    className="text-left px-3 py-2 rounded-lg text-gray-200 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    Serviços
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToId("porque")}
                    className="text-left px-3 py-2 rounded-lg text-gray-200 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    Por que nós?
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToId("avaliacoes")}
                    className="text-left px-3 py-2 rounded-lg text-gray-200 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    Avaliações
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToId("galeria")}
                    className="text-left px-3 py-2 rounded-lg text-gray-200 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    Galeria
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToId("contato")}
                    className="text-left px-3 py-2 rounded-lg text-gray-200 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    Contato
                  </button>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
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

      {/* HERO (estilo do print) */}
      <section
        id="hero"
        className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center px-6 text-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <span className="inline-flex items-center gap-2 mb-6 px-6 py-2 text-sm font-semibold rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/25 backdrop-blur">
            <SparkIcon className="w-4 h-4" />
            Onde estética vira padrão
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Oficina Estética Automotiva na{" "}
            <span className="text-cyan-400">Barra da Tijuca</span>
          </h1>

          <p className="text-gray-200 text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Especialistas em Lanternagem, pintura e polimento técnico. Qualidade,
            transparência e confiança em cada detalhe.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black px-7 py-3 rounded-lg font-semibold transition"
            >
              <PhoneIcon className="w-5 h-5" />
              WhatsApp
            </a>

            <button
              type="button"
              onClick={() => scrollToId("servicos")}
              className="inline-flex items-center justify-center border border-cyan-400 text-cyan-300 px-7 py-3 rounded-lg hover:bg-cyan-400/10 transition"
            >
              Ver Serviços
            </button>
          </div>
        </div>
      </section>

     {/* SEGURADORAS (com ícones) */}
<section className="py-14 bg-[#050b14]">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-2xl md:text-3xl font-extrabold text-center">
      Trabalhamos com as melhores seguradoras do mercado
    </h2>
    <p className="text-center text-gray-400 mt-2">
      Atendemos todos os sinistros com agilidade e profissionalismo
    </p>

    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { name: "Porto Seguro", img: "/seguradoras/porto.png" },
        { name: "Azul Seguros", img: "/seguradoras/azul.png" },
        { name: "Itaú Seguros", img: "/seguradoras/itau.png" },
        { name: "e demais seguradoras", img: "/seguradoras/geral.png" },
      ].map((s) => (
        <div
          key={s.name}
          className="rounded-xl bg-white/5 border border-white/10 py-4 px-4 font-semibold text-gray-100
                     flex items-center justify-center gap-3"
        >
          <div className="w-9 h-9 rounded-lg bg-black/25 border border-white/10 flex items-center justify-center overflow-hidden">
            <img
              src={s.img}
              alt={s.name}
              className="w-full h-full object-contain p-1"
            />
          </div>

          <span className="text-sm md:text-base">{s.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* SOBRE (print) */}
      <section className="py-16 bg-[#0a1220]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Sobre a BLINK Estética Automotiva
          </h2>

          <p className="text-gray-300 max-w-5xl mx-auto mt-4 leading-relaxed">
            Aqui você encontra qualidade, transparência e confiança. Lanternagem,
            pintura e acabamento com foco em precisão, cuidado e excelência.
            Transformamos a estética do seu veículo em um padrão de qualidade
            superior na Barra da Tijuca.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-6 items-center justify-center text-gray-200">
            <div className="inline-flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-cyan-400" />
              <span className="text-sm md:text-base text-gray-300">
                Desde 2019
              </span>
            </div>
            <div className="inline-flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-cyan-400" />
              <span className="text-sm md:text-base text-gray-300">
                Resultados que falam por si
              </span>
            </div>
            <div className="inline-flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-cyan-400" />
              <span className="text-sm md:text-base text-gray-300">
                Cuidado em cada detalhe
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS (sem cristalização, como você pediu) */}
      <section id="servicos" className="py-20 bg-[#050b14]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            Nossos Serviços
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Pintura Automotiva", d: "Serviço profissional com acabamento de alto padrão." },
              { t: "Polimento Técnico", d: "Serviço profissional com acabamento de alto padrão." },
              { t: "Lanternagem", d: "Serviço profissional com acabamento de alto padrão." },
              { t: "Detalhamento", d: "Serviço profissional com acabamento de alto padrão." },
              { t: "Acabamento", d: "Serviço profissional com acabamento de alto padrão." },
            ].map((card) => (
              <div
                key={card.t}
                className="rounded-2xl bg-[#0b1627] border border-cyan-500/15 p-6 shadow-[0_0_0_1px_rgba(34,211,238,0.06)]"
              >
                <h3 className="text-lg font-bold">{card.t}</h3>
                <p className="text-gray-400 mt-2 text-sm">{card.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE NÓS (print com 6 cards) */}
      <section id="porque" className="py-20 bg-[#0a1220]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center">
            Por que escolher a BLINK Estética Automotiva?
          </h2>
          <p className="text-center text-gray-400 mt-3">
            6 motivos para confiar em nosso trabalho
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <SparkBoxIcon />,
                t: "Cuidado em Cada Detalhe",
                d: "Na Blink, o segredo está nos detalhes. Cada serviço é realizado com precisão e dedicação.",
              },
              {
                icon: <BoltBoxIcon />,
                t: "Atendimento Rápido no WhatsApp",
                d: "Atendimento ágil e direto pelo WhatsApp para orçamentos e agendamentos.",
              },
              {
                icon: <ThumbBoxIcon />,
                t: "Resultados que Falam por Si",
                d: "Trabalho de excelência visível na qualidade de cada serviço entregue.",
              },
              {
                icon: <UsersBoxIcon />,
                t: "Equipe Especializada",
                d: "Profissionais experientes focados em estética automotiva de alta qualidade.",
              },
              {
                icon: <ShieldBoxIcon />,
                t: "Garantia de Qualidade",
                d: "Todos os serviços realizados com garantia, proporcionando total tranquilidade.",
              },
              {
                icon: <MedalBoxIcon />,
                t: "Estética que Vira Padrão",
                d: "Nossa missão é transformar estética em padrão de qualidade na Barra da Tijuca.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-2xl bg-[#0b1627] border border-white/10 p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 border border-cyan-400/20 flex items-center justify-center text-cyan-300 mb-6">
                  {c.icon}
                </div>
                <h3 className="text-xl font-extrabold">{c.t}</h3>
                <p className="text-gray-400 mt-3 leading-relaxed text-sm">
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES (print) */}
      <section id="avaliacoes" className="py-20 bg-[#050b14]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center">
            Resultados que Falam por Si
          </h2>
          <p className="text-center text-gray-400 mt-3">
            Veja o que nossos clientes dizem sobre nosso trabalho
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Rosa Maria de Carvalho Wanderley",
                text:
                  "“Levei meu UP! Cheio de amassados e para-choque quebrado. Essa oficina deixou ele LINDO de novo! São detalhistas, cuidadosos e muito profissionais. Pintura perfeita, lisinha, macia ao toque, um brilho perfeito. Fiquei impressionada e muito feliz! Super recomendo! Meu carro tá lindo! E entregaram antes do prazo!”",
              },
              {
                name: "Renato Veloso",
                text:
                  "“Entregaram meu carro em 24h, serviço de lanternagem e pintura muito bem executado e o valor cobrado muito justo. Ficou excelente! e ainda deram um geral. Farei outros serviços com certeza”",
              },
              {
                name: "José Pereira",
                text:
                  "“Atendimento ótimo! Cumprrem o prazo! Mão de obra impecável! Ainda entregaram o carro lavado e aspirado, nota 10!”",
              },
              {
                name: "Mayra Paula Cristina",
                text:
                  "“Foi uma ótima experiência. Pessoal sério, comprometido com prazos com acabamento muito atenciosos sempre informando o progresso do serviço. Curti muito mesmo.”",
              },
              {
                name: "Vanessa Moreira",
                text:
                  "“Atendimento e serviços espetaculares. No meu caso, recebi meu carro com um dia de antecedência. Com certeza indico para todos os meus amigos. Impecável.”",
              },
              {
                name: "Eduardo Junior",
                text:
                  "“Deram 10 dias, foi me entregue em 5 dias. Entregaram o carro lavado por dentro e por fora. Atendimento profissional e cordial.”",
              },
            ].map((a) => (
              <div
                key={a.name}
                className="rounded-2xl bg-[#0b1627] border border-white/10 p-7"
              >
                <div className="flex items-center gap-2 mb-4 text-cyan-400">
                  <StarIcon className="w-6 h-6" />
                  <StarIcon className="w-6 h-6" />
                  <StarIcon className="w-6 h-6" />
                  <StarIcon className="w-6 h-6" />
                  <StarIcon className="w-6 h-6" />
                </div>

                <p className="text-gray-300 leading-relaxed italic text-sm">
                  {a.text}
                </p>

                <p className="mt-6 text-cyan-400 font-semibold text-sm">
                  – {a.name}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="https://www.google.com/search?q=BLINK+Est%C3%A9tica+Automotiva+Barra+da+Tijuca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-cyan-600 transition"
            >
              <StarIcon className="w-5 h-5" />
              Ver avaliações no Google
            </a>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            Nossa Galeria de Trabalhos
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img
                key={i}
                src={`/galeria/${i}.jpg`}
                alt="Trabalho realizado"
                className="rounded-2xl object-cover h-56 md:h-64 w-full border border-white/10"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO (print) */}
      <section id="contato" className="py-20 bg-[#0a1220]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center">
            Entre em Contato
          </h2>
          <p className="text-center text-gray-400 mt-3">
            Atendimento rápido no WhatsApp. Fale com a gente!
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Left card */}
            <div className="rounded-2xl bg-black/40 border border-white/10 p-8">
              <h3 className="text-2xl font-extrabold text-cyan-400">
                Nossa Unidade
              </h3>

              <div className="mt-6 rounded-xl bg-[#0b1627] border border-cyan-500/15 p-6">
                <p className="text-cyan-300 font-bold">Unidade Barra da Tijuca</p>
                <p className="text-gray-300 mt-2">Rua Joathur Bueno, 272</p>
                <p className="text-gray-300">Barra da Tijuca - RJ</p>

                <div className="mt-4 space-y-2 text-cyan-300 font-semibold">
                  <p>(21) 96918-7827</p>
                  <p>(21) 98222-7699</p>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-[#0b1627] border border-cyan-500/15 p-6">
                <p className="text-cyan-300 font-bold">Horário de Funcionamento</p>
                <p className="text-gray-200 mt-2 font-semibold">
                  Segunda a Sexta: 08:00–18:00
                </p>
              </div>

              <div className="mt-6 rounded-xl bg-[#0b1627] border border-cyan-500/15 p-6">
                <p className="text-cyan-300 font-bold">Telefone Fixo</p>
                <p className="text-gray-200 mt-2 font-semibold">(21) 2439-4259</p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 text-black font-bold py-3 hover:bg-cyan-600 transition"
                >
                  <PhoneIcon className="w-5 h-5" />
                  WhatsApp
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rua+Joathur+Bueno,+272+Barra+da+Tijuca+RJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-cyan-600 font-bold py-3 hover:opacity-90 transition"
                >
                  <PinIcon className="w-5 h-5" />
                  Como Chegar
                </a>
              </div>
            </div>

            {/* Right card */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
              <h3 className="text-2xl font-extrabold">Solicitar Orçamento</h3>

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
                    <option value="Sinistro / Seguradora">Sinistro / Seguradora</option>
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
                    <option value="Pintura Automotiva">Pintura Automotiva</option>
                    <option value="Polimento Técnico">Polimento Técnico</option>
                    <option value="Lanternagem">Lanternagem</option>
                    <option value="Detalhamento">Detalhamento</option>
                    <option value="Acabamento">Acabamento</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-200">
                    Descrição do Serviço
                  </label>
                  <textarea
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    placeholder="Descreva o serviço necessário (ex: polimento no capô, pintura na porta direita...)"
                    rows={5}
                    className="mt-2 w-full rounded-xl bg-[#0b1627] border border-white/10 px-4 py-3 text-gray-100 placeholder:text-gray-500 outline-none focus:border-cyan-400/60 resize-none"
                  />
                </div>

                <button
                  type="button"
                  onClick={enviarWhatsApp}
                  className="w-full rounded-xl bg-cyan-500 text-black font-extrabold py-3 hover:bg-cyan-600 transition inline-flex items-center justify-center gap-2"
                >
                  Enviar pelo WhatsApp <ArrowRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL (print do final do site) */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-sky-500 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <span className="inline-flex items-center gap-2 mb-6 px-6 py-2 text-sm font-semibold rounded-full bg-black/20 text-white border border-white/20 backdrop-blur">
            <SparkIcon className="w-4 h-4" />
            Onde estética vira padrão
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            Agende seu serviço hoje mesmo
          </h2>

          <p className="mt-4 text-white/90 text-base md:text-lg">
            Entre em contato pelo WhatsApp e descubra a qualidade que transformou
            a estética automotiva na Barra da Tijuca!
          </p>

          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black text-cyan-300 font-extrabold px-7 py-3 rounded-lg hover:opacity-90 transition"
            >
              <PhoneIcon className="w-5 h-5" />
              Falar no WhatsApp
            </a>

            <button
              type="button"
              onClick={() => scrollToId("contato")}
              className="inline-flex items-center justify-center bg-white text-black font-extrabold px-7 py-3 rounded-lg hover:opacity-90 transition"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER (igual print) */}
      <footer className="bg-black py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-white/10 border border-white/10">
                  <img
                    src="/logo.png"
                    alt="BLINK Logo"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <p className="font-extrabold text-cyan-400">
                    BLINK ESTÉTICA AUTOMOTIVA
                  </p>
                  <p className="text-gray-400 mt-2 text-sm leading-relaxed max-w-sm">
                    Onde estética vira padrão. Especialistas em Lanternagem,
                    pintura e polimento técnico na Barra da Tijuca.
                  </p>
                  <p className="text-gray-500 mt-4 text-xs">
                    CNPJ: 33.795.707/0001-90
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-extrabold text-white">Serviços</p>
              <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                {[
                  "Pintura Automotiva",
                  "Polimento Técnico",
                  "Lanternagem",
                  "Detalhamento",
                ].map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-cyan-400" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-extrabold text-white">Contato</p>
              <ul className="mt-4 space-y-3 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <PhoneIcon className="w-4 h-4 text-cyan-400" />
                  (21) 96918-7827
                </li>
                <li className="flex items-center gap-2">
                  <PhoneIcon className="w-4 h-4 text-cyan-400" />
                  (21) 98222-7699
                </li>
                <li className="flex items-center gap-2">
                  <PhoneIcon className="w-4 h-4 text-cyan-400" />
                  (21) 2439-4259
                </li>
                <li className="flex items-center gap-2">
                  <PinIcon className="w-4 h-4 text-cyan-400" />
                  Barra da Tijuca - RJ
                </li>
              </ul>

              <p className="mt-6 text-cyan-400 font-semibold text-sm">
                @blinkesteticaauto
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
            © 2026 BLINK Estética Automotiva LTDA. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}

/* =======================
   ICONES (sem biblioteca)
======================= */

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

function StarIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function CheckIcon({ className }) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function SparkIcon({ className }) {
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
      <path d="M12 2l1.5 6L20 10l-6.5 2L12 18l-1.5-6L4 10l6.5-2L12 2z" />
    </svg>
  );
}

function ArrowRightIcon({ className }) {
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
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

/* ===== Icones dos cards "Por que nós" ===== */
function SparkBoxIcon() {
  return <SparkIcon className="w-7 h-7" />;
}
function BoltBoxIcon() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}
function ThumbBoxIcon() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 9V5a3 3 0 0 0-3-3l-1 7" />
      <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
      <path d="M7 11h8a2 2 0 0 1 2 2l-1 7a2 2 0 0 1-2 2H7V11z" />
    </svg>
  );
}
function UsersBoxIcon() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M7 21v-2a4 4 0 0 1 4-4h2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function ShieldBoxIcon() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function MedalBoxIcon() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M8.5 14.5 7 22l5-3 5 3-1.5-7.5" />
    </svg>
  );
}
