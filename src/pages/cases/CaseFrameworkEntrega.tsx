import { Link } from "react-router-dom";
import { ArrowLeft, Target, Search, Lightbulb, Code, TrendingUp, Users, Layers } from "lucide-react";
import caseImage from "@/assets/case-framework-entrega.jpg";

export default function CaseFrameworkEntrega() {
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
          <span className="badge-secondary">Framework & Governança</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Framework de entrega para fluxos conversacionais
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Criação de um padrão institucional de entrega para fluxos conversacionais, garantindo 
          governança, escalabilidade, clareza técnica e rastreabilidade de decisões.
        </p>
        <div className="flex flex-wrap gap-4 text-accent font-medium">
          <span>Padrão institucional</span>
          <span className="text-muted-foreground">•</span>
          <span>Redução de retrabalho</span>
          <span className="text-muted-foreground">•</span>
          <span>Onboarding acelerado</span>
        </div>
      </div>

      {/* Cover Image */}
      <div className="aspect-[16/9] bg-secondary/50 rounded-lg overflow-hidden mb-12">
        <img loading="lazy" decoding="async" 
          src={caseImage} 
          alt="Framework de Entrega - Guilda de UX"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Sections */}
      <div className="space-y-12 max-w-3xl">
        
        {/* Contexto */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Target className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Contexto</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            A DigitalBot possuía múltiplos times projetando fluxos conversacionais de forma descentralizada, 
            resultando em baixa padronização, dificuldade de versionamento, problemas de manutenção em produção, 
            alto custo de onboarding e ruído entre UX, dev e operação.
          </p>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Era necessário criar um framework unificado que garantisse:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Governança</li>
              <li>• Escalabilidade</li>
              <li>• Clareza técnica</li>
              <li>• Consistência visual</li>
              <li>• Rastreabilidade de decisões</li>
            </ul>
          </div>
        </section>

        {/* Problema */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Search className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Problema</h2>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium italic">
              "Como garantir qualidade, consistência e governança no design de fluxos conversacionais 
              em múltiplos projetos, canais e squads?"
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Principais dores mapeadas:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Fluxos difíceis de manter</li>
              <li>• Ausência de padrão de nomeação</li>
              <li>• Falta de controle de versões</li>
              <li>• Integrações pouco documentadas</li>
              <li>• Dificuldade de leitura técnica por devs</li>
              <li>• Alto retrabalho em evoluções</li>
            </ul>
          </div>
        </section>

        {/* Objetivos */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Target className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Objetivos</h2>
          </div>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Criar um padrão institucional de entrega</li>
            <li>• Reduzir ambiguidade entre UX, dev e negócio</li>
            <li>• Aumentar reuso estrutural</li>
            <li>• Permitir auditoria e evolução contínua</li>
            <li>• Tornar o design conversacional sistêmico, não artesanal</li>
          </ul>
        </section>

        {/* Abordagem de Design */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Lightbulb className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Abordagem de Design</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            O framework foi estruturado segundo um ciclo completo de Discovery → Define → Ideate.
          </p>
          
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <p className="font-medium">🔹 Discovery</p>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>• Análise de fluxos existentes</li>
                <li>• Levantamento de erros recorrentes</li>
                <li>• Entrevistas com UX, dev e operação</li>
                <li>• Mapeamento de gargalos de manutenção</li>
                <li>• Identificação de padrões implícitos</li>
              </ul>
              <p className="text-sm text-accent mt-2">
                Resultado: Backlog de problemas estruturais e oportunidades de padronização
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <p className="font-medium">🔹 Define & Ideate — Princípios</p>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Modularização:</strong> Cada bloco deve ter responsabilidade única</li>
                <li><strong>Rastreabilidade:</strong> Toda decisão precisa ser localizável</li>
                <li><strong>Neutralidade técnica:</strong> UX precisa dialogar com dev sem virar código</li>
                <li><strong>Escalabilidade por padrão</strong></li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <p className="font-medium">Componentes-chave criados:</p>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <span>• Sistema de IDs hierárquicos</span>
                <span>• Etiquetas de metadados</span>
                <span>• Blocos de exceção</span>
                <span>• Componentes de integração (API)</span>
                <span>• Chaves de validação</span>
                <span>• Trackings</span>
                <span>• Varais de input</span>
              </div>
            </div>
          </div>
        </section>

        {/* Solução */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Layers className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Solução</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Foi criado um framework visual e operacional para fluxos conversacionais composto por:
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2">🧩 Estrutura</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Nomeação padronizada</li>
                <li>• Paginação por fase</li>
                <li>• Versionamento DEV → PRD</li>
                <li>• Modularização por skill</li>
                <li>• Arquitetura navegável</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2">🧱 Componentes</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Mensagens, Menus, Inputs</li>
                <li>• Divisórias, Direcionamentos</li>
                <li>• Trackings, Integrações</li>
                <li>• Blocos de exceção</li>
                <li>• Observações por disciplina</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pensamento de Design */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Code className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Pensamento de Design</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            O framework materializa:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Arquitetura da Informação</li>
            <li>• Design System aplicado à conversação</li>
            <li>• Design como sistema, não layout</li>
            <li>• Governança por estrutura</li>
            <li>• UX como camada estratégica, não estética</li>
          </ul>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground">
              Ele traduz Design Thinking em operação contínua:
            </p>
            <p className="text-accent font-medium mt-2">
              Discovery → Define → Prototype → Implement → Growth
            </p>
          </div>
        </section>

        {/* Impactos */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Impactos</h2>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2 text-sm">Organizacionais</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Padronização entre squads</li>
                <li>• Redução de ruído UX/dev</li>
                <li>• Aceleração do onboarding</li>
                <li>• Base comum de qualidade</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2 text-sm">Operacionais</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Facilidade de manutenção</li>
                <li>• Versionamento claro</li>
                <li>• Redução de retrabalho</li>
                <li>• Evolução controlada</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2 text-sm">Estratégicos</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• UX como sistema</li>
                <li>• Base para automação/IA</li>
                <li>• Preparação para escala</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Diferencial */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Lightbulb className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Diferencial</h2>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">
              Este projeto não entrega um bot. Entrega um modelo mental e técnico de como bots são projetados.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <ul className="space-y-2 text-muted-foreground">
              <li>• Design + engenharia sem conflito</li>
              <li>• Visual + lógico</li>
            </ul>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Criativo + governável</li>
              <li>• UX como infraestrutura</li>
            </ul>
          </div>
        </section>

        {/* Meu papel */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Users className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Meu Papel</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Líder de UX Conversacional e autor do framework.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Criação do framework</li>
            <li>• Definição dos princípios</li>
            <li>• Arquitetura dos componentes</li>
            <li>• Estruturação do ciclo de entrega</li>
            <li>• Liderança técnica da Guilda de UX</li>
            <li>• Mediação entre UX, dev e operação</li>
          </ul>
        </section>

        {/* Resultado */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Resultado</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            A empresa passou a projetar fluxos como sistemas versionáveis e auditáveis, 
            e não como sequências isoladas de mensagens.
          </p>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Este framework se tornou:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Base de treinamento</li>
              <li>• Padrão de entrega</li>
              <li>• Referência de qualidade</li>
              <li>• Infraestrutura de UX Conversacional</li>
            </ul>
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-border pt-8">
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-center italic">
            "Design conversacional não é sobre criar mensagens. É sobre criar sistemas de decisão 
            que escalam com governança."
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
