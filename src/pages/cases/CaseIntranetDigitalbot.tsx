import { Link } from "react-router-dom";
import { ArrowLeft, Target, Search, Lightbulb, Code, TrendingUp, Users } from "lucide-react";
import caseImage from "@/assets/case-intranet-digitalbot.jpg";

export default function CaseIntranetDigitalbot() {
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
          <span className="badge-secondary">Design Lead & Arquitetura de Informação</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Plataforma interna de conhecimento, operação e governança
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Transformação da intranet em um hub estratégico de operação, conhecimento e governança 
          para uma empresa de tecnologia em crescimento acelerado.
        </p>
        <div className="flex flex-wrap gap-4 text-accent font-medium">
          <span>–35% retrabalho</span>
          <span className="text-muted-foreground">•</span>
          <span>+42% reutilização</span>
          <span className="text-muted-foreground">•</span>
          <span>+30% adesão guildas</span>
        </div>
      </div>

      {/* Cover Image */}
      <div className="aspect-[16/9] bg-secondary/50 rounded-lg overflow-hidden mb-12">
        <img loading="lazy" decoding="async" 
          src={caseImage} 
          alt="Intranet DigitalBot - Plataforma de conhecimento"
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
            Transformação da intranet em um hub estratégico de operação, conhecimento e governança 
            para uma empresa de tecnologia em crescimento acelerado.
          </p>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Tese do projeto:</p>
            <p className="text-muted-foreground italic">
              "O problema não era falta de conteúdo, era falta de arquitetura de informação, 
              governança e experiência unificada para sustentar escala organizacional."
            </p>
          </div>
        </section>

        {/* Business Context */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Search className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Business Context & Stakes</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            A DigitalBot operava com crescimento rápido de times (UX, Dev, Dados, Produto, Back-end), 
            múltiplos repositórios dispersos, ausência de fonte única de verdade, documentos sem 
            versionamento claro e dependência de pessoas para saber "onde está" a informação.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Riscos de negócio</p>
              <ul className="text-sm space-y-1">
                <li>• Perda de produtividade</li>
                <li>• Decisões com informação obsoleta</li>
                <li>• Desalinhamento entre áreas</li>
                <li>• Fragilidade de onboarding</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Pergunta estratégica</p>
              <p className="text-sm italic">
                "Como sustentar crescimento sem colapsar a comunicação interna?"
              </p>
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
            Mapeamento de repositórios (Drive, Notion, Figma, Docs), entrevistas com líderes de guilda, 
            análise de chamados internos, observação de onboarding e inventário de conteúdos existentes.
          </p>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Insight central:</p>
            <p className="text-muted-foreground">
              O problema não era informacional, era estrutural: ausência de modelo de organização, 
              papéis claros e ciclo de atualização. O maior gargalo não era acesso, era confiabilidade 
              do conteúdo.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Sinais convergentes</p>
              <ul className="text-sm space-y-1">
                <li>• Mesmo material em 3-4 versões</li>
                <li>• Ninguém sabia quem atualizava</li>
                <li>• Conteúdos críticos sem dono</li>
                <li>• Busca ineficiente</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Fontes analisadas</p>
              <ul className="text-sm space-y-1">
                <li>• Repositórios dispersos</li>
                <li>• Entrevistas com líderes</li>
                <li>• Chamados internos</li>
                <li>• Observação de onboarding</li>
              </ul>
            </div>
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
              <span className="line-through">Antes: "Como criar uma intranet com páginas?"</span>
            </p>
            <p className="text-accent">
              Depois: "Como projetar um sistema interno que garanta acesso, atualização, confiabilidade 
              e escala do conhecimento corporativo."
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Decisões centrais:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Organizar por domínios de uso real, não por departamentos abstratos</li>
              <li>• Separar conteúdo, modelo e governança</li>
              <li>• Criar hierarquia clara: Home → Seções → Subdomínios → Templates</li>
              <li>• Projetar para manutenção contínua, não para entrega única</li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Trade-offs:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Menos liberdade visual por mais consistência</li>
              <li>• Menos improviso por mais padrão</li>
              <li>• Menos "páginas soltas" por mais sistema</li>
            </ul>
          </div>
        </section>

        {/* Process & Documentation */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Code className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Process & Documentation</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Artefatos produzidos: mapa de arquitetura da informação, matriz de responsabilidades 
            (quem atualiza o quê), padrões de páginas (notícia, template, benefício, dashboard), 
            versionamento da plataforma e política de atualização.
          </p>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Princípio:</p>
            <p className="text-muted-foreground italic">
              "Sem processo de atualização, design vira decoração."
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Modelo de governança:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Revisão trimestral de conteúdos críticos</li>
              <li>• Atualização pontual por área responsável</li>
              <li>• Rastreio por versão</li>
              <li>• Seções com donos explícitos (DP, Marketing, Operações, Guildas)</li>
            </ul>
          </div>
        </section>

        {/* Results */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Results & Business Impact</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-3xl font-bold text-accent">–35%</p>
              <p className="text-sm text-muted-foreground">Retrabalho por info duplicada</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-3xl font-bold text-accent">–28%</p>
              <p className="text-sm text-muted-foreground">Tempo médio de busca</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-3xl font-bold text-accent">+42%</p>
              <p className="text-sm text-muted-foreground">Reutilização de templates</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-3xl font-bold text-accent">+30%</p>
              <p className="text-sm text-muted-foreground">Adesão às guildas</p>
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Impacto operacional:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Menos ruído</li>
              <li>• Mais previsibilidade</li>
              <li>• Mais autonomia dos times</li>
              <li>• Menos gargalo em liderança</li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Impacto estratégico:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Intranet virou produto interno</li>
              <li>• Conhecimento virou ativo</li>
              <li>• Governança virou visível</li>
              <li>• Cultura virou documentada</li>
            </ul>
          </div>
        </section>

        {/* Leadership */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Users className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Leadership & Influence</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Atuação como Design Lead da Intranet, responsável pelo framing do problema, arquitetura 
            da informação, definição de governança, modelo de navegação, padrões visuais e de conteúdo, 
            e coordenação entre UX, Dev, Dados e Operações.
          </p>
          <div className="space-y-3">
            <p className="font-medium">Atuação como líder:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Articulação entre áreas técnicas e administrativas</li>
              <li>• Definição de padrões institucionais</li>
              <li>• Criação de modelo replicável</li>
              <li>• Mentoria de designers e writers</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Legado:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Cultura de documentação</li>
              <li>• Arquitetura replicável</li>
              <li>• Linguagem comum</li>
              <li>• Intranet como infraestrutura organizacional</li>
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
              <li>• Informação sem dono apodrece</li>
              <li>• Design organizacional é UX</li>
              <li>• Intranet é sistema sociotécnico</li>
              <li>• Governança é parte da experiência</li>
              <li>• Escala exige padrão</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Evolução pessoal:</p>
            <p className="text-muted-foreground italic">
              "Deixei de projetar páginas — passei a projetar infraestrutura de conhecimento."
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-border pt-8">
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-center italic">
            "A Intranet da DigitalBot não foi um site interno. Foi a construção de um sistema de 
            memória organizacional, governança e operação — usando design como estrutura estratégica."
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
