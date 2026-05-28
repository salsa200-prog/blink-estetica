"use client";

import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [showPromo, setShowPromo] = useState(false);
  const [open, setOpen] = useState(false);

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [tipo, setTipo] = useState("");
  const [servico, setServico] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPromo(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = "5521969187827";

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
      {/* POPUP */}
      {showPromo && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-yellow-400/30 bg-gradient-to-br from-green-700 via-green-600 to-blue-700 p-8 shadow-2xl">
            <button
              onClick={() => setShowPromo(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-2xl font-bold text-white transition hover:bg-black/50"
            >
              ×
            </button>

            <div className="absolute left-4 top-4 text-4xl">🇧🇷</div>
            <div className="absolute bottom-4 right-4 text-4xl">⚽</div>

            <div className="text-center">
              <span className="mb-4 inline-block rounded-full bg-yellow-400 px-5 py-2 text-sm font-bold uppercase tracking-widest text-black shadow-lg">
                Promoção Especial Copa do Mundo
              </span>

              <h2 className="mb-6 text-4xl font-black leading-tight text-white md:text-5xl">
                PROMOÇÃO
                <br />
                COPA DO MUNDO 🇧🇷
              </h2>

              <p className="mx-auto mb-6 max-w-xl text-lg leading-relaxed text-white/90">
                Veículos que vierem pela seguradora ganham
                <span className="font-black text-yellow-300">
                  {" "}
                  POLIMENTO TÉCNICO GRATUITO
                </span>
              </p>

              <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/90">
                Clientes vindos pelo site recebem
                <span className="font-black text-yellow-300">
                  {" "}
                  10% OFF NO PARTICULAR
                </span>
              </p>

              <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-black px-8 py-4 text-lg font-bold text-cyan-400 transition hover:scale-105 hover:bg-neutral-900"
                >
                  Falar no WhatsApp
                </a>

                <a
                  href="https://instagram.com/blinkesteticaauto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur transition hover:scale-105 hover:bg-white/20"
                >
                  Instagram + 10% OFF
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-cyan-600 to-sky-500 py-2 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 text-sm md:flex-row md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4" />
              <span>(21) 96918-7827 / (21) 98222-7699</span>
            </div>

            <div className="flex items-center gap-2">
              <PinIcon className="h-4 w-4" />
              <span>Barra da Tijuca - RJ</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ClockIcon className="h-4 w-4" />
            <span>Atendimento rápido no WhatsApp</span>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-black/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <nav className="flex h-16 items-center justify-between md:h-20">
            <button
              type="button"
              className="flex items-center gap-3 text-left"
              onClick={() => scrollToId("hero")}
            >
              <div className="h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-white/10 md:h-12 md:w-12">
                <img
                  src="/logo.png"
                  alt="BLINK Logo"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="leading-tight">
                <div className="text-lg font-bold text-white md:text-2xl">
                  BLINK{" "}
                  <span className="text-cyan-400">
                    ESTÉTICA AUTOMOTIVA
                  </span>
                </div>

                <p className="hidden text-xs font-semibold text-cyan-400 md:block">
                  Onde estética vira padrão
                </p>
              </div>
            </button>

            {/* DESKTOP MENU */}
            <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
              {[
                ["servicos", "Serviços"],
                ["porque", "Por que nós?"],
                ["avaliacoes", "Avaliações"],
                ["galeria", "Galeria"],
                ["contato", "Contato"],
              ].map(([id, label]) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => scrollToId(id)}
                    className="font-medium text-gray-300 transition-colors hover:text-cyan-400"
                  >
                    {label}
                  </button>
                </li>
              ))}

              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-cyan-500 px-4 font-semibold text-black hover:bg-cyan-600"
                >
                  WhatsApp
                </a>
              </li>
            </ul>

            {/* MOBILE BUTTON */}
            <button
              type="button"
              className="text-white md:hidden"
              onClick={() => setOpen(!open)}
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </nav>

          {/* MOBILE MENU */}
          {open && (
            <div className="border-t border-white/10 py-4 md:hidden">
              <div className="flex flex-col gap-4">
                {[
                  ["servicos", "Serviços"],
                  ["porque", "Por que nós?"],
                  ["avaliacoes", "Avaliações"],
                  ["galeria", "Galeria"],
                  ["contato", "Contato"],
                ].map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => scrollToId(id)}
                    className="text-left text-gray-300 hover:text-cyan-400"
                  >
                    {label}
                  </button>
                ))}

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-cyan-500 py-3 font-semibold text-black"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative flex min-h-screen items-center justify-center px-6 text-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-5xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-5 py-2 text-sm font-medium text-cyan-400 backdrop-blur">
            ✦ Onde estética vira padrão
          </span>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Oficina Estética Automotiva na{" "}
            <span className="text-cyan-400">
              Barra da Tijuca
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-gray-200 md:text-lg">
            Especialistas em lanternagem, pintura e polimento técnico.
            Qualidade, transparência e confiança em cada detalhe.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-cyan-500 px-7 py-3 font-semibold text-black transition hover:bg-cyan-600"
            >
              WhatsApp
            </a>

            <button
              type="button"
              onClick={() => scrollToId("servicos")}
              className="rounded-lg border border-cyan-400 px-7 py-3 text-cyan-400 transition hover:bg-cyan-400/10"
            >
              Ver Serviços
            </button>
          </div>
        </div>
      </section>

      {/* SEGURADORAS */}
      <section className="bg-[#050b14] py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-2 text-3xl font-bold">
            Trabalhamos com as melhores seguradoras
          </h2>

          <p className="mb-10 text-gray-400">
            Atendimento ágil para sinistros e seguradoras
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {[
              { nome: "Porto Seguro", img: "/porto.png" },
              { nome: "Azul Seguros", img: "/azul.png" },
              { nome: "Itaú Seguros", img: "/itau.png" },
              { nome: "Demais Seguradoras", img: "/demais.png" },
            ].map((s) => (
              <div
                key={s.nome}
                className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-[#0b1627]/70 px-6 py-5 backdrop-blur"
              >
                <div className="h-12 w-12 overflow-hidden rounded-xl bg-black/30">
                  <img
                    src={s.img}
                    alt={s.nome}
                    className="h-full w-full object-cover"
                  />
                </div>

                <span className="font-semibold text-white">
                  {s.nome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="bg-[#0a1220] py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Sobre a BLINK Estética Automotiva
          </h2>

          <p className="mx-auto mt-4 max-w-5xl leading-relaxed text-gray-300">
            Aqui você encontra qualidade, transparência e confiança.
            Lanternagem, pintura e acabamento com foco em precisão,
            cuidado e excelência.
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-[#050b14] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-extrabold md:text-4xl">
            Nossos Serviços
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Pintura Automotiva",
              "Polimento Técnico",
              "Lanternagem",
              "Detalhamento",
              "Acabamento",
              "Retoque",
            ].map((serv) => (
              <div
                key={serv}
                className="rounded-2xl border border-cyan-500/15 bg-[#0b1627] p-6"
              >
                <h3 className="text-lg font-bold">
                  {serv}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Serviço profissional com acabamento premium.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE NÓS */}
      <section id="porque" className="bg-[#0a1220] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-extrabold md:text-5xl">
            Por que escolher a BLINK?
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "Cuidado em cada detalhe",
              "Equipe especializada",
              "Atendimento rápido",
              "Garantia de qualidade",
              "Entrega no prazo",
              "Resultado premium",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-[#0b1627] p-7"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
                  <CheckIcon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-bold">
                  {item}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  Atendimento profissional com foco em qualidade e acabamento.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section id="avaliacoes" className="bg-[#050b14] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-extrabold md:text-5xl">
            Resultados que Falam por Si
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "Serviço impecável e entrega rápida.",
              "Atendimento excelente e pintura perfeita.",
              "Profissionais muito cuidadosos.",
              "Melhor oficina da Barra.",
              "Carro entregue antes do prazo.",
              "Acabamento premium.",
            ].map((txt, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-[#0b1627] p-7"
              >
                <div className="mb-4 flex items-center gap-1 text-cyan-400">
                  <StarIcon className="h-5 w-5" />
                  <StarIcon className="h-5 w-5" />
                  <StarIcon className="h-5 w-5" />
                  <StarIcon className="h-5 w-5" />
                  <StarIcon className="h-5 w-5" />
                </div>

                <p className="italic leading-relaxed text-gray-300">
                  “{txt}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="bg-black py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Nossa Galeria de Trabalhos
        </h2>

        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
          {[
            "/galeria/1.jpg",
            "/galeria/2.jpg",
            "/galeria/3.jpg",
            "/galeria/4.jpg",
            "/galeria/5.jpg",
            "/galeria/6.jpg",
          ].map((src, i) => (
            <div
              key={src}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1627]/40"
            >
              <img
                src={src}
                alt={`Trabalho realizado ${i + 1}`}
                className="h-64 w-full object-cover"
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
      {/* CTA */}
      <section className="bg-gradient-to-r from-cyan-600 to-sky-500 py-20 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-4xl font-extrabold text-white md:text-6xl">
            Agende seu serviço hoje mesmo
          </h2>

          <p className="mt-4 text-base text-white/90 md:text-lg">
            Entre em contato pelo WhatsApp.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-black px-7 py-3 font-extrabold text-cyan-300"
            >
              <PhoneIcon className="h-5 w-5" />
              Falar no WhatsApp
            </a>

            <button
              type="button"
              onClick={() => scrollToId("contato")}
              className="rounded-lg bg-white px-7 py-3 font-extrabold text-black"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-white/10">
                  <img
                    src="/logo.png"
                    alt="BLINK Logo"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="font-extrabold text-cyan-400">
                    BLINK ESTÉTICA AUTOMOTIVA
                  </p>

                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-400">
                    Onde estética vira padrão.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-extrabold text-white">
                Serviços
              </p>

              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {[
                  "Pintura Automotiva",
                  "Polimento Técnico",
                  "Lanternagem",
                  "Detalhamento",
                ].map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-cyan-400" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-extrabold text-white">
                Contato
              </p>

              <ul className="mt-4 space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4 text-cyan-400" />
                  (21) 96918-7827
                  (21) 98222-7699
                  (21) 2439-4259
                </li>

                <li className="flex items-center gap-2">
                  <PinIcon className="h-4 w-4 text-cyan-400" />
                 Rua joarthur bueno,272 Barra da Tijuca - RJ
                </li>
              </ul>

              <a
                href="https://instagram.com/blinkesteticaauto"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block font-semibold text-cyan-400"
              >
                @blinkesteticaauto
              </a>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
            © 2026 BLINK Estética Automotiva LTDA.
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ICONES */

function PhoneIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72" />
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
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10" />
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
    >
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
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
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
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function StarIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
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
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

