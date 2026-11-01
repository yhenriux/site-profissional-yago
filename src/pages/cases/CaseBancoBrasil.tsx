import { Link } from "react-router-dom";
import { ArrowLeft, Target, Users, Lightbulb, TrendingUp, Award, BookOpen, Layers, CheckCircle, Calendar, GraduationCap, Building } from "lucide-react";
import caseBancoBrasil from "@/assets/case-banco-brasil.jpg";

export default function CaseBancoBrasil() {
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
      <div className="mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="badge-secondary text-xs">Formação & Capacitação</span>
          <span className="badge-secondary text-xs">Discovery & Facilitação</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
          Programa de formação em Discovery, Lean Inception e Facilitação Estratégica
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Criei do zero um programa de formação que mudou a forma como uma diretoria inteira do Banco do Brasil concebia sistemas complexos.
        </p>
      </div>

      {/* Cover Image */}
      <div className="aspect-[21/9] bg-secondary/50 rounded-lg overflow-hidden mb-12">
        <img loading="lazy" decoding="async" 
          src={caseBancoBrasil} 
          alt="Banco do Brasil - Programa de Formação"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <div className="text-2xl md:text-3xl font-bold text-accent mb-2">3 meses</div>
          <div className="text-sm text-muted-foreground">Programa estruturado</div>
        </div>
        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <div className="text-2xl md:text-3xl font-bold text-accent mb-2">20</div>
          <div className="text-sm text-muted-foreground">Designers treinados</div>
        </div>
        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <div className="text-2xl md:text-3xl font-bold text-accent mb-2">2</div>
          <div className="text-sm text-muted-foreground">Workshops estratégicos</div>
        </div>
        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <div className="text-2xl md:text-3xl font-bold text-accent mb-2">Nacional</div>
          <div className="text-sm text-muted-foreground">Impacto em sistemas</div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-16 max-w-4xl">
        
        {/* Tese do Projeto */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Tese do Projeto</h2>
          </div>
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
            <p className="text-lg leading-relaxed">
              O problema não era falta de método. Era <strong>falta de capacidade instalada</strong> de pensar sistemas complexos com abordagem de design.
            </p>
          </div>
        </section>

        {/* Contexto de Negócio */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Building className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Contexto de Negócio</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              A Terceira Diretoria do Banco do Brasil era responsável por sistemas regulados, legados, críticos para operação e altamente dependentes de regras legais.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold mb-3">Cenário encontrado</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Projetos guiados por demanda técnica</li>
                  <li>• Pouco espaço para discovery</li>
                  <li>• Workshops inexistentes</li>
                  <li>• Decisões orientadas por herança de sistema</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold mb-3">Risco real</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Redesenhar sistemas sem entender o problema</li>
                  <li>• Replicar lógicas antigas</li>
                  <li>• Gerar retrabalho</li>
                  <li>• Criar soluções ilegíveis para usuários internos</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Descoberta do Problema */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Descoberta do Problema</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold mb-4">Dados observados</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Ausência de método de discovery</li>
                  <li>• Reuniões improdutivas</li>
                  <li>• Baixa maturidade em facilitação</li>
                </ul>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Decisões tomadas sem hipótese</li>
                  <li>• Projetos começando direto em requisitos</li>
                </ul>
              </div>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
              <h4 className="font-semibold mb-3">Insight-chave</h4>
              <p className="text-muted-foreground">
                O gargalo não era técnico. Era <strong>cognitivo e organizacional</strong>: ninguém sabia estruturar um problema antes de resolver.
              </p>
            </div>
          </div>
        </section>

        {/* Papel e Escopo */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Papel e Escopo</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold mb-4">Meu papel</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Criador do programa</li>
                <li>• Curador de métodos</li>
                <li>• Instrutor</li>
                <li>• Facilitador</li>
                <li>• Responsável pedagógico</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold mb-4">Escopo do programa</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Lean Inception</li>
                <li>• Discovery</li>
                <li>• Design Sprint</li>
                <li>• Design Thinking</li>
                <li>• Facilitação</li>
                <li>• Workshops complexos</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Estratégia de Design */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Layers className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Estratégia de Design</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold mb-4">Reformulação do problema</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Não era:</p>
                  <p className="font-medium">"Ensinar ferramentas"</p>
                </div>
                <div className="p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Era:</p>
                  <p className="font-medium">"Instalar um modo de pensar estratégico"</p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold mb-4">Hipótese central</h4>
              <p className="text-muted-foreground mb-4">
                Se designers aprenderem a estruturar problemas, dominarem facilitação, operarem discovery e conduzirem workshops...
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-accent" />
                  O banco tomará decisões melhores
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-accent" />
                  Sistemas nascerão mais claros
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-accent" />
                  O retrabalho diminuirá
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Processo e Documentação */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Processo e Documentação</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold mb-4">Estrutura do programa</h4>
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="text-accent" size={20} />
                <span className="text-muted-foreground">3 meses • Módulos progressivos • Prática aplicada</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium mb-2">Módulos</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Lean Inception</li>
                    <li>• Discovery orientado a hipótese</li>
                    <li>• Design Sprint</li>
                    <li>• Design Thinking</li>
                    <li>• Facilitação de grupos técnicos</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Artefatos</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Roteiros de workshop</li>
                    <li>• Canvases adaptados</li>
                    <li>• Fluxos de decisão</li>
                    <li>• Mapas de problema</li>
                    <li>• Exercícios com sistemas reais</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
              <p className="text-lg font-medium">
                O programa não era aula. Era <strong>infraestrutura de decisão</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Resultados e Impacto */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Resultados e Impacto</h2>
          </div>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold mb-4">Impacto direto</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <GraduationCap size={16} className="text-accent" />
                    20 designers capacitados
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-accent" />
                    Criação de linguagem comum
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-accent" />
                    Adoção de discovery
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-accent" />
                    Uso de workshops estratégicos
                  </li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold mb-4">Desdobramento institucional</h4>
                <p className="text-muted-foreground mb-3">Fui convidado para conduzir:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Workshop do sistema de pagamentos</strong> — fornecedores, terceirizados, estoque logístico</li>
                  <li>• <strong>Workshop do GED</strong> — sistema nacional de gestão eletrônica de documentos</li>
                </ul>
              </div>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
              <h4 className="font-semibold mb-3">Esses workshops:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Não existiam antes</li>
                <li>• Nunca tinham sido feitos nesse formato</li>
                <li>• Foram conduzidos por mim como resultado direto do programa</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Liderança e Influência */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Liderança e Influência</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold mb-4">Atuação</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Arquiteto de método</li>
                <li>• Formador de pessoas</li>
                <li>• Mediador entre áreas</li>
                <li>• Referência técnica</li>
                <li>• Agente de mudança</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold mb-4">Influência direta</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Designers</li>
                <li>• Gestores</li>
                <li>• Áreas técnicas</li>
                <li>• Diretoria</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Aprendizados */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold">Aprendizados e Maturidade</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold mb-4">Principais aprendizados</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Design é infraestrutura cognitiva</li>
                  <li>• Workshop é ferramenta política</li>
                </ul>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Discovery é sistema</li>
                  <li>• Ensinar é multiplicar impacto</li>
                </ul>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold mb-4">Evolução profissional</h4>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">De:</p>
                  <p className="font-medium">UX Researcher</p>
                </div>
                <ArrowLeft className="rotate-180 text-accent" size={20} />
                <div className="p-3 bg-accent/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">Para:</p>
                  <p className="font-medium">Estrategista organizacional por meio do design</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Frase-Síntese */}
        <section className="border-t border-border pt-12">
          <blockquote className="text-2xl md:text-3xl font-semibold text-center leading-relaxed">
            "Este projeto instalou no Banco do Brasil uma capacidade inédita de estruturar problemas complexos por meio de design, influenciando sistemas críticos e decisões estratégicas."
          </blockquote>
        </section>

      </div>

      {/* Back to Work */}
      <div className="mt-16 pt-8 border-t border-border">
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
