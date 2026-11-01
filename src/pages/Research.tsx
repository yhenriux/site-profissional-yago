import { ExternalLink, BookOpen, Newspaper, PenTool, GraduationCap, FlaskConical, FileText } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { newsletterArchive } from "@/lib/writing-archive";
import researchIllustration from "@/assets/research-illustration.svg";

const writing = [
  {
    title: "Por que tantos chatbots com IA falham e o que a ciência e o mercado já sabem sobre isso",
    description: "Confiabilidade, qualidade de resposta e operação de sistemas conversacionais baseados em IA.",
    type: "UX Potion #27",
  },
  {
    title: "RAG & UX Conversacional: Recuperar, Raciocinar, Responder",
    description: "Arquitetura de conhecimento, recuperação e qualidade de resposta em sistemas baseados em LLMs.",
    type: "UX Potion #26",
  },
  {
    title: "IA agêntica: conceito, arquitetura e implicações reais para UX",
    description: "Agentes, orquestração e implicações para produtos e experiências inteligentes.",
    type: "UX Potion #25",
  },
  {
    title: "Quem realmente venceu a corrida dos chatbots com IA em 2025?",
    description: "Uma leitura comparativa sobre produto, tecnologia e experiência no mercado de IA.",
    type: "UX Potion #24",
  },
];

const mediumArticles = [
  "O briefing nasce do diagnóstico, não o contrário.",
  "O futuro do UX Writing: tendências e desafios em ambientes conversacionais e inteligentes",
  "Canais Conversacionais e Experiência Multicanal: uma abordagem estratégica em UX com IA",
  "Projetar boas experiências conversacionais não é traduzir UI em texto",
  "Pessoas bibliotecárias podem trabalhar com UX?",
  "Arquitetura da Informação: considerações de um bibliotecário",
  "Atributos da informação: pontos de vista em UX Writing",
  "Voz e Tom no UX Writing: alguns aprendizados sobre conteúdo focado no usuário",
  "Um primeiro contato: a otimização de informações para pacotes de viagem com UX Writing",
  "Invasores na Nave? Seu estudo de caso completo sobre Landing Pages",
  "[Roteiro] Saiba tudo sobre a Teoria das Inteligências Múltiplas",
];

export default function Research() {
  return (
    <div className="flex flex-col">
      <Seo
        title="Pesquisa e escrita — Yago Henrique"
        description="Pesquisa doutoral, produção acadêmica e escrita técnica sobre governança, avaliação e arquitetura de sistemas baseados em LLMs."
        path="/research"
      />

      <section className="section-container section-padding pb-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <PenTool size={32} className="text-accent shrink-0" />
              <h1 className="text-4xl md:text-5xl font-semibold">Pesquisa e escrita</h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Investigo governança, avaliação e supervisão humana em sistemas baseados em LLMs — e transformo pesquisa em conhecimento aplicável para organizações e profissionais.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <a href="https://www.linkedin.com/newsletters/ux-potion-7233530230617866242" target="_blank" rel="noopener noreferrer">
                  Ler a UX Potion <ExternalLink size={16} />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://yagohenrique.medium.com/" target="_blank" rel="noopener noreferrer">
                  Ver artigos <ExternalLink size={16} />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img loading="lazy" decoding="async" src={researchIllustration} alt="Ilustração de pesquisa e escrita" className="w-full max-w-sm md:max-w-md" />
          </div>
          <details className="mt-8 border-t border-border pt-5">
            <summary className="cursor-pointer text-sm font-medium">Edições anteriores</summary>
            <div className="divide-y divide-border mt-4">
              {newsletterArchive.map(item => <a key={item.number} href="https://www.linkedin.com/newsletters/ux-potion-7233530230617866242" target="_blank" rel="noopener noreferrer" className="block py-3 text-sm hover:text-accent">#{item.number} · {item.title}</a>)}
            </div>
          </details>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground section-padding">
        <div className="section-container grid lg:grid-cols-[1.4fr,0.6fr] gap-10">
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-primary-foreground/70 text-sm font-medium">
              <GraduationCap size={18} /> Pesquisa doutoral
            </div>
            <h2 className="text-2xl md:text-3xl text-primary-foreground">Governança conversacional para sistemas baseados em LLMs em ambientes regulados</h2>
            <p className="text-primary-foreground/80 text-lg">
              Pesquisa na Universidade de Trás-os-Montes e Alto Douro sobre governança, proveniência, accountability, avaliação e supervisão humana em sistemas de IA.
            </p>
          </div>
          <div className="border-l border-primary-foreground/20 pl-6 space-y-2">
            <p className="text-sm text-primary-foreground/60">Vínculo de pesquisa</p>
            <p className="font-semibold">Smart Media Users</p>
            <p className="text-primary-foreground/80">Pesquisador permanente • ECA-USP • 2025–2027</p>
          </div>
        </div>
      </section>

      <section className="section-container section-padding">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4"><BookOpen size={20} className="text-accent" /><h2 className="text-xl font-semibold">Pesquisa acadêmica</h2></div>
            <p className="text-muted-foreground">Produção sobre governança conversacional, arquitetura da informação, linguagem, experiência e sistemas inteligentes.</p>
          </div>
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4"><FlaskConical size={20} className="text-accent" /><h2 className="text-xl font-semibold">Pesquisa em andamento</h2></div>
            <p className="text-muted-foreground">Estudos e manuscritos em desenvolvimento sobre avaliação, confiabilidade, proveniência e supervisão humana de LLMs.</p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 section-padding">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2"><Newspaper size={24} className="text-accent" /><h2 className="text-2xl md:text-3xl font-semibold">UX Potion</h2></div>
              <p className="text-muted-foreground mt-2">40 edições sobre IA, produto, dados, arquitetura conversacional e prática profissional.</p>
            </div>
            <a href="https://www.linkedin.com/newsletters/ux-potion-7233530230617866242" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline flex items-center gap-1">Ver todas as edições <ExternalLink size={14} /></a>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {writing.map((item) => (
              <a key={item.title} href="https://www.linkedin.com/newsletters/ux-potion-7233530230617866242" target="_blank" rel="noopener noreferrer" className="group p-5 bg-card border border-border rounded-lg hover:border-accent transition-colors">
                <span className="text-xs font-medium text-accent">{item.type}</span>
                <h3 className="text-lg font-semibold mt-2 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container section-padding">
        <div className="flex items-center gap-2 mb-8"><FileText size={24} className="text-accent" /><h2 className="text-2xl md:text-3xl font-semibold">Escrita técnica e arquivo</h2></div>
        <div className="divide-y divide-border border-y border-border">
          {mediumArticles.map((title) => (
            <a key={title} href="https://yagohenrique.medium.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-5 py-5">
              <span className="font-medium group-hover:text-accent transition-colors">{title}</span>
              <ExternalLink size={16} className="text-muted-foreground shrink-0" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}