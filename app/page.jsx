"use client";

import { useMemo, useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const whatsappNumber = "5521969187827";
  const whatsapp = `https://wa.me/${whatsappNumber}`;

  const scrollToId = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const services = useMemo(
    () => [
      "Pintura Automotiva",
      "Polimento Técnico",
      "Lanternagem Estrutural",
      "Acabamento e Detalhamento",
      // (removido “Cristalização” como você pediu)
    ],
    []
  );

  const reasons = useMemo(
    () => [
      {
        title: "Cuidado em Cada Detalhe",
        desc: "Na Blink, o segredo está nos detalhes. Cada serviço é realizado com precisão e dedicação.",
        icon: SparkIcon,
      },
      {
        title: "Atendimento Rápido no WhatsApp",
        desc: "Atendimento ágil e direto pelo WhatsApp para orçamentos e agendamentos.",
        icon: BoltIcon,
      },
      {
        title: "Resultados que Falam por Si",
        desc: "Trabalho de excelência visível na qualidade de cada serviço entregue.",
        icon: LikeIcon,
      },
      {
        title: "Equipe Especializada",
        desc: "Profissionais experientes focados em estética automotiva de alta qualidade.",
        icon: UsersIcon,
      },
      {
        title: "Garantia de Qualidade",
        desc: "Todos os serviços realizados com garantia, proporcionando total tranquilidade.",
        icon: ShieldIcon,
      },
      {
        title: "Estética que Vira Padrão",
        desc: "Nossa missão é transformar estética em padrão de qualidade na Barra da Tijuca.",
        icon: BadgeIcon,
      },
    ],
    []
  );

  const reviews = useMemo(
    () => [
      {
        name: "Rosa Maria de Carvalho Wanderley",
        text:
          "Levei meu UP! Cheio de amassados e para-choque quebrado. Essa oficina deixou ele LINDO de novo! " +
          "São detalhistas, cuidadosos e muito profissionais. Pintura perfeita, lisinha, macia ao toque, um brilho perfeito. " +
          "Fiquei impressionada e muito feliz! Super recomendo! Meu carro tá lindo! E entregaram antes do prazo!",
      },
      {
        name: "Renato Veloso",
        text:
          "Entregaram meu carro em 24h, serviço de lanternagem e pintura muito bem executado e o valor cobrado muito justo. " +
          "Ficou excelente! e ainda deram uma geral. Farei outros serviços com certeza.",
      },
      {
        name: "José Pereira",
        text:
          "Atendimento ótimo! Cumprem o prazo! Mão de obra impecável! Ainda entregaram o carro lavado e aspirado, nota 10!",
      },
      {
        name: "Mayra Paula Cristina",
        text:
          "Foi uma ótima experiência. Pessoal sério, comprometido com prazos com acabamento muito atenciosos sempre informando o progresso do serviço. Curti muito mesmo.",
      },
      {
        name: "Vanessa Moreira",
        text:
          "Atendimento e serviços espetaculares. No meu caso, recebi meu carro com um dia de antecedência. Com certeza indico para todos os meus amigos. Impecável.",
      },
      {
        name: "Eduardo Junior",
        text:
          "Deram 10 dias, foi me entregue em 5 dias. Entregaram o carro lavado por dentro e por fora. Atendimento profissional e cordial.",
      },
    ],
    []
  );

  // CONTATO (para o formulário enviar no WhatsApp)
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    tipo: "",
    servico: "",
    desc: "",
  });

  const buildWhatsAppMessage = () => {
    const lines = [
      "Olá! Gostaria de solicitar um orçamento na BLINK Estética Automotiva.",
      "",
      `Nome: ${form.nome || "-"}`,
      `Telefone/WhatsApp: ${form.telefone || "-"}`,
      `Tipo de atendimento: ${form.tipo || "-"}`,
      `Serviço de interesse: ${form.servico || "-"}`,
      `Descrição: ${form.desc || "-"}`,
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();
    const msg = buildWhatsAppMessage();
    window.open(`${whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <main className="bg-black text-white">
      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-cyan-600 to-sky-500 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <PhoneMiniIcon className="w-4 h-4" />
                <span>(21) 96918-7827 / (21) 98222-7699</span>
              </div>
              <div className="flex items-center gap-2">
                <PinMiniIcon className="w-4 h-4" />
                <span>Barra da Tijuca - RJ</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ClockMiniIcon className="w-4 h-4" />
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
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
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
              <MenuMiniIcon className="w-6 h-6" />
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
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
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

      {/* HERO (igual ao print, fundo com overlay transparente) */}
      <section
        id="hero"
        className="relative min-h-[78vh] md:min-h-screen flex items-center justify-center px-6 text-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-5xl">
          <span className="inline-flex items-center gap-2 mb-6 px-6 py-2 text-sm font-semibold rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/20 backdrop-blur">
            <SparkMiniIcon className="w-4 h-4" />
            Onde estética vira padrão
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Oficina Estética Automotiva na{" "}
            <span className="text-cyan-400">Barra da Tijuca</span>
          </h1>

          <p className="text-gray-200 text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Especialistas em lanternagem, pintura e polimento técnico. Qualidade,
            transparência e confiança em cada detalhe.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black px-7 py-3 rounded-lg font-semibold transition"
            >
              <PhoneCallMiniIcon className="w-5 h-5" />
              WhatsApp
            </a>

            <button
              type="button"
              onClick={() => scrollToId("servicos")}
              className="border border-cyan-300 text-cyan-200 px-7 py-3 rounded-lg hover:bg-cyan-400/10 transition"
            >
              Ver Serviços
            </button>
          </div>
        </div>
      </section>

      {/* SEGURADORAS (igual ao print) */}
      <section className="bg-gradient-to-b from-[#060b14] to-[#050b14] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Trabalhamos com as melhores seguradoras do mercado
          </h2>
          <p className="text-gray-400 mt-3">
            Atendemos todos os sinistros com agilidade e profissionalismo
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {["Porto Seguro", "Azul Seguros", "Itaú Seguros", "e demais seguradoras"].map(
              (s) => (
                <div
                  key={s}
                  className="px-10 py-4 rounded-xl bg-white/5 border border-white/10 text-gray-100 font-semibold shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                >
                  {s}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* SOBRE (igual ao print) */}
      <section className="bg-[#050b14] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Sobre a <span className="text-white">BLINK</span> Estética Automotiva
          </h2>
          <p className="text-gray-300 mt-5 max-w-4xl mx-auto leading-relaxed">
            Aqui você encontra qualidade, transparência e confiança. Lanternagem,
            pintura e acabamento com foco em precisão, cuidado e excelência.
            Transformamos a estética do seu veículo em um padrão de qualidade
            superior na Barra da Tijuca.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-10 text-gray-300">
            {[
              "Desde 2019",
              "Resultados que falam por si",
              "Cuidado em cada detalhe",
            ].map((t) => (
              <div key={t} className="inline-flex items-center gap-3">
                <CheckMiniIcon className="w-5 h-5 text-cyan-400" />
                <span className="text-sm md:text-base">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            Nossos Principais Serviços
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((item) => (
              <div
                key={item}
                className="bg-[#0b1627] p-6 rounded-2xl border border-cyan-500/15 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
              >
                <h3 className="text-xl font-extrabold mb-2 text-cyan-300">
                  {item}
                </h3>
                <p className="text-gray-300">
                  Serviço profissional com padrão BLINK e acabamento premium.
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-cyan-300 text-sm font-semibold hover:text-cyan-200"
                >
                  Solicitar orçamento <ArrowRightMiniIcon className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE NÓS (igual ao print) */}
      <section id="porque" className="py-20 bg-[#050b14]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold">
              Por que escolher a BLINK Estética Automotiva?
            </h2>
            <p className="text-gray-400 mt-3">6 motivos para confiar em nosso trabalho</p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="bg-[#0b1627] rounded-2xl p-8 border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-400/20 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-cyan-300" />
                  </div>
                  <h3 className="text-xl font-extrabold">{r.title}</h3>
                  <p className="text-gray-400 mt-3 leading-relaxed">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES (igual ao print) */}
      <section id="avaliacoes" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold">
              Resultados que Falam por Si
            </h2>
            <p className="text-gray-400 mt-3">
              Veja o que nossos clientes dizem sobre nosso trabalho
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {reviews.map((rv, idx) => (
              <div
                key={`${rv.name}-${idx}`}
                className="bg-[#0b1627] rounded-2xl p-8 border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
              >
                <div className="flex gap-1 text-cyan-300 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarMiniIcon key={i} className="w-5 h-5" />
                  ))}
                </div>

                <p className="text-gray-200 leading-relaxed italic">"{rv.text}"</p>

                <div className="mt-6 text-cyan-300 font-semibold">
                  – {rv.name}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="https://www.google.com/search?q=blink+est%C3%A9tica+automotiva+barra+da+tijuca+avalia%C3%A7%C3%B5es"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-cyan-500 text-black font-bold px-8 py-4 rounded-xl hover:bg-cyan-400 transition"
            >
              <StarMiniIcon className="w-5 h-5" />
              Ver avaliações no Google
            </a>
          </div>
        </div>
      </section>

      {/* CONTATO (igual ao print) */}
      <section id="contato" className="py-20 bg-[#050b14]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold">Entre em Contato</h2>
            <p className="text-gray-400 mt-3">
              Atendimento rápido no WhatsApp. Fale com a gente!
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-10">
            {/* LEFT */}
            <div className="bg-black/40 rounded-2xl border border-white/10 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <h3 className="text-2xl font-extrabold text-cyan-300 mb-6">
                Nossa Unidade
              </h3>

              <div className="bg-[#0b1627] rounded-2xl border border-white/10 p-6">
                <div className="text-cyan-300 font-bold text-lg">
                  Unidade Barra da Tijuca
                </div>
                <div className="text-gray-300 mt-3">
                  Rua Joathur Bueno, 272
                </div>
                <div className="text-gray-300">Barra da Tijuca - RJ</div>

                <div className="mt-5 space-y-2 text-cyan-300 font-semibold">
                  <div>(21) 96918-7827</div>
                  <div>(21) 98222-7699</div>
                </div>
              </div>

              <div className="mt-6 bg-[#0b1627] rounded-2xl border border-white/10 p-6">
                <div className="text-cyan-300 font-bold text-lg">
                  Horário de Funcionamento
                </div>
                <div className="text-gray-300 mt-3">
                  <span className="font-semibold">Segunda a Sexta:</span> 08:00–18:00
                </div>
              </div>

              <div className="mt-6 bg-[#0b1627] rounded-2xl border border-white/10 p-6">
                <div className="text-cyan-300 font-bold text-lg">Telefone Fixo</div>
                <div className="text-gray-300 mt-3">(21) 2439-4259</div>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-cyan-500 text-black font-bold px-6 py-4 rounded-xl hover:bg-cyan-400 transition"
                >
                  <PhoneCallMiniIcon className="w-5 h-5" />
                  WhatsApp
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rua+Joathur+Bueno,+272+Barra+da+Tijuca+RJ"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white text-black font-bold px-6 py-4 rounded-xl hover:opacity-90 transition"
                >
                  <PinMiniIcon className="w-5 h-5" />
                  Como Chegar
                </a>
              </div>
            </div>

            {/* RIGHT - FORM */}
            <div className="bg-[#0b1627] rounded-2xl border border-white/10 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <h3 className="text-2xl font-extrabold mb-6">Solicitar Orçamento</h3>

              <form onSubmit={handleSubmitWhatsApp} className="space-y-5">
                <div>
                  <label className="block text-gray-200 text-sm font-semibold mb-2">
                    Nome Completo
                  </label>
                  <input
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="w-full rounded-xl bg-[#0a1222] border border-white/10 px-4 py-3 text-gray-100 outline-none focus:border-cyan-400/60"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-gray-200 text-sm font-semibold mb-2">
                    Telefone / WhatsApp
                  </label>
                  <input
                    value={form.telefone}
                    onChange={(e) =>
                      setForm({ ...form, telefone: e.target.value })
                    }
                    className="w-full rounded-xl bg-[#0a1222] border border-white/10 px-4 py-3 text-gray-100 outline-none focus:border-cyan-400/60"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label className="block text-gray-200 text-sm font-semibold mb-2">
                    Tipo de Atendimento
                  </label>
                  <select
                    value={form.tipo}
                    onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                    className="w-full rounded-xl bg-[#0a1222] border border-white/10 px-4 py-3 text-gray-100 outline-none focus:border-cyan-400/60"
                  >
                    <option value="">Selecione...</option>
                    <option value="Particular">Particular</option>
                    <option value="Seguradora">Seguradora</option>
                    <option value="Frota/Empresa">Frota/Empresa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-200 text-sm font-semibold mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    value={form.servico}
                    onChange={(e) =>
                      setForm({ ...form, servico: e.target.value })
                    }
                    className="w-full rounded-xl bg-[#0a1222] border border-white/10 px-4 py-3 text-gray-100 outline-none focus:border-cyan-400/60"
                  >
                    <option value="">Selecione o serviço...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-200 text-sm font-semibold mb-2">
                    Descrição do Serviço
                  </label>
                  <textarea
                    value={form.desc}
                    onChange={(e) => setForm({ ...form, desc: e.target.value })}
                    className="w-full min-h-[120px] rounded-xl bg-[#0a1222] border border-white/10 px-4 py-3 text-gray-100 outline-none focus:border-cyan-400/60 resize-none"
                    placeholder="Descreva o serviço necessário (ex: polimento no capô, pintura na porta direita...)"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-cyan-500 text-black font-extrabold px-6 py-4 rounded-xl hover:bg-cyan-400 transition"
                >
                  Enviar pelo WhatsApp
                  <ArrowRightMiniIcon className="w-5 h-5" />
                </button>
              </form>
            </div>
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
                className="rounded-2xl object-cover h-60 w-full border border-white/10"
              />
            ))}
          </div>
        </div>
      </section>

            {/* CTA FINAL (igual ao print) */}
      <section className="bg-gradient-to-r from-cyan-600 to-sky-500 py-20 md:py-28 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-flex items-center gap-2 mb-8 px-6 py-3 text-sm font-semibold rounded-full bg-black/15 text-white backdrop-blur">
            ✦ Onde estética vira padrão
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Agende seu serviço hoje mesmo
          </h2>

          <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Entre em contato pelo WhatsApp e descubra a qualidade que transformou
            a estética automotiva na Barra da Tijuca!
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-black text-cyan-300 px-7 py-4 rounded-lg font-semibold hover:opacity-90 transition"
            >
              <PhoneIcon className="w-5 h-5" />
              Falar no WhatsApp
            </a>

            {/* botao branco "vazio" igual o print */}
            <div className="h-14 w-40 rounded-lg bg-white shadow-sm" />
          </div>
        </div>
      </section>

      {/* FOOTER (igual ao print) */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            {/* Coluna 1 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logo.png"
                  alt="BLINK"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-lg font-bold">
                  BLINK <span className="text-cyan-400">ESTÉTICA AUTOMOTIVA</span>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed max-w-sm">
                Onde estética vira padrão. Especialistas em Lanternagem, pintura e
                polimento técnico na Barra da Tijuca.
              </p>

              <p className="text-gray-500 text-sm mt-6">
                CNPJ: 33.795.707/0001-90
              </p>
            </div>

            {/* Coluna 2 */}
            <div>
              <h3 className="text-white font-semibold mb-4">Serviços</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-cyan-400" />
                  Pintura Automotiva
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-cyan-400" />
                  Polimento Técnico
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-cyan-400" />
                  Lanternagem
                </li>
              </ul>
            </div>

            {/* Coluna 3 */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contato</h3>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-cyan-400" />
                  (21) 96918-7827
                </li>
                <li className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-cyan-400" />
                  (21) 98222-7699
                </li>
                <li className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-cyan-400" />
                  (21) 2439-4259
                </li>
                <li className="flex items-center gap-3">
                  <PinIcon className="w-5 h-5 text-cyan-400" />
                  Barra da Tijuca - RJ
                </li>
              </ul>

              <a
                href="https://instagram.com/blinkesteticaauto"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 text-cyan-400 font-semibold hover:opacity-90"
              >
                @blinkesteticaauto
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} BLINK Estética Automotiva LTDA. Todos os
            direitos reservados.
          </div>
        </div>
      </footer>


/* =========================
   ÍCONES (sem biblioteca)
========================= */

function PhoneMiniIcon({ className }) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L9.91 10.09a16 16 0 0 0 6 6l.76-.76a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function PhoneCallMiniIcon({ className }) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L9.91 10.09a16 16 0 0 0 6 6l.76-.76a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92z" />
      <path d="M14 2a6 6 0 0 1 6 6" />
      <path d="M14 6a2 2 0 0 1 2 2" />
    </svg>
  );
}

function PinMiniIcon({ className }) {
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

function ClockMiniIcon({ className }) {
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

function MenuMiniIcon({ className }) {
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

function ArrowRightMiniIcon({ className }) {
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
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

function StarMiniIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 17.27l5.18 3.04-1.64-5.81L20 9.24l-5.9-.51L12 3.5 9.9 8.73 4 9.24l4.46 5.26-1.64 5.81L12 17.27z" />
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


function SparkMiniIcon({ className }) {
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
      <path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2z" />
      <path d="M4 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" />
    </svg>
  );
}

/* ÍCONES DA SEÇÃO “POR QUE NÓS?” */
function SparkIcon({ className }) {
  return <SparkMiniIcon className={className} />;
}
function BoltIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2L3 14h7l-1 8 12-14h-7l-1-6z" />
    </svg>
  );
}
function LikeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 10v12H3V10h4z" />
      <path d="M21 10a2 2 0 0 0-2-2h-6l1-4a2 2 0 0 0-2-2L7 10v12h10a2 2 0 0 0 2-2l2-8z" />
    </svg>
  );
}
function UsersIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function ShieldIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function BadgeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 17l-5 3 1-5-4-4 5-.7L12 6l2 4.3 5 .7-4 4 1 5-5-3z" />
    </svg>
  );
}
