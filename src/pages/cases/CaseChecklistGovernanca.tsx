import { Link } from "react-router-dom";
import { ArrowLeft, Target, Search, Lightbulb, Code, TrendingUp, Users, Layers, CheckSquare } from "lucide-react";
import caseImage from "@/assets/case-checklist-governanca.jpg";

export default function CaseChecklistGovernanca() {
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
          <span className="badge-secondary">QA & Governança de UX</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Checklist de governança, QA e hand-off técnico
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Transformação do hand-off de UX Conversacional em processo auditável, mensurável e 
          governado por critérios objetivos.
        </p>
        <div className="flex flex-wrap gap-4 text-accent font-medium">
          <span>92 critérios formais</span>
          <span className="text-muted-foreground">•</span>
          <span>23 critérios críticos</span>
          <span className="text-muted-foreground">•</span>
          <span>Gate único de aprovação</span>
        </div>
      </div>

      {/* Cover Image */}
      <div className="aspect-[16/9] bg-secondary/50 rounded-lg overflow-hidden mb-12">
        <img loading="lazy" decoding="async" 
          src={caseImage} 
          alt="Checklist UX Conversacional - Governança e QA"
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
            Transformei o hand-off de UX Conversacional em um processo auditável, mensurável e 
            governado por critérios objetivos.
          </p>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Tese do projeto:</p>
            <p className="text-muted-foreground italic">
              "O problema não era erro de implementação, era ausência de um sistema de validação 
              de qualidade conversacional antes do desenvolvimento."
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-accent">92</p>
              <p className="text-sm text-muted-foreground">Critérios formais</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-accent">23</p>
              <p className="text-sm text-muted-foreground">Critérios críticos</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-accent">15</p>
              <p className="text-sm text-muted-foreground">Blocos estruturados</p>
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
            A operação de chatbots na DigitalBot envolvia múltiplos fluxos, designers, devs, canais 
            e integrações externas. O hand-off acontecia por interpretação, sem critérios comuns, 
            com dependência de pessoas e retrabalho recorrente.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Risco real</p>
              <ul className="text-sm space-y-1">
                <li>• Interfaces inconsistentes</li>
                <li>• Falhas de fluxo</li>
                <li>• Bugs de contexto</li>
                <li>• Decisões invisíveis</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Custo implícito</p>
              <ul className="text-sm space-y-1">
                <li>• Retrabalho de DEV e UX</li>
                <li>• Bugs em produção</li>
                <li>• Experiência quebrada</li>
                <li>• Perda de confiabilidade</li>
              </ul>
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="font-medium">Por que agir agora:</p>
            <p className="text-muted-foreground">
              O volume e a complexidade dos projetos superaram a capacidade informal de revisão.
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
            Erros recorrentes em exceções, versionamento, variáveis, integrações e transbordo humano. 
            Dúvidas frequentes no hand-off e ausência de "pronto para dev" objetivo.
          </p>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Insight-chave:</p>
            <p className="text-muted-foreground italic">
              "O problema não era técnico. Era estrutural e cognitivo: ninguém sabia exatamente 
              quando um projeto estava realmente pronto."
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Análise de projetos anteriores mostrou:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Padrões de falha repetidos</li>
              <li>• Dependência de memória do time</li>
              <li>• Conhecimento não documentado</li>
              <li>• Falta de rastreabilidade</li>
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
              <span className="line-through">Não era: "Como revisar projetos?"</span>
            </p>
            <p className="text-accent">
              Era: "Como transformar qualidade conversacional em critério verificável?"
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Hipótese principal:</p>
            <p className="text-muted-foreground">
              Se cada dimensão crítica do bot tiver critérios, existir bloqueio objetivo e houver 
              rastreabilidade — então UX ganha autoridade técnica, DEV recebe insumo claro e o 
              sistema se torna previsível.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2 text-sm">Meu papel</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Arquiteto do modelo</li>
                <li>• Definidor dos critérios</li>
                <li>• Organizador das categorias</li>
                <li>• Responsável pelo gate final</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2 text-sm">Trade-offs</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Mais rigor</li>
                <li>• Menos subjetividade</li>
                <li>• Mais tempo antes do dev</li>
                <li>• Menos retrabalho depois</li>
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
            Estruturei o checklist em 15 blocos cobrindo todas as dimensões críticas do projeto conversacional.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-2">
            <div className="bg-card border border-border rounded-lg p-3">
              <p className="text-sm font-medium">1. Governança</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-3">
              <p className="text-sm font-medium">2. Canal e contexto</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-3">
              <p className="text-sm font-medium">3. Fluxo de retorno</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-3">
              <p className="text-sm font-medium">4. Versionamento</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-3">
              <p className="text-sm font-medium">5. Arquitetura</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-3">
              <p className="text-sm font-medium">6. Validações</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-3">
              <p className="text-sm font-medium">7. Exceções</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-3">
              <p className="text-sm font-medium">8. Identificação</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-3">
              <p className="text-sm font-medium">9. Variáveis</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-3">
              <p className="text-sm font-medium">10. APIs</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-3">
              <p className="text-sm font-medium">11. Inputs</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-3">
              <p className="text-sm font-medium">12. Transbordo</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-3">
              <p className="text-sm font-medium">13. Diagramação</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-3">
              <p className="text-sm font-medium">14. Tracking</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-3">
              <p className="text-sm font-medium">15. Gate final</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">O checklist virou:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Processo:</strong> Todo projeto passa por ele, itens críticos bloqueiam aprovação</li>
              <li>• <strong>Artefato:</strong> Documento único, versão detalhada, salvamento automático</li>
              <li>• <strong>Linguagem comum:</strong> UX e DEV discutem "cascata de validação", "gate de hand-off"</li>
            </ul>
          </div>
        </section>

        {/* Visual Strategy */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <CheckSquare className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Visual & Interaction Strategy</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            A forma do checklist é estratégica: progresso percentual, contagem de críticos, 
            feedback imediato, seções modulares e linguagem objetiva.
          </p>
          <div className="space-y-3">
            <p className="font-medium">O visual:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Reduz carga cognitiva</li>
              <li>• Orienta decisão</li>
              <li>• Evita esquecimento</li>
              <li>• Transforma revisão em fluxo</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="font-medium">Ele não é decorativo:</p>
            <p className="text-accent">
              É interface de governança.
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
            Validação prática: aplicado em projetos reais, confrontado com falhas anteriores, 
            ajustado por categoria, refinado até cobrir todos os pontos críticos.
          </p>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Critério de validação:</p>
            <p className="text-accent italic">
              "Este bot pode ir para DEV sem risco estrutural?"
            </p>
            <p className="text-muted-foreground text-sm">
              Itens críticos funcionam como sistema de freio organizacional.
            </p>
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
              <p className="font-medium mb-2 text-sm">Operacional</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Redução de retrabalho</li>
                <li>• Menos bugs conceituais</li>
                <li>• Menos ajustes pós-dev</li>
                <li>• Mais previsibilidade</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2 text-sm">Estratégico</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• UX assume papel técnico</li>
                <li>• Projeto vira sistema</li>
                <li>• Decisão vira rastreável</li>
                <li>• Qualidade vira explícita</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2 text-sm">Cultural</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Deixa de ser "opinião"</li>
                <li>• Passa a ser "critério"</li>
                <li>• Linguagem comum</li>
                <li>• Regra do jogo clara</li>
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
            Atuação como arquiteto de processo, mediador UX ↔ DEV, criador de padrão, definidor 
            de qualidade e líder técnico de UX Conversacional.
          </p>
          <div className="space-y-3">
            <p className="font-medium">Influência direta em:</p>
            <div className="flex flex-wrap gap-2">
              <span className="badge-secondary">Designers</span>
              <span className="badge-secondary">Desenvolvedores</span>
              <span className="badge-secondary">Produto</span>
              <span className="badge-secondary">Operação</span>
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Criou:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Regra do jogo</li>
              <li>• Linguagem comum</li>
              <li>• Sistema de controle</li>
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
              <li>• UX Conversacional precisa de governança</li>
              <li>• Qualidade precisa ser verificável</li>
              <li>• Hand-off é problema de sistema, não de pessoa</li>
              <li>• Checklist é artefato estratégico</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Evolução do pensamento:</p>
            <p className="text-muted-foreground">
              <span className="line-through">De: projetar fluxos</span>
            </p>
            <p className="text-accent">
              Para: projetar infraestruturas de decisão
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Preparação para:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• DesignOps</li>
              <li>• UX Strategy</li>
              <li>• AI Governance</li>
              <li>• Design Leadership</li>
            </ul>
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-border pt-8">
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-center italic">
            "Este projeto transformou o hand-off de UX Conversacional em um sistema formal de 
            governança, validação e responsabilidade técnica."
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
