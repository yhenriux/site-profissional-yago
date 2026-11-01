import { Link } from "react-router-dom";
import { ArrowLeft, Target, Search, Lightbulb, Code, TrendingUp, Users, Layers } from "lucide-react";
import caseImage from "@/assets/case-guilda-resultados.jpg";

export default function CaseGuildaResultados() {
  return (
    <div className="section-container section-padding">
      {/* Back Navigation */}
      <Link 
        to="/work" 
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft size={16} />
        Voltar para Work
      </Link>

      {/* Hero Section */}
      <div className="space-y-6 mb-12">
        <div className="flex items-center gap-3">
          <span className="badge-secondary">Governança & Maturidade de Design</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Guilda de UX — Resultados Q1, Q2 e direcionamento Q3
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Estruturação da Guilda de UX como sistema operacional de design, com impacto mensurável 
          em alinhamento, qualidade e maturidade organizacional.
        </p>
        <div className="flex flex-wrap gap-4 text-accent font-medium">
          <span>NPS 9,71 (Q1)</span>
          <span className="text-muted-foreground">•</span>
          <span>90,5% conclusão</span>
          <span className="text-muted-foreground">•</span>
          <span>49 iniciativas</span>
        </div>
      </div>

      {/* Cover Image */}
      <div className="aspect-[16/9] bg-secondary/50 rounded-lg overflow-hidden mb-12">
        <img loading="lazy" decoding="async" 
          src={caseImage} 
          alt="Guilda de UX - Resultados Q1 Q2 Q3"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Sections */}
      <div className="space-y-12 max-w-3xl">
        
        {/* Outcome & Framing */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Target className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Outcome & Framing</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Estruturei a Guilda de UX como um sistema operacional de design, com impacto mensurável 
            em alinhamento, qualidade e maturidade organizacional.
          </p>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Tese do projeto:</p>
            <p className="text-muted-foreground italic">
              "O desafio não era criar rituais, mas construir um modelo de governança de design 
              que escalasse práticas, decisões e aprendizado."
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-accent">9,71</p>
              <p className="text-sm text-muted-foreground">NPS Q1</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-accent">90,5%</p>
              <p className="text-sm text-muted-foreground">Conclusão Q1</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-accent">49</p>
              <p className="text-sm text-muted-foreground">Iniciativas</p>
            </div>
          </div>
        </section>

        {/* Business Context */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Search className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Business Context & Stakes</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            A DigitalBot vivia crescimento rápido, com múltiplos times de UX, variação de qualidade 
            entre projetos, ausência de padrão de entrega e dependência excessiva de indivíduos.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Risco real</p>
              <p className="text-sm">
                Design virar operação reativa, sem consistência nem estratégia.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Aposta do negócio</p>
              <ul className="text-sm space-y-1">
                <li>• Padronizar práticas</li>
                <li>• Formar pessoas</li>
                <li>• Organizar conhecimento</li>
                <li>• Aumentar previsibilidade</li>
              </ul>
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="font-medium">Por que era prioritário:</p>
            <p className="text-muted-foreground">
              Sem isso, o design não escalaria, a empresa perderia eficiência e a experiência 
              seria desigual por cliente.
            </p>
          </div>
        </section>

        {/* Problem Discovery */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Search className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Problem Discovery</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Tabulação Q1 e Q2: 21 iniciativas no Q1, 28 no Q2, crescimento de escopo, queda leve 
            no NPS (9,7 → 8,9) e redução de clareza de papéis (3,5/5 no Q2).
          </p>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Insight-chave:</p>
            <p className="text-muted-foreground italic">
              "O problema não era adesão. Era transição de uma guilda formativa para uma 
              guilda estrutural."
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Pesquisa interna mostrou:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Alta percepção de valor da guilda</li>
              <li>• Problemas de clareza de papéis</li>
              <li>• Sobrecarga de agendas</li>
              <li>• Necessidade de mais aplicabilidade prática</li>
            </ul>
          </div>
        </section>

        {/* Design Strategy */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Lightbulb className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Design Strategy</h2>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Reformulação do problema:</p>
            <p className="text-muted-foreground">
              <span className="line-through">Não era: "Como criar encontros de UX?"</span>
            </p>
            <p className="text-accent">
              Era: "Como estruturar UX como sistema produtivo dentro da empresa?"
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Hipótese principal:</p>
            <p className="text-muted-foreground">
              Se houver padrão, métrica, formação e governança — então a qualidade escala, 
              o time amadurece e o design vira ativo organizacional.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2 text-sm">Meu papel</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Idealizador da guilda</li>
                <li>• Definidor de processos</li>
                <li>• Facilitador de rituais</li>
                <li>• Responsável por indicadores</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2 text-sm">Trade-offs</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Mais estrutura</li>
                <li>• Menos improviso</li>
                <li>• Mais alinhamento</li>
                <li>• Menos autonomia caótica</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process & Documentation */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Layers className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Process & Documentation</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            O processo foi estruturado em três camadas: Execução (entregas), Governança (rituais) 
            e Monitoramento (dados).
          </p>
          
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2 text-sm">1. Execução</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Design System</li>
                <li>• Playbook</li>
                <li>• Hand-off</li>
                <li>• Intranet</li>
                <li>• Dashboards</li>
                <li>• Bootcamps</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2 text-sm">2. Governança</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Rituais quinzenais</li>
                <li>• UX Sync</li>
                <li>• Curadoria</li>
                <li>• Squads temáticos</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2 text-sm">3. Monitoramento</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Tabulação trimestral</li>
                <li>• NPS</li>
                <li>• Taxa de conclusão</li>
                <li>• Backlog público</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Visual Strategy */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Code className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Visual & Interaction Strategy</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            A estratégia visual foi instrumental: dashboards, organização por seções, clareza 
            hierárquica, templates de entrega e fluxos padronizados.
          </p>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="font-medium">O design não foi estética:</p>
            <p className="text-accent">
              Foi infraestrutura cognitiva — arquivos padrão, matrizes, intranet e modelos reutilizáveis.
            </p>
          </div>
        </section>

        {/* Execution & Validation */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Code className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Execution & Validation</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Validação feita via pesquisas internas Q1 e Q2, acompanhamento de progresso, métricas 
            de entrega e feedback qualitativo.
          </p>
          <div className="space-y-3">
            <p className="font-medium">Ajustes entre Q1 → Q2:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Foco maior em aplicabilidade</li>
              <li>• Criação de Playbook</li>
              <li>• Reforço de processos</li>
              <li>• Ajuste de rituais</li>
            </ul>
          </div>
        </section>

        {/* Results */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Results & Business Impact</h2>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2 text-sm">Quantitativo</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 49 iniciativas</li>
                <li>• 90,5% conclusão Q1</li>
                <li>• NPS acima de 8,9</li>
                <li>• Escopo crescente</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2 text-sm">Operacional</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Menos retrabalho</li>
                <li>• Mais padrão</li>
                <li>• Mais previsibilidade</li>
                <li>• Onboarding facilitado</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2 text-sm">Estratégico</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• UX vira função org.</li>
                <li>• Influencia processos</li>
                <li>• Estabelece governança</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Users className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Leadership & Influence</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Atuação como arquiteto de práticas, mediador entre áreas, formador de pessoas e 
            tradutor entre estratégia e execução.
          </p>
          <div className="space-y-3">
            <p className="font-medium">Influência direta em:</p>
            <div className="flex flex-wrap gap-2">
              <span className="badge-secondary">UX</span>
              <span className="badge-secondary">Produto</span>
              <span className="badge-secondary">Dados</span>
              <span className="badge-secondary">Operação</span>
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Criou:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Padrões</li>
              <li>• Linguagem comum</li>
              <li>• Rituais</li>
              <li>• Expectativa institucional</li>
            </ul>
          </div>
        </section>

        {/* Learnings */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Lightbulb className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Learnings & Design Maturity</h2>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Aprendizados:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Design precisa de sistema</li>
              <li>• Cultura precisa de métrica</li>
              <li>• Rituais precisam de propósito</li>
              <li>• Guilda precisa de governança</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Evolução do pensamento:</p>
            <p className="text-muted-foreground">
              <span className="line-through">De: liderar projetos</span>
            </p>
            <p className="text-accent">
              Para: liderar função organizacional
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Preparação para:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Design Lead</li>
              <li>• Design Director</li>
              <li>• Estrategista de UX</li>
              <li>• Head de UX</li>
            </ul>
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-border pt-8">
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-center italic">
            "Este projeto não criou uma guilda. Criou um sistema de produção, aprendizado e 
            governança de design dentro da empresa."
          </blockquote>
        </section>
      </div>

      {/* Back to Cases */}
      <div className="mt-12 pt-8 border-t border-border">
        <Link 
          to="/work" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} />
          Voltar para Work
        </Link>
      </div>
    </div>
  );
}
