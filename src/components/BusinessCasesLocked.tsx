import { Link } from "react-router-dom";
import { Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import caseOpty from "@/assets/case-opty.jpg";
import caseStellantis from "@/assets/case-stellantis.jpg";
import caseAfyaEducom from "@/assets/case-afya-educom.jpg";

const featuredCases = [
  {
    id: "afya-educom",
    tag: "Agentes de IA & Produto",
    title: "Arquitetura híbrida regras + IA",
    description: "Sistema de qualificação e agendamento com agentes de IA e integração Salesforce.",
    metric: "+29% agendamento",
    image: caseAfyaEducom
  },
  {
    id: "opty",
    tag: "Arquitetura & Orquestração",
    title: "Motor de decisão para autoatendimento",
    description: "Orquestração por regras, APIs e exceções para uma operação conversacional escalável.",
    metric: "+31% resolução | NPS 54→71",
    image: caseOpty
  },
  {
    id: "stellantis",
    tag: "Sistemas Omnichannel & Escala",
    title: "Plataforma omnichannel premiada",
    description: "Integração digital-física para eventos Jeep Experience e Ram Arena. Vencedor POPAI Brasil 2023.",
    metric: "-41% filas | +33% test-drive",
    image: caseStellantis
  },
  {
    id: "governanca",
    tag: "Governança & Qualidade",
    title: "Processos auditáveis para sistemas conversacionais",
    description: "Padrões de qualidade, rastreabilidade e critérios formais para decisões em escala.",
    metric: "92 critérios | 23 críticos",
    image: caseAfyaEducom
  }
];

export function BusinessCasesLocked() {
  return (
    <section className="section-container section-padding">
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Sistemas e produtos selecionados</h2>
        <p className="text-muted-foreground max-w-2xl">
          Projetos estratégicos com impacto de negócio documentado, decisões baseadas em evidência e resultados mensuráveis.
        </p>
      </div>

      <div className="relative">
        {/* Cases Grid with Blur */}
        <div className="grid md:grid-cols-2 gap-6">
          {featuredCases.map((caseItem, index) => (
            <div
              key={caseItem.id}
              className="block bg-card border border-border rounded-lg overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="aspect-[16/9] bg-secondary/50 relative overflow-hidden">
                <img loading="lazy" decoding="async" 
                  src={caseItem.image} 
                  alt={caseItem.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="badge-secondary text-xs">
                    {caseItem.tag}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-semibold leading-snug">
                  {caseItem.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {caseItem.description}
                </p>
                <p className="text-accent font-medium text-sm">
                  {caseItem.metric}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Blur Overlay with Lock Message */}
        <div className="absolute inset-0 backdrop-blur-md bg-background/60 flex items-center justify-center rounded-lg">
          <div className="text-center space-y-6 max-w-md px-6">
            <div className="mx-auto w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-accent" />
            </div>
            <div className="space-y-3">
               <h3 className="text-xl font-semibold">Conteúdo exclusivo</h3>
              <p className="text-muted-foreground leading-relaxed">
                 Os cases detalhados são reservados para recrutadores, lideranças e profissionais avaliando meu portfólio.
              </p>
            </div>
            <Button asChild className="gap-2">
              <Link to="/work">
                 Solicitar acesso
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
