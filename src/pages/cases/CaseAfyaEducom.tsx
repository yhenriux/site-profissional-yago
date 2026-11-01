import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import caseImage from "@/assets/case-afya-educom.jpg";

export default function CaseAfyaEducom() {
  return (
    <div className="section-container section-padding">
      {/* Back Link */}
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
          <span className="badge-secondary">IA Conversacional & Vendas</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Arquitetura híbrida (regras + agentes de IA) para captação e qualificação de médicos
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Sistema de regras + agentes de IA para qualificação e agendamento, com integração 
          Salesforce e teste A/B entre fluxos.
        </p>
        <div className="flex flex-wrap gap-4 text-accent font-medium">
          <span>+29% agendamento</span>
          <span className="text-muted-foreground">•</span>
          <span>-37% transbordo</span>
          <span className="text-muted-foreground">•</span>
          <span>-45% tempo</span>
        </div>
      </div>

      {/* Cover Image */}
      <div className="aspect-[16/9] bg-secondary/50 rounded-lg overflow-hidden mb-12">
        <img loading="lazy" decoding="async" 
          src={caseImage} 
          alt="Afya Educom - Arquitetura Híbrida"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl space-y-16">
        
        {/* Business Context */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Contexto de Negócio</h2>
          <p className="text-muted-foreground leading-relaxed">
            A Afya Educom atua na oferta de cursos especializados e pós-graduação para médicos e profissionais 
            da saúde, com operação de vendas baseada em grande volume de leads inbound e necessidade de 
            qualificação (curso, momento de carreira, especialidade).
          </p>
          
          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Indicadores iniciais:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Apenas <strong className="text-foreground">41%</strong> dos leads chegavam a uma tentativa real de agendamento</li>
              <li>• <strong className="text-foreground">58%</strong> das conversas terminavam em transbordo humano</li>
              <li>• Tempo médio até o primeiro contato útil: <strong className="text-foreground">9m20s</strong></li>
              <li>• Alto índice de abandono após coleta de dados</li>
              <li>• Inconsistência na criação de oportunidades no CRM</li>
            </ul>
          </div>

          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-lg font-medium">
              O bot existia, mas funcionava como formulário conversacional, não como sistema de triagem e decisão.
            </p>
          </div>
        </section>

        {/* Opportunity Discovery */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Descoberta da Oportunidade</h2>
          <p className="text-muted-foreground leading-relaxed">
            A oportunidade foi identificada a partir de auditoria dos fluxos existentes, análise de logs conversacionais, 
            mapeamento de entrypoints (campanhas, QR Codes, CTWA, orgânico), relatórios de transbordo e 
            observação de atendimentos humanos.
          </p>
          
          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Principais achados:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Mesma pergunta repetida em diferentes fluxos</li>
              <li>• Validações espalhadas e não normalizadas</li>
              <li>• Usuários caíam em filas mesmo com dados completos</li>
              <li>• Baixa diferenciação entre curiosos, leads qualificados e intenção real</li>
              <li>• Nenhuma distinção entre erro de dado e dúvida conceitual</li>
            </ul>
          </div>

          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-lg font-medium">
              Reformulação do problema: Não era um problema de volume de leads, mas de arquitetura de decisão.
            </p>
          </div>
        </section>

        {/* Role & Scope */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Papel e Escopo</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">Responsabilidades:</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Definição da arquitetura híbrida</li>
                <li>• Desenho dos roteadores (orgânico e campanha)</li>
                <li>• Estratégia de coleta e validação</li>
                <li>• Desenho do sistema de exceções</li>
                <li>• Governança do fluxo de agendamento</li>
                <li>• Definição do modelo A/B</li>
                <li>• Integração conceitual com Salesforce</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">Times envolvidos:</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• UX</li>
                <li>• Produto</li>
                <li>• Engenharia</li>
                <li>• Marketing</li>
                <li>• Comercial</li>
                <li>• CRM</li>
              </ul>
            </div>
          </div>

          <p className="text-muted-foreground">
            <strong>Escopo:</strong> entrada por campanhas e orgânico, identificação, escolha de curso, 
            qualificação, agendamento, fallback para agente, NPS e relatórios operacionais.
            <br />
            <strong>Duração:</strong> 12 semanas (diagnóstico → arquitetura → implantação → medição)
          </p>
        </section>

        {/* Strategic Framing */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Enquadramento Estratégico</h2>
          
          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-lg font-medium">
              O sistema foi redefinido como: uma esteira de decisão conversacional, não um fluxo único.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">Princípios estratégicos:</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Separar navegação de qualificação</li>
                <li>• Separar regra de linguagem natural</li>
                <li>• Tratar IA como camada de interpretação</li>
                <li>• Medir intenção, não apenas interação</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">Métricas-chave:</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Taxa de intenção de agendamento</li>
                <li>• Taxa de agendamento realizado</li>
                <li>• Taxa de transbordo humano</li>
                <li>• Tempo até decisão</li>
                <li>• Consistência de oportunidades no CRM</li>
                <li>• NPS por tipo de fluxo (IA vs regra)</li>
              </ul>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            <strong>Objetivo:</strong> Reduzir desperdício humano e aumentar a conversão qualificada.
          </p>
        </section>

        {/* Solution Strategy */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Estratégia de Solução</h2>
          
          <p className="text-muted-foreground leading-relaxed">Foi adotada uma arquitetura híbrida:</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">Roteadores determinísticos (regras):</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Identificação</li>
                <li>• Validação de dados</li>
                <li>• Menu de cursos</li>
                <li>• Agendamento</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">Agentes de IA para:</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Interpretar mensagens abertas</li>
                <li>• Lidar com inputs inesperados</li>
                <li>• Classificar intenção</li>
                <li>• Responder dúvidas conceituais</li>
              </ul>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Componentes centrais:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Roteador por origem (orgânico vs campanha)</li>
              <li>• Sistema de enriquecimento de conversa</li>
              <li>• Validação progressiva (nome, telefone, e-mail)</li>
              <li>• Menu de 15 opções de curso</li>
              <li>• <strong className="text-foreground">Teste A/B</strong>: fluxo padrão vs fluxo com agente de IA</li>
              <li>• Sistema unificado de exceções</li>
              <li>• Criação automática de oportunidades no Salesforce</li>
            </ul>
          </div>

          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-lg font-medium">
              O bot deixou de ser linear e passou a ser condicional e adaptativo.
            </p>
          </div>
        </section>

        {/* Execution */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Execução</h2>
          
          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Implementações-chave:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Dois roteadores principais (orgânico e campanhas)</li>
              <li>• Tracking completo por entrada</li>
              <li>• Coleta estruturada de nome, telefone, e-mail, curso, momento de carreira</li>
              <li>• Validação de horário (SLA comercial)</li>
              <li>• Fallback progressivo para agente</li>
              <li>• NPS integrado ao fluxo</li>
              <li>• Integração direta com Salesforce</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-6 gap-4">
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-lg font-bold text-accent">1</p>
              <p className="text-xs text-muted-foreground mt-1">Camada de roteamento</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-lg font-bold text-accent">1</p>
              <p className="text-xs text-muted-foreground mt-1">Camada de qualificação</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-lg font-bold text-accent">1</p>
              <p className="text-xs text-muted-foreground mt-1">Camada de decisão</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-lg font-bold text-accent">1</p>
              <p className="text-xs text-muted-foreground mt-1">Camada de IA</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-lg font-bold text-accent">1</p>
              <p className="text-xs text-muted-foreground mt-1">Camada de CRM</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-lg font-bold text-accent">1</p>
              <p className="text-xs text-muted-foreground mt-1">Camada de métricas</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Reduções estruturais:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-xl font-bold text-accent">-34%</p>
                <p className="text-sm text-muted-foreground">Fluxos duplicados</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-accent">-28%</p>
                <p className="text-sm text-muted-foreground">Mensagens redundantes</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-accent">-31%</p>
                <p className="text-sm text-muted-foreground">Loops de erro</p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Resultados e Impacto</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent">+29%</p>
              <p className="text-sm text-muted-foreground mt-2">Taxa de agendamento (32% → 41%)</p>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent">-37%</p>
              <p className="text-sm text-muted-foreground mt-2">Transbordo humano</p>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent">-45%</p>
              <p className="text-sm text-muted-foreground mt-2">Tempo até decisão (9m20s → 5m10s)</p>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent">+13pp</p>
              <p className="text-sm text-muted-foreground mt-2">Taxa de intenção (41% → 54%)</p>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Comparativo A/B:</h3>
            <p className="text-muted-foreground mb-4">Fluxo com IA apresentou:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <p className="text-lg font-bold text-accent">+18%</p>
                <p className="text-sm text-muted-foreground">Agendamento</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <p className="text-lg font-bold text-accent">-22%</p>
                <p className="text-sm text-muted-foreground">Abandono</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <p className="text-lg font-bold text-accent">Superior</p>
                <p className="text-sm text-muted-foreground">NPS médio</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Impacto operacional:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Menos leads improdutivos em fila</li>
              <li>• Maior previsibilidade de agenda</li>
              <li>• Redução de retrabalho</li>
              <li>• Melhor uso do time comercial</li>
              <li>• Criação automática de oportunidades: <strong className="text-foreground">100% padronizada</strong></li>
            </ul>
          </div>
        </section>

        {/* Leadership */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Liderança e Influência</h2>
          
          <p className="text-muted-foreground leading-relaxed">Atuação como:</p>
          
          <ul className="space-y-2 text-muted-foreground">
            <li>• Arquiteto da solução</li>
            <li>• Mediador entre marketing, vendas e tecnologia</li>
            <li>• Responsável pelo framing do problema</li>
            <li>• Definidor de critérios de decisão</li>
            <li>• Guardião da experiência</li>
          </ul>

          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Efeitos organizacionais:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Padronização da entrada de leads</li>
              <li>• Clareza entre: lead curioso / lead qualificado / lead com intenção</li>
              <li>• Mudança do papel da IA: de "resposta genérica" para "camada estratégica"</li>
            </ul>
          </div>
        </section>

        {/* Learnings */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Aprendizados</h2>
          
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <ul className="space-y-3 text-muted-foreground">
              <li>• IA sem arquitetura vira ruído</li>
              <li>• Regras sem IA não lidam com ambiguidade</li>
              <li>• Conversas são sistemas de decisão</li>
              <li>• Medir intenção é mais valioso que medir mensagens</li>
            </ul>
          </div>

          <p className="text-muted-foreground leading-relaxed">O projeto consolidou:</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <p className="font-medium">A conversa como funil</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <p className="font-medium">O bot como esteira de qualificação</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <p className="font-medium">A IA como componente tático</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <p className="font-medium">UX como estrutura de vendas</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="pt-8 border-t border-border">
          <div className="flex justify-between items-center">
            <Button asChild variant="outline" className="gap-2">
              <Link to="/work/stellantis">
                <ArrowLeft size={16} />
                Case anterior
              </Link>
            </Button>
            <Button asChild className="gap-2">
              <Link to="/work">
                Todos os cases
                <ArrowLeft size={16} className="rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
