import { Link } from "react-router-dom";
import { ArrowLeft, Target, Search, Lightbulb, Code, TrendingUp, Users } from "lucide-react";
import caseImage from "@/assets/case-atletico-mineiro.jpg";

export default function CaseAtleticoMineiro() {
  return (
    <div className="section-container section-padding">
      {/* Back Navigation */}
      <Link 
        to="/work" 
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft size={16} />
        Voltar para Business Cases
      </Link>

      {/* Hero Section */}
      <div className="space-y-6 mb-12">
        <div className="flex items-center gap-3">
          <span className="badge-secondary">UX Conversacional & Operações</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Plataforma conversacional para operação de clube
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Transformação do WhatsApp em sistema de decisão operacional para o Clube Atlético Mineiro, 
          orquestrando atendimento, cobrança, reservas e convites nos complexos Vila Olímpica e Labareda.
        </p>
        <div className="flex flex-wrap gap-4 text-accent font-medium">
          <span>–38% transbordo</span>
          <span className="text-muted-foreground">•</span>
          <span>+46% resolução</span>
          <span className="text-muted-foreground">•</span>
          <span>NPS +27%</span>
        </div>
      </div>

      {/* Cover Image */}
      <div className="aspect-[16/9] bg-secondary/50 rounded-lg overflow-hidden mb-12">
        <img loading="lazy" decoding="async" 
          src={caseImage} 
          alt="Clube Atlético Mineiro - Plataforma conversacional"
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
            Transformação do WhatsApp em uma plataforma operacional do clube, capaz de orquestrar 
            atendimento, cobrança, reservas, convites e informações, reduzindo carga humana e 
            aumentando previsibilidade da experiência.
          </p>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Tese do projeto:</p>
            <p className="text-muted-foreground italic">
              "O problema não era criar fluxos, era projetar um sistema de decisão para um clube físico 
              com múltiplos serviços, regras e exceções."
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
            O Clube Atlético Mineiro opera dois grandes complexos (Vila Olímpica e Labareda) com 
            múltiplos serviços físicos: convites, reservas, esportes, eventos e cobrança. Alto volume 
            de atendimento via WhatsApp com dependência de recepção e secretaria, além de regras 
            rígidas por perfil (associado, aluno, visitante).
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Situação inicial</p>
              <ul className="text-sm space-y-1">
                <li>• Atendimento fragmentado</li>
                <li>• Filas físicas e digitais</li>
                <li>• Erros de interpretação</li>
                <li>• Escalonamento humano constante</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Risco de negócio</p>
              <ul className="text-sm space-y-1">
                <li>• Sobrecarga operacional</li>
                <li>• Perda de confiança</li>
                <li>• Inconsistência de regras</li>
                <li>• Alto custo de atendimento</li>
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
            Análise de logs de conversas, transbordos, inputs inesperados e tempo médio de atendimento. 
            Quatro domínios concentravam mais de 70% das demandas: cobrança, convites, reservas e 
            estrutura do clube.
          </p>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Insight central:</p>
            <p className="text-muted-foreground">
              O bot falhava não por linguagem, mas por ausência de arquitetura de decisão para lidar 
              com exceção, perfil e regra. Usuários não erravam por ignorância — erravam porque o 
              sistema não reconhecia variações reais de uso.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Alta incidência de</p>
              <ul className="text-sm space-y-1">
                <li>• Erro de menu</li>
                <li>• Inatividade</li>
                <li>• Input fora do padrão</li>
                <li>• Retorno sem contexto</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Domínios principais</p>
              <ul className="text-sm space-y-1">
                <li>• Cobrança</li>
                <li>• Convites</li>
                <li>• Reservas</li>
                <li>• Estrutura do clube</li>
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
              <span className="line-through">Antes: "Como responder perguntas pelo WhatsApp?"</span>
            </p>
            <p className="text-accent">
              Depois: "Como projetar um sistema capaz de decidir o que pode ser automatizado, quando 
              envolver humano e como manter continuidade."
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Decisões centrais:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Projetar por domínio de negócio, não por intenção solta</li>
              <li>• Separar entrada, regra, exceção e transbordo</li>
              <li>• Tratar erro como fluxo</li>
              <li>• Tratar perfil como variável estrutural</li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Trade-offs:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Abrir mão de NLP irrestrito</li>
              <li>• Priorizar previsibilidade sobre liberdade</li>
              <li>• Limitar ambiguidade para maior controle</li>
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
            O projeto foi estruturado como sistema, com artefatos incluindo mapa de domínios, matriz 
            de perfil (associado/aluno/visitante), regras por horário, blocos de exceção e arquitetura 
            de retorno.
          </p>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Princípio:</p>
            <p className="text-muted-foreground italic">
              "Sem estrutura, não há escala. Sem documentação, não há governança."
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Organização interna:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Nomenclatura padrão (S, BC, E, PR, etc.)</li>
              <li>• Separação entre fluxo, template e exceção</li>
              <li>• Documentação por comportamento, não por tela</li>
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
              <p className="text-3xl font-bold text-accent">–38%</p>
              <p className="text-sm text-muted-foreground">Transbordo humano</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-3xl font-bold text-accent">+46%</p>
              <p className="text-sm text-muted-foreground">Resolução automática</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-3xl font-bold text-accent">–31%</p>
              <p className="text-sm text-muted-foreground">Erros de menu</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-3xl font-bold text-accent">+27%</p>
              <p className="text-sm text-muted-foreground">NPS</p>
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Impacto operacional:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Menos carga na secretaria</li>
              <li>• Menos fila física</li>
              <li>• Mais previsibilidade</li>
              <li>• Menos retrabalho</li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Impacto estratégico:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• WhatsApp virou canal oficial</li>
              <li>• Experiência virou sistema</li>
              <li>• Dados passaram a existir</li>
              <li>• Regras ficaram explícitas</li>
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
            Atuação como UX Lead Conversacional e Arquiteto de Experiência, responsável pelo framing 
            do problema, arquitetura da jornada, definição de domínios, desenho de exceções e 
            integração com negócio.
          </p>
          <div className="space-y-3">
            <p className="font-medium">Influência exercida:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Alinhamento entre atendimento e financeiro</li>
              <li>• Definição de padrão conversacional</li>
              <li>• Criação de linguagem única</li>
              <li>• Mediação entre negócio e tecnologia</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Legado:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Arquitetura replicável</li>
              <li>• Modelo de exceção reutilizável</li>
              <li>• Cultura de documentação</li>
              <li>• Visão de bot como sistema</li>
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
              <li>• Erro é parte da experiência</li>
              <li>• Exceção é regra em ambientes físicos</li>
              <li>• UX conversacional é logística</li>
              <li>• Bot sem arquitetura vira FAQ</li>
              <li>• Design é decisão, não tela</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Evolução pessoal:</p>
            <p className="text-muted-foreground italic">
              "Deixei de projetar conversas — passei a projetar sistemas de decisão."
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-border pt-8">
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-center italic">
            "Este projeto não foi sobre criar um bot para o Atlético Mineiro. Foi sobre transformar 
            a operação do clube em um sistema legível, previsível e escalável — usando design como 
            estrutura de decisão."
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
          Voltar para Business Cases
        </Link>
      </div>
    </div>
  );
}
