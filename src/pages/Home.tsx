import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { ArrowRight, Boxes, Gauge, Network, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BusinessCasesLocked } from "@/components/BusinessCasesLocked";
import { useWorkAccess } from "@/hooks/use-work-access";

import yagoProfile from "@/assets/yago-profile.png";
import caseDrogariaAraujo from "@/assets/case-drogaria-araujo.jpg";
import caseOpty from "@/assets/case-opty.jpg";
import caseStellantis from "@/assets/case-stellantis.jpg";
import caseAfyaEducom from "@/assets/case-afya-educom.jpg";

const aiSystems = [
  {
    icon: Network,
    title: "Arquitetura e orquestração",
    description: "LLMs, RAG, Agentic Systems, Multi-Agent Orchestration, Function Calling e Structured Outputs."
  },
  {
    icon: Gauge,
    title: "Avaliação e observabilidade",
    description: "AI Evaluation, qualidade de resposta, confiabilidade, latência, fallback, drift e operação contínua."
  },
  {
    icon: ShieldCheck,
    title: "Governança e conhecimento",
    description: "AI Governance, proveniência, accountability, guardrails, arquitetura de conhecimento e supervisão humana."
  },
  {
    icon: Boxes,
    title: "Plataformas e engenharia",
    description: "Python, SQL, FastAPI, PostgreSQL/pgvector, Vector Databases, Docker, CI/CD e MLOps."
  }
];

const featuredCases = [
  {
    id: "afya-educom",
    tag: "Agentes de IA & Produto",
    title: "Arquitetura híbrida regras + IA",
    description: "Sistema de qualificação e agendamento com agentes de IA e integração Salesforce.",
    metric: "+29% agendamento",
    href: "/work/afya-educom",
    image: caseAfyaEducom
  },
  {
    id: "opty",
    tag: "Arquitetura & Orquestração",
    title: "Motor de decisão para autoatendimento",
    description: "Arquitetura operacional com orquestração por regras, APIs e exceções.",
    metric: "+31% resolução | NPS 54→71",
    href: "/work/opty",
    image: caseOpty
  },
  {
    id: "stellantis",
    tag: "Sistemas Omnichannel & Escala",
    title: "Plataforma omnichannel premiada",
    description: "Integração digital-física para eventos Jeep Experience e Ram Arena. Vencedor POPAI Brasil 2023.",
    metric: "-41% filas | +33% test-drive",
    href: "/work/stellantis",
    image: caseStellantis
  },
  {
    id: "drogaria-araujo",
    tag: "Produto & Conversão",
    title: "Aumento de 18% na conversão do checkout",
    description: "Reestruturação da jornada de compra desktop e mobile, simplificando decisões no momento de maior intenção.",
    metric: "+18% conversão | -22% abandono",
    href: "/work/drogaria-araujo",
    image: caseDrogariaAraujo
  }
];

const clientLogos = [
  "Inter",
  "Banco do Brasil",
  "Drogaria Araujo",
  "Stellantis",
  "Centauro",
  "Vivara",
  "Zurich Santander",
  "CAIXA",
  "Afya"
];

export default function Home() {
  const { isUnlocked } = useWorkAccess();

  return (
    <div className="flex flex-col">
      <Seo
        title="Yago Henrique — Lead AI Experience Product Architect"
        description="Portfólio de Yago Henrique, Lead AI Experience Product Architect no Inter. Arquitetura de IA, agentes, avaliação, observabilidade e governança."
        path="/"
      />
      {/* Hero Section */}
      <section className="section-container pt-10 pb-8 md:pt-12 md:pb-10">
        <div className="grid md:grid-cols-[minmax(0,1fr),240px] gap-10 items-center">
          <div className="space-y-6 md:space-y-8 order-2 md:order-1">
            <div className="space-y-5 animate-fade-in-up">
              <p className="text-accent font-medium text-sm">
                Lead AI Experience Product Architect @ Inter
              </p>
              <h1 className="text-balance text-3xl md:text-5xl lg:text-5xl leading-[1.08] max-w-4xl">
                Arquitetura de IA, agentes e experiências inteligentes
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Atuo na interseção entre produto, experiência e engenharia, arquitetando sistemas baseados em LLMs, RAG e agentes com avaliação, observabilidade e governança para operar em escala.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <Button asChild size="lg" className="gap-2">
                <Link to="/work">
                  Conheça meu trabalho
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/ux-craft-academy">
                  Formações e eventos
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-1 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Link to="/about">
                  Sobre mim
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Link to="/research">
                  Ver artigos
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Link to="/speaking">
                  Minhas palestras
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Link to="/contact">
                  Entre em contato
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in-up flex justify-center" style={{ animationDelay: "100ms" }}>
            <div className="relative">
              <div className="w-28 h-28 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-secondary shadow-xl">
                <img 
                  src={yagoProfile} 
                  alt="Yago Henrique" 
                  width={256}
                  height={256}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full shadow-lg">
                <span className="font-bold text-[10px] md:text-xs">PhD Researcher</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30">
        <div className="section-container grid grid-cols-2 md:grid-cols-4">
          {[
            ["9+", "anos de experiência"],
            ["400+", "alunos formados"],
            ["250+", "projetos"],
            ["26k+", "seguidores no LinkedIn"],
          ].map(([value, label], index) => (
            <div key={label} className={`py-6 md:py-7 ${index % 2 === 0 ? "pr-5" : "pl-5"} md:px-6 border-b md:border-b-0 border-border ${index > 1 ? "border-b-0" : ""} ${index !== 0 ? "md:border-l" : ""}`}>
              <p className="text-2xl md:text-3xl font-semibold">{value}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Systems Section */}
      <section className="bg-secondary/50 section-padding">
        <div className="section-container">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Sistemas de IA com que trabalho</h2>
            <p className="text-muted-foreground max-w-2xl">
              Capacidades conectadas aos problemas de produto, às decisões de experiência e à operação técnica de sistemas inteligentes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiSystems.map((item, index) => (
              <div 
                key={item.title}
                className="bg-card rounded-lg p-5 border border-border card-hover animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Business Cases Section */}
      {isUnlocked ? (
        <section className="section-container section-padding">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Sistemas e produtos selecionados</h2>
            <p className="text-muted-foreground max-w-2xl">
              Projetos estratégicos com impacto de negócio documentado, decisões baseadas em evidência e resultados mensuráveis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredCases.map((caseItem, index) => (
              <Link
                key={caseItem.id}
                to={caseItem.href}
                className="group block bg-card border border-border rounded-lg overflow-hidden card-hover animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="aspect-[16/9] bg-secondary/50 relative overflow-hidden">
                  <img loading="lazy" decoding="async" 
                    src={caseItem.image} 
                    alt={caseItem.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="badge-secondary text-xs">
                      {caseItem.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-semibold group-hover:text-accent transition-colors leading-snug">
                    {caseItem.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {caseItem.description}
                  </p>
                  <p className="text-accent font-medium text-sm">
                    {caseItem.metric}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="gap-2">
              <Link to="/work">
                Ver todos os cases
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </section>
      ) : (
        <BusinessCasesLocked />
      )}

      <section className="section-container section-padding border-t border-border">
        <h2 className="text-2xl md:text-3xl mb-8">Produto, experiência e engenharia</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["Produto", "Problemas relevantes, métricas e decisões alinhadas aos objetivos da organização."],
            ["Experiência", "Contexto, linguagem, conhecimento e supervisão humana para interações úteis e confiáveis."],
            ["Engenharia", "Arquitetura, integração, avaliação e observabilidade para operar e evoluir sistemas em escala."],
          ].map(([title, description]) => <div key={title}><h3 className="text-lg mb-2">{title}</h3><p className="text-muted-foreground text-sm">{description}</p></div>)}
        </div>
      </section>

      <section className="bg-secondary/50 section-padding">
        <div className="section-container grid md:grid-cols-3 gap-8">
          {[
            ["Pesquisa", "Governança conversacional de LLMs em ambientes regulados. Doutorado na UTAD e pesquisa no Smart Media Users, ECA-USP.", "/research", "Conhecer a pesquisa"],
            ["Escrita", "40 edições da UX Potion conectando IA, produto, dados e arquitetura à prática profissional.", "/research", "Ler artigos e newsletter"],
            ["Ensino e palestras", "Masterclasses e workshops sobre RAG, arquitetura da conversa, avaliação e agentes de IA.", "/speaking", "Ver palestras e ensino"],
          ].map(([title, description, href, label]) => <div key={title} className="flex flex-col items-start"><h2 className="text-xl mb-3">{title}</h2><p className="text-sm text-muted-foreground mb-5 flex-1">{description}</p><Button asChild variant="outline" size="sm"><Link to={href}>{label}<ArrowRight size={14} /></Link></Button></div>)}
        </div>
      </section>

      {/* Short Bio Section */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="section-container">
          <div className="max-w-4xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold">Sobre</h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
               Lead AI Experience Product Architect no Inter, pesquisador e professor. Conecto mais de nove anos em tecnologia e experiência digital à arquitetura de produtos e sistemas de IA, com foco em LLMs, RAG, agentes, avaliação, observabilidade e governança.
            </p>
            <div className="grid md:grid-cols-4 gap-6 pt-4">
              <div className="space-y-2">
                 <p className="text-4xl font-bold">9+</p>
                <p className="text-sm text-primary-foreground/70">Anos de experiência</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold">250+</p>
                <p className="text-sm text-primary-foreground/70">Projetos em UX</p>
              </div>
              <div className="space-y-2">
                 <p className="text-4xl font-bold">UTAD</p>
                 <p className="text-sm text-primary-foreground/70">PhD Researcher</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold">400+</p>
                <p className="text-sm text-primary-foreground/70">Alunos formados</p>
              </div>
            </div>
            <Button asChild variant="secondary" className="gap-2">
              <Link to="/about">
                Trajetória completa
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-container section-padding">
        <div className="text-center space-y-8">
          <p className="text-muted-foreground">
             Experiência em produtos digitais e sistemas inteligentes para organizações complexas
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo) => (
              <div 
                key={logo}
                className="text-muted-foreground/60 font-medium text-lg"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-container section-padding border-t border-border flex flex-col md:flex-row gap-6 md:items-center justify-between">
        <div><h2 className="text-2xl mb-3">Vamos conversar</h2><p className="text-muted-foreground">Arquitetura de IA, produtos inteligentes, pesquisa e educação.</p></div>
        <Button asChild><Link to="/contact">Entre em contato<ArrowRight size={16} /></Link></Button>
      </section>
    </div>
  );
}
