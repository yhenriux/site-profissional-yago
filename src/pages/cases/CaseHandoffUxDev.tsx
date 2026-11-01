import { Link } from "react-router-dom";
import { ArrowLeft, Target, Search, Lightbulb, Code, TrendingUp, Users, Layers } from "lucide-react";
import caseImage from "@/assets/case-handoff-ux-dev.jpg";

export default function CaseHandoffUxDev() {
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
          <span className="badge-secondary">Processo & Integração UX-DEV</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Hand-off UX → DEV para fluxos conversacionais
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Padronização do hand-off entre UX e DEV para eliminar ambiguidade técnica em fluxos 
          conversacionais e reduzir retrabalho estrutural.
        </p>
        <div className="flex flex-wrap gap-4 text-accent font-medium">
          <span>Cascata de validações</span>
          <span className="text-muted-foreground">•</span>
          <span>Componentes semânticos</span>
          <span className="text-muted-foreground">•</span>
          <span>Governança de variáveis</span>
        </div>
      </div>

      {/* Cover Image */}
      <div className="aspect-[16/9] bg-secondary/50 rounded-lg overflow-hidden mb-12">
        <img loading="lazy" decoding="async" 
          src={caseImage} 
          alt="Hand-off UX → DEV - Guilda de UX"
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
            Transformei o hand-off de um artefato informal em um sistema operacional de transição 
            entre design e engenharia, baseado em cascata de validações, componentes semânticos e 
            governança de variáveis.
          </p>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">O que mudou:</p>
            <p className="text-muted-foreground">
              <span className="line-through">Antes, o fluxo "acabava" no Figma.</span>
            </p>
            <p className="text-accent">
              Depois, ele passou a nascer preparado para execução técnica.
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
            A DigitalBot opera projetos de bots com múltiplos clientes, regras de negócio complexas, 
            alto volume de exceções e dependência forte entre UX, IA e DEV.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Problema estrutural</p>
              <ul className="text-sm space-y-1">
                <li>• Hand-offs variavam por projeto</li>
                <li>• Exceções interpretadas diferente</li>
                <li>• Variáveis sem padrão</li>
                <li>• Cascata não explícita</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Risco de negócio</p>
              <ul className="text-sm space-y-1">
                <li>• Falhas críticas em produção</li>
                <li>• Alto custo de retrabalho</li>
                <li>• Dependência de pessoas</li>
                <li>• Dificuldade de escalar</li>
              </ul>
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="font-medium">Por que era prioritário:</p>
            <p className="text-muted-foreground">
              O crescimento da operação tornava impossível sustentar um modelo artesanal de hand-off.
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
            Análise de fluxos reais em produção, erros recorrentes (API, inatividade, input inválido), 
            divergências entre protótipo e bot implementado, e dúvidas frequentes de DEV sobre regras.
          </p>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Insight central:</p>
            <p className="text-muted-foreground italic">
              "O problema não era 'documentação fraca', era ausência de um modelo mental comum 
              entre UX e DEV."
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Padrões encontrados:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Exceções desenhadas fora do fluxo principal</li>
              <li>• Ordem de validações implícita</li>
              <li>• Variáveis misturavam idiomas</li>
              <li>• APIs com detalhes técnicos demais</li>
              <li>• Transbordo definido tardiamente</li>
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
              <span className="line-through">Não é: "Como documentar melhor o fluxo?"</span>
            </p>
            <p className="text-accent">
              É: "Como criar um sistema de tradução entre intenção de design e execução técnica?"
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Hipótese principal:</p>
            <p className="text-muted-foreground">
              Se exceções, validações, variáveis e APIs forem desenhadas como arquitetura lógica, 
              então a implementação se torna previsível, o erro vira parte do sistema e o fluxo 
              se torna escalável.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2 text-sm">Trade-offs assumidos</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Mais complexidade no design</li>
                <li>• Menos liberdade informal</li>
                <li>• Mais rigidez estrutural</li>
                <li>• Menos explicação verbal</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2 text-sm">Meu papel</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Autor do processo</li>
                <li>• Modelagem lógica</li>
                <li>• Criação de componentes</li>
                <li>• Alinhamento com Tech Lead</li>
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
            O processo foi estruturado em camadas com arquitetura de fluxo, cascata de validações 
            e componentização no Figma.
          </p>
          
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2">1. Arquitetura de Fluxo</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Saudação + Retorno encapsulados</li>
                <li>• Exceções e Cascata como único fluxo</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2">2. Cascata de Validações (ordem definida)</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Inatividade e erro de API</li>
                <li>• Icebreakers e campanhas</li>
                <li>• IA e Regex</li>
                <li>• Erros persistentes</li>
                <li>• Conteúdo não suportado</li>
                <li>• Erros textuais específicos</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2">3. Exceções dentro das exceções</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Erro dentro do erro</li>
                <li>• Loop de falha</li>
                <li>• Indisponibilidade</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2">4. Componentização no Figma</p>
              <div className="grid sm:grid-cols-3 gap-2 text-sm text-muted-foreground">
                <span>• Variáveis</span>
                <span>• APIs</span>
                <span>• Icebreakers</span>
                <span>• Inputs</span>
                <span>• Transbordo</span>
                <span>• Tracking</span>
              </div>
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
            A estratégia visual não era estética, era semântica. Cada bloco tem função técnica clara, 
            nenhum comportamento implícito, tudo que o DEV precisa está visível.
          </p>
          <div className="space-y-3">
            <p className="font-medium">Decisões-chave:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• API vira componente (não texto solto)</li>
              <li>• Variável vira objeto visual</li>
              <li>• Exceção não é "nota", é ramo</li>
              <li>• Tracking vira bloco</li>
              <li>• Transbordo vira módulo</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="font-medium">Resultado:</p>
            <p className="text-accent">
              O Figma deixa de ser desenho e vira modelo de sistema.
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
            Validação feita via revisão com Tech Lead, alinhamento com DEV, simulação de exceções 
            e teste de leitura sem explicação verbal.
          </p>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Critério de sucesso:</p>
            <p className="text-accent italic">
              "O DEV consegue implementar sem perguntar 'o que acontece se…?'"
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Ajustes feitos:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Ordem das validações</li>
              <li>• Separação de responsabilidades</li>
              <li>• Remoção de detalhes técnicos do fluxo</li>
              <li>• Criação de documento central de APIs</li>
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
                <li>• Redução de retrabalho</li>
                <li>• Menos divergência</li>
                <li>• Menor ambiguidade</li>
                <li>• Padronização</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2 text-sm">Operacionais</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Onboarding mais rápido</li>
                <li>• Manutenção previsível</li>
                <li>• Bugs rastreáveis</li>
                <li>• Exceções mapeadas</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="font-medium mb-2 text-sm">Estratégicos</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Design define arquitetura</li>
                <li>• Influencia engenharia</li>
                <li>• Padrão organizacional</li>
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
            Influência exercida no alinhamento entre UX e DEV, criação de linguagem comum, 
            mudança de expectativa sobre papel do UX e estrutura replicável na guilda.
          </p>
          <div className="space-y-3">
            <p className="font-medium">Padrões deixados:</p>
            <div className="grid sm:grid-cols-2 gap-2 text-muted-foreground">
              <span>• Cascata de validação</span>
              <span>• Modelo de exceção</span>
              <span>• Componente de variável</span>
              <span>• Componente de API</span>
              <span>• Modelo de transbordo</span>
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Mudança de papel:</p>
            <p className="text-muted-foreground">
              <span className="line-through">De: "quem desenha fluxo"</span>
            </p>
            <p className="text-accent">
              Para: "quem define o sistema de decisão do bot"
            </p>
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
              <li>• UX em IA é arquitetura, não só conversa</li>
              <li>• Exceção é tão importante quanto fluxo feliz</li>
              <li>• Documentação é design</li>
              <li>• Semântica visual reduz bugs</li>
              <li>• Processo é produto interno</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="font-medium">Evolução do pensamento:</p>
            <p className="text-muted-foreground">
              <span className="line-through">De: projetar telas e mensagens</span>
            </p>
            <p className="text-accent">
              Para: projetar sistemas de decisão conversacional
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-border pt-8">
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-center italic">
            "Este projeto não entregou um fluxo. Entregou um sistema de tradução entre intenção 
            de design e execução técnica, transformando o hand-off em arquitetura de produto."
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
