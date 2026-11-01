import { useState } from "react";
import { Seo } from "@/components/Seo";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Users, ShieldAlert } from "lucide-react";
import { WorkAccessModal } from "@/components/WorkAccessModal";
import { useWorkAccess } from "@/hooks/use-work-access";
import { Switch } from "@/components/ui/switch";
import caseDrogariaAraujo from "@/assets/case-drogaria-araujo.jpg";
import caseCaixaResidencial from "@/assets/case-caixa-residencial.jpg";
import caseStellantis from "@/assets/case-stellantis.jpg";
import caseAfyaEducom from "@/assets/case-afya-educom.jpg";
import caseOpty from "@/assets/case-opty.jpg";
import caseAtleticoMineiro from "@/assets/case-atletico-mineiro.jpg";
import caseIntranetDigitalbot from "@/assets/case-intranet-digitalbot.jpg";
import caseFrameworkEntrega from "@/assets/case-framework-entrega.jpg";
import caseMatrizResponsabilidades from "@/assets/case-matriz-responsabilidades.jpg";
import caseHandoffUxDev from "@/assets/case-handoff-ux-dev.jpg";
import caseGuildaResultados from "@/assets/case-guilda-resultados.jpg";
import caseChecklistGovernanca from "@/assets/case-checklist-governanca.jpg";
import workIllustration from "@/assets/work-illustration.svg";

import caseBancoBrasil from "@/assets/case-banco-brasil.jpg";

const strategicCases = [
  {
    id: "afya-educom",
    tag: "Agentes de IA & Produto",
    title: "Arquitetura híbrida para captação de médicos",
    description: "Sistema de regras + agentes de IA para qualificação e agendamento, com integração Salesforce e teste A/B entre fluxos.",
    metric: "+29% agendamento | -37% transbordo",
    href: "/work/afya-educom",
    image: caseAfyaEducom,
  },
  {
    id: "opty",
    tag: "Arquitetura & Orquestração",
    title: "Motor de decisão para autoatendimento de telecom",
    description: "Arquitetura operacional com orquestração por regras, APIs e exceções para um provedor regional de internet.",
    metric: "-42% transbordo | +31% resolução | NPS 54→71",
    href: "/work/opty",
    image: caseOpty,
  },
  {
    id: "stellantis",
    tag: "Sistemas Omnichannel & Escala",
    title: "Plataforma omnichannel para eventos de alta complexidade",
    description: "Integração de agendamento, check-in, test-drive e atrações físicas via WhatsApp e totens. Vencedor do Prêmio POPAI Brasil 2023.",
    metric: "-41% filas | +33% test-drive",
    href: "/work/stellantis",
    image: caseStellantis,
  },
  {
    id: "banco-brasil",
    tag: "Formação & Capacitação",
    title: "Programa de formação em Discovery, Lean Inception e Facilitação",
    description: "Criei do zero um programa de formação que mudou a forma como uma diretoria inteira do Banco do Brasil concebia sistemas complexos, treinando 20 designers e conduzindo workshops em sistemas nacionais.",
    metric: "3 meses | 20 designers | 2 workshops estratégicos",
    href: "/work/banco-brasil",
    image: caseBancoBrasil,
  },
  {
    id: "drogaria-araujo",
    tag: "E-commerce & Conversão",
    title: "Aumento de 18% na conversão do checkout",
    description: "Reestruturação da jornada de compra desktop e mobile, reduzindo abandono nas etapas finais e simplificando o processo decisório do usuário.",
    metric: "+18% conversão | -22% abandono",
    href: "/work/drogaria-araujo",
    image: caseDrogariaAraujo,
  },
  {
    id: "caixa-residencial",
    tag: "UX Conversacional & Autosserviço",
    title: "Redução de 34% no transbordo humano",
    description: "Reestruturação dos fluxos conversacionais e sistema de exceções para autosserviço em seguros, aumentando resolução automática em 27%.",
    metric: "+27% resolução | -34% transbordo",
    href: "/work/caixa-residencial",
    image: caseCaixaResidencial,
  },
  {
    id: "atletico-mineiro",
    tag: "UX Conversacional & Operações",
    title: "Plataforma conversacional para operação de clube",
    description: "Transformação do WhatsApp em sistema de decisão operacional para orquestrar atendimento, cobrança, reservas e convites nos complexos Vila Olímpica e Labareda.",
    metric: "-38% transbordo | +46% resolução | NPS +27%",
    href: "/work/atletico-mineiro",
    image: caseAtleticoMineiro,
  }
];

const leadershipCases = [
  {
    id: "checklist-governanca",
    tag: "AI Governance & Quality Assurance",
    title: "Checklist de governança, QA e hand-off técnico",
    description: "Hand-off de UX Conversacional transformado em processo auditável com 92 critérios formais e 23 critérios críticos de bloqueio.",
    metric: "92 critérios | 23 críticos | Gate único de aprovação",
    href: "/work/checklist-governanca",
    image: caseChecklistGovernanca,
  },
  {
    id: "framework-entrega",
    tag: "Observabilidade & Governança",
    title: "Framework de entrega para fluxos conversacionais",
    description: "Criação de padrão institucional de entrega com governança, escalabilidade, clareza técnica e rastreabilidade de decisões para design conversacional.",
    metric: "Padrão institucional | Onboarding acelerado | Retrabalho reduzido",
    href: "/work/framework-entrega",
    image: caseFrameworkEntrega,
  },
  {
    id: "intranet-digitalbot",
    tag: "Design Lead & Arquitetura de Informação",
    title: "Plataforma interna de conhecimento, operação e governança",
    description: "Transformação da intranet em hub estratégico de operação, conhecimento e governança para empresa de tecnologia em crescimento acelerado.",
    metric: "-35% retrabalho | +42% reutilização | +30% adesão guildas",
    href: "/work/intranet-digitalbot",
    image: caseIntranetDigitalbot,
  },
  {
    id: "matriz-responsabilidades",
    tag: "Maturidade & Governança de UX",
    title: "Matriz de responsabilidades e competências",
    description: "Sistema de maturidade que transformou a prática de UX Conversacional em modelo escalável de formação, qualidade e liderança técnica.",
    metric: "Padronização de senioridade | Base para onboarding | Critérios de evolução",
    href: "/work/matriz-responsabilidades",
    image: caseMatrizResponsabilidades,
  },
  {
    id: "handoff-ux-dev",
    tag: "Processo & Integração UX-DEV",
    title: "Hand-off UX → DEV para fluxos conversacionais",
    description: "Sistema de tradução entre intenção de design e execução técnica, baseado em cascata de validações, componentes semânticos e governança de variáveis.",
    metric: "Cascata de validações | Componentes semânticos | Redução de retrabalho",
    href: "/work/handoff-ux-dev",
    image: caseHandoffUxDev,
  },
  {
    id: "guilda-resultados",
    tag: "Governança & Maturidade de Design",
    title: "Guilda de UX — Resultados Q1, Q2 e direcionamento Q3",
    description: "Sistema operacional de design com impacto mensurável em alinhamento, qualidade e maturidade organizacional. NPS 9,71 e 90,5% de conclusão.",
    metric: "NPS 9,71 | 90,5% conclusão | 49 iniciativas",
    href: "/work/guilda-resultados",
    image: caseGuildaResultados,
  },
  
];

type FilterType = "all" | "strategic" | "leadership";

export default function Work() {
  const { isUnlocked, isLoading, unlock } = useWorkAccess();
  const [filter, setFilter] = useState<FilterType>("all");

  if (isLoading) {
    return (
      <div className="section-container section-padding flex items-center justify-center min-h-[60vh]">
        <div className="animate-pulse text-muted-foreground">Carregando...</div>
      </div>
    );
  }

  const handleFilterChange = (type: FilterType) => {
    setFilter(prev => prev === type ? "all" : type);
  };

  const showStrategic = filter === "all" || filter === "strategic";
  const showLeadership = filter === "all" || filter === "leadership";

  return (
    <>
      <Seo
        title="Trabalho — Sistemas de IA, produto e governança | Yago Henrique"
        description="Cases de arquitetura, agentes de IA, produto, experiências inteligentes, avaliação e governança conduzidos por Yago Henrique."
        path="/work"
      />
      <WorkAccessModal open={!isUnlocked} onUnlock={unlock} />
      <div className={`section-container section-padding ${!isUnlocked ? 'blur-md pointer-events-none select-none' : ''}`}>
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold">Trabalho</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Sistemas, produtos e contribuições de liderança que conectam arquitetura de IA, experiência, engenharia e resultados mensuráveis.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img loading="lazy" decoding="async" 
            src={workIllustration} 
            alt="Business decisions illustration" 
            className="w-full max-w-sm md:max-w-md"
          />
        </div>
      </div>

      {/* NDA Confidentiality Notice */}
      <div className="flex items-start gap-3 p-4 mb-6 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg">
        <ShieldAlert size={20} className="text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
          <strong>Aviso de Confidencialidade (NDA):</strong> este ambiente contém informações protegidas por Acordo de Não Divulgação. É proibida qualquer reprodução, cópia, compartilhamento ou divulgação do conteúdo aqui apresentado. O acesso é restrito a pessoas autorizadas e mediante senha. O descumprimento destas regras poderá resultar em responsabilização legal.
        </p>
      </div>

      {/* Filter Toggles */}
      <div className="flex flex-wrap items-center gap-6 mb-10 p-4 bg-card border border-border rounded-lg">
        <span className="text-sm text-muted-foreground font-medium">Filtrar por:</span>
        <div className="flex items-center gap-3">
          <Switch 
            checked={filter === "strategic"} 
            onCheckedChange={() => handleFilterChange("strategic")}
          />
          <label className="flex items-center gap-2 text-sm font-medium cursor-pointer">
            <Briefcase size={16} className="text-accent" />
             Sistemas e produto
          </label>
        </div>
        <div className="flex items-center gap-3">
          <Switch 
            checked={filter === "leadership"} 
            onCheckedChange={() => handleFilterChange("leadership")}
          />
          <label className="flex items-center gap-2 text-sm font-medium cursor-pointer">
            <Users size={16} className="text-accent" />
             Liderança e governança
          </label>
        </div>
      </div>

      {/* Liderança em UX Section - Now First */}
      {showLeadership && (
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-accent" size={28} />
            <h2 className="text-2xl md:text-3xl font-semibold">Liderança e governança</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8">
             Padrões, avaliação, rastreabilidade e processos que sustentam qualidade, observabilidade e escala organizacional.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadershipCases.map((caseItem, index) => (
              <Link
                key={caseItem.id}
                to={caseItem.href}
                className="group block bg-card border border-border rounded-lg overflow-hidden card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="aspect-[16/10] bg-secondary/50 relative overflow-hidden">
                  <img loading="lazy" decoding="async" 
                    src={caseItem.image} 
                    alt={caseItem.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="badge-secondary text-xs">
                      {caseItem.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-semibold group-hover:text-accent transition-colors leading-snug line-clamp-2">
                    {caseItem.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {caseItem.description}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <p className="text-accent font-medium text-sm line-clamp-1">
                      {caseItem.metric}
                    </p>
                    <ArrowRight size={16} className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Cases Estratégicos Section */}
      {showStrategic && (
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-accent" size={28} />
            <h2 className="text-2xl md:text-3xl font-semibold">Sistemas e produto</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8">
             Projetos que conectam arquitetura, orquestração, experiência e impacto de negócio em sistemas escaláveis.
          </p>
          <div className="space-y-8">
            {strategicCases.map((caseItem, index) => (
              <Link
                key={caseItem.id}
                to={caseItem.href}
                className="group block bg-card border border-border rounded-lg overflow-hidden card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="aspect-[16/9] md:aspect-auto bg-secondary/50 relative overflow-hidden">
                    <img loading="lazy" decoding="async" 
                      src={caseItem.image} 
                      alt={caseItem.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="badge-secondary text-xs">
                        {caseItem.tag}
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                    <div className="space-y-4">
                      <h3 className="text-xl md:text-2xl font-semibold group-hover:text-accent transition-colors leading-snug">
                        {caseItem.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {caseItem.description}
                      </p>
                      <div className="flex items-center justify-between pt-2">
                        <p className="text-accent font-medium">
                          {caseItem.metric}
                        </p>
                        <span className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                           Ver case
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      </div>
    </>
  );
}
