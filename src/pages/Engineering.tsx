import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { ArrowRight, ArrowUpRight, BookOpenText, Boxes, Code2, Database, GitBranch, ShieldCheck, TerminalSquare, Workflow } from "lucide-react";

const roles = [
  { title: "AI Solutions Architect", summary: "Arquitetura, integração, decisões técnicas e evolução de sistemas de IA.", skills: ["Arquitetura de LLMs", "RAG e agentes", "Governança e observabilidade"] },
  { title: "AI Engineer", summary: "Implementação, experimentação, testes, pipelines e operação de aplicações inteligentes.", skills: ["Python e APIs", "LLM Evaluation", "CI/CD e Docker"] },
  { title: "AI Reliability & Evaluation", summary: "Confiabilidade mensurável, regressões, segurança, proveniência e evidência.", skills: ["Golden datasets", "Quality gates", "Red teaming e revisão"] },
];

const stack = ["Python", "Streamlit", "Ollama", "Qwen3 4B", "SQLite", "pytest", "GitHub Actions", "Docker", "JSON / CSV"];

export default function Engineering() {
  return (
    <>
      <Seo title="Engenharia de IA e cases técnicos | Yago Henrique" description="Cases públicos de engenharia de IA: arquitetura, avaliação de LLMs, Python, RAG, governança, experimentação e código verificável." path="/engineering" />
      <div className="section-container section-padding space-y-16">
        <header className="max-w-4xl space-y-5">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">Portfólio técnico / acesso público</p>
          <h1 className="text-3xl md:text-5xl font-semibold text-balance">Engenharia de IA, arquitetura e sistemas confiáveis</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">Projetos com decisões arquiteturais, código, experimentos e critérios de qualidade. Uma visão direta da minha prática de engenharia, da formulação do problema à evidência de execução.</p>
          <div className="flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium" href="#cases">Explorar cases <ArrowRight size={16} /></a>
            <Link className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border text-sm font-medium hover:bg-secondary" to="/research">Pesquisa aplicada <BookOpenText size={16} /></Link>
          </div>
        </header>

        <section aria-labelledby="evidence-title" className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["100", "cenários de avaliação", "Dataset bancário sintético"],
            ["16", "políticas versionadas", "Evidência e referência"],
            ["6", "módulos interativos", "Inspeção, testes e relatórios"],
            ["37", "testes aprovados", "Pipeline automatizado"],
          ].map(([value, label, context]) => (
            <div key={label} className="border border-border rounded-lg bg-card p-5">
              <p className="text-3xl font-semibold text-foreground">{value}</p>
              <p className="font-medium text-sm mt-2">{label}</p>
              <p className="text-xs text-muted-foreground mt-1">{context}</p>
            </div>
          ))}
          <h2 id="evidence-title" className="sr-only">Indicadores verificáveis do projeto em destaque</h2>
        </section>

        <section id="cases" aria-labelledby="cases-heading" className="space-y-7 scroll-mt-28">
          <div>
            <p className="text-sm font-medium text-accent mb-2">Case de engenharia / código aberto</p>
            <h2 id="cases-heading" className="text-2xl md:text-3xl font-semibold">Projetos técnicos selecionados</h2>
            <p className="text-muted-foreground max-w-2xl mt-3">Documentação e artefatos públicos, com limitações explicitadas para permitir avaliação independente.</p>
          </div>
          <Link to="/engineering/ai-reliability-lab" className="group block rounded-xl border border-border overflow-hidden bg-card hover:shadow-lg transition-all">
            <div className="grid md:grid-cols-[1fr_1.05fr]">
              <div className="bg-primary text-primary-foreground px-7 py-10 md:p-10 relative min-h-60 flex flex-col justify-between">
                <div className="flex items-center gap-3 text-sm text-primary-foreground/70"><TerminalSquare size={18} /> AI Reliability Lab <span className="rounded-full border border-primary-foreground/25 px-2 py-0.5 text-xs">Open source</span></div>
                <div className="grid grid-cols-3 gap-3 py-8">
                  {[Database, Workflow, ShieldCheck].map((Icon, i) => <div key={i} className="h-20 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 flex items-center justify-center"><Icon size={29} strokeWidth={1.5} /></div>)}
                </div>
                <p className="text-sm text-primary-foreground/75">Dataset → Inferência → Métricas → Regressão</p>
              </div>
              <div className="p-7 md:p-10 flex flex-col justify-between gap-7">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2"><span className="badge-secondary text-xs">LLM Evaluation</span><span className="badge-secondary text-xs">AI Engineering</span><span className="badge-secondary text-xs">Observabilidade</span></div>
                  <h3 className="text-2xl font-semibold group-hover:text-accent transition-colors">AI Reliability Lab: avaliação reproduzível de LLMs em cenários bancários</h3>
                  <p className="text-muted-foreground">Laboratório público que avalia respostas, citações, recusas, segurança e latência. Inclui testes automatizados, experimentos reais e documentação de decisões de engenharia.</p>
                </div>
                <div className="flex flex-wrap gap-2">{["Python", "Ollama", "Streamlit", "GitHub Actions"].map(x=><span key={x} className="text-xs border border-border rounded-md px-2.5 py-1.5 text-muted-foreground">{x}</span>)}</div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">Examinar o case completo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></span>
              </div>
            </div>
          </Link>
          <div className="rounded-lg bg-secondary/50 border border-border p-5 flex items-start gap-3">
            <GitBranch className="text-accent flex-shrink-0 mt-1" size={19} />
            <p className="text-sm text-muted-foreground">A seleção privilegia projetos públicos e auditáveis. Os projetos de clientes com restrições de confidencialidade continuam disponíveis mediante acesso autorizado em <Link className="underline underline-offset-4 text-foreground" to="/work">Trabalho e resultados</Link>.</p>
          </div>
        </section>

        <section aria-labelledby="roles-heading" className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-accent">Áreas de atuação</p>
            <h2 id="roles-heading" className="text-2xl md:text-3xl font-semibold">Competências por função técnica</h2>
            <p className="text-muted-foreground max-w-3xl">Três perspectivas complementares do meu trabalho, úteis para avaliadores de arquitetura, engenharia e confiabilidade de IA.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {roles.map((r, i) => <article key={r.title} className="p-6 rounded-lg border border-border bg-card space-y-4">
              <div className="flex items-center gap-2 text-accent">{i===0?<Boxes size={22}/>:i===1?<Code2 size={22}/>:<ShieldCheck size={22}/>}<span className="text-xs uppercase tracking-wide font-medium">Trilha {String(i+1).padStart(2, "0")}</span></div>
              <h3 className="text-xl font-semibold">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.summary}</p>
              <ul className="space-y-2 text-sm">{r.skills.map(x=><li key={x} className="flex items-center gap-2"><span aria-hidden="true" className="h-1.5 w-1.5 bg-accent rounded-full"/>{x}</li>)}</ul>
            </article>)}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 border-t border-border pt-10">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Tecnologias e métodos em evidência</h2>
            <p className="text-sm text-muted-foreground">Ferramentas efetivamente utilizadas no laboratório, com links para implementação e decisões.</p>
            <div className="flex flex-wrap gap-2">{stack.map(t=><span key={t} className="px-3 py-2 bg-secondary rounded-md text-sm">{t}</span>)}</div>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Pesquisa e aplicação</h2>
            <p className="text-muted-foreground text-sm">Minha pesquisa acadêmica acompanha os desafios práticos de arquitetura, avaliação e governança de sistemas inteligentes.</p>
            <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">Explorar pesquisa e publicações <ArrowUpRight size={16}/></Link>
          </div>
        </section>
      </div>
    </>
  );
}
