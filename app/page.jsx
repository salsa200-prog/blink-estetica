export default function Home() {
  const whatsapp = "5521969187827"; // (21) 96918-7827
  const whatsappLink = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    "Olá! Vim pelo site da BLINK. Quero um orçamento."
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-cyan-600 to-sky-500 text-white py-2">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <div className="flex items-center gap-2">
                <span>📞</span>
                <span>(21) 96918-7827 / (21) 98222-7699</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Barra da Tijuca - RJ</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>⏱️</span>
              <span>Atendimento rápido no WhatsApp</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-black/90 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center justify-between h-16 md:h-20">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-sky-600 rounded-xl overflow-hidden flex items-center justify-center">
                <img src="/logo.png" alt="BLINK Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-lg md:text-2xl font-bold">
                  BLINK <span className="text-cyan-400">ESTÉTICA AUTOMOTIVA</span>
                </div>
                <p className="text-xs text-cyan-400 font-semibold hidden md:block">
                  Onde estética vira padrão
                </p>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-6">
              <a className="text-gray-300 hover:text-cyan-400" href="#servicos">Serviços</a>
              <a className="text-gray-300 hover:text-cyan-400" href="#beneficios">Por que nós?</a>
              <a className="text-gray-300 hover:text-cyan-400" href="#avaliacoes">Avaliações</a>
              <a className="text-gray-300 hover:text-cyan-400" href="#galeria">Galeria</a>
              <a className="text-gray-300 hover:text-cyan-400" href="#contato">Contato</a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-4 py-2 rounded-md"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section id="hero" className="min-h-screen py-16 md:py-24 relative overflow-hidden bg-black">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/hero-bg.jpg')", opacity: 0.4 }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          </div>

          <div className="max-w-6xl mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                ✨ <span className="font-semibold">Onde estética vira padrão</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Oficina Estética Automotiva na{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">
                  Barra da Tijuca
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Especialistas em Lanternagem, pintura e polimento técnico. Qualidade, transparência e confiança em cada detalhe.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-600 hover:to-sky-600 text-black font-semibold text-lg px-8 py-3 rounded-md"
                >
                  📞 WhatsApp
                </a>
                <a
                  href="#servicos"
                  className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300 text-lg px-8 py-3 rounded-md"
                >
                  Ver Serviços
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Seguradoras */}
        <section className="py-8 md:py-12 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Trabalhamos com as melhores seguradoras do mercado
              </h3>
              <p className="text-gray-400">Atendemos todos os sinistros com agilidade e profissionalismo</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {["Porto Seguro", "Azul Seguros", "Itaú Seguros", "e demais seguradoras"].map((s) => (
                <div key={s} className="bg-white/10 rounded-lg px-6 py-4 border border-white/20 hover:border-cyan-500/50 transition-all">
                  <span className="font-bold text-lg">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section className="py-16 md:py-20 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre a BLINK Estética Automotiva</h2>
              <p className="text-lg text-gray-300 mb-6">
                Aqui você encontra qualidade, transparência e confiança. Lanternagem, pintura e acabamento com foco em precisão, cuidado e excelência.
                Transformamos a estética do seu veículo em um padrão de qualidade superior na Barra da Tijuca.
              </p>

              <div className="flex flex-wrap gap-6 justify-center text-gray-400">
                <span>✅ Desde 2019</span>
                <span>✅ Resultados que falam por si</span>
                <span>✅ Cuidado em cada detalhe</span>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="py-16 md:py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Principais Serviços</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Especialistas em estética automotiva com foco em precisão, cuidado e resultados excepcionais.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Pintura Automotiva",
                  v: "Cabine de pintura pressurizada, mistura computadorizada e acabamento de fábrica.",
                  q: "Restaura aparência, protege contra corrosão e mantém o valor do carro.",
                  cta: "Fazer orçamento de pintura",
                },
                {
                  title: "Polimento Técnico",
                  v: "Correção de micro-riscos e imperfeições com técnica avançada.",
                  q: "Recupera o brilho original e renova o acabamento do veículo.",
                  cta: "Quero polir meu carro",
                },
                {
                  title: "Cristalização Automotiva",
                  v: "Proteção com alta durabilidade e repelência à água e sujeira.",
                  q: "Protege contra UV e facilita a limpeza e manutenção.",
                  cta: "Cristalizar meu veículo",
                },
                {
                  title: "Lanternagem Estrutural",
                  v: "Reparo preciso e alinhamento perfeito de peças e chapas.",
                  q: "Restaura segurança e devolve a estética original do carro.",
                  cta: "Fazer orçamento de lanternagem",
                },
                {
                  title: "Acabamento e Detalhamento",
                  v: "Cuidado meticuloso em cada detalhe, com padrão profissional.",
                  q: "Transforma totalmente a aparência do veículo com qualidade superior.",
                  cta: "Fazer acabamento completo",
                },
              ].map((s) => (
                <div
                  key={s.title}
                  className="bg-gray-900 rounded-xl p-6 md:p-8 border border-cyan-500/10 hover:border-cyan-500/30 transition-all"
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{s.title}</h3>

                  <div className="space-y-3 text-gray-300 mb-4">
                    <div className="bg-cyan-950/50 p-4 rounded-lg border border-cyan-500/20">
                      <p className="font-semibold text-cyan-400 mb-1">Vantagens:</p>
                      <p>{s.v}</p>
                    </div>
                    <div className="bg-sky-950/50 p-4 rounded-lg border border-sky-500/20">
                      <p className="font-semibold text-sky-400 mb-1">Qualidades:</p>
                      <p>{s.q}</p>
                    </div>
                  </div>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-600 hover:to-sky-600 text-black font-semibold px-4 py-2 rounded-md"
                  >
                    {s.cta} ➜
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section id="beneficios" className="py-16 md:py-20 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher a BLINK Estética Automotiva?</h2>
              <p className="text-lg text-gray-400">6 motivos para confiar em nosso trabalho</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                ["Cuidado em Cada Detalhe", "Cada serviço é realizado com precisão e dedicação."],
                ["Atendimento Rápido no WhatsApp", "Atendimento ágil para orçamentos e agendamentos."],
                ["Resultados que Falam por Si", "Qualidade visível em cada serviço entregue."],
                ["Equipe Especializada", "Profissionais experientes focados em excelência."],
                ["Garantia de Qualidade", "Serviços com garantia e total tranquilidade."],
                ["Estética que Vira Padrão", "Nossa missão é transformar estética em padrão."],
              ].map(([t, d]) => (
                <div key={t} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-sky-500 rounded-lg flex items-center justify-center mb-4">
                    ✨
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Avaliações */}
        <section id="avaliacoes" className="py-16 md:py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Resultados que Falam por Si</h2>
              <p className="text-lg text-gray-400">Veja o que nossos clientes dizem sobre nosso trabalho</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                [
                  "Levei meu UP! Cheio de amassados e para-choque quebrado... Pintura perfeita... Entregaram antes do prazo!",
                  "Rosa Maria de Carvalho Wanderley",
                ],
                [
                  "Entregaram meu carro em 24h, serviço de lanternagem e pintura muito bem executado e valor muito justo.",
                  "Renato Veloso",
                ],
                [
                  "Atendimento ótimo! Cumprem o prazo! Mão de obra impecável! Entregaram o carro lavado e aspirado.",
                  "José Pereira",
                ],
              ].map(([txt, nome]) => (
                <div key={nome} className="bg-gray-900/80 rounded-xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                  <div className="mb-3">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">“{txt}”</p>
                  <p className="text-cyan-400 font-semibold">- {nome}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="https://www.google.com/maps/search/?api=1&query=blink+estetica+automotiva"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-600 hover:to-sky-600 text-black font-semibold px-6 py-3 rounded-md"
              >
                ⭐ Ver avaliações no Google
              </a>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-16 md:py-20 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
              <p className="text-lg text-gray-400">Atendimento rápido no WhatsApp. Fale com a gente!</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-black to-gray-900 rounded-xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Nossa Unidade</h3>

                <div className="space-y-6">
                  <div className="bg-cyan-950/30 rounded-lg p-4 border border-cyan-500/20">
                    <p className="font-semibold mb-2 text-cyan-300">Unidade Barra da Tijuca</p>
                    <p className="text-gray-300 mb-1">Rua Joathur Bueno, 272</p>
                    <p className="text-gray-300 mb-3">Barra da Tijuca - RJ</p>
                    <p className="text-cyan-400 font-semibold">(21) 96918-7827</p>
                    <p className="text-cyan-400 font-semibold">(21) 98222-7699</p>
                  </div>

                  <div className="bg-cyan-950/30 rounded-lg p-4 border border-cyan-500/20">
                    <p className="font-semibold mb-2 text-cyan-300">Horário de Funcionamento</p>
                    <p className="text-gray-300 font-semibold">Segunda a Sexta: 08:00–18:00</p>
                  </div>

                  <div className="bg-cyan-950/30 rounded-lg p-4 border border-cyan-500/20">
                    <p className="font-semibold mb-2 text-cyan-300">Telefone Fixo</p>
                    <p className="text-gray-300">(21) 2439-4259</p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-600 hover:to-sky-600 text-black font-semibold px-4 py-3 rounded-md text-center"
                  >
                    📞 WhatsApp
                  </a>
                  <a
                    href="https://maps.app.goo.gl/5sGA78RixowreBFp8"
                    target="_blank"
                    rel="noreferrer"
                    className="border border-cyan-500 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300 font-semibold px-4 py-3 rounded-md text-center"
                  >
                    📍 Como Chegar
                  </a>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-cyan-500/10">
                <h3 className="text-2xl font-bold mb-6">Solicitar Orçamento</h3>
                <p className="text-gray-300 mb-4">
                  Clique abaixo e envie sua mensagem direto no WhatsApp:
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex justify-center items-center gap-2 bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-600 hover:to-sky-600 text-black font-semibold px-4 py-3 rounded-md"
                >
                  Enviar pelo WhatsApp ➜
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-cyan-600 via-sky-500 to-cyan-600 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 text-center relative">
            <div className="inline-flex items-center gap-2 bg-black/20 text-white px-6 py-3 rounded-full mb-6 backdrop-blur-sm">
              ✨ <span className="font-bold text-lg">Onde estética vira padrão</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Agende seu serviço hoje mesmo</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contato pelo WhatsApp e descubra a qualidade que transformou a estética automotiva na Barra da Tijuca!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="bg-black text-cyan-400 hover:bg-gray-900 font-semibold text-lg px-8 py-3 rounded-md"
              >
                📞 Falar no WhatsApp
              </a>
              <a
                href="#galeria"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-3 rounded-md"
              >
                Ver Galeria
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-cyan-500/20 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-sky-600 rounded-xl overflow-hidden flex items-center justify-center">
                  <img src="/logo.png" alt="BLINK Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-xl font-bold text-white">
                  BLINK <span className="text-cyan-400">ESTÉTICA AUTOMOTIVA</span>
                </span>
              </div>
              <p className="text-sm mb-4">
                Onde estética vira padrão. Especialistas em Lanternagem, pintura e polimento técnico na Barra da Tijuca.
              </p>
              <p className="text-xs text-gray-500">CNPJ: 33.795.707/0001-90</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm">
                {["Pintura Automotiva", "Polimento Técnico", "Cristalização Automotiva", "Lanternagem"].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span> <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li>📞 (21) 96918-7827</li>
                <li>📞 (21) 98222-7699</li>
                <li>☎️ (21) 2439-4259</li>
                <li>📍 Barra da Tijuca - RJ</li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://www.instagram.com/blinkesteticaauto"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  @blinkesteticaauto
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-cyan-500/20 text-center text-sm text-gray-500">
            <p>© 2024 BLINK Estética Automotiva LTDA. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
