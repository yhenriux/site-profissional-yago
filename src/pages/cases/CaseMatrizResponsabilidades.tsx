import { Link } from "react-router-dom";
import { ArrowLeft, Target, Search, Lightbulb, Code, TrendingUp, Users, Layers } from "lucide-react";
import caseImage from "@/assets/case-matriz-responsabilidades.jpg";

export default function CaseMatrizResponsabilidades() {
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
          <span className="badge-secondary">Maturidade & Governança de UX</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Matriz de responsabilidades e competências
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Estruturação de um sistema de maturidade que transformou a prática de UX Conversacional 
          em modelo escalável de formação, qualidade e liderança técnica.
        </p>
        <div className="flex flex-wrap gap-4 text-accent font-medium">
          <span>Padronização de senioridade</span>
          <span className="text-muted-foreground">•</span>
          <span>Base para onboarding</span>
          <span className="text-muted-foreground">•</span>
          <span>Critérios de evolução</span>
        </div>
      </div>

      {/* Cover Image */}
      <div className="aspect-[16/9] bg-secondary/50 rounded-lg overflow-hidden mb-12">
        <img loading="lazy" decoding="async" 
          src={caseImage} 
          alt="Matriz de Responsabilidades - Guilda de UX"
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
            Estruturei uma matriz de responsabilidades e competências que transformou a prática de 
            UX Conversacional em um sistema escalável de formação, qualidade e liderança técnica.
          </p>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Tese do projeto:</p>
            <p className="text-muted-foreground italic">
              "O problema não era falta de talento em UX, era falta de arquitetura de papéis, 
              expectativas e decisão."
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Impactos diretos</p>
              <ul className="text-sm space-y-1">
                <li>• Redução de retrabalho</li>
                <li>• Padronização de senioridade</li>
                <li>• Base única para onboarding</li>
                <li>• Referência formal</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Papel</p>
              <p className="text-sm">UX Lead e responsável pela Guilda de UX</p>
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
            A Digitalbot crescia em número de clientes, volume de bots, complexidade técnica e 
            diversidade de perfis de UX. Mas operava com expectativas implícitas, níveis de maturidade 
            não formalizados, avaliações subjetivas e onboarding dependente de pessoas.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Riscos identificados</p>
              <ul className="text-sm space-y-1">
                <li>• UX virar execução tática</li>
                <li>• Inconsistência entre projetos</li>
                <li>• Dificuldade de escalar pessoas</li>
                <li>• Ausência de critério de evolução</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Stakes reais</p>
              <ul className="text-sm space-y-1">
                <li>• Qualidade dos produtos</li>
                <li>• Previsibilidade de entrega</li>
                <li>• Formação de lideranças</li>
                <li>• Retenção de talentos</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Problem Discovery */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Search className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Problem Discovery</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Dados observados: retrabalhos frequentes por desalinhamento de expectativa, dúvidas 
            recorrentes sobre "o que é responsabilidade de quem", gargalos na revisão técnica e 
            diferenças grandes entre entregas de mesmo nível.
          </p>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Insight central:</p>
            <p className="text-muted-foreground">
              O problema não era técnico. Era estrutural: não existia um modelo explícito de papel, 
              autonomia, decisão, responsabilidade e maturidade esperada.
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Sinais convergentes:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• UX confundido com copy</li>
              <li>• UX confundido com fluxo</li>
              <li>• UX confundido com regra</li>
              <li>• UX confundido com operação</li>
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
              <span className="line-through">Não era: "documentar cargos"</span>
            </p>
            <p className="text-accent">
              Era: "projetar um sistema de maturidade de design conversacional"
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Hipótese central:</p>
            <p className="text-muted-foreground">
              Se responsabilidades forem explícitas, competências forem visíveis, autonomia for 
              graduada e expectativas forem claras — então qualidade sobe, formação acelera, 
              decisões ficam distribuídas e UX ganha papel estratégico.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2 text-sm">Escolhi ✔</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Estrutura profunda</li>
                <li>• Clareza conceitual</li>
                <li>• Progressão detalhada</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2 text-sm">Não escolhi ✘</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Simplificação excessiva</li>
                <li>• Matriz genérica</li>
                <li>• Descrição vaga de cargos</li>
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
            O projeto foi estruturado como sistema, não como documento isolado. Pensado como 
            base viva com progressão clara.
          </p>
          <div className="space-y-3">
            <p className="font-medium">Artefatos criados:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Missão da disciplina</li>
              <li>• Responsabilidades e direitos do papel</li>
              <li>• Valores</li>
              <li>• Matriz por nível (estagiário → trainee → júnior → pleno → sênior → master → lead)</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Cada nível documenta:</p>
            <div className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
              <span>• Descrição</span>
              <span>• Grau de autonomia</span>
              <span>• Competências técnicas</span>
              <span>• Soft skills</span>
              <span>• Papel estratégico</span>
              <span>• Critérios de evolução</span>
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
            A estratégia virou forma através de hierarquia clara por nível, separação entre técnico, 
            comportamental e estratégico, estrutura progressiva e linguagem acessível.
          </p>
          <div className="space-y-3">
            <p className="font-medium">Decisões visuais críticas:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Cada senioridade como unidade semântica, não como cargo administrativo</li>
              <li>• Leitura por maturidade, não por tempo</li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Onde o visual reduziu fricção:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Entendimento rápido de expectativas</li>
              <li>• Clareza em feedback</li>
              <li>• Base comum para mentoria</li>
              <li>• Padronização de linguagem interna</li>
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
              <p className="font-medium mb-2 text-sm">Impactos diretos</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Clareza de papel</li>
                <li>• Redução de ruído</li>
                <li>• Previsibilidade</li>
                <li>• Base única de formação</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2 text-sm">Organizacionais</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• UX como disciplina</li>
                <li>• Facilita contratação</li>
                <li>• Facilita feedback</li>
                <li>• Facilita evolução</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2 text-sm">Estratégicos</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• IA conversacional</li>
                <li>• Design system</li>
                <li>• Governança</li>
                <li>• Liderança técnica</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Mudança organizacional:</p>
            <p className="text-muted-foreground">
              <span className="line-through">Antes: UX = execução</span>
            </p>
            <p className="text-accent">
              Depois: UX = estrutura + decisão + qualidade
            </p>
          </div>
        </section>

        {/* Leadership */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Users className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Leadership & Influence</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Influência exercida em liderança de UX, produto, tecnologia e gestão.
          </p>
          <div className="space-y-3">
            <p className="font-medium">Padrões criados:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Senioridade como sistema, não como título</li>
              <li>• UX como papel estratégico, não apenas produção</li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Mentoria:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Base para formação</li>
              <li>• Referência para feedback</li>
              <li>• Suporte a crescimento do time</li>
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
              <li>• Design não é só interface — é estrutura</li>
              <li>• Design é decisão</li>
              <li>• Design é sistema</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Como isso mudou meu modo de projetar:</p>
            <p className="text-muted-foreground">
              <span className="line-through">Passei de: projetar fluxos</span>
            </p>
            <p className="text-accent">
              Para: projetar sistemas de decisão
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Isso me preparou para:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Liderar IA conversacional</li>
              <li>• Criar frameworks</li>
              <li>• Estruturar design em escala</li>
              <li>• Atuar em estratégia</li>
              <li>• Formar outros designers</li>
            </ul>
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-border pt-8">
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-center italic">
            "Este projeto não criou um documento. Criou um sistema de maturidade em UX Conversacional 
            que transformou execução em disciplina e crescimento em arquitetura."
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
