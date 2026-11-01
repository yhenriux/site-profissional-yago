import { Link } from "react-router-dom";
import { ArrowLeft, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import caseImage from "@/assets/case-stellantis.jpg";

export default function CaseStellantis() {
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
        <div className="flex flex-wrap items-center gap-3">
          <span className="badge-secondary">Omnichannel & Eventos</span>
          <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-600 px-3 py-1 rounded-full text-xs font-medium">
            <Award size={14} />
            POPAI Brasil 2023
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Jeep Experience & Ram Arena: Plataforma Omnichannel para eventos físicos de alta complexidade
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Integração de agendamento, check-in, test-drive e atrações físicas via WhatsApp e totens, 
          criando uma experiência omnichannel premiada.
        </p>
        <div className="flex flex-wrap gap-4 text-accent font-medium">
          <span>-41% filas</span>
          <span className="text-muted-foreground">•</span>
          <span>+33% test-drive</span>
          <span className="text-muted-foreground">•</span>
          <span>+39% leads</span>
        </div>
      </div>

      {/* Cover Image */}
      <div className="aspect-[16/9] bg-secondary/50 rounded-lg overflow-hidden mb-12">
        <img loading="lazy" decoding="async" 
          src={caseImage} 
          alt="Stellantis - Jeep Experience & Ram Arena"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl space-y-16">

        {/* Award Banner */}
        <section className="bg-gradient-to-r from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Prêmio POPAI Brasil 2023</h3>
              <p className="text-muted-foreground">
                Categoria: Experiência Omnichannel & Multimodal (Ram House)
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Reconhecimento por integração digital-física, escalabilidade, experiência do usuário e inovação em eventos.
              </p>
            </div>
          </div>
        </section>
        
        {/* Business Context */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Contexto de Negócio</h2>
          <p className="text-muted-foreground leading-relaxed">
            A Stellantis realiza eventos itinerantes (Jeep Experience e Ram Arena) em múltiplas cidades do Brasil, 
            com milhares de visitantes por edição, múltiplos fluxos simultâneos e operação de alta complexidade.
          </p>
          
          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Componentes do evento:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Agendamento antecipado</li>
                <li>• Check-in presencial</li>
                <li>• Termos legais obrigatórios</li>
              </ul>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Test-drives controlados</li>
                <li>• Atrações físicas</li>
                <li>• Ativações de marca</li>
              </ul>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Integração com CRM</li>
                <li>• Concessionárias</li>
                <li>• Múltiplas cidades</li>
              </ul>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Indicadores iniciais:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Mais de <strong className="text-foreground">70%</strong> dos atendimentos dependiam de promotores humanos</li>
              <li>• Tempo médio de check-in: <strong className="text-foreground">6 a 9 minutos</strong></li>
              <li>• Taxa de abandono em agendamento: <strong className="text-foreground">46%</strong></li>
              <li>• Baixa rastreabilidade de dados</li>
              <li>• Nenhuma jornada integrada ponta a ponta</li>
            </ul>
          </div>
        </section>

        {/* Opportunity Discovery */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Descoberta da Oportunidade</h2>
          <p className="text-muted-foreground leading-relaxed">
            A análise envolveu auditoria dos fluxos existentes, mapeamento da jornada física, observação em campo, 
            análise de exceções, leitura de logs e workshops com operação, marketing e jurídico.
          </p>
          
          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Principais achados:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• O evento era físico, mas a experiência era digitalmente cega</li>
              <li>• O WhatsApp já era o canal preferido do público</li>
              <li>• Cada cidade operava como um "sistema isolado"</li>
              <li>• Não havia arquitetura reutilizável</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Maiores fricções identificadas:</h3>
            <div className="grid md:grid-cols-5 gap-4 text-center">
              <div className="p-3 bg-secondary/50 rounded">
                <p className="text-sm font-medium">Agendamento</p>
              </div>
              <div className="p-3 bg-secondary/50 rounded">
                <p className="text-sm font-medium">Assinatura de termo</p>
              </div>
              <div className="p-3 bg-secondary/50 rounded">
                <p className="text-sm font-medium">Chegada no evento</p>
              </div>
              <div className="p-3 bg-secondary/50 rounded">
                <p className="text-sm font-medium">Fila de test-drive</p>
              </div>
              <div className="p-3 bg-secondary/50 rounded">
                <p className="text-sm font-medium">Recuperação de convite</p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-lg font-medium">
              Reformulação do problema: Como transformar um evento físico em uma experiência omnichannel 
              controlável, mensurável e escalável.
            </p>
          </div>
        </section>

        {/* Role & Leadership */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Papel e Liderança</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">Responsabilidades:</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Arquitetura da jornada</li>
                <li>• Definição dos fluxos</li>
                <li>• Governança de exceções</li>
                <li>• Desenho do sistema omnichannel</li>
                <li>• Tradução de regras legais em UX</li>
                <li>• Integração com APIs</li>
                <li>• Desenho do modelo multimodal</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">Atuação como:</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Arquiteto da experiência</li>
                <li>• Mediador entre negócio e tecnologia</li>
                <li>• Guardião da consistência da jornada</li>
                <li>• Referência técnica em UX conversacional</li>
              </ul>
              <p className="text-muted-foreground text-sm mt-4">
                <strong>Times:</strong> Stellantis, DigitalBot e Blip
              </p>
            </div>
          </div>
        </section>

        {/* Strategic Framing */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Enquadramento Estratégico</h2>
          
          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-lg font-medium">
              O sistema foi desenhado como: uma plataforma de eventos, não um bot.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-sm font-medium">Omnichannel por design</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-sm font-medium">Físico como extensão do digital</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-sm font-medium">Exceção como parte da arquitetura</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-sm font-medium">Escalabilidade por cidade</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-sm font-medium">Dados como ativo estratégico</p>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">KPIs:</h3>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="font-medium">Agendamento</p>
                <p className="text-muted-foreground">Taxa de conclusão</p>
              </div>
              <div>
                <p className="font-medium">Comparecimento</p>
                <p className="text-muted-foreground">Conversão presencial</p>
              </div>
              <div>
                <p className="font-medium">Check-in</p>
                <p className="text-muted-foreground">Tempo médio</p>
              </div>
              <div>
                <p className="font-medium">Test-drive</p>
                <p className="text-muted-foreground">Taxa de conversão</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Strategy */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Estratégia de Solução</h2>
          
          <p className="text-muted-foreground leading-relaxed">A solução integrou múltiplos canais e sistemas:</p>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="font-medium">WhatsApp</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="font-medium">QR Codes</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="font-medium">Totens físicos</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="font-medium">APIs + CRM</p>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Componentes principais:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Menu dinâmico por praça</li>
              <li>• Sistema de agendamento (visitante e test-drive)</li>
              <li>• Assinatura digital de termo (DocuSign)</li>
              <li>• Check-in via QR Code</li>
              <li>• Fila digital de test-drive</li>
              <li>• Recuperação automática de convite</li>
              <li>• Notificações pré-evento, durante e pós-evento</li>
              <li>• Pesquisa de satisfação</li>
            </ul>
          </div>

          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-lg font-medium">
              O bot passou a ser: o maestro da operação do evento.
            </p>
          </div>
        </section>

        {/* Execution */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Execução</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">Escala:</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• 2 experiências distintas (Jeep e Ram)</li>
                <li>• Mais de <strong className="text-foreground">120 fluxos</strong> conversacionais</li>
                <li>• Mais de <strong className="text-foreground">300 variações</strong> de estado</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">4 tipos de usuário:</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Visitante</li>
                <li>• Test-drive</li>
                <li>• Fila de espera</li>
                <li>• Promotor</li>
              </ul>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">3 momentos da jornada:</h3>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <p className="font-medium">Pré-evento</p>
                <p className="text-xs text-muted-foreground mt-1">Agendamento, termo, confirmação</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <p className="font-medium">Durante</p>
                <p className="text-xs text-muted-foreground mt-1">Check-in, fila, atrações</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <p className="font-medium">Pós-evento</p>
                <p className="text-xs text-muted-foreground mt-1">NPS, follow-up, leads</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Reduções técnicas:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-xl font-bold text-accent">-37%</p>
                <p className="text-sm text-muted-foreground">Caminhos duplicados</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-accent">-44%</p>
                <p className="text-sm text-muted-foreground">Mensagens redundantes</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-accent">-32%</p>
                <p className="text-sm text-muted-foreground">Loops de erro</p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Resultados e Impacto</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent">-41%</p>
              <p className="text-sm text-muted-foreground mt-2">Tempo médio de fila</p>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent">+33%</p>
              <p className="text-sm text-muted-foreground mt-2">Conversão para test-drive</p>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent">+28%</p>
              <p className="text-sm text-muted-foreground mt-2">Taxa de comparecimento</p>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent">-35%</p>
              <p className="text-sm text-muted-foreground mt-2">Esforço dos promotores</p>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent">+39%</p>
              <p className="text-sm text-muted-foreground mt-2">Leads qualificados</p>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-accent">+31%</p>
              <p className="text-sm text-muted-foreground mt-2">Resolução automática</p>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Impacto operacional:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Menos pessoas na recepção</li>
              <li>• Mais controle de fluxo</li>
              <li>• Maior previsibilidade</li>
              <li>• Menor erro humano</li>
              <li>• Menos retrabalho</li>
            </ul>
          </div>

          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Impacto de marca:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Experiência percebida como premium</li>
              <li>• Maior engajamento nas atrações</li>
              <li>• Jornada contínua entre físico e digital</li>
            </ul>
          </div>
        </section>

        {/* Omnichannel */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Experiência Omnichannel</h2>
          
          <p className="text-muted-foreground leading-relaxed">O usuário podia:</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm">Agendar no site</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm">Continuar no WhatsApp</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm">Chegar com QR Code</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm">Interagir em totens</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm">Receber senha digital</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm">Ser chamado pelo bot</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm">Recuperar convite</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm">Reagendar ou cancelar</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm">Participar do pós-evento</p>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-lg font-medium">
              A experiência não tinha "ponto de quebra". O evento virou um sistema.
            </p>
          </div>
        </section>

        {/* Learnings */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Aprendizados</h2>
          
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <ul className="space-y-3 text-muted-foreground">
              <li>• Eventos são sistemas complexos, não campanhas</li>
              <li>• Omnichannel exige arquitetura</li>
              <li>• UX conversacional resolve logística</li>
              <li>• Exceção é regra em ambientes físicos</li>
              <li>• Dados transformam ativação em produto</li>
            </ul>
          </div>

          <p className="text-muted-foreground leading-relaxed">O projeto consolidou:</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <p className="font-medium">Eventos como plataformas</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <p className="font-medium">Conversa como interface operacional</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <p className="font-medium">UX como estrutura de negócio</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="pt-8 border-t border-border">
          <div className="flex justify-between items-center">
            <Button asChild variant="outline" className="gap-2">
              <Link to="/work/caixa-residencial">
                <ArrowLeft size={16} />
                Case anterior
              </Link>
            </Button>
            <Button asChild className="gap-2">
              <Link to="/work/afya-educom">
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
