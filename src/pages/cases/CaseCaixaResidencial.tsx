import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import caseImage from "@/assets/case-caixa-residencial.jpg";

export default function CaseCaixaResidencial() {
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
          <span className="badge-secondary">UX Conversacional & Autosserviço</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Reestruturação do atendimento conversacional para autosserviço em seguros
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Reestruturação dos fluxos conversacionais e sistema de exceções para autosserviço em seguros, 
          aumentando resolução automática e reduzindo transbordo humano.
        </p>
        <div className="flex flex-wrap gap-4 text-accent font-medium">
          <span>+27% resolução</span>
          <span className="text-muted-foreground">•</span>
          <span>-34% transbordo</span>
          <span className="text-muted-foreground">•</span>
          <span>-38% tempo</span>
        </div>
      </div>

      {/* Cover Image */}
      <div className="aspect-[16/9] bg-secondary/50 rounded-lg overflow-hidden mb-12">
        <img loading="lazy" decoding="async" 
          src={caseImage} 
          alt="CAIXA Residencial - Atendimento Conversacional"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl space-y-16">
        
        {/* Business Context */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Contexto de Negócio</h2>
          <p className="text-muted-foreground leading-relaxed">
            A CAIXA Residencial operava um bot de atendimento para seguros (residencial e habitacional) com 
            mais de 45 fluxos distintos, alto volume de exceções não tratadas e múltiplas integrações 
            (apólice, parcelas, sinistro, renovação).
          </p>
          
          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Indicadores iniciais:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Apenas <strong className="text-foreground">38%</strong> das conversas eram resolvidas sem transbordo</li>
              <li>• <strong className="text-foreground">62%</strong> dos erros vinham de CPF, CEP e datas inválidas</li>
              <li>• Alto volume de mensagens fora do escopo (áudio, imagem, texto longo)</li>
              <li>• Tempo médio de atendimento: <strong className="text-foreground">6m40s</strong></li>
              <li>• Baixa previsibilidade operacional</li>
            </ul>
          </div>

          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-lg font-medium">
              O bot existia, mas funcionava mais como roteador de falhas do que como canal de autosserviço real.
            </p>
          </div>
        </section>

        {/* Opportunity Discovery */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Descoberta da Oportunidade</h2>
          <p className="text-muted-foreground leading-relaxed">
            A análise foi baseada em logs conversacionais, relatórios de exceção, auditoria dos fluxos existentes, 
            classificação dos tipos de erro e mapeamento de entradas inesperadas.
          </p>
          
          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Principais achados:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• O mesmo erro ocorria em até 7 pontos diferentes sem padronização</li>
              <li>• Mensagens técnicas demais para usuários leigos</li>
              <li>• Ausência de um sistema único de exceções</li>
              <li>• Usuários se perdiam ao errar um campo</li>
              <li>• Regras de negócio misturadas com mensagens</li>
            </ul>
          </div>

          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-lg font-medium">
              Reformulação do problema: Não era um problema de NLP. Era um problema de arquitetura conversacional.
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
                <li>• Arquitetura dos fluxos</li>
                <li>• Definição do sistema de exceções</li>
                <li>• Design dos blocos de onboarding</li>
                <li>• Padronização de mensagens</li>
                <li>• Estratégia de fallback</li>
                <li>• Alinhamento com regras regulatórias</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">Times envolvidos:</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• UX Conversacional</li>
                <li>• Produto</li>
                <li>• Engenharia</li>
                <li>• Atendimento</li>
                <li>• Jurídico (LGPD e termos)</li>
              </ul>
            </div>
          </div>

          <p className="text-muted-foreground">
            <strong>Escopo:</strong> onboarding, validação de CPF e CEP, seleção de apólice, autosserviço 
            (2ª via, pagamento, sinistro, renovação), erros técnicos, erros de input, pesquisa de satisfação.
          </p>
        </section>

        {/* Strategic Framing */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Enquadramento Estratégico</h2>
          
          <p className="text-muted-foreground leading-relaxed">O sistema foi reestruturado a partir de três princípios:</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <p className="font-semibold">Separar fluxo de exceção</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <p className="font-semibold">Tratar erro como parte da experiência</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <p className="font-semibold">Arquitetar conversa como produto</p>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Métricas-chave:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Taxa de resolução automática</li>
              <li>• Taxa de erro persistente</li>
              <li>• Transbordo humano</li>
              <li>• Tempo médio de atendimento</li>
              <li>• Repetição de inputs inválidos</li>
            </ul>
          </div>

          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-lg font-medium">
              Objetivo: Reduzir esforço cognitivo em processos regulatórios complexos.
            </p>
          </div>
        </section>

        {/* Solution Strategy */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Estratégia de Solução</h2>
          
          <p className="text-muted-foreground leading-relaxed">A estratégia adotada foi criar:</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <h3 className="font-semibold">Bloco principal de navegação</h3>
              <p className="text-muted-foreground text-sm">Centralização do controle de fluxo</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <h3 className="font-semibold">Sistema global de exceções</h3>
              <p className="text-muted-foreground text-sm">Reutilizável em todos os fluxos</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <h3 className="font-semibold">Onboarding progressivo</h3>
              <p className="text-muted-foreground text-sm">Orientação gradual do usuário</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <h3 className="font-semibold">Fallback orientado a recuperação</h3>
              <p className="text-muted-foreground text-sm">Conduzir correção, não apenas reagir</p>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Distinção clara entre tipos de erro:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="text-center">
                <p className="text-sm font-medium">Erro de formato</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium">Erro de regra de negócio</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium">Erro técnico</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium">Erro persistente</p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-lg font-medium">
              O bot deixou de reagir ao erro e passou a conduzir a correção.
            </p>
          </div>
        </section>

        {/* Execution */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Execução</h2>
          
          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Implementações-chave:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Criação de blocos globais de exceção</li>
              <li>• Fallback progressivo (tentar → orientar → redirecionar → encerrar)</li>
              <li>• Validação antecipada de CPF e CEP</li>
              <li>• Mensagens adaptadas a usuários leigos</li>
              <li>• Onboarding jurídico integrado ao fluxo</li>
              <li>• Roteamento por tipo de contrato</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-accent">1</p>
              <p className="text-xs text-muted-foreground mt-1">Bloco principal</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-accent">4</p>
              <p className="text-xs text-muted-foreground mt-1">Camadas de exceção</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-accent">12</p>
              <p className="text-xs text-muted-foreground mt-1">Fluxos de serviço</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-accent">1</p>
              <p className="text-xs text-muted-foreground mt-1">Sistema de métricas</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Reduções estruturais:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-xl font-bold text-accent">-41%</p>
                <p className="text-sm text-muted-foreground">Caminhos duplicados</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-accent">-29%</p>
                <p className="text-sm text-muted-foreground">Textos distintos para mesmo erro</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-accent">-35%</p>
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
              <p className="text-4xl font-bold text-accent">+27pp</p>
              <p className="text-sm text-muted-foreground mt-2">Resolução automática (38% → 65%)</p>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent">-34%</p>
              <p className="text-sm text-muted-foreground mt-2">Transbordo humano</p>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent">-38%</p>
              <p className="text-sm text-muted-foreground mt-2">Tempo médio (6m40s → 4m10s)</p>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent">+22%</p>
              <p className="text-sm text-muted-foreground mt-2">Sucesso em validação CPF/CEP</p>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Impacto operacional:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Menor sobrecarga em filas humanas</li>
              <li>• Maior previsibilidade de demanda</li>
              <li>• Redução de recontato</li>
              <li>• Maior consistência jurídica</li>
            </ul>
          </div>

          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-lg font-medium">
              O bot passou de roteador de exceções para canal funcional de serviço.
            </p>
          </div>
        </section>

        {/* Leadership */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Liderança e Influência</h2>
          
          <p className="text-muted-foreground leading-relaxed">Como UX Lead:</p>
          
          <ul className="space-y-2 text-muted-foreground">
            <li>• Conduzi o redesenho da arquitetura</li>
            <li>• Traduzi regras legais em linguagem de usuário</li>
            <li>• Mediei conflitos entre negócio e usabilidade</li>
            <li>• Defini padrões reutilizáveis</li>
            <li>• Influenciei o modelo mental do time técnico</li>
          </ul>

          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Resultado organizacional:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Adoção de padrão de exceções</li>
              <li>• Reaproveitamento de blocos</li>
              <li>• Visão sistêmica do bot</li>
              <li>• Base para novas jornadas</li>
            </ul>
          </div>
        </section>

        {/* Learnings */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Aprendizados</h2>
          
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <ul className="space-y-3 text-muted-foreground">
              <li>• Bots falham mais por arquitetura do que por IA</li>
              <li>• Exceção é parte do fluxo, não caso extremo</li>
              <li>• Usuários erram por contexto, não por má intenção</li>
              <li>• Previsibilidade reduz ansiedade</li>
            </ul>
          </div>

          <p className="text-muted-foreground leading-relaxed">O projeto consolidou:</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <p className="font-medium">O bot como produto</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <p className="font-medium">O erro como ferramenta de design</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <p className="font-medium">A conversa como sistema</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="pt-8 border-t border-border">
          <div className="flex justify-between items-center">
            <Button asChild variant="outline" className="gap-2">
              <Link to="/work/drogaria-araujo">
                <ArrowLeft size={16} />
                Case anterior
              </Link>
            </Button>
            <Button asChild className="gap-2">
              <Link to="/work/stellantis">
                Próximo case
                <ArrowLeft size={16} className="rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
