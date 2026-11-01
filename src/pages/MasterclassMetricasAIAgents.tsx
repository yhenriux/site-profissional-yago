import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { ArrowLeft, ArrowRight, Calendar, Clock, Monitor, CheckCircle, Users, BookOpen, Award, MessageSquare, FileText, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import masterclassImage from "@/assets/masterclass-metricas-ai-agents.jpg";

const benefits = [
  { icon: Monitor, label: "Evento ao vivo" },
  { icon: FileText, label: "Gravação disponível" },
  { icon: Award, label: "Certificado" },
  { icon: BookOpen, label: "E-book complementar" },
  { icon: MessageSquare, label: "Grupo exclusivo" },
  { icon: Layers, label: "Materiais de apoio" },
];

const SYMPLA_LINK = "https://www.sympla.com.br/evento-online/metricas-ai-agents-qualidade-confiabilidade-e-impacto/3297772";

export default function MasterclassMetricasAIAgents() {
  return (
    <div className="min-h-screen">
      <Seo
        title="Masterclass Métricas & AI Agents — UX Craft Academy"
        description="Masterclass online ao vivo sobre como avaliar qualidade, confiabilidade e impacto de agentes de IA em produção."
        path="/ux-craft-academy/masterclass-metricas-ai-agents"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Métricas & AI Agents: Qualidade, Confiabilidade e Impacto",
          description: "Masterclass sobre métricas de qualidade, confiabilidade e impacto aplicadas a agentes de IA.",
          provider: { "@type": "Organization", name: "UX Craft Academy" },
          instructor: { "@type": "Person", name: "Yago Henrique" },
        }}
      />
      {/* Hero */}
      <section className="bg-foreground text-background py-16 md:py-24">
        <div className="section-container">
          <Link to="/ux-craft-academy" className="inline-flex items-center gap-2 text-muted-foreground hover:text-background transition-colors mb-8 text-sm">
            <ArrowLeft size={16} />
            Voltar para UX Craft Academy
          </Link>

          <img loading="lazy" decoding="async"
            src={masterclassImage}
            alt="Masterclass Métricas & AI Agents"
            className="w-full rounded-lg object-cover aspect-[16/9] mb-10"
          />

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Métricas & AI Agents
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-6">
            Qualidade, Confiabilidade e Impacto
          </p>

          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 px-4 py-2 rounded-lg text-sm mb-6">
            <Calendar size={16} />
            28 de fevereiro de 2026 • 10h às 13h • Online ao vivo
          </div>

          <p className="max-w-2xl text-muted-foreground text-lg mb-8">
            Agentes de IA já estão em produção. O problema deixou de ser construir e passou a ser avaliar com rigor.
          </p>

          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href={SYMPLA_LINK} target="_blank" rel="noopener noreferrer">
              Garantir vaga
              <ArrowRight size={18} />
            </a>
          </Button>
        </div>
      </section>

      <div className="section-container">
        {/* O problema */}
        <section className="section-padding">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">O problema</h2>
          <Card>
            <CardContent className="p-6 text-muted-foreground leading-relaxed">
              Equipes costumam operar com métricas técnicas isoladas, indicadores de uso que não explicam valor e percepções subjetivas de qualidade. O resultado costuma aparecer depois: dificuldade de justificar investimento, decisões frágeis de design e agentes escalando sem critérios claros de confiabilidade.
              <br /><br />
              Esta masterclass organiza um modelo estruturado de avaliação aplicável a ambientes reais, incluindo plataformas low/no code e orquestradores de agentes.
            </CardContent>
          </Card>
        </section>

        {/* O que você vai aprender */}
        <section className="pb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">O que você vai aprender</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">1. Camada técnica</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Interpretar métricas de modelo sem reduzir qualidade a score.
                  <br /><br />
                  Analisar latência, fallback, abstention e drift aplicados ao design.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">2. Camada experiencial</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Transformar percepção e confiança em critérios avaliáveis.
                  <br /><br />
                  Estruturar avaliação humana contínua integrada a sinais automáticos.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">3. Camada de impacto</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Conectar métricas conversacionais a eficiência operacional.
                  <br /><br />
                  Criar experimentos simples para inferir impacto real.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Ao longo do encontro</h3>
                <ul className="text-muted-foreground text-sm leading-relaxed space-y-1">
                  <li>Critérios de qualidade para respostas geradas</li>
                  <li>Falhas invisíveis em dashboards</li>
                  <li>Monitoramento contínuo em produção</li>
                  <li>Relação entre UX, governança e risco</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contextos abordados */}
        <section className="pb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Contextos abordados</h2>
          <Card>
            <CardContent className="p-6">
              <ul className="text-muted-foreground text-sm leading-relaxed space-y-2">
                <li>Agentes de atendimento ao cliente</li>
                <li>Assistentes internos corporativos</li>
                <li>Copilotos de decisão</li>
                <li>Fluxos conversacionais integrados a sistemas</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Para quem é */}
        <section className="pb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Para quem é</h2>
          <Card>
            <CardContent className="p-6 text-muted-foreground leading-relaxed">
              UX Designers, Researchers, Product Managers, Designers Conversacionais e profissionais que operam agentes em produção e precisam justificar decisões com evidência.
            </CardContent>
          </Card>
        </section>

        {/* Formato e benefícios */}
        <section className="pb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Formato e benefícios</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <Card key={b.label}>
                <CardContent className="p-5 flex items-center gap-3">
                  <b.icon size={20} className="text-accent shrink-0" />
                  <span className="text-sm font-medium">{b.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </div>

      {/* Footer banner */}
      <section className="bg-foreground text-background py-10 text-center">
        <p className="text-muted-foreground text-sm">
          Transmissão online via Sympla • Acesso liberado antes do início • Necessário Zoom instalado
        </p>
      </section>
    </div>
  );
}
