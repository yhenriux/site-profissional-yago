import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { ArrowRight, MapPin, Target, Building2, Lightbulb, GraduationCap, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import yagoProfile from "@/assets/yago-profile.png";

const expertiseAreas = [
  {
    title: "AI Platforms & Architecture",
    skills: ["LLMs", "RAG", "Agentic Systems", "Multi-Agent Orchestration", "Function Calling"]
  },
  {
    title: "Evaluation & Observability",
    skills: ["LLM Evaluation", "Qualidade de resposta", "Latência", "Fallback", "Drift"]
  },
  {
    title: "UX Conversacional",
    skills: ["Arquitetura de diálogos", "Fluxos conversacionais", "Design de fallback", "Intents e entidades", "Design multicanal"]
  },
  {
    title: "AI Governance",
    skills: ["Proveniência", "Accountability", "Supervisão humana", "Policy", "Guardrails"]
  },
  {
    title: "Arquitetura de Conhecimento",
    skills: ["Taxonomias", "Ontologias leves", "Curadoria", "Memória e contexto", "Governança"]
  },
  {
    title: "Engenharia de IA",
    skills: ["Python", "SQL", "FastAPI", "PostgreSQL/pgvector", "Vector Databases"]
  },
  {
    title: "Arquitetura da Informação",
    skills: ["Taxonomias", "Ontologias leves", "Vocabulários controlados", "Hierarquias informacionais", "Estruturas de navegação"]
  },
  {
    title: "Estratégia de Produto",
    skills: ["Discovery", "Definição de problema", "Métricas de UX", "OKRs", "Ownership end-to-end"]
  },
  {
    title: "Design Systems",
    skills: ["Tokens de design", "Componentes reutilizáveis", "Guidelines", "Documentação", "Versionamento"]
  },
  {
    title: "Dados & Analytics",
    skills: ["Análise de logs", "Métricas de produto", "Dashboards", "A/B testing", "KPIs de UX"]
  },
  {
    title: "MLOps & Operação",
    skills: ["MLOps", "Docker", "CI/CD", "Monitoramento", "Evolução contínua"]
  },
  {
    title: "Educação & Facilitação",
    skills: ["Design instrucional", "Facilitação de workshops", "Mentoria", "Trilhas formativas", "Ensino de UX e IA"]
  },
  {
    title: "Governança & Processos",
    skills: ["Criação de playbooks", "Padrões de qualidade", "Rituais de UX", "Documentação estratégica", "Frameworks"]
  }
];

const clientes = [
  "Inter", "Banco do Brasil", "Stellantis", "Centauro", "Vivara", "Zurich Santander",
  "Afya", "Tempo Assist", "Proativa", "Stellantis Argentina", "Clube Atlético Mineiro", 
  "Caixa Residencial", "Marelli", "Neodent", "Hermes Pardini", "Grupo Mok", "Danone", 
  "Sura", "Hospital Português (BA)", "Stay Charlie", "CNP Seguradora", "Ottima Fiat", 
  "Biotronik", "Drogaria Araujo", "Moura Dubeux", "zMatch", "Serasa Experian (B2B)", 
  "Universo AGV", "Novos Ares", "Serasa HIPO", "Cemig Saúde", "Reenergisa", "RAMboost"
];

const carreiraTecnica = [
  { period: "2026–atual", company: "Inter", role: "Lead AI Experience Product Architect", impact: "Arquitetura de agentic AI, orquestração de agentes, RAG, governança de conhecimento e observabilidade em escala" },
  { period: "2025–2026", company: "DigitalBot", role: "UX, Conversational AI & Curation Lead", impact: "–40% onboarding; Playbook de UX; Design System Conversacional; KPIs trimestrais" },
  { period: "2024–2025", company: "Qintess / Banco do Brasil", role: "UX Researcher Sênior", impact: "+20 UXers treinados; plataforma reestruturada; 2 workshops nacionais" },
  { period: "2024", company: "Drogaria Araujo", role: "UX/UI Designer Specialist", impact: "+10% conversão no checkout; +10 Lean Inceptions; Guilda de UX" },
  { period: "2023–2024", company: "Squadra Digital", role: "UX Writing & Conversational Design Tech Lead", impact: "Design Systems conversacionais; Content Ops; discovery padronizado" },
  { period: "2022–2023", company: "Squadra Digital", role: "UX Writer / Conversational Designer", impact: "Fluxos mapeados; treinamento de NLP; métricas conversacionais" }
];

const carreiraEnsino = [
  { period: "2025–atual", company: "UX Craft Academy", role: "Founder & UX Educator", impact: "Trilhas autorais; bootcamps corporativos; 100+ alunos formados" },
  { period: "2025–atual", company: "Impacta Tecnologia", role: "Professor Universitário", impact: "100% avaliação positiva; 88% aprovação; 100% fariam nova disciplina" },
  { period: "2024–atual", company: "USP (ECA-USP)", role: "Mentor & Pesquisador", impact: "Coautoria de artigos; Data Sprints; orientação de projetos" },
  { period: "2023–2024", company: "EBAC", role: "Tutor de UX & Design", impact: "Suporte a turmas; documentação instrucional" },
  { period: "2022–atual", company: "Arara School", role: "Professor de AI e DCU", impact: "+250 alunos/curso; média >4.8/5; referência em português" }
];

const formacao = [
  { period: "2025–atual", institution: "UTAD (Portugal)", degree: "Doutorado em Ciência e Tecnologia Web" },
  { period: "2025–2026", institution: "PUCRS", degree: "MBA em Tecnologia para Negócios (IA, Data Science e Big Data)" },
  { period: "2024–2025", institution: "PUCRS", degree: "Pós-graduação em User Experience Design and Beyond" },
  { period: "2024–2025", institution: "Centro Universitário Senac", degree: "Pós-graduação em Design Instrucional" },
  { period: "2023–2024", institution: "Universidad Europea del Atlántico", degree: "Mestrado em Direção Estratégica em TI" },
  { period: "2023", institution: "Descomplica Faculdade Digital", degree: "Pós-graduação em Product Management" },
  { period: "2019–2022", institution: "UFMG", degree: "Bacharelado em Biblioteconomia" }
];

export default function About() {
  return (
    <div className="flex flex-col">
      <Seo
        title="Sobre — Yago Henrique | Lead AI Experience Product Architect"
        description="Trajetória de Yago Henrique entre produto, experiência, engenharia, pesquisa e ensino de sistemas baseados em IA."
        path="/about"
      />
      {/* Hero + Identidade */}
      <section className="section-container section-padding">
        <div className="grid md:grid-cols-[1fr_280px] gap-8 items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-semibold">Yago Henrique</h1>
              <p className="text-xl text-accent font-medium">Lead AI Experience Product Architect @ Inter</p>
              <p className="text-muted-foreground">Arquitetura de IA, agentes e experiências inteligentes</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={14} />
                <span>Belo Horizonte • Brasil / LatAm</span>
              </div>
            </div>
            
            <div className="pt-4 border-t border-border space-y-4">
              <p className="leading-relaxed">
                Sou Lead AI Experience Product Architect no <span className="text-accent font-medium">Inter</span>, pesquisador e professor. Trabalho entre produto, experiência e engenharia para projetar sistemas de IA capazes de operar em escala, com foco em LLMs, RAG, agentes, avaliação, observabilidade e governança.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Minha trajetória conecta mais de nove anos em tecnologia e experiência digital à pesquisa acadêmica. Sou doutorando em Ciência e Tecnologia Web pela UTAD e pesquisador permanente do Smart Media Users, na ECA-USP. Minha pesquisa investiga governança conversacional de sistemas baseados em LLMs em ambientes regulados.
              </p>
            </div>
          </div>
          
          <div className="aspect-square bg-secondary rounded-lg overflow-hidden">
            <img loading="lazy" decoding="async" 
              src={yagoProfile} 
              alt="Yago Henrique" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="bg-secondary/50 section-padding">
        <div className="section-container">
          <div className="flex items-center gap-2 mb-6">
            <Building2 size={20} className="text-accent" />
            <h2 className="text-xl font-semibold">Onde já atuei</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Projetos de alta complexidade com integração entre produto, experiência, dados e engenharia:
          </p>
          <div className="flex flex-wrap gap-2">
            {clientes.map((cliente) => (
              <span key={cliente} className="text-xs bg-background border border-border px-3 py-1.5 rounded-full">
                {cliente}
              </span>
            ))}
            <span className="text-xs bg-accent text-accent-foreground px-3 py-1.5 rounded-full font-medium">
              Muito mais+
            </span>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-container section-padding">
        <div className="flex items-center gap-2 mb-4">
          <Target size={18} className="text-accent" />
          <h2 className="text-lg font-semibold">Áreas de expertise</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
          {expertiseAreas.map((area) => (
            <div key={area.title} className="space-y-1.5">
              <h3 className="font-medium text-xs text-accent">{area.title}</h3>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                {area.skills.join(" • ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Filosofia */}
      <section className="bg-secondary/50 section-padding">
        <div className="section-container">
          <div className="max-w-xl space-y-3">
            <div className="flex items-center gap-2">
              <Lightbulb size={18} className="text-accent" />
               <h2 className="text-lg font-semibold">Como eu penso sistemas de IA</h2>
            </div>
            <blockquote className="text-base leading-relaxed border-l-2 border-accent pl-4">
              Vejo produtos de IA como sistemas de decisões que articulam necessidades humanas, objetivos de negócio, conhecimento e restrições técnicas.
            </blockquote>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Isso significa projetar não apenas interfaces, mas comportamentos: como o sistema recupera informação, raciocina, responde, falha, é avaliado e evolui sob governança.
            </p>
          </div>
        </div>
      </section>

      {/* Trajetória Profissional */}
      <section className="section-container section-padding">
        <div className="flex items-center gap-2 mb-6">
          <Clock size={18} className="text-accent" />
          <h2 className="text-lg font-semibold">Trajetória Profissional</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Coluna Técnica / Liderança */}
          <div className="space-y-0">
            <h3 className="text-sm font-semibold text-accent mb-3">Liderança & Especialização Técnica</h3>
            {carreiraTecnica.map((item, index) => (
              <div 
                key={index}
                className="py-2 text-xs border-b border-border last:border-0"
              >
                <div className="flex gap-2 mb-0.5">
                  <span className="text-muted-foreground font-mono shrink-0">{item.period}</span>
                  <span className="font-medium text-accent">{item.company}</span>
                </div>
                <div>
                  <span className="font-medium">{item.role}</span>
                  <span className="text-muted-foreground"> — {item.impact}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Coluna Ensino / Pesquisa */}
          <div className="space-y-0">
            <h3 className="text-sm font-semibold text-accent mb-3">Pesquisa, Mentoria & Ensino</h3>
            {carreiraEnsino.map((item, index) => (
              <div 
                key={index}
                className="py-2 text-xs border-b border-border last:border-0"
              >
                <div className="flex gap-2 mb-0.5">
                  <span className="text-muted-foreground font-mono shrink-0">{item.period}</span>
                  <span className="font-medium text-accent">{item.company}</span>
                </div>
                <div>
                  <span className="font-medium">{item.role}</span>
                  <span className="text-muted-foreground"> — {item.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formação Acadêmica */}
      <section className="bg-secondary/50 section-padding">
        <div className="section-container">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap size={18} className="text-accent" />
            <h2 className="text-lg font-semibold">Pesquisa & Academia</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
            {formacao.map((item, index) => (
              <div 
                key={index}
                className="flex gap-3 py-1.5 text-xs border-b border-border last:border-0 md:last:border-b md:[&:nth-last-child(2)]:border-0"
              >
                <span className="text-muted-foreground font-mono w-20 shrink-0">{item.period}</span>
                <div>
                  <span className="font-medium">{item.degree}</span>
                  <span className="text-muted-foreground"> — {item.institution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco Humano + CTA */}
      <section className="bg-secondary/50 section-padding">
        <div className="section-container">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-2">
              <Heart size={20} className="text-accent" />
               <h2 className="text-xl font-semibold">Pesquisa, escrita e ensino</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Além de projetar sistemas inteligentes, ensino, escrevo e pesquiso sobre arquitetura de IA, linguagem, avaliação e governança. Compartilhar conhecimento e construir comunidade fazem parte da minha prática profissional.
            </p>
            
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                 Se você quer discutir arquitetura de IA, produtos inteligentes, pesquisa ou educação:
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="sm" className="gap-2">
                  <Link to="/work">
                    Ver projetos
                    <ArrowRight size={14} />
                  </Link>
                </Button>
                <Button asChild size="sm" variant="outline" className="gap-2">
                  <Link to="/research">
                    Ver artigos
                    <ArrowRight size={14} />
                  </Link>
                </Button>
                <Button asChild size="sm" variant="outline" className="gap-2">
                  <Link to="/contact">
                    Entrar em contato
                    <ArrowRight size={14} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
