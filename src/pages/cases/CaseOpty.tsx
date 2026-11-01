import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import caseImage from "@/assets/case-opty.jpg";

export default function CaseOpty() {
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
          <span className="badge-secondary">UX Conversacional & Autoatendimento</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Arquitetura conversacional para autoatendimento de telecom
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Motor de decisão operacional com orquestração por regras, APIs e exceções para 
          provedor regional de internet.
        </p>
        <div className="flex flex-wrap gap-4 text-accent font-medium">
          <span>-42% transbordo</span>
          <span className="text-muted-foreground">•</span>
          <span>+31% resolução</span>
          <span className="text-muted-foreground">•</span>
          <span>NPS 54→71</span>
        </div>
      </div>

      {/* Cover Image */}
      <div className="aspect-[16/9] bg-secondary/50 rounded-lg overflow-hidden mb-12">
        <img loading="lazy" decoding="async" 
          src={caseImage} 
          alt="Opty - Arquitetura Conversacional"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl space-y-16">
        
        {/* Outcome & Framing */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Outcome & Framing</h2>
          <p className="text-muted-foreground leading-relaxed">
            Redução de 42% no volume de transbordos humanos e aumento de 31% na resolução em autoatendimento 
            através da reestruturação completa da arquitetura conversacional da Opty.
          </p>
          
          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-lg font-medium">
              O projeto transformou um bot reativo em um sistema de decisão operacional, capaz de autenticar 
              clientes, interpretar intenção, validar contratos e executar serviços críticos (boletos, desbloqueio, OS, plano, Globoplay).
            </p>
          </div>
        </section>

        {/* Business Context */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Contexto de Negócio</h2>
          <p className="text-muted-foreground leading-relaxed">
            A Opty opera como provedor regional de internet, com alto volume de solicitações financeiras (boletos, atrasos), 
            problemas técnicos (sem conexão), mudanças contratuais (plano, endereço, titularidade), picos fora do horário 
            comercial e múltiplas marcas (Opty, Ultra, Integrato, GR Canedo etc.).
          </p>
          
          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Antes do projeto:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong className="text-foreground">63%</strong> das conversas iam direto para humano</li>
              <li>• <strong className="text-foreground">47%</strong> dos atendimentos eram sobre boletos</li>
              <li>• O bot falhava em identificar exceções</li>
              <li>• Não havia distinção clara entre erro de dado, erro de sistema e erro de compreensão</li>
              <li>• LGPD era tratado como bloco isolado</li>
              <li>• APIs quebravam o fluxo sem fallback</li>
            </ul>
          </div>

          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-lg font-medium">
              Impacto direto: gargalo operacional, aumento de fila, queda de NPS e custo por atendimento alto.
            </p>
          </div>
        </section>

        {/* Problem Discovery */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Descoberta do Problema</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">Fontes analisadas:</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Logs conversacionais</li>
                <li>• Erros de regex (CPF/CNPJ, boleto)</li>
                <li>• Relatórios de transbordo</li>
                <li>• Análise de inputs inesperados</li>
                <li>• Mapeamento de serviços mais acionados</li>
                <li>• Auditoria dos fluxos antigos</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">Principais evidências:</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Mais de <strong className="text-foreground">28%</strong> das mensagens eram "input inesperado"</li>
                <li>• <strong className="text-foreground">22%</strong> dos erros vinham de CPF/CNPJ inválido</li>
                <li>• Usuários abandonavam após 2 falhas seguidas</li>
                <li>• APIs retornavam erro sem estratégia de UX</li>
                <li>• Intents diferentes caíam no mesmo fluxo</li>
              </ul>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-lg font-medium">
              Reformulação do problema: O problema não era entendimento da linguagem, era ausência de arquitetura de exceções e decisão.
            </p>
          </div>
        </section>

        {/* Role & Scope */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Papel e Escopo</h2>
          
          <p className="text-muted-foreground leading-relaxed">
            <strong>Papel:</strong> UX Lead Conversacional
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">Responsabilidades:</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Arquitetura do fluxo macro</li>
                <li>• Desenho da lógica de exceções</li>
                <li>• Estratégia de fallback humano</li>
                <li>• Mapeamento de serviços</li>
                <li>• Definição de critérios de transbordo</li>
                <li>• Modelagem da jornada pós-autenticação</li>
                <li>• Desenho do NPS</li>
                <li>• Alinhamento entre UX, engenharia e operações</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">Escopo:</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Onboarding + LGPD</li>
                <li>• Autenticação por CPF/CNPJ</li>
                <li>• Validação por APIs</li>
                <li>• Serviços: boletos, desbloqueio, OS, plano, endereço, Globoplay</li>
                <li>• Exceções</li>
                <li>• NPS</li>
                <li>• Transbordo inteligente</li>
              </ul>
            </div>
          </div>

          <p className="text-muted-foreground">
            <strong>Times envolvidos:</strong> Produto, Engenharia, Atendimento, Financeiro, Operações de rede
          </p>
        </section>

        {/* Design Strategy */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Estratégia de Design</h2>
          
          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-lg font-medium">
              Mudança central de framing: de bot de atendimento → para motor de decisão operacional
            </p>
          </div>

          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Princípios adotados:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Toda falha precisa ter UX</li>
              <li>• Toda API precisa de fallback</li>
              <li>• Toda intenção precisa de destino</li>
              <li>• Erro ≠ exceção ≠ desconhecimento</li>
              <li>• Usuário não pode cair em loop</li>
              <li>• Transbordo é decisão, não default</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Hipótese estratégica:</h3>
            <p className="text-muted-foreground">
              Se o bot conseguir autenticar, classificar contrato e validar contexto antes de responder, 
              ele pode resolver a maioria das demandas sem humano.
            </p>
          </div>
        </section>

        {/* Process & Documentation */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Processo e Documentação</h2>
          
          <p className="text-muted-foreground leading-relaxed">Processo estruturado em 4 camadas:</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">1. Mapeamento lógico</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Fluxos</li>
                <li>• Serviços</li>
                <li>• Exceções</li>
                <li>• Integrações</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">2. Normalização</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Padronização de mensagens</li>
                <li>• Separação entre: regra, linguagem, decisão</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">3. Arquitetura</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Blocos S (serviços)</li>
                <li>• Blocos E (exceções)</li>
                <li>• Blocos T (transbordos)</li>
                <li>• Blocos F (finalizações)</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">4. Documentação viva</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Matriz de APIs</li>
                <li>• Matriz de exceções</li>
                <li>• Matriz de intenções</li>
                <li>• Critérios de erro persistente</li>
                <li>• Critérios de fallback</li>
              </ul>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-lg font-medium">
              Resultado: o bot virou um sistema legível e governável.
            </p>
          </div>
        </section>

        {/* Visual & Interaction Strategy */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Estratégia Visual e de Interação</h2>
          
          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Decisões visuais e conversacionais:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Mensagens orientadas a ação</li>
              <li>• Botões sempre que há decisão crítica</li>
              <li>• Microcopy de erro específico (CPF, boleto, menu)</li>
              <li>• Mensagens diferentes para: erro humano, erro técnico, erro semântico</li>
              <li>• Confirmação explícita antes de ações sensíveis</li>
              <li>• NPS contextual (pós-resolução)</li>
              <li>• Progressão clara: identificar → resolver → confirmar → encerrar</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Visualmente:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Foco em redução cognitiva</li>
              <li>• Menos texto em exceções</li>
              <li>• Mais previsibilidade</li>
              <li>• Mais controle do usuário</li>
            </ul>
          </div>
        </section>

        {/* Execution & Validation */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Execução e Validação</h2>
          
          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Implementações-chave:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Autenticação por CPF/CNPJ</li>
              <li>• Leitura de contrato via API</li>
              <li>• Diferenciação por status: ativo, bloqueado, cancelado</li>
              <li>• Serviços automatizados: envio de boleto, desbloqueio, criação de OS</li>
              <li>• Regex para intenção</li>
              <li>• Fallback por erro persistente</li>
              <li>• NPS automatizado</li>
              <li>• Transbordo contextual</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Validação:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Testes por tipo de erro</li>
              <li>• Simulações de queda de API</li>
              <li>• Análise de logs pós-release</li>
              <li>• Comparação com baseline anterior</li>
            </ul>
          </div>
        </section>

        {/* Results */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Resultados e Impacto</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent">+31pp</p>
              <p className="text-sm text-muted-foreground mt-2">Resolução automática (38% → 69%)</p>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent">-42%</p>
              <p className="text-sm text-muted-foreground mt-2">Transbordo humano (63% → 36%)</p>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent">-44%</p>
              <p className="text-sm text-muted-foreground mt-2">Tempo médio até solução (8m40s → 4m50s)</p>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent">54→71</p>
              <p className="text-sm text-muted-foreground mt-2">NPS</p>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Outros resultados:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <p className="text-lg font-bold text-accent">-27%</p>
                <p className="text-sm text-muted-foreground">Abandono após erro</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <p className="text-lg font-bold text-accent">-35%</p>
                <p className="text-sm text-muted-foreground">Chamadas sobre boleto</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <p className="text-lg font-bold text-accent">+58%</p>
                <p className="text-sm text-muted-foreground">Desbloqueio sem atendente</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Impacto operacional:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Redução de fila</li>
              <li>• Menor custo por atendimento</li>
              <li>• Previsibilidade</li>
              <li>• Melhor uso do time técnico</li>
              <li>• Aumento de confiança no bot</li>
            </ul>
          </div>
        </section>

        {/* Leadership */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Liderança e Influência</h2>
          
          <p className="text-muted-foreground leading-relaxed">Atuação como:</p>
          
          <ul className="space-y-2 text-muted-foreground">
            <li>• Arquiteto da experiência</li>
            <li>• Mediador entre negócio, engenharia e atendimento</li>
            <li>• Definidor de critérios de decisão</li>
            <li>• Guardião da lógica do sistema</li>
            <li>• Responsável por exceções, fallback e governança</li>
          </ul>

          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Impacto organizacional:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Bot passou a ser visto como infraestrutura de serviço</li>
              <li>• Padronização de fluxos</li>
              <li>• Menos improviso</li>
              <li>• Mais controle</li>
            </ul>
          </div>
        </section>

        {/* Learnings */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Aprendizados</h2>
          
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <ul className="space-y-3 text-muted-foreground">
              <li>• Automação sem exceção gera frustração</li>
              <li>• Erro precisa ser projetado</li>
              <li>• API também é UX</li>
              <li>• Conversa é um sistema</li>
              <li>• Design é decisão operacional</li>
            </ul>
          </div>

          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">O projeto consolidou:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• UX como arquitetura</li>
              <li>• IA como complemento</li>
              <li>• Regra como segurança</li>
              <li>• Conversa como funil de resolução</li>
            </ul>
          </div>

          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-lg font-medium">
              O projeto da Opty não foi um chatbot. Foi a construção de um sistema conversacional de operação, 
              onde UX decide quem resolve o quê, quando e por quê.
            </p>
          </div>
        </section>

        {/* Back to Cases */}
        <div className="pt-8 border-t border-border">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/work">
              <ArrowLeft size={16} />
              Ver outros Business Cases
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
