import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Layout } from "@/components/Layout";
import Home from "./pages/Home";

const Work = lazy(() => import("./pages/Work"));
const About = lazy(() => import("./pages/About"));
const Research = lazy(() => import("./pages/Research"));
const Speaking = lazy(() => import("./pages/Speaking"));
const Contact = lazy(() => import("./pages/Contact"));
const CaseBancoBrasil = lazy(() => import("./pages/cases/CaseBancoBrasil"));
const CaseDrogariaAraujo = lazy(() => import("./pages/cases/CaseDrogariaAraujo"));
const CaseCaixaResidencial = lazy(() => import("./pages/cases/CaseCaixaResidencial"));
const CaseStellantis = lazy(() => import("./pages/cases/CaseStellantis"));
const CaseAfyaEducom = lazy(() => import("./pages/cases/CaseAfyaEducom"));
const CaseOpty = lazy(() => import("./pages/cases/CaseOpty"));
const CaseAtleticoMineiro = lazy(() => import("./pages/cases/CaseAtleticoMineiro"));
const CaseIntranetDigitalbot = lazy(() => import("./pages/cases/CaseIntranetDigitalbot"));
const CaseFrameworkEntrega = lazy(() => import("./pages/cases/CaseFrameworkEntrega"));
const CaseMatrizResponsabilidades = lazy(() => import("./pages/cases/CaseMatrizResponsabilidades"));
const CaseHandoffUxDev = lazy(() => import("./pages/cases/CaseHandoffUxDev"));
const CaseGuildaResultados = lazy(() => import("./pages/cases/CaseGuildaResultados"));
const CaseChecklistGovernanca = lazy(() => import("./pages/cases/CaseChecklistGovernanca"));
const UXCraftAcademy = lazy(() => import("./pages/UXCraftAcademy"));
const MasterclassMetricasAIAgents = lazy(() => import("./pages/MasterclassMetricasAIAgents"));
const WorkshopRagUxConversacional = lazy(() => import("./pages/WorkshopRagUxConversacional"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Layout>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/banco-brasil" element={<CaseBancoBrasil />} />
              <Route path="/work/drogaria-araujo" element={<CaseDrogariaAraujo />} />
              <Route path="/work/caixa-residencial" element={<CaseCaixaResidencial />} />
              <Route path="/work/stellantis" element={<CaseStellantis />} />
              <Route path="/work/afya-educom" element={<CaseAfyaEducom />} />
              <Route path="/work/opty" element={<CaseOpty />} />
              <Route path="/work/atletico-mineiro" element={<CaseAtleticoMineiro />} />
              <Route path="/work/intranet-digitalbot" element={<CaseIntranetDigitalbot />} />
              <Route path="/work/framework-entrega" element={<CaseFrameworkEntrega />} />
              <Route path="/work/matriz-responsabilidades" element={<CaseMatrizResponsabilidades />} />
              <Route path="/work/handoff-ux-dev" element={<CaseHandoffUxDev />} />
              <Route path="/work/guilda-resultados" element={<CaseGuildaResultados />} />
              <Route path="/work/checklist-governanca" element={<CaseChecklistGovernanca />} />
              <Route path="/about" element={<About />} />
              <Route path="/research" element={<Research />} />
              <Route path="/speaking" element={<Speaking />} />
              <Route path="/ux-craft-academy" element={<UXCraftAcademy />} />
              <Route path="/ux-craft-academy/masterclass-metricas-ai-agents" element={<MasterclassMetricasAIAgents />} />
              <Route path="/ux-craft-academy/workshop-rag-ux-conversacional" element={<WorkshopRagUxConversacional />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
