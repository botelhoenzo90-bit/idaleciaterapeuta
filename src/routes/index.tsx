import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Check,
  ChevronDown,
  Clock3,
  HeartHandshake,
  Instagram,
  MapPin,
  MessageCircle,
  Monitor,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Video,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({ component: Index });

const whatsapp = "https://wa.me/5500000000000";

const issues = [
  ["Depressão", "Acolhimento e organização emocional para momentos de desânimo e perda de sentido."],
  ["Ansiedade", "Um espaço para compreender padrões emocionais e desenvolver mais segurança no dia a dia."],
  ["Dependência emocional", "Trabalhe limites, autoestima e padrões que afetam seus relacionamentos."],
  ["Medos e fobias", "Compreenda reações emocionais e avance no seu processo com acompanhamento."],
  ["Traumas", "Um processo estruturado e acolhedor para olhar para experiências que ainda pesam."],
  ["Síndrome do pânico", "Acolhimento para compreender suas experiências e buscar mais equilíbrio emocional."],
  ["Insônia", "Investigue padrões emocionais que podem estar relacionados à dificuldade de desacelerar."],
  ["Baixa autoestima", "Fortaleça sua percepção de si e construa relações mais saudáveis consigo."],
  ["Relacionamentos", "Mais clareza para lidar com conflitos, inseguranças e padrões repetitivos."],
  ["Perdas e luto", "Um espaço seguro para atravessar mudanças e experiências de perda."],
];

const reviews = [
  { title: "Acolhimento", text: "Um espaço de escuta, respeito e acolhimento para que você possa falar sobre o que realmente sente.", icon: HeartHandshake },
  { title: "Clareza", text: "O processo pode ajudar você a compreender padrões emocionais e enxergar novas possibilidades.", icon: Brain },
  { title: "Direcionamento", text: "Um acompanhamento estruturado para olhar para suas dificuldades com mais consciência e segurança.", icon: Sparkles },
  { title: "Privacidade", text: "Atendimento pensado para preservar sua individualidade, com opção presencial ou online.", icon: ShieldCheck },
];

const faq = [
  ["O que é a Terapia TRG?", "A TRG é uma abordagem terapêutica voltada ao trabalho com experiências e padrões emocionais. O processo é individualizado e considera a história de cada pessoa."],
  ["O atendimento pode ser online?", "Sim. Idalécia realiza atendimentos online e presenciais, de acordo com a modalidade disponível para você."],
  ["Quanto tempo dura o atendimento?", "A duração e a frequência são definidas de acordo com a necessidade e o planejamento do processo terapêutico."],
  ["Quais questões podem ser trabalhadas?", "Entre as principais questões estão ansiedade, depressão, dependência emocional, medos, traumas, fobias, insegurança, baixa autoestima, conflitos nos relacionamentos e luto."],
  ["A terapia substitui acompanhamento médico?", "Não. A terapia não substitui avaliação ou tratamento médico quando eles forem necessários. Em situações de sofrimento intenso, procure também um profissional de saúde adequado."],
  ["Como começo?", "Clique em um dos botões de agendamento e envie uma mensagem. Você poderá tirar suas dúvidas e verificar a modalidade de atendimento mais adequada."],
];

function goWhatsapp(message: string) {
  window.open(`${whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="site">
      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand" href="#inicio">Idalécia <span>da Guia</span></a>
          <nav>
            <a href="#processo">Como funciona</a>
            <a href="#especialidades">Questões trabalhadas</a>
            <a href="#sobre">Sobre</a>
            <a href="#faq">Dúvidas</a>
          </nav>
          <button className="btn btn-small" onClick={() => goWhatsapp("Olá, Idalécia! Gostaria de saber mais sobre a terapia.")}>
            <MessageCircle size={17}/> Agendar conversa
          </button>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow"/>
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span/> TERAPEUTA TRG <span/></div>
            <h1>Reestruture seu emocional e <em>liberte-se de padrões</em> que ainda causam sofrimento.</h1>
            <p className="hero-lead">Terapia TRG para pessoas que enfrentam ansiedade, depressão, dependência emocional, traumas, medos e outras dificuldades emocionais.</p>
            <p className="hero-meta"><Monitor size={16}/> Atendimento presencial e online <span>•</span> <ShieldCheck size={16}/> Certificação internacional</p>
            <div className="hero-actions">
              <button className="btn" onClick={() => goWhatsapp("Olá, Idalécia! Quero agendar uma conversa sobre a Terapia TRG.")}><MessageCircle size={19}/> Quero iniciar meu processo</button>
              <a className="btn btn-ghost" href="#processo">Conhecer o processo <ArrowRight size={18}/></a>
            </div>
            <div className="trust-row">
              <div><strong>TRG</strong><span>Terapia de Reprocessamento</span></div>
              <div><strong>Online</strong><span>De onde você estiver</span></div>
              <div><strong>Presencial</strong><span>Atendimento individual</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1100&q=88" alt="Profissional em ambiente acolhedor de atendimento" />
              <div className="photo-card"><Sparkles size={18}/><div><strong>Um espaço para você</strong><span>Escuta • acolhimento • direcionamento</span></div></div>
            </div>
            <div className="hero-orbit orbit-one"/>
            <div className="hero-orbit orbit-two"/>
          </div>
        </div>
      </section>

      <div className="marquee"><div><span>ANSIEDADE</span><i>✦</i><span>DEPRESSÃO</span><i>✦</i><span>AUTOESTIMA</span><i>✦</i><span>TRAUMAS</span><i>✦</i><span>RELACIONAMENTOS</span><i>✦</i><span>MEDOS</span><i>✦</i></div></div>

      <section className="section intro-section">
        <div className="container narrow center">
          <span className="eyebrow">VOCÊ NÃO PRECISA IGNORAR O QUE SENTE</span>
          <h2>Quando algo dentro de você pede <em>atenção</em>, ouvir pode ser o primeiro passo.</h2>
          <p>Existem padrões emocionais que se repetem, medos que limitam, relações que machucam e sentimentos que parecem difíceis de explicar. A terapia cria um espaço seguro para olhar para tudo isso com mais consciência e cuidado.</p>
          <button className="btn" onClick={() => goWhatsapp("Olá, Idalécia! Gostaria de conversar sobre o meu momento emocional.")}>Conversar com a Idalécia <ArrowRight size={18}/></button>
        </div>
      </section>

      <section className="section soft" id="especialidades">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">QUESTÕES TRABALHADAS</span>
            <h2>O que está acontecendo com você <em>merece ser compreendido.</em></h2>
            <p>O acompanhamento é individualizado e pode abordar diferentes dificuldades emocionais e comportamentais.</p>
          </div>
          <div className="issue-window"><div className="issue-track">
            {[...issues, ...issues].map(([title,text], i) => (
              <article className="issue-card" key={i}><div className="issue-number">{String((i % issues.length)+1).padStart(2,"0")}</div><h3>{title}</h3><p>{text}</p><span>Conhecer o processo <ArrowRight size={14}/></span></article>
            ))}
          </div></div>
          <div className="center action"><button className="btn" onClick={() => goWhatsapp("Olá, Idalécia! Quero entender se a Terapia TRG pode me ajudar.")}>Quero entender meu caso <ArrowRight size={18}/></button></div>
        </div>
      </section>

      <section className="section process" id="processo">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">COMO FUNCIONA</span>
            <h2>Um processo com <em>acolhimento e direção.</em></h2>
            <p>Da primeira conversa ao acompanhamento, cada etapa é pensada para que você saiba onde está e para onde está caminhando.</p>
          </div>
          <div className="steps">
            {[
              ["01","Primeiro contato","Você conversa com a Idalécia, apresenta o que está vivendo e tira suas primeiras dúvidas."],
              ["02","Entendimento","O momento atual e suas principais questões são compreendidos de forma individualizada."],
              ["03","Processo terapêutico","As sessões seguem uma condução estruturada, respeitando seu ritmo e suas necessidades."],
              ["04","Novos caminhos","O objetivo é ampliar consciência e construir formas mais saudáveis de lidar com suas experiências."]
            ].map(([n,t,d]) => <article className="step" key={n}><div className="step-num">{n}</div><div><h3>{t}</h3><p>{d}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section about" id="sobre">
        <div className="container about-grid">
          <div className="about-image"><img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=88" alt="Ambiente tranquilo para atendimento" /><div className="credential"><ShieldCheck size={20}/><span>Certificação internacional<br/><strong>Transtornos emocionais graves</strong></span></div></div>
          <div className="about-copy">
            <span className="eyebrow">SOBRE IDALÉCIA DA GUIA</span>
            <h2>Conhecimento, acolhimento e um olhar <em>individualizado.</em></h2>
            <p>Idalécia da Guia é Terapeuta TRG, com especialização complementar em Leitura Corporal e Comportamental e certificação internacional em transtornos emocionais graves.</p>
            <p>Seu trabalho parte de uma escuta cuidadosa para compreender a pessoa além do sintoma, considerando padrões emocionais, experiências e comportamentos que fazem parte da sua história.</p>
            <div className="about-points"><div><Check size={17}/> Atendimento individual</div><div><Check size={17}/> Online e presencial</div><div><Check size={17}/> Leitura Corporal e Comportamental</div></div>
            <button className="btn" onClick={() => goWhatsapp("Olá, Idalécia! Gostaria de conhecer melhor seu trabalho.")}>Conhecer o trabalho <ArrowRight size={18}/></button>
          </div>
        </div>
      </section>

      <section className="section specialty">
        <div className="container specialty-grid">
          <div><span className="eyebrow">ABORDAGEM COMPLEMENTAR</span><h2>Leitura Corporal e <em>Comportamental</em></h2><p>O corpo também expressa formas de sentir, reagir e se relacionar. A leitura corporal e comportamental pode complementar o olhar terapêutico para ampliar a compreensão sobre padrões individuais.</p><button className="btn btn-light" onClick={() => goWhatsapp("Olá, Idalécia! Quero saber mais sobre a Leitura Corporal e Comportamental.")}>Quero saber mais <ArrowRight size={18}/></button></div>
          <div className="specialty-quote"><Brain size={32}/><p>“Compreender seus padrões pode ser o começo de uma nova forma de se relacionar consigo mesmo.”</p></div>
        </div>
      </section>

      <section className="section benefits">
        <div className="container">
          <div className="section-heading center"><span className="eyebrow">O QUE VOCÊ PODE ENCONTRAR NO PROCESSO</span><h2>Mais do que aliviar um momento: <em>entender o que existe por trás dele.</em></h2></div>
          <div className="benefit-grid">
            {[["Mais consciência","Perceber padrões e compreender melhor suas próprias reações."],["Mais segurança","Desenvolver recursos para lidar com situações que antes pareciam maiores que você."],["Mais clareza","Olhar para relações, escolhas e sentimentos com novas perspectivas."],["Mais autonomia","Construir uma relação mais consciente com sua própria história e seus limites."]].map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section reviews">
        <div className="container">
          <div className="section-heading center"><span className="eyebrow">AVALIAÇÕES</span><h2>Uma experiência baseada em <em>acolhimento e confiança.</em></h2><p>Espaço reservado para avaliações reais de pessoas atendidas pela Idalécia.</p></div>
          <div className="review-grid">{reviews.map(({title,text:copy,icon:Icon})=><article key={title}><div className="review-icon"><Icon size={20}/></div><div className="review-stars">{[1,2,3,4,5].map(s=><Star key={s} size={14} fill="currentColor"/>)}</div><h3>{title}</h3><p>{copy}</p><small>Conteúdo institucional — substitua por depoimentos reais</small></article>)}</div>
          <div className="center action"><button className="btn" onClick={() => goWhatsapp("Olá, Idalécia! Quero conversar sobre um atendimento.")}>Agendar atendimento <MessageCircle size={18}/></button></div>
        </div>
      </section>

      <section className="section location">
        <div className="container location-grid">
          <div className="location-card"><div className="map-placeholder"><MapPin size={34}/><span>Atendimento presencial</span><small>Localização a confirmar</small></div></div>
          <div className="location-copy"><span className="eyebrow">ATENDIMENTO</span><h2>Presencial ou online, <em>onde fizer sentido para você.</em></h2><p>Escolha a modalidade mais adequada para sua rotina. Para atendimento presencial, entre em contato para consultar endereço, disponibilidade e horários.</p><div className="location-list"><div><MapPin size={18}/><span><strong>Presencial</strong>Endereço e disponibilidade informados no agendamento.</span></div><div><Video size={18}/><span><strong>Online</strong>Atendimento à distância com praticidade e privacidade.</span></div><div><Clock3 size={18}/><span><strong>Horários</strong>Consulte os horários disponíveis diretamente com a Idalécia.</span></div></div><button className="btn" onClick={() => goWhatsapp("Olá, Idalécia! Gostaria de consultar horários e modalidade de atendimento.")}>Consultar horários <ArrowRight size={18}/></button></div>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="container faq-grid">
          <div className="faq-intro"><span className="eyebrow">PERGUNTAS FREQUENTES</span><h2>Talvez a sua dúvida esteja <em>aqui.</em></h2><p>Se ainda não encontrou a resposta que procura, fale diretamente com a Idalécia.</p><button className="btn" onClick={() => goWhatsapp("Olá, Idalécia! Tenho uma dúvida sobre a terapia.")}>Tirar uma dúvida <MessageCircle size={18}/></button></div>
          <div className="faq-list">{faq.map(([q,a],i)=><div className={`faq-item ${openFaq===i ? "open":""`} key={q}><button onClick={() => setOpenFaq(openFaq===i ? null : i)}><span>{q}</span><ChevronDown size={18}/></button>{openFaq===i && <p>{a}</p>}</div>)}</div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container center"><span className="eyebrow">SEU PROCESSO COMEÇA COM UMA CONVERSA</span><h2>Você não precisa ter todas as respostas para <em>dar o primeiro passo.</em></h2><p>Converse com a Idalécia, explique o que você está vivendo e descubra como funciona o atendimento.</p><button className="btn btn-light" onClick={() => goWhatsapp("Olá, Idalécia! Quero dar o primeiro passo e conhecer a Terapia TRG.")}>Quero conversar com a Idalécia <ArrowRight size={19}/></button></div>
      </section>

      <footer><div className="container footer-grid"><div><div className="brand footer-brand">Idalécia <span>da Guia</span></div><p>Terapeuta TRG<br/>Leitura Corporal e Comportamental</p></div><div><strong>Atendimento</strong><span>Online e presencial</span><span>Consulte horários</span></div><div><strong>Contato</strong><button onClick={() => goWhatsapp("Olá, Idalécia! Gostaria de agendar um atendimento.")}><MessageCircle size={16}/> WhatsApp</button><a href="#inicio"><Instagram size={16}/> Instagram</a></div></div><div className="footer-bottom">© {new Date().getFullYear()} Idalécia da Guia. Todos os direitos reservados.</div></footer>

      <button className="floating-whatsapp" onClick={() => goWhatsapp("Olá, Idalécia! Gostaria de saber mais sobre a Terapia TRG.")} aria-label="Falar no WhatsApp"><MessageCircle size={25}/></button>
    </main>
  );
}
