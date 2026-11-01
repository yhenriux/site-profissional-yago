import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { ArrowLeft, Monitor, FileText, Award, BookOpen, MessageSquare, Users, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import workshopImage from "@/assets/workshop-rag-ux-conversacional.jpg";

const benefits = [
  { icon: Monitor, label: "Gravação completa" },
  { icon: Award, label: "Certificado digital" },
  { icon: BookOpen, label: "E-book exclusivo" },
  { icon: FileText, label: "Materiais e exercícios" },
  { icon: MessageSquare, label: "Grupo de discussão" },
  { icon: Tag, label: "Descontos para formações futuras" },
];

const contents = [
  "Fundamentos de RAG aplicados à experiência conversacional",
  "Estruturação de conhecimento para agentes e assistentes",
  "Diferença entre informação recuperada e resposta útil",
  "Padrões recorrentes de falha em soluções com IA generativa",
  "Exercícios guiados com cenários reais",
];

export default function WorkshopRagUxConversacional() {
  return (
    <div className="min-h-screen">
      <Seo
        title="Workshop RAG & UX Conversacional — UX Craft Academy"
        description="Segunda edição do workshop sobre RAG aplicado à experiência conversacional, conduzido por Yago Henrique."
        path="/ux-craft-academy/workshop-rag-ux-conversacional"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: "RAG & UX Conversacional: Recuperar, Raciocinar, Responder",
          description: "Workshop sobre RAG aplicado à UX conversacional.",
          provider: { "@type": "Organization", name: "UX Craft Academy" },
          instructor: { "@type": "Person", name: "Yago Henrique" },
        }}
      />
      {/* Hero */}
      <section className="bg-foreground text-background py-16 md:py-24">
        <div className="section-container">
          <Link to="/ux-craft-academy" className="inline-flex items-center gap-2 text-muted-foreground hover:text-background transition-colors mb-8 text-sm">
            <ArrowLeft size={16} />
            Voltar para UX Craft Academy
          </Link>

          <img loading="lazy" decoding="async"
            src={workshopImage}
            alt="Workshop RAG & UX Conversacional"
            className="w-full rounded-lg object-cover aspect-[16/9] mb-10"
          />

          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-accent/20 text-accent mb-4">
            Workshop • 2ª edição
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            RAG & UX Conversacional
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-6">
            Recuperar, Raciocinar, Responder
          </p>

          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 px-4 py-2 rounded-lg text-sm mb-6">
            Evento online realizado em 29 de janeiro de 2026
          </div>

          <p className="max-w-2xl text-muted-foreground text-lg">
            Este evento foi realizado e não possui mais inscrições disponíveis.
          </p>
        </div>
      </section>

      <div className="section-container">
        {/* Sobre o evento */}
        <section className="section-padding">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Sobre o evento</h2>
          <Card>
            <CardContent className="p-6 text-muted-foreground leading-relaxed text-sm space-y-4">
              <p>
                O evento aconteceu ao vivo, com transmissão online e gravação disponibilizada posteriormente aos participantes. Durante a sessão, foi explorada a aplicação prática de RAG em experiências conversacionais, partindo do problema recorrente enfrentado por muitos times: sistemas que respondem muito, explicam demais e ainda assim ajudam pouco.
              </p>
              <p>
                A proposta do workshop foi investigar como decisões de UX interferem diretamente na qualidade das respostas de IA. Em vez de tratar RAG como um recurso técnico isolado, o encontro trabalhou a relação entre recuperação de informação, raciocínio do modelo e forma de resposta percebida pelo usuário.
              </p>
              <p>
                Ao longo das atividades, foram discutidos critérios para decidir o que a IA deveria recuperar, quando deveria inferir e quando deveria simplesmente responder de maneira objetiva. Parte significativa da sessão foi dedicada à análise de casos reais e à observação de padrões de erro comuns, como respostas semanticamente plausíveis porém operativamente inadequadas, excesso de contexto irrelevante e justificativas artificiais geradas pelo modelo.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Conteúdos abordados */}
        <section className="pb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Conteúdos abordados</h2>
          <Card>
            <CardContent className="p-6">
              <ul className="text-muted-foreground text-sm leading-relaxed space-y-2">
                {contents.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Dinâmica */}
        <section className="pb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Dinâmica</h2>
          <Card>
            <CardContent className="p-6 text-muted-foreground leading-relaxed text-sm">
              O encontro foi estruturado em quatro momentos: contextualização do problema, aprofundamento conceitual, análise prática e discussão aberta. Os participantes puderam observar como pequenas decisões de arquitetura de informação alteram previsibilidade, confiabilidade e clareza das respostas.
            </CardContent>
          </Card>
        </section>

        {/* O que os participantes receberam */}
        <section className="pb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">O que os participantes receberam</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <Card key={b.label}>
                <CardContent className="p-5 flex items-center gap-3">
                  <b.icon size={20} className="text-accent shrink-0" />
                  <span className="text-sm font-medium">{b.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Público */}
        <section className="pb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Público presente</h2>
          <Card>
            <CardContent className="p-6 text-muted-foreground leading-relaxed text-sm">
              Participaram profissionais de UX, design conversacional, produto e pessoas envolvidas na implementação de chatbots, assistentes virtuais e agentes de IA. Não foi exigido conhecimento de programação, mas houve familiaridade prévia com produtos digitais.
            </CardContent>
          </Card>
        </section>

        {/* Facilitador */}
        <section className="pb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Facilitador</h2>
          <Card>
            <CardContent className="p-6 text-muted-foreground leading-relaxed text-sm">
              Yago Henrique conduziu o workshop apresentando estruturas de decisão utilizadas em projetos reais, conectando arquitetura de conhecimento, governança de respostas e métricas de qualidade em sistemas conversacionais.
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer banner */}
      <section className="bg-foreground text-background py-10 text-center">
        <p className="text-muted-foreground text-sm">
          Este evento foi realizado e não possui mais inscrições disponíveis.
        </p>
      </section>
    </div>
  );
}
