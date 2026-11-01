import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { ArrowRight, ExternalLink, GraduationCap, Users, Mic, Presentation, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import speakingIllustration from "@/assets/speaking-illustration.svg";

const currentPrograms = [
  {
    title: "Métricas & AI Agents",
    type: "Masterclass",
    description: "Qualidade, confiabilidade e impacto de agentes de IA em produção, conectando métricas técnicas, experienciais e de negócio.",
    link: "/ux-craft-academy/masterclass-metricas-ai-agents",
    internal: true,
  },
  {
    title: "Arquitetura da Conversa",
    type: "Masterclass",
    description: "Fluxos, contexto, memória, policy e avaliação para sistemas conversacionais baseados em LLMs.",
    link: "https://hotmart.com/pt-br/marketplace/produtos/arquitetura-da-conversa-fluxos-contexto-e-memoria/Y105763916S",
  },
  {
    title: "RAG & UX Conversacional",
    type: "Workshop",
    description: "Recuperação, raciocínio, arquitetura de conhecimento e qualidade de resposta em produtos de IA generativa.",
    link: "/ux-craft-academy/workshop-rag-ux-conversacional",
    internal: true,
  },
  {
    title: "UX Craft Sessions #1",
    type: "Encontro",
    description: "Seis palestras sobre métricas, curadoria de dados, Conversational AI, conteúdo e Data Science.",
    link: "https://hotmart.com/pt-br/marketplace/produtos/uxcraft-sessions-1-metricas-e-curadoria-de-dados/W103325287K",
  },
];

const talks = [
  ["Interfaces Conversacionais: Arquitetura da Informação e os Elementos do Design Conversacional", "YouTube", "https://www.youtube.com/watch?v=d2fi6rl6p88"],
  ["Content Design e IA", "UXCO", "https://www.youtube.com/watch?v=aCtCAIjocD4"],
  ["Representação da Informação e UX Writing", "Arara School", "https://www.youtube.com/watch?v=Tne6Pcdeip4"],
  ["Pesquisas em Design: entendendo as necessidades de informação", "HXConf 2022", "https://www.sympla.com.br/evento-online/hxconf-2022-conferencia-de-human-experience-design/1667140"],
];

const courses = [
  ["Fundamentos de UX Conversacional", "UX Craft Academy", "https://hotmart.com/pt-br/marketplace/produtos/craft-circle-fundamentos-de-ux-conversacional/F101726029A"],
  ["Engenharia de Prompt para UXers", "UX Craft Academy", "https://hotmart.com/pt-br/marketplace/produtos/engenharia-de-prompt-para-uxers/F101290234X"],
  ["Design Centrado no Usuário", "Arara School", "https://www.arara.school/curso/design-centrado-usuario"],
  ["Design Conversacional: Arquitetura da Informação", "Arara School", "https://www.arara.school/curso/design-conversacional"],
];

export default function Speaking() {
  return (
    <div className="flex flex-col">
      <Seo
        title="Palestras e ensino — Yago Henrique"
        description="Palestras, masterclasses, workshops e cursos sobre arquitetura de IA, agentes, RAG, avaliação, observabilidade e governança."
        path="/speaking"
      />
      <section className="section-container section-padding pb-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3"><Mic size={32} className="text-accent shrink-0" /><h1 className="text-4xl md:text-5xl font-semibold">Palestras e ensino</h1></div>
            <p className="text-xl text-muted-foreground leading-relaxed">Transformo pesquisa e prática em experiências de aprendizagem sobre arquitetura de IA, sistemas agentic, RAG, avaliação, observabilidade e governança.</p>
            <Button asChild><Link to="/contact">Convidar para um evento <ArrowRight size={16} /></Link></Button>
          </div>
          <div className="flex justify-center md:justify-end"><img loading="lazy" decoding="async" src={speakingIllustration} alt="Ilustração de palestras e ensino" className="w-full max-w-sm md:max-w-md" /></div>
        </div>
      </section>

      <section className="bg-secondary/50 section-padding">
        <div className="section-container">
          <div className="flex items-center gap-2 mb-4"><BrainCircuit size={24} className="text-accent" /><h2 className="text-2xl md:text-3xl font-semibold">Temas atuais</h2></div>
          <p className="text-muted-foreground max-w-2xl mb-8">Conteúdos recentes que conectam sistemas de IA, experiência, qualidade e operação organizacional.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {currentPrograms.map((program) => {
              const content = <><span className="text-xs font-medium text-accent">{program.type}</span><h3 className="text-lg font-semibold mt-2 group-hover:text-accent transition-colors">{program.title}</h3><p className="text-sm text-muted-foreground mt-2">{program.description}</p><span className="inline-flex items-center gap-1 text-sm text-accent mt-4">Ver detalhes {program.internal ? <ArrowRight size={14} /> : <ExternalLink size={14} />}</span></>;
              return program.internal ? <Link key={program.title} to={program.link} className="group bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors">{content}</Link> : <a key={program.title} href={program.link} target="_blank" rel="noopener noreferrer" className="group bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors">{content}</a>;
            })}
          </div>
        </div>
      </section>

      <section className="section-container section-padding">
        <div className="flex items-center gap-2 mb-8"><Presentation size={24} className="text-accent" /><h2 className="text-2xl md:text-3xl font-semibold">Palestras e participações</h2></div>
        <div className="divide-y divide-border border-y border-border">
          {talks.map(([title, event, link]) => <a key={title} href={link} target="_blank" rel="noopener noreferrer" className="group grid md:grid-cols-[180px,1fr,auto] gap-3 items-center py-5"><span className="text-sm text-accent">{event}</span><span className="font-medium group-hover:text-accent transition-colors">{title}</span><ExternalLink size={16} className="text-muted-foreground" /></a>)}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground section-padding">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-8"><GraduationCap size={26} /><h2 className="text-2xl md:text-3xl text-primary-foreground">Cursos</h2></div>
          <div className="grid md:grid-cols-2 gap-5">
            {courses.map(([title, institution, link]) => <a key={title} href={link} target="_blank" rel="noopener noreferrer" className="group p-5 border border-primary-foreground/20 rounded-lg hover:bg-primary-foreground/10 transition-colors"><div className="flex justify-between gap-4"><div><h3 className="text-lg text-primary-foreground">{title}</h3><p className="text-sm text-primary-foreground/70 mt-1">{institution}</p></div><ExternalLink size={16} className="shrink-0" /></div></a>)}
          </div>
          <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-primary-foreground/20 pt-7">
            <div><p className="font-semibold">Conteúdo para equipes e organizações</p><p className="text-sm text-primary-foreground/70 mt-1">Palestras e workshops podem ser adaptados ao contexto do seu time.</p></div>
            <Button asChild variant="secondary"><Link to="/contact">Solicitar proposta <ArrowRight size={16} /></Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
}