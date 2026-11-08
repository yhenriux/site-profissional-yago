import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, CheckCircle2, Clock3, Code2, Database, ExternalLink, FileJson, GitBranch, Layers3, PlayCircle, ShieldCheck, TestTube2, Workflow } from "lucide-react";

const gh="https://github.com/yhenriux/ai-reliability-lab";
const links = {
  app:"https://ai-reliability-lab.streamlit.app/",
  ci:gh+"/actions",
  code:gh,
  method:gh+"/blob/main/docs/EVALUATION.md",
  architecture:gh+"/blob/main/docs/ARCHITECTURE.md",
  selection:gh+"/blob/main/docs/MODEL_SELECTION.md",
  results:gh+"/blob/main/docs/RESULTS.md",
  review:gh+"/blob/main/docs/HUMAN_REVIEW.md",
  roadmap:gh+"/blob/main/docs/ROADMAP.md",
  data:gh+"/blob/main/data/golden_v2.json",
  artifact:gh+"/blob/main/data/real_smoke_smollm2_135m.json",
  reviewIssue:gh+"/issues/9",
};

const categories = [
  { label: "Perguntas respondíveis", value: 48, detail: "Verificação de resposta e citação" },
  { label: "Sem evidência", value: 20, detail: "Recusa de informação indisponível" },
  { label: "Adversariais", value: 20, detail: "Tentativas de contorno e vazamento" },
  { label: "Ambíguas", value: 12, detail: "Solicitação de esclarecimento" },
];

const modules = [
  ["Dashboard","Indicadores e histórico de execuções"],
  ["FAQ Playground","Perguntas livres e casos de referência"],
  ["Evaluation Studio","Execução integral ou por categoria"],
  ["Regression Testing","Comparação entre versões e falhas"],
  ["Safety Lab","Recusas, ataques e ausência de evidência"],
  ["Reports & History","Rastreabilidade e exportação CSV/JSON"],
];

const decisions = [
  ["Streamlit + Python","Permite construir e testar seis fluxos com poucas dependências, priorizando a camada de avaliação.","Menor controle visual em comparação com um front-end customizado."],
  ["SQLite + JSON/CSV","Simplifica o histórico local e torna os relatórios portáteis e inspecionáveis.","O armazenamento da hospedagem gratuita pode ser reiniciado."],
  ["Demo oráculo + Ollama","Separa a integridade do motor de testes da inferência efetivamente gerada por um LLM.","O modo demo tem acesso ao gabarito e seus resultados exigem rotulagem explícita."],
  ["Métricas lexicais transparentes","Token-F1, cobertura de conceitos, citações, recusas e sobreposição com evidências podem ser reproduzidos.","A revisão humana e a validação semântica continuam necessárias."],
];

function OutLink({ href, children, className="" }:{href:string,children:React.ReactNode,className?:string}) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}<ExternalLink size={15} aria-hidden="true"/></a>;
}
function Heading({ eyebrow, title, children }:{eyebrow:string,title:string,children?:React.ReactNode}) {
  return <div className="space-y-3 max-w-3xl"><p className="text-accent uppercase tracking-widest text-xs font-semibold">{eyebrow}</p><h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>{children&&<p className="text-muted-foreground leading-relaxed">{children}</p>}</div>;
}

export default function CaseAiReliabilityLab() {
  return <div>
    <Seo title="AI Reliability Lab | Case técnico de LLM Evaluation" description="Arquitetura, código, método e resultados auditáveis de um laboratório de avaliação de LLMs com Python, Ollama, Streamlit, pytest e GitHub Actions." path="/engineering/ai-reliability-lab" type="article" jsonLd={{"@context":"https://schema.org","@type":"TechArticle",headline:"AI Reliability Lab: engenharia de avaliação de LLMs",author:{"@type":"Person",name:"Yago Henrique"},url:"https://yagohenrique.com.br/engineering/ai-reliability-lab",about:["AI Engineering","LLM Evaluation","Reliability Engineering"]}} />
    <div className="section-container pt-8 pb-20 space-y-16">
      <nav aria-label="Localização" className="flex flex-wrap gap-2 text-sm text-muted-foreground"><Link to="/engineering" className="hover:text-foreground">Engenharia de IA</Link><span aria-hidden="true">/</span><span aria-current="page" className="text-foreground">AI Reliability Lab</span></nav>

      <header className="grid lg:grid-cols-[minmax(0,1fr)_290px] gap-9 items-start">
        <div className="space-y-5">
          <div className="flex flex-wrap gap-2"><span className="badge-secondary text-xs">Case técnico público</span><span className="badge-secondary text-xs">LLM Evaluation</span><span className="badge-secondary text-xs">AI Reliability Engineering</span></div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-balance">AI Reliability Lab</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">Como estruturar avaliações reproduzíveis para assistentes bancários com LLMs, incluindo qualidade da resposta, evidências, segurança, latência e regressão.</p>
          <p className="text-sm text-muted-foreground max-w-3xl">Laboratório autoral de código aberto, com instituição financeira inteiramente fictícia. A documentação distingue execução real, baseline determinístico e validações ainda pendentes.</p>
          <div className="flex flex-wrap gap-3">
            <OutLink href={links.app} className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-md px-5 py-3 text-sm font-semibold">Abrir laboratório <ArrowUpRight size={16}/></OutLink>
            <OutLink href={links.code} className="inline-flex items-center gap-2 border border-border rounded-md px-5 py-3 text-sm font-medium hover:bg-secondary">Ver código no GitHub</OutLink>
            <OutLink href={links.results} className="inline-flex items-center gap-2 border border-border rounded-md px-5 py-3 text-sm font-medium hover:bg-secondary">Resultados auditáveis</OutLink>
          </div>
        </div>
        <aside className="rounded-xl border border-border bg-secondary/30 p-5 space-y-5" aria-label="Ficha técnica">
          <h2 className="text-base font-semibold">Ficha técnica</h2>
          {[["Domínio","FAQ bancária sintética"],["Escopo","Avaliação de geração com evidência"],["Backend","Python + SQLite"],["Inferência","Ollama / Qwen3 4B"],["Interface","Streamlit"],["Qualidade","pytest + GitHub Actions"]].map(([a,b])=><div key={a} className="border-b border-border pb-3 last:border-b-0 last:pb-0"><p className="text-xs text-muted-foreground">{a}</p><p className="text-sm font-medium mt-1">{b}</p></div>)}
        </aside>
      </header>

      <section aria-label="Indicadores do projeto" className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[["100","cenários versionados"],["16","políticas fictícias"],["6","módulos de interface"],["37","testes aprovados no CI"]].map(([v,l])=><div key={l} className="border border-border rounded-lg p-5"><p className="text-3xl font-semibold">{v}</p><p className="text-sm text-muted-foreground mt-2">{l}</p></div>)}
      </section>

      <section className="space-y-6">
        <Heading eyebrow="01 / Problema" title="Respostas convincentes também podem conter erros">Um assistente bancário pode inventar condições, atribuir uma ação não executada ao sistema, citar uma política incorreta ou aceitar uma instrução maliciosa. Comparar essas falhas exige casos de referência, critérios explícitos e resultados inspecionáveis.</Heading>
        <div className="grid md:grid-cols-3 gap-4">
          {[{icon:ShieldCheck,title:"Confiabilidade",desc:"Recusas, ausência de evidência e tentativas de contornar regras."},{icon:Database,title:"Proveniência",desc:"Respostas vinculadas a políticas fictícias, IDs e hashes de versão."},{icon:GitBranch,title:"Evolução",desc:"Comparações por caso para identificar regressões e falhas críticas."}].map(item=><div className="bg-card border border-border rounded-lg p-5 space-y-3" key={item.title}><item.icon className="text-accent" size={23}/><h3 className="text-lg font-semibold">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></div>)}
        </div>
      </section>

      <section className="space-y-7">
        <Heading eyebrow="02 / Arquitetura" title="Da política sintética ao relatório reproduzível">O executor Python recebe uma pergunta e a evidência autorizada, solicita a resposta ao provedor e registra critérios de avaliação, métricas e metadados. Os resultados alimentam a interface e a comparação de regressões.</Heading>
        <figure className="border border-border rounded-xl overflow-hidden bg-secondary/30 p-5 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-stretch text-center">
            {[
              {icon:BookOpen,label:"Dados versionados",note:"100 perguntas · 16 políticas"},
              {icon:Workflow,label:"Motor Python",note:"Prompts · casos · execução"},
              {icon:Layers3,label:"Demo / Ollama",note:"Oráculo · modelo real"},
              {icon:FileJson,label:"Métricas e relatórios",note:"Qualidade · JSON · CSV"}
            ].map((item,i)=><div key={item.label} className="relative bg-card border border-border rounded-lg px-3 py-6 flex flex-col items-center justify-center gap-3 min-h-44"><item.icon size={26} className="text-accent"/><p className="text-sm font-semibold">{item.label}</p><p className="text-xs text-muted-foreground">{item.note}</p>{i<3&&<ArrowRight className="hidden md:block absolute -right-[19px] top-1/2 z-10 -translate-y-1/2 text-accent bg-background rounded-full" size={22}/>}</div>)}
          </div>
          <figcaption className="text-xs text-muted-foreground mt-5">Visão simplificada. A documentação técnica contém os diagramas Mermaid de componentes, sequência e fronteiras de confiança.</figcaption>
        </figure>
        <div className="flex flex-wrap gap-3">
          <OutLink href={links.architecture} className="inline-flex gap-2 items-center text-sm font-medium text-accent hover:underline">Explorar arquitetura completa</OutLink>
          <OutLink href={links.method} className="inline-flex gap-2 items-center text-sm font-medium text-accent hover:underline">Metodologia e fórmulas</OutLink>
        </div>
      </section>

      <section className="space-y-7">
        <Heading eyebrow="03 / Dataset e casos de teste" title="Quatro dimensões de comportamento">Os 100 cenários do Aurora Bank foram construídos sobre 16 políticas fictícias. A distribuição cobre perguntas respondíveis, ausência de informação, ataques adversariais e ambiguidades.</Heading>
        <div className="grid md:grid-cols-4 gap-4">{categories.map(c=><div key={c.label} className="rounded-lg border border-border p-5 bg-card"><span className="text-3xl font-semibold">{c.value}</span><p className="font-semibold mt-2 text-sm">{c.label}</p><p className="text-xs text-muted-foreground mt-2">{c.detail}</p></div>)}</div>
        <div className="rounded-lg border border-border bg-card p-6 space-y-4">
          <p className="text-sm font-medium text-muted-foreground">Exemplo didático</p>
          <blockquote className="border-l-2 border-accent pl-4 text-base font-medium">“Como faço para cadastrar uma chave Pix?”</blockquote>
          <p className="text-sm text-muted-foreground">A referência <code className="text-foreground">POL-001</code> descreve o caminho Pix → Minhas chaves → Cadastrar chave. O avaliador verifica a coerência com essa política, termos obrigatórios e a citação emitida no formato <code className="text-foreground">[POL-001]</code>.</p>
          <p className="text-xs text-muted-foreground">Neste experimento, o modelo recebe a política correta nos casos respondíveis. A recuperação automática de documentos será uma evolução específica.</p>
          <OutLink href={links.data} className="inline-flex gap-2 items-center text-sm font-medium text-accent hover:underline">Consultar dataset versionado</OutLink>
        </div>
      </section>

      <section className="space-y-7">
        <Heading eyebrow="04 / Critérios de avaliação" title="Métricas interpretáveis e limitações explícitas">O motor combina sinais lexicais e comportamentais, preservando razões de falha por caso. A análise considera que paráfrases corretas e contradições podem ser classificadas inadequadamente por heurísticas.</Heading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[["Token-F1","Sobreposição entre resposta gerada e referência."],["Cobertura de conceitos","Presença de termos considerados obrigatórios."],["Grounding lexical","Sobreposição das palavras relevantes com a evidência."],["Fidelidade de citações","Confere IDs realmente emitidos pelo modelo."],["Recusa e segurança","Identifica expressões de recusa e padrões sensíveis."],["Latência e regressões","Registra tempos observados e mudanças entre execuções."]].map(([name,desc])=><div key={name} className="p-5 border border-border rounded-lg space-y-2"><h3 className="text-base font-semibold">{name}</h3><p className="text-sm text-muted-foreground">{desc}</p></div>)}
        </div>
        <div className="border-l-4 border-accent bg-secondary/50 p-5 rounded-r-lg space-y-2">
          <p className="font-semibold text-sm">Um cuidado metodológico central</p>
          <p className="text-sm text-muted-foreground">O modo <strong>demo</strong> utiliza o gabarito e testa a consistência do pipeline. O modo <strong>Ollama</strong> registra respostas de inferência real. A aprovação do demo não indica precisão de LLM, e a revisão humana das métricas permanece aberta.</p>
        </div>
      </section>

      <section className="space-y-7">
        <Heading eyebrow="05 / Engenharia e produto" title="Seis módulos, um fluxo de investigação">A mesma aplicação permite explorar perguntas, executar uma suíte, comparar versões, investigar ataques e exportar resultados para auditoria.</Heading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{modules.map(([name,desc],i)=><div key={name} className="p-5 border border-border rounded-lg flex gap-4"><span className="text-accent font-semibold text-sm">{String(i+1).padStart(2,"0")}</span><div><h3 className="font-semibold text-base">{name}</h3><p className="text-sm text-muted-foreground mt-2">{desc}</p></div></div>)}</div>
        <OutLink href={links.app} className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:underline">Explorar interface publicada <PlayCircle size={16}/></OutLink>
      </section>

      <section className="space-y-7">
        <Heading eyebrow="06 / Experimentos e evidências" title="O que os resultados realmente demonstram">A rastreabilidade inclui modelo, configurações, dataset, relatórios e logs. A primeira inferência real foi um smoke test; o benchmark integral utiliza um modelo mais capaz e tem seus resultados publicados no repositório quando verificados.</Heading>
        <div className="overflow-x-auto border border-border rounded-lg">
          <table className="min-w-[640px] w-full text-sm text-left">
            <thead className="bg-secondary/70"><tr>{["Execução","Amostra","Resultado / situação","Interpretação"].map(x=><th key={x} className="px-5 py-4 font-semibold">{x}</th>)}</tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-5 py-4 font-medium">Baseline demo</td><td className="px-5 py-4">100 casos</td><td className="px-5 py-4">100% no harness</td><td className="px-5 py-4 text-muted-foreground">Teste determinístico, com gabarito conhecido.</td></tr>
              <tr><td className="px-5 py-4 font-medium">SmolLM2 135M</td><td className="px-5 py-4">8 casos reais</td><td className="px-5 py-4">0/8 aprovações heurísticas</td><td className="px-5 py-4 text-muted-foreground">Falhas observadas de seguimento de instruções.</td></tr>
              <tr><td className="px-5 py-4 font-medium">Qwen3 4B</td><td className="px-5 py-4">100 casos previstos</td><td className="px-5 py-4">Consultar relatório atualizado</td><td className="px-5 py-4 text-muted-foreground">Valores finais são registrados apenas após validação.</td></tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap gap-3">
          <OutLink href={links.results} className="inline-flex items-center gap-2 border border-border rounded-md px-4 py-3 text-sm hover:bg-secondary">Resultados e status</OutLink>
          <OutLink href={links.artifact} className="inline-flex items-center gap-2 border border-border rounded-md px-4 py-3 text-sm hover:bg-secondary">Artefato real inicial</OutLink>
          <OutLink href={links.ci} className="inline-flex items-center gap-2 border border-border rounded-md px-4 py-3 text-sm hover:bg-secondary">GitHub Actions</OutLink>
        </div>
      </section>

      <section className="space-y-7">
        <Heading eyebrow="07 / Decisões arquiteturais" title="Benefícios e compromissos técnicos">A escolha da stack prioriza demonstração pública, rastreabilidade e baixo custo operacional. Cada benefício convive com limitações documentadas.</Heading>
        <div className="grid md:grid-cols-2 gap-4">{decisions.map(([title,benefit,tradeoff])=><article key={title} className="p-6 rounded-lg border border-border space-y-3"><h3 className="text-lg font-semibold">{title}</h3><p className="text-sm">{benefit}</p><p className="text-sm text-muted-foreground"><strong className="text-foreground">Trade-off:</strong> {tradeoff}</p></article>)}</div>
      </section>

      <section className="space-y-7">
        <Heading eyebrow="08 / Qualidade e evolução" title="Resultados auditáveis, melhorias rastreadas">O projeto foi implementado com testes de interface e backend, critérios de regressão e relatórios exportáveis. A revisão humana independente de 20 respostas está especificada como evolução pendente, com rubrica para correção factual, fundamentação e segurança.</Heading>
        <div className="grid md:grid-cols-2 gap-4">
          <article className="p-6 rounded-lg bg-secondary/50 border border-border space-y-4">
            <div className="flex items-center gap-2"><CheckCircle2 className="text-accent" size={20}/><h3 className="text-lg font-semibold">Entregas verificáveis</h3></div>
            <ul className="space-y-3 text-sm text-muted-foreground"><li>Dataset versionado e políticas sintéticas</li><li>Motor de métricas e regressão automatizada</li><li>Testes de integração dos seis módulos</li><li>Artefatos reais, CI/CD e documentação aberta</li></ul>
          </article>
          <article className="p-6 rounded-lg bg-card border border-border space-y-4">
            <div className="flex items-center gap-2"><Clock3 className="text-accent" size={20}/><h3 className="text-lg font-semibold">Evolução documentada</h3></div>
            <ul className="space-y-3 text-sm text-muted-foreground"><li>Revisão humana independente de 20 respostas</li><li>Calibração de falsos positivos e negativos</li><li>Acessibilidade e validação visual complementar</li><li>Benchmark comparativo e eventual recuperação RAG</li></ul>
            <OutLink href={links.reviewIssue} className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:underline">Acompanhar revisão qualitativa</OutLink>
          </article>
        </div>
        <div className="flex flex-wrap gap-3">
          <OutLink href={links.review} className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">Protocolo de revisão humana</OutLink>
          <OutLink href={links.roadmap} className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">Roadmap técnico</OutLink>
          <OutLink href={links.selection} className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">Critérios de escolha do modelo</OutLink>
        </div>
      </section>

      <section className="border-t border-border pt-10 flex flex-col md:flex-row justify-between gap-6 md:items-center">
        <div className="space-y-2"><h2 className="text-xl font-semibold">Quer avaliar a implementação?</h2><p className="text-sm text-muted-foreground max-w-lg">O código, os testes, o dataset e o histórico de evolução estão disponíveis para revisão técnica independente.</p></div>
        <div className="flex flex-wrap gap-3"><OutLink href={links.code} className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-md px-4 py-3 text-sm font-medium">Inspecionar repositório</OutLink><Link to="/contact" className="inline-flex items-center gap-2 border border-border rounded-md px-4 py-3 text-sm font-medium">Conversar sobre o projeto <ArrowRight size={15}/></Link></div>
      </section>
      <Link to="/engineering" className="inline-flex gap-2 items-center text-sm text-muted-foreground hover:text-foreground"><ArrowLeft size={16}/> Todos os cases técnicos</Link>
    </div>
  </div>;
}
