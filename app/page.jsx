const WHATSAPP_1 = "5521969187827"; // +55 21 96918-7827
const WHATSAPP_2 = "5521982227699"; // +55 21 98222-7699
const FIXO = "(21) 2439-4259";
const ENDERECO = "Rua Joathur Bueno, 272 - Barra da Tijuca - RJ";
const MAPS_URL = "https://maps.app.goo.gl/5sGA78RixowreBFp8";
const INSTA_URL = "https://www.instagram.com/blinkesteticaauto";

function waLink(phone, text) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export default function Page() {
  const msg = "Olá! Quero um orçamento na BLINK Estética Automotiva.";
  return (
    <main style={{ background: "#000", color: "#fff" }}>
      {/* Topbar */}
      <div style={{
        display:"flex", justifyContent:"space-between", alignItems:"center",
        padding:"16px 20px", borderBottom:"1px solid rgba(0,255,255,0.15)"
      }}>
        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          <div style={{ width:40, height:40, borderRadius:12, overflow:"hidden" }}>
            <img src="/logo.png" alt="BLINK" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          </div>
          <div style={{ fontWeight:800, letterSpacing:0.2 }}>
            BLINK <span style={{ color:"#22d3ee" }}>ESTÉTICA AUTOMOTIVA</span>
          </div>
        </div>

        <a
          href={waLink(WHATSAPP_1, msg)}
          target="_blank"
          rel="noreferrer"
          style={{
            background:"linear-gradient(90deg,#22d3ee,#38bdf8)",
            color:"#000", padding:"10px 14px", borderRadius:10,
            fontWeight:800, textDecoration:"none"
          }}
        >
          Falar no WhatsApp
        </a>
      </div>

      {/* Hero */}
      <section style={{ padding:"56px 20px", maxWidth:1100, margin:"0 auto" }}>
        <div style={{ display:"grid", gap:22 }}>
          <div style={{
            display:"inline-flex", alignItems:"center", gap:10,
            background:"rgba(255,255,255,0.06)",
            border:"1px solid rgba(34,211,238,0.25)",
            padding:"10px 14px", borderRadius:999, width:"fit-content"
          }}>
            <span style={{ color:"#22d3ee", fontWeight:800 }}>Onde estética vira padrão</span>
          </div>

          <h1 style={{ fontSize:42, lineHeight:1.1, margin:0, fontWeight:900 }}>
            Pintura, Polimento, Cristalização e Lanternagem
            <span style={{ color:"#22d3ee" }}> na Barra da Tijuca</span>
          </h1>

          <p style={{ margin:0, color:"rgba(255,255,255,0.75)", fontSize:18, maxWidth:820 }}>
            Atendimento rápido no WhatsApp. Orçamento e agendamento com equipe especializada.
          </p>

          <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginTop:6 }}>
            <a href={waLink(WHATSAPP_1, msg)} target="_blank" rel="noreferrer"
               style={{ background:"#22d3ee", color:"#000", padding:"12px 16px", borderRadius:12, fontWeight:900, textDecoration:"none" }}>
              Orçar agora
            </a>
            <a href={MAPS_URL} target="_blank" rel="noreferrer"
               style={{ border:"1px solid rgba(34,211,238,0.5)", color:"#22d3ee", padding:"12px 16px", borderRadius:12, fontWeight:900, textDecoration:"none" }}>
              Como chegar
            </a>
            <a href={INSTA_URL} target="_blank" rel="noreferrer"
               style={{ border:"1px solid rgba(255,255,255,0.15)", color:"#fff", padding:"12px 16px", borderRadius:12, fontWeight:900, textDecoration:"none" }}>
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section style={{ padding:"0 20px 50px", maxWidth:1100, margin:"0 auto" }}>
        <h2 style={{ fontSize:28, margin:"0 0 12px", fontWeight:900 }}>Serviços</h2>
        <p style={{ margin:"0 0 18px", color:"rgba(255,255,255,0.7)" }}>
          Trabalhos com acabamento profissional e padrão premium.
        </p>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:14 }}>
          {[
            { t:"Pintura Automotiva", d:"Padrão OEM e acabamento fino" },
            { t:"Polimento Técnico", d:"Correção de verniz e brilho" },
            { t:"Cristalização", d:"Proteção e durabilidade" },
            { t:"Lanternagem", d:"Recuperação estrutural" },
            { t:"Detalhamento", d:"Acabamento e limpeza premium" },
          ].map((s) => (
            <div key={s.t} style={{
              background:"rgba(255,255,255,0.04)",
              border:"1px solid rgba(34,211,238,0.18)",
              borderRadius:16, padding:16
            }}>
              <div style={{ fontWeight:900, color:"#22d3ee", marginBottom:6 }}>{s.t}</div>
              <div style={{ color:"rgba(255,255,255,0.75)" }}>{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Galeria */}
      <section style={{ padding:"0 20px 60px", maxWidth:1100, margin:"0 auto" }}>
        <h2 style={{ fontSize:28, margin:"0 0 12px", fontWeight:900 }}>Galeria</h2>
        <p style={{ margin:"0 0 18px", color:"rgba(255,255,255,0.7)" }}>
          Alguns trabalhos realizados pela nossa equipe.
        </p>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", gap:14 }}>
          {[
            { src:"/pintura-automotiva.jpg", title:"Pintura Automotiva" },
            { src:"/polimento-tecnico.png", title:"Polimento Técnico" },
            { src:"/cristalizacao-automotiva.jpg", title:"Cristalização Automotiva" },
            { src:"/lanternagem-estrutural.jpg", title:"Lanternagem Estrutural" },
            { src:"/acabamento-detalhamento.jpg", title:"Acabamento e Detalhamento" },
          ].map((g) => (
            <div key={g.title} style={{
              borderRadius:18, overflow:"hidden",
              border:"1px solid rgba(34,211,238,0.18)",
              background:"rgba(255,255,255,0.03)"
            }}>
              <div style={{ aspectRatio:"4/3", overflow:"hidden" }}>
                <img src={g.src} alt={g.title} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
              </div>
              <div style={{ padding:14 }}>
                <div style={{ fontWeight:900 }}>{g.title}</div>
                <div style={{ color:"#22d3ee", fontSize:13, marginTop:4 }}>Trabalho profissional BLINK</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section id="contato" style={{
        padding:"50px 20px", background:"#0b0f14",
        borderTop:"1px solid rgba(34,211,238,0.12)"
      }}>
        <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gap:16 }}>
          <h2 style={{ fontSize:28, margin:0, fontWeight:900 }}>Entre em contato</h2>
          <div style={{ color:"rgba(255,255,255,0.75)" }}>
            Unidade Barra da Tijuca • {ENDERECO}
          </div>

          <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
            <a href={waLink(WHATSAPP_1, msg)} target="_blank" rel="noreferrer"
               style={{ background:"linear-gradient(90deg,#22d3ee,#38bdf8)", color:"#000", padding:"12px 16px", borderRadius:12, fontWeight:900, textDecoration:"none" }}>
              WhatsApp 1
            </a>
            <a href={waLink(WHATSAPP_2, msg)} target="_blank" rel="noreferrer"
               style={{ background:"linear-gradient(90deg,#22d3ee,#38bdf8)", color:"#000", padding:"12px 16px", borderRadius:12, fontWeight:900, textDecoration:"none" }}>
              WhatsApp 2
            </a>
            <a href={MAPS_URL} target="_blank" rel="noreferrer"
               style={{ border:"1px solid rgba(34,211,238,0.5)", color:"#22d3ee", padding:"12px 16px", borderRadius:12, fontWeight:900, textDecoration:"none" }}>
              Abrir no Maps
            </a>
          </div>

          <div style={{ marginTop:8, color:"rgba(255,255,255,0.8)" }}>
            <div><b>Telefone fixo:</b> {FIXO}</div>
            <div><b>Horário:</b> Segunda a Sexta: 08:00–18:00</div>
            <div><b>Instagram:</b> <a href={INSTA_URL} target="_blank" rel="noreferrer" style={{ color:"#22d3ee" }}>@blinkesteticaauto</a></div>
          </div>

          <div style={{ marginTop:18, color:"rgba(255,255,255,0.55)", fontSize:13 }}>
            © 2024 BLINK Estética Automotiva LTDA. Todos os direitos reservados.
          </div>
        </div>
      </section>
    </main>
  );
}
