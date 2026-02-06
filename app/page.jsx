export default function Page() {
  const whatsappPrincipal = "5521969187827"; // 55 + DDD + número (sem espaços)
  const whatsappLink = `https://wa.me/${whatsappPrincipal}?text=${encodeURIComponent(
    "Olá! Quero um orçamento na BLINK Estética Automotiva."
  )}`;

  const servicos = [
    {
      titulo: "Pintura Automotiva",
      desc: "Acabamento de alto padrão, correção e pintura completa.",
      img: "/pintura-automotiva.jpg",
    },
    {
      titulo: "Polimento Técnico",
      desc: "Remoção de riscos e brilho profundo com técnica profissional.",
      img: "/polimento-tecnico.png",
    },
    {
      titulo: "Cristalização Automotiva",
      desc: "Proteção, hidrorrepelência e visual renovado para a pintura.",
      img: "/cristalizacao-automotiva.jpg",
    },
    {
      titulo: "Lanternagem Estrutural",
      desc: "Recuperação e alinhamento com precisão e segurança.",
      img: "/lanternagem-estrutural.jpg",
    },
    {
      titulo: "Acabamento e Detalhamento",
      desc: "Detalhamento completo para elevar o padrão do seu carro.",
      img: "/acabamento-detalhamento.jpg",
    },
  ];

  return (
    <div style={{ background: "#000", color: "#fff" }}>
      {/* HEADER */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(34,211,238,0.15)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid rgba(34,211,238,0.25)",
              }}
            >
              <img
                src="/logo.png"
                alt="BLINK"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontWeight: 800, letterSpacing: 0.2 }}>
                BLINK <span style={{ color: "#22d3ee" }}>ESTÉTICA</span>
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
                Barra da Tijuca • RJ
              </div>
            </div>
          </div>

          <nav style={{ display: "flex", gap: 14, fontSize: 14 }}>
            <a href="#servicos" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>
              Serviços
            </a>
            <a href="#galeria" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>
              Galeria
            </a>
            <a href="#contato" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>
              Contato
            </a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              padding: "10px 14px",
              borderRadius: 12,
              fontWeight: 800,
              color: "#000",
              background: "linear-gradient(90deg, #22d3ee, #38bdf8)",
              border: "1px solid rgba(255,255,255,0.08)",
              whiteSpace: "nowrap",
            }}
          >
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "78vh",
          display: "grid",
          placeItems: "center",
          padding: "60px 18px",
          overflow: "hidden",
          borderBottom: "1px solid rgba(34,211,238,0.12)",
        }}
      >
        <img
          src="/hero-bg.jpg"
          alt="BLINK"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.35,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(70% 60% at 50% 30%, rgba(34,211,238,0.25), rgba(0,0,0,0.7) 60%, #000 100%)",
          }}
        />
        <div style={{ position: "relative", maxWidth: 1100, width: "100%" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 14px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(34,211,238,0.18)",
              color: "rgba(255,255,255,0.9)",
              marginBottom: 18,
            }}
          >
            <span style={{ color: "#22d3ee", fontWeight: 800 }}>Onde estética vira padrão</span>
            <span style={{ opacity: 0.7 }}>•</span>
            <span style={{ opacity: 0.85 }}>Atendimento rápido</span>
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(34px, 5vw, 56px)",
              fontWeight: 900,
              letterSpacing: -0.5,
            }}
          >
            BLINK Estética Automotiva
          </h1>

          <p
            style={{
              marginTop: 14,
              marginBottom: 24,
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "rgba(255,255,255,0.82)",
              maxWidth: 760,
              lineHeight: 1.5,
            }}
          >
            Especialistas em <b>Pintura</b>, <b>Polimento</b>, <b>Cristalização</b> e{" "}
            <b>Lanternagem</b> na Barra da Tijuca. Seu carro com acabamento de alto padrão.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                padding: "12px 18px",
                borderRadius: 14,
                fontWeight: 900,
                color: "#000",
                background: "linear-gradient(90deg, #22d3ee, #38bdf8)",
              }}
            >
              Solicitar orçamento no WhatsApp
            </a>

            <a
              href="#galeria"
              style={{
                textDecoration: "none",
                padding: "12px 18px",
                borderRadius: 14,
                fontWeight: 800,
                color: "#fff",
                border: "2px solid rgba(255,255,255,0.75)",
                background: "rgba(0,0,0,0.2)",
              }}
            >
              Ver galeria
            </a>
          </div>

          <div
            style={{
              marginTop: 26,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 10,
              maxWidth: 900,
            }}
          >
            {[
              ["Atendimento", "Seg–Sex • 08:00–18:00"],
              ["Local", "Barra da Tijuca • RJ"],
              ["WhatsApp", "(21) 96918-7827"],
            ].map(([t, d]) => (
              <div
                key={t}
                style={{
                  padding: 14,
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(34,211,238,0.15)",
                }}
              >
                <div style={{ fontWeight: 900, color: "#22d3ee" }}>{t}</div>
                <div style={{ opacity: 0.85 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" style={{ padding: "64px 18px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ margin: 0, fontSize: 34, fontWeight: 900 }}>Serviços</h2>
          <p style={{ marginTop: 10, color: "rgba(255,255,255,0.75)", maxWidth: 820 }}>
            Confira alguns dos nossos principais serviços — acabamento profissional e padrão BLINK.
          </p>

          <div
            style={{
              marginTop: 22,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
            }}
          >
            {servicos.map((s) => (
              <div
                key={s.titulo}
                style={{
                  borderRadius: 18,
                  overflow: "hidden",
                  border: "1px solid rgba(34,211,238,0.15)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                  <img
                    src={s.img}
                    alt={s.titulo}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div style={{ padding: 14 }}>
                  <div style={{ fontWeight: 900, fontSize: 18 }}>{s.titulo}</div>
                  <div style={{ marginTop: 8, color: "rgba(255,255,255,0.75)", lineHeight: 1.4 }}>
                    {s.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" style={{ padding: "64px 18px", background: "#050505" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ margin: 0, fontSize: 34, fontWeight: 900 }}>Nossa Galeria</h2>
          <p style={{ marginTop: 10, color: "rgba(255,255,255,0.75)", maxWidth: 820 }}>
            Alguns trabalhos realizados pela nossa equipe técnica especializada.
          </p>

          <div
            style={{
              marginTop: 22,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
            }}
          >
            {servicos.slice(0, 5).map((s) => (
              <div
                key={s.titulo}
                style={{
                  borderRadius: 18,
                  overflow: "hidden",
                  border: "1px solid rgba(34,211,238,0.12)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <div style={{ aspectRatio: "4/3" }}>
                  <img
                    src={s.img}
                    alt={s.titulo}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: 12 }}>
                  <div style={{ fontWeight: 900 }}>{s.titulo}</div>
                  <div style={{ fontSize: 13, color: "#22d3ee", marginTop: 4 }}>
                    Trabalho profissional BLINK
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 22 }}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                textDecoration: "none",
                padding: "12px 18px",
                borderRadius: 14,
                fontWeight: 900,
                color: "#000",
                background: "linear-gradient(90deg, #22d3ee, #38bdf8)",
              }}
            >
              Pedir orçamento agora
            </a>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" style={{ padding: "64px 18px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ margin: 0, fontSize: 34, fontWeight: 900 }}>Contato</h2>
          <p style={{ marginTop: 10, color: "rgba(255,255,255,0.75)", maxWidth: 820 }}>
            Atendimento rápido no WhatsApp. Fale com a gente!
          </p>

          <div
            style={{
              marginTop: 22,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            <div
              style={{
                borderRadius: 18,
                padding: 18,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(34,211,238,0.15)",
              }}
            >
              <div style={{ fontWeight: 900, color: "#22d3ee", fontSize: 18 }}>Nossa Unidade</div>
              <div style={{ marginTop: 12, lineHeight: 1.5, color: "rgba(255,255,255,0.85)" }}>
                Rua Joathur Bueno, 272 <br />
                Barra da Tijuca - RJ
              </div>
              <div style={{ marginTop: 12 }}>
                <div style={{ fontWeight: 900 }}>(21) 96918-7827</div>
                <div style={{ fontWeight: 900 }}>(21) 98222-7699</div>
                <div style={{ opacity: 0.8, marginTop: 6 }}>(21) 2439-4259 (fixo)</div>
              </div>

              <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    padding: "10px 14px",
                    borderRadius: 12,
                    fontWeight: 900,
                    color: "#000",
                    background: "linear-gradient(90deg, #22d3ee, #38bdf8)",
                  }}
                >
                  WhatsApp
                </a>

                <a
                  href="https://maps.app.goo.gl/5sGA78RixowreBFp8"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    padding: "10px 14px",
                    borderRadius: 12,
                    fontWeight: 800,
                    color: "#22d3ee",
                    border: "1px solid rgba(34,211,238,0.35)",
                    background: "rgba(0,0,0,0.35)",
                  }}
                >
                  Como chegar
                </a>
              </div>
            </div>

            <div
              style={{
                borderRadius: 18,
                padding: 18,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(34,211,238,0.12)",
              }}
            >
              <div style={{ fontWeight: 900, color: "#22d3ee", fontSize: 18 }}>
                Solicitar Orçamento
              </div>

              <p style={{ marginTop: 10, color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>
                Clique abaixo e fale direto no WhatsApp. Se quiser, já manda:
                <br />• Modelo do carro <br />• Serviço desejado <br />• Fotos do local
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  marginTop: 14,
                  textDecoration: "none",
                  padding: "12px 14px",
                  borderRadius: 14,
                  fontWeight: 900,
                  color: "#000",
                  background: "linear-gradient(90deg, #22d3ee, #38bdf8)",
                }}
              >
                Enviar mensagem no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "30px 18px",
          borderTop: "1px solid rgba(34,211,238,0.12)",
          color: "rgba(255,255,255,0.65)",
          background: "#000",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", fontSize: 13 }}>
          © {new Date().getFullYear()} BLINK Estética Automotiva LTDA. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
