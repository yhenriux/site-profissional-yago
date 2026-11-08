import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { ArrowRight, BookOpenText, BriefcaseBusiness, Code2, Network, ShieldCheck } from "lucide-react";

const focus = [
  { icon: Network, title: "AI Solutions Architect", description: "Desenho de soluções com LLMs, RAG e agentes, integração com plataformas e decisões de arquitetura.", evidence: ["Arquitetura e orquestração","Integrações e APIs","Governança e requisitos"] },
  { icon: Code2, title: "AI Engineer", description: "Implementação de produtos inteligentes com Python, pipelines, testes automatizados e avaliação de respostas.", evidence: ["LLM Evaluation","Python e testes","CI/CD e observabilidade"] },
  { icon: ShieldCheck, title: "Arquitetura e governança de IA", description: "Confiabilidade, evidências, segurança, monitoramento e critérios para decisões em ambientes complexos.", evidence: ["Proveniência","Quality gates","Segurança e supervisão humana"] },
];

const trajectory = [
  { period: "2026 – atual", employer: "Inter", role: "Staff AI Solutions Architect", description: "Arquitetura e evolução de sistemas de IA, orquestração, avaliação e governança." },
  { period: "2025 – 2026", employer: "DigitalBot", role: "UX, Conversational AI & Curation Lead", description: "Liderança de experiências conversacionais, curadoria e qualidade de agentes para operações digitais." },
  { period: "2024 – 2025", employer: "Qintess / Banco do Brasil", role: "UX Researcher Sênior", description: "Pesquisa aplicada, estruturação de problemas complexos e capacitação de equipes." },
];

export default function Professional() {
  return <div>
    <Seo title="Atuação profissional em IA | Yago Henrique" description="Trajetória, áreas de atuação e competências de Yago Henrique em arquitetura de IA, engenharia, agentes, governança e projetos organizacionais." path="/professional" />
    <div className="section-container section-padding space-y-14">
      <header className="space-y-5 max-w-4xl">
        <p className="text-accent text-sm font-medium uppercase tracking-wider">Carreira e atuação profissional</p>
        <h1 className="text-3xl md:text-5xl font-semibold text-balance">Arquitetura de IA orientada à operação, qualidade e impacto</h1>
        <p className="text-lg md:text-xl text-muted-foreground">Atuo entre arquitetura, engenharia, produto e experiência para projetar sistemas inteligentes capazes de evoluir com critérios técnicos, observabilidade e governança.</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/engineering" className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold bg-primary text-primary-foreground">Avaliar competências técnicas <ArrowRight size={16} /></Link>
          <Link to="/work" className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium border border-border hover:bg-secondary">Cases de clientes e resultados <BriefcaseBusiness size={16} /></Link>
        </div>
      </header>
      <section className="space-y-5">
        <h2 className="text-2xl md:text-3xl font-semibold">Frentes de atuação</h2>
        <p className="text-sm text-muted-foreground max-w-2xl">Áreas de trabalho que se sobrepõem e se complementam na entrega de sistemas de IA.</p>
        <div className="grid md:grid-cols-3 gap-5">{focus.map(item=><article key={item.title} className="border border-border rounded-xl p-6 space-y-4"><item.icon className="text-accent" size={24}/><h3 className="text-xl font-semibold">{item.title}</h3><p className="text-sm text-muted-foreground">{item.description}</p><div className="flex flex-wrap gap-2">{item.evidence.map(t=><span key={t} className="text-xs rounded-md px-2 py-1.5 bg-secondary">{t}</span>)}</div></article>)}</div>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Trajetória selecionada</h2>
        <div className="border-l-2 border-border ml-2 space-y-7">{trajectory.map(t=><article key={t.employer} className="relative pl-7"><span className="absolute w-3 h-3 rounded-full bg-accent -left-[7px] top-2"/><p className="text-sm text-muted-foreground">{t.period} · {t.employer}</p><h3 className="text-lg font-semibold mt-1">{t.role}</h3><p className="text-sm text-muted-foreground max-w-2xl mt-2">{t.description}</p></article>)}</div>
      </section>
      <section className="grid md:grid-cols-2 gap-5">
        <div className="border border-border bg-secondary/50 rounded-lg p-7 space-y-4"><Code2 className="text-accent"/><h2 className="text-xl font-semibold">Evidências técnicas públicas</h2><p className="text-sm text-muted-foreground">Arquitetura, código, metodologia, testes e resultados acessíveis sem senha. O AI Reliability Lab apresenta esse percurso em detalhe.</p><Link to="/engineering/ai-reliability-lab" className="inline-flex gap-2 text-sm font-semibold text-accent">Ver o case de engenharia <ArrowRight size={15}/></Link></div>
        <div className="border border-border rounded-lg p-7 space-y-4"><BriefcaseBusiness className="text-accent"/><h2 className="text-xl font-semibold">Resultados em organizações</h2><p className="text-sm text-muted-foreground">Projetos de clientes podem conter informações protegidas por confidencialidade. Os detalhes permanecem disponíveis no espaço de acesso autorizado.</p><Link to="/work" className="inline-flex gap-2 text-sm font-semibold text-accent">Solicitar acesso aos cases <ArrowRight size={15}/></Link></div>
      </section>
      <section className="border-t border-border pt-8 flex flex-col md:flex-row gap-5 justify-between md:items-center"><div><h2 className="text-xl font-semibold">Pesquisa e prática caminham juntas</h2><p className="text-muted-foreground text-sm mt-2">Produção científica, ensino e pesquisa sustentam parte das decisões de arquitetura e avaliação.</p></div><Link to="/research" className="inline-flex gap-2 text-sm font-semibold text-accent">Explorar pesquisa <BookOpenText size={16}/></Link></section>
    </div>
  </div>;
}
