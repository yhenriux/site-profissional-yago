import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import caseImage from "@/assets/case-drogaria-araujo.jpg";
import checkoutRetirar from "@/assets/case-araujo-checkout-retirar.png";
import checkoutReceber from "@/assets/case-araujo-checkout-receber.png";
import modalRetirada from "@/assets/case-araujo-modal-retirada.png";
import checkoutPagamento from "@/assets/case-araujo-pagamento.png";

export default function CaseDrogariaAraujo() {
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
          <span className="badge-secondary">E-commerce & Conversão</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Aumento da conversão no checkout por meio da reestruturação da jornada de compra
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Reestruturação da jornada de compra desktop e mobile, reduzindo abandono nas etapas finais 
          e simplificando o processo decisório do usuário.
        </p>
        <div className="flex flex-wrap gap-4 text-accent font-medium">
          <span>+18% conversão</span>
          <span className="text-muted-foreground">•</span>
          <span>-22% abandono</span>
          <span className="text-muted-foreground">•</span>
          <span>-23% tempo de finalização</span>
        </div>
      </div>

      {/* Cover Image */}
      <div className="aspect-[16/9] bg-secondary/50 rounded-lg overflow-hidden mb-12">
        <img loading="lazy" decoding="async" 
          src={caseImage} 
          alt="Drogaria Araujo - Checkout"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl space-y-16">
        
        {/* Business Context */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Contexto de Negócio</h2>
          <p className="text-muted-foreground leading-relaxed">
            A Drogaria Araujo opera um dos maiores e-commerces farmacêuticos do país, com alto volume de pedidos em mobile.
          </p>
          
          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Indicadores iniciais:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Taxa média de conversão do checkout: <strong className="text-foreground">2,4%</strong></li>
              <li>• Abandono na etapa de pagamento: <strong className="text-foreground">61%</strong></li>
              <li>• 72% do tráfego vindo de mobile</li>
              <li>• Aumento de chamados relacionados a erro de pagamento e cadastro</li>
            </ul>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            O impacto estimado incluía perda mensal relevante em pedidos iniciados e não finalizados, 
            sobrecarga no atendimento e degradação da experiência em um momento crítico da jornada. 
            O checkout era um ponto direto de perda de receita, não apenas de fricção de uso.
          </p>
        </section>

        {/* Opportunity Discovery */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Descoberta da Oportunidade</h2>
          <p className="text-muted-foreground leading-relaxed">
            A oportunidade foi identificada a partir de análise de funil por etapa, mapas de calor, 
            gravações de sessão, relatórios do SAC e testes rápidos de usabilidade.
          </p>
          
          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Principais sinais:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Abandono concentrado após escolha de frete</li>
              <li>• Erros recorrentes em campos obrigatórios</li>
              <li>• Tempo médio excessivo na etapa de pagamento</li>
              <li>• Comportamento de "tentativa e erro" em mobile</li>
            </ul>
          </div>

          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-lg font-medium">
              Reformulação do problema: Não era um problema de estética, mas de excesso de decisões 
              e interrupções cognitivas no momento de maior intenção de compra.
            </p>
          </div>
        </section>

        {/* Role & Scope */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Papel e Escopo</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">Responsabilidade direta:</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Definição do framing do problema</li>
                <li>• Estratégia da nova jornada</li>
                <li>• Arquitetura de fluxo</li>
                <li>• Critérios de validação</li>
                <li>• Acompanhamento de métricas pós-release</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">Times envolvidos:</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• UX (2 designers)</li>
                <li>• Produto (1 PM)</li>
                <li>• Engenharia (frontend e backend)</li>
                <li>• Marketing</li>
                <li>• Atendimento</li>
              </ul>
            </div>
          </div>

          <p className="text-muted-foreground">
            <strong>Escopo:</strong> checkout desktop, checkout mobile, cadastro, entrega, pagamento, mensagens de erro.
            <br />
            <strong>Duração:</strong> 10 semanas (descoberta → implementação → monitoramento)
          </p>
        </section>

        {/* Strategic Framing */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Enquadramento Estratégico</h2>
          
          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-lg font-medium">
              O problema foi reformulado como: Alta carga cognitiva em um ponto de alta intenção.
            </p>
          </div>

          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Restrições:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Regras fiscais do setor</li>
              <li>• Múltiplos meios de pagamento</li>
              <li>• Integração com sistemas legados</li>
              <li>• Necessidade de cadastro</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Métrica primária:</h3>
              <p className="text-muted-foreground">Taxa de conclusão do checkout</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">Métricas secundárias:</h3>
              <p className="text-muted-foreground text-sm">Abandono por etapa, tempo médio de finalização, erros de pagamento, chamados no SAC</p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            <strong>Objetivo estratégico:</strong> diminuir esforço percebido e reduzir interrupções antes da confirmação do pedido.
          </p>
        </section>

        {/* Solution Strategy */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Estratégia de Solução</h2>
          
          <p className="text-muted-foreground leading-relaxed">Três abordagens foram avaliadas:</p>
          
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-2">1. Ajustes visuais na estrutura atual</h3>
              <p className="text-muted-foreground text-sm">Menor impacto, menor risco</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-2">2. Criação de um novo checkout do zero</h3>
              <p className="text-muted-foreground text-sm">Maior impacto, maior risco técnico</p>
            </div>
            <div className="bg-card border border-accent rounded-lg p-6 border-2">
              <h3 className="font-semibold mb-2 text-accent">3. Reestruturação progressiva da jornada ✓</h3>
              <p className="text-muted-foreground text-sm">Menor risco técnico, possibilidade de testes graduais, compatibilidade com sistemas existentes</p>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Diretrizes estratégicas:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Reduzir campos visíveis por etapa</li>
              <li>• Antecipar informações críticas (prazo e custo)</li>
              <li>• Eliminar distrações</li>
              <li>• Padronizar padrões entre desktop e mobile</li>
              <li>• Tornar erros compreensíveis</li>
            </ul>
          </div>
        </section>

        {/* Images: Entrega Options */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Redesign da Etapa de Entrega</h2>
          <p className="text-muted-foreground leading-relaxed">
            A etapa de entrega foi simplificada com duas opções claras: retirar na loja ou receber em casa.
            Cada opção mostra informações relevantes de forma contextual.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="aspect-[16/10] bg-secondary/50 rounded-lg overflow-hidden border border-border">
                <img loading="lazy" decoding="async" 
                  src={checkoutRetirar} 
                  alt="Checkout - Opção Retirar na Loja"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center">Opção "Retirar" com seleção de loja e disponibilidade</p>
            </div>
            <div className="space-y-3">
              <div className="aspect-[16/10] bg-secondary/50 rounded-lg overflow-hidden border border-border">
                <img loading="lazy" decoding="async" 
                  src={checkoutReceber} 
                  alt="Checkout - Opção Receber em Casa"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center">Opção "Receber" com endereço salvo</p>
            </div>
          </div>
        </section>

        {/* Execution */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Execução</h2>
          
          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Principais decisões:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Divisão clara em 3 etapas: <strong className="text-foreground">Identificação → Entrega → Pagamento</strong></li>
              <li>• Redução de <strong className="text-foreground">27%</strong> no número de campos visíveis simultaneamente</li>
              <li>• Reescrita de microcopy orientada à ação</li>
              <li>• Mensagens de erro convertidas em instruções</li>
              <li>• Layout mobile-first para evitar scroll excessivo</li>
            </ul>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            <strong>Processo:</strong> protótipos navegáveis, testes rápidos, ajustes baseados em abandono por etapa.
          </p>
        </section>

        {/* Image: Modal Retirada */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Detalhamento da Retirada</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Modal de confirmação da loja escolhida com opções claras de forma de retirada 
                (balcão ou drive-thru) e visualização completa do pedido antes de confirmar.
              </p>
              <div className="bg-secondary/50 rounded-lg p-4 space-y-2">
                <h3 className="font-semibold text-sm">Melhorias implementadas:</h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Confirmação visual dos produtos no pedido</li>
                  <li>• Tempo estimado de preparo visível</li>
                  <li>• Opções de retirada contextuais por loja</li>
                  <li>• Horário de funcionamento em destaque</li>
                </ul>
              </div>
            </div>
            <div className="aspect-[3/4] bg-secondary/50 rounded-lg overflow-hidden border border-border">
              <img loading="lazy" decoding="async" 
                src={modalRetirada} 
                alt="Modal de confirmação de loja e forma de retirada"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* Image: Pagamento */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Etapa de Pagamento</h2>
          <p className="text-muted-foreground leading-relaxed">
            Reorganização da tela de pagamento com hierarquia clara entre métodos e informações fiscais.
            A sidebar mantém o resumo do pedido visível durante toda a jornada.
          </p>
          <div className="aspect-[16/9] bg-secondary/50 rounded-lg overflow-hidden border border-border">
            <img loading="lazy" decoding="async" 
              src={checkoutPagamento} 
              alt="Tela de pagamento com métodos e resumo do pedido"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </section>

        {/* Results */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Resultados e Impacto</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent">+18%</p>
              <p className="text-sm text-muted-foreground mt-2">Conversão no checkout (2,4% → 2,83%)</p>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent">-22%</p>
              <p className="text-sm text-muted-foreground mt-2">Abandono na etapa de pagamento (61% → 47%)</p>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent">-23%</p>
              <p className="text-sm text-muted-foreground mt-2">Tempo médio de finalização (3m20s → 2m35s)</p>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent">-19%</p>
              <p className="text-sm text-muted-foreground mt-2">Chamados sobre pagamento</p>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Impacto operacional:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Maior estabilidade na finalização de pedidos</li>
              <li>• Redução de fricção em horários de pico</li>
              <li>• Aumento direto de pedidos concluídos</li>
              <li>• Melhoria mais expressiva em mobile</li>
            </ul>
          </div>

          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-lg font-medium">
              O checkout deixou de ser um gargalo estrutural e passou a ser um ponto de conversão previsível.
            </p>
          </div>
        </section>

        {/* Leadership */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Liderança e Influência</h2>
          
          <p className="text-muted-foreground leading-relaxed">O projeto exigiu:</p>
          
          <ul className="space-y-2 text-muted-foreground">
            <li>• Alinhamento entre UX, produto e engenharia</li>
            <li>• Negociação de escopo técnico</li>
            <li>• Defesa de mudanças estruturais em vez de ajustes superficiais</li>
          </ul>

          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Efeito colateral positivo:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Definição de padrões reutilizáveis</li>
              <li>• Critérios claros para futuras evoluções</li>
              <li>• Integração do time de atendimento ao processo de validação</li>
            </ul>
          </div>
        </section>

        {/* Learnings */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Aprendizados</h2>
          
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <ul className="space-y-3 text-muted-foreground">
              <li>• Checkout é um sistema decisório, não um formulário</li>
              <li>• Menos escolhas no momento certo aumentam conversão</li>
              <li>• Consistência entre canais é determinante</li>
            </ul>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            O projeto estabeleceu uma nova base para evolução contínua e preparação para iniciativas futuras 
            (login facilitado, wallets, otimização progressiva).
          </p>

          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-lg font-medium">
              Mais do que um redesign, foi uma mudança na forma de tratar jornadas críticas como ativos de negócio.
            </p>
          </div>
        </section>

        {/* Navigation */}
        <div className="pt-8 border-t border-border">
          <div className="flex justify-between items-center">
            <Button asChild variant="outline" className="gap-2">
              <Link to="/work">
                <ArrowLeft size={16} />
                Todos os cases
              </Link>
            </Button>
            <Button asChild className="gap-2">
              <Link to="/work/caixa-residencial">
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
