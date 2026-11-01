import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { GraduationCap, Calendar, Users, ArrowRight, ExternalLink, Sparkles, Zap, Mic, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import uxCraftLogo from "@/assets/ux-craft-academy-logo.png";

type Item = {
  id: string;
  title: string;
  description: string;
  link: string;
  internal?: boolean;
  externalLink?: string;
  meta?: string;
  price?: string;
  featured?: boolean;
};

const highlightedCourses: Item[] = [
  {
    id: "masterclass-metricas-ai-agents",
    title: "Masterclass • Métricas & AI Agents",
    description: "Como avaliar qualidade, confiabilidade e impacto de agentes de IA em produção, com modelo estruturado de métricas técnicas, experienciais e de negócio.",
    link: "/ux-craft-academy/masterclass-metricas-ai-agents",
    internal: true,
    featured: true,
  },
  {
    id: "arquitetura-conversa",
    title: "Masterclass • Arquitetura da Conversa",
    description: "Fluxos, contexto e memória em sistemas conversacionais com LLMs. Frameworks, métricas e governança para agentes mais consistentes e explicáveis.",
    link: "https://hotmart.com/pt-br/marketplace/produtos/arquitetura-da-conversa-fluxos-contexto-e-memoria/Y105763916S?sck=HOTMART_PRODUCT_PAGE",
    price: "R$ 200",
  },
  {
    id: "fundamentos-ux-conversacional",
    title: "Curso • Fundamentos de UX Conversacional",
    description: "Curso introdutório e prático sobre como projetar produtos conversacionais — do problema ao fluxo, com microcopy, tom de voz e ecossistema técnico.",
    link: "https://hotmart.com/pt-br/marketplace/produtos/craft-circle-fundamentos-de-ux-conversacional/F101726029A",
    meta: "20 aulas • 5h",
    price: "R$ 400",
  },
  {
    id: "engenharia-prompt",
    title: "Curso • Engenharia de Prompt para UXers",
    description: "Domine prompts estratégicos para IA generativa: pesquisa, prototipação, design conversacional e cocriação aplicadas ao dia a dia do UXer.",
    link: "https://hotmart.com/pt-br/marketplace/produtos/engenharia-de-prompt-para-uxers/F101290234X",
    meta: "28 aulas • 4h",
    price: "R$ 400",
  },
];

const masterclasses: Item[] = [
  {
    id: "mc-metricas-ai-agents",
    title: "Métricas & AI Agents: Qualidade, Confiabilidade e Impacto",
    description: "Três camadas integradas de avaliação — técnica, experiencial e de impacto — para agentes de IA em produção: latência, fallback, drift, percepção de qualidade e retenção.",
    link: "/ux-craft-academy/masterclass-metricas-ai-agents",
    internal: true,
    externalLink: "https://hotmart.com/pt-br/marketplace/produtos/metricas-e-ai-agents-qualidade-confiabilidade-e-impacto/Y105739602D?sck=HOTMART_PRODUCT_PAGE",
    price: "R$ 200",
  },
  {
    id: "mc-arquitetura-conversa",
    title: "Arquitetura da Conversa: Fluxos, Contexto e Memória",
    description: "Construção de sistemas conversacionais consistentes e explicáveis com LLMs. Fundamentos de linguagem (Grice, Austin, Searle), memória, policy e frameworks de avaliação.",
    link: "https://hotmart.com/pt-br/marketplace/produtos/arquitetura-da-conversa-fluxos-contexto-e-memoria/Y105763916S?sck=HOTMART_PRODUCT_PAGE",
    price: "R$ 200",
  },
];

const workshops: Item[] = [
  {
    id: "ws-rag-ux-conversacional",
    title: "RAG & UX Conversacional: Recuperar, Raciocinar, Responder",
    description: "Aplicação estratégica de RAG em experiências conversacionais. Arquitetura de conhecimento, estratégias de recuperação, governança e qualidade de resposta em IA generativa.",
    link: "/ux-craft-academy/workshop-rag-ux-conversacional",
    internal: true,
    externalLink: "https://hotmart.com/pt-br/marketplace/produtos/workshop-rag-amp-ux-conversacional-recuperar-raciocinar-responder/G105739339A?sck=HOTMART_PRODUCT_PAGE",
    price: "R$ 200",
  },
  {
    id: "ws-grice",
    title: "Máximas de Grice no UX Conversacional",
    description: "Como transformar teoria linguística em decisões de design conversacional. Inclui gravação, e-book exclusivo e exercícios práticos para fluxos, chatbots e agentes de IA.",
    link: "https://hotmart.com/pt-br/marketplace/produtos/workshop-maximas-de-grice-no-ux-conversacional/M103318514R?sck=HOTMART_PRODUCT_PAGE",
    meta: "2h • Gravação + e-book",
    price: "R$ 100",
  },
];

const formations: Item[] = [
  {
    id: "fundamentos-ux-conversacional-full",
    title: "Fundamentos de UX Conversacional",
    description: "Como nascem e funcionam os chatbots do dia a dia. Quatro módulos cobrindo panorama do mercado, do problema ao fluxo, microcopy, tom de voz e o ecossistema por trás do bot.",
    link: "https://hotmart.com/pt-br/marketplace/produtos/craft-circle-fundamentos-de-ux-conversacional/F101726029A",
    meta: "20 aulas • 5h de conteúdo",
    price: "R$ 400",
  },
  {
    id: "engenharia-prompt-full",
    title: "Engenharia de Prompt para UXers",
    description: "Da ideia à entrega. Quatro módulos sobre fundamentos de prompt engineering, modelos mentais, prompting em fluxos conversacionais e prompt como ferramenta de cocriação.",
    link: "https://hotmart.com/pt-br/marketplace/produtos/engenharia-de-prompt-para-uxers/F101290234X",
    meta: "28 aulas • 4h de conteúdo",
    price: "R$ 400",
  },
];

const meetups: Item[] = [
  {
    id: "uxcraft-sessions-1",
    title: "UXCraft Sessions #1: Métricas e Curadoria de Dados",
    description: "Seis palestras com especialistas em UX, Conteúdo, Conversational AI e Data Science. Inclui e-book exclusivo, certificado e cupons para formações da UX Craft.",
    link: "https://hotmart.com/pt-br/marketplace/produtos/uxcraft-sessions-1-metricas-e-curadoria-de-dados/W103325287K?sck=HOTMART_PRODUCT_PAGE",
    meta: "6 palestras • Gravação completa",
    price: "R$ 150",
  },
];

function ItemSection({
  id,
  icon,
  title,
  description,
  items,
  bg,
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  items: Item[];
  bg?: string;
}) {
  return (
    <section id={id} className={`section-padding ${bg ?? ""}`}>
      <div className="section-container">
        <div className="flex items-center gap-3 mb-6">
          {icon}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
        </div>
        <p className="text-muted-foreground mb-8 max-w-2xl">{description}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            const PrimaryWrapper = ({ children }: { children: React.ReactNode }) =>
              item.internal ? (
                <Link to={item.link} className="block h-full">{children}</Link>
              ) : (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block h-full">{children}</a>
              );
            return (
              <Card key={item.id} className="h-full flex flex-col transition-all hover:shadow-lg hover:border-accent/50">
                <PrimaryWrapper>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    {(item.meta || item.price) && (
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-muted-foreground">
                        {item.meta && <span>{item.meta}</span>}
                        {item.meta && item.price && <span className="opacity-40">•</span>}
                        {item.price && <span className="font-medium text-accent">{item.price}</span>}
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <CardDescription className="text-sm leading-relaxed flex-grow">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </PrimaryWrapper>
                <div className="px-6 pb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium">
                  {item.internal ? (
                    <Link to={item.link} className="inline-flex items-center gap-1.5 text-accent hover:underline">
                      Ver detalhes <ArrowRight size={14} />
                    </Link>
                  ) : (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-accent hover:underline">
                      Acessar na Hotmart <ExternalLink size={14} />
                    </a>
                  )}
                  {item.internal && item.externalLink && (
                    <a href={item.externalLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-accent">
                      Hotmart <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}


export default function UXCraftAcademy() {
  return (
    <div className="min-h-screen">
      <Seo
        title="UX Craft Academy — AI Experience e produtos baseados em IA"
        description="Educação aplicada em AI Experience, sistemas conversacionais e produtos baseados em IA. Cursos, masterclasses e research-to-practice."
        path="/ux-craft-academy"
      />
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                <Sparkles size={16} />
                Educação aplicada em IA
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                UX Craft Academy
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                 Educação aplicada em <strong>AI Experience</strong>, sistemas conversacionais e produtos baseados em IA. Conteúdo que transforma pesquisa, arquitetura e avaliação em prática profissional.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <a href="#formacoes">
                    Ver formações
                    <ArrowRight size={18} />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#masterclasses">
                     Masterclasses e workshops
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center bg-secondary rounded-lg border border-border">
                <img loading="lazy" decoding="async" 
                  src={uxCraftLogo} 
                  alt="UX Craft Academy Logo" 
                  className="relative z-10 w-2/3 h-auto"
                />
                <div className="absolute top-6 right-6 badge-primary">AI Experience</div>
                <div className="absolute bottom-6 left-6 badge-secondary">RAG e agentes</div>
                <div className="absolute bottom-6 right-6 badge-secondary">Evaluation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="section-container grid md:grid-cols-3">
          {[
            ["Cursos", "Fundamentos e formações para construir repertório aplicado."],
            ["Masterclasses", "Aprofundamento em arquitetura, agentes, métricas e governança."],
            ["Research-to-practice", "Pesquisa traduzida em frameworks, decisões e prática profissional."],
          ].map(([title, text], index) => (
            <div key={title} className={`py-7 md:px-7 ${index !== 0 ? "md:border-l border-border" : ""}`}>
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="text-sm text-muted-foreground mt-2">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Carrossel de Destaques */}
      <section className="section-padding">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-10">
            <Sparkles className="text-accent" size={24} />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Destaques</h2>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {highlightedCourses.map((course) => {
                const CardWrapper = ({ children }: { children: React.ReactNode }) =>
                  course.internal ? (
                    <Link to={course.link} className="block h-full">{children}</Link>
                  ) : (
                    <a href={course.link} target="_blank" rel="noopener noreferrer" className="block h-full">{children}</a>
                  );
                return (
                <CarouselItem key={course.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <CardWrapper>
                    <Card className={`h-full flex flex-col transition-all hover:shadow-lg hover:border-accent/50 ${course.featured ? 'border-accent bg-accent/5' : ''}`}>
                      <CardHeader>
                        {course.featured && (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent mb-2">
                            <Sparkles size={12} />
                            DESTAQUE
                          </span>
                        )}
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col flex-grow">
                        <CardDescription className="text-sm leading-relaxed flex-grow">
                          {course.description}
                        </CardDescription>
                        <div className="mt-4 flex items-center gap-2 text-accent text-sm font-medium">
                          {course.internal ? "Ver detalhes" : "Acessar conteúdo"}
                          {course.internal ? <ArrowRight size={14} /> : <ExternalLink size={14} />}
                        </div>
                      </CardContent>
                    </Card>
                  </CardWrapper>
                </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4" />
            <CarouselNext className="hidden md:flex -right-4" />
          </Carousel>
        </div>
      </section>

      {/* Masterclasses */}
      <ItemSection
        id="masterclasses"
        icon={<Zap className="text-accent" size={24} />}
        title="Masterclasses"
        description="Imersões avançadas sobre arquitetura, avaliação e governança de sistemas de IA e agentes conversacionais."
        items={masterclasses}
        bg="bg-secondary/30"
      />

      {/* Workshops */}
      <ItemSection
        id="workshops"
        icon={<Calendar className="text-accent" size={24} />}
        title="Workshops"
        description="Encontros aplicados para transformar teoria em decisões práticas de design conversacional e IA."
        items={workshops}
      />

      {/* Cursos / Formações */}
      <ItemSection
        id="formacoes"
        icon={<GraduationCap className="text-accent" size={24} />}
        title="Cursos & Formações"
        description="Cursos completos para dominar UX Conversacional e Engenharia de Prompt aplicada a produtos digitais."
        items={formations}
        bg="bg-secondary/30"
      />

      {/* Meetups - UX Craft Sessions */}
      <ItemSection
        id="meetups"
        icon={<Mic className="text-accent" size={24} />}
        title="Meetups • UX Craft Sessions"
        description="Encontros com especialistas em UX, Conteúdo, Conversational AI e Data Science. Gravações completas com materiais de apoio."
        items={meetups}
      />


      {/* Seção de Mentoria */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="text-accent" size={24} />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Mentoria</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Acompanhamento personalizado para profissionais que desejam acelerar sua carreira em UX, 
              Design Conversacional ou IA aplicada a produtos. Sessões individuais focadas em 
              desafios reais, portfólio e estratégia de crescimento.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link to="/contact">
                Solicitar mentoria
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
