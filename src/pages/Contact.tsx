import { Mail, Linkedin, MapPin, Instagram, BookOpen, Building2, Newspaper, Headphones, MessageCircle, Send } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import contactIllustration from "@/assets/contact-illustration.svg";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "yhenri.ux@gmail.com",
    href: "mailto:yhenri.ux@gmail.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/yhenria",
    href: "https://www.linkedin.com/in/yhenria/"
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@yago_ux",
    href: "https://www.instagram.com/yago_ux/"
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+55 31 99596-4760",
    href: "https://wa.me/5531995964760?text=Ol%C3%A1%2C%20Yago%21%20Encontrei%20seu%20contato%20pelo%20seu%20site%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA%20sobre%20%5Bassunto%5D"
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Belo Horizonte, Brasil",
    href: null
  }
];

const publications = [
  { name: "Bots Brasil", url: "https://medium.com/botsbrasil" },
  { name: "UX Collective BR", url: "https://brasil.uxdesign.cc/" },
  { name: "IA Biblio BR", url: "https://medium.com/ia-biblio-br" }
];

export default function Contact() {
  return (
    <div className="section-container section-padding">
      <Seo
        title="Contato — Yago Henrique"
        description="Fale com Yago Henrique sobre arquitetura de IA, produtos inteligentes, palestras, ensino e parcerias."
        path="/contact"
      />
      {/* Header */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <MessageCircle size={32} className="text-accent" />
            <h1 className="text-4xl md:text-5xl font-semibold">Contato</h1>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">
             Vamos construir sistemas de IA confiáveis e úteis.
          </p>
          <p className="text-muted-foreground leading-relaxed">
             Estou disponível para palestras, workshops, pesquisa aplicada e conversas sobre arquitetura de IA, produtos inteligentes, avaliação e governança.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img loading="lazy" decoding="async" 
            src={contactIllustration} 
            alt="Ilustração de contato e networking" 
            className="w-full max-w-sm md:max-w-md"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr,1fr] gap-10 items-start">
        {/* Left Column - Contact Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Send size={18} className="text-accent" />
              <h2 className="text-xl font-semibold">Informações de Contato</h2>
            </div>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:text-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="default" className="gap-2">
              <a href="https://wa.me/5531995964760?text=Ol%C3%A1%2C%20Yago%21%20Encontrei%20seu%20contato%20pelo%20seu%20site%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA%20sobre%20%5Bassunto%5D" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <a href="https://www.linkedin.com/in/yhenria/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <a href="mailto:yhenri.ux@gmail.com">
                <Mail size={18} />
                Email
              </a>
            </Button>
          </div>
        </div>

        {/* Right Column - Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/* UX Craft Academy */}
          <div className="bg-card border border-border rounded-lg p-5 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">UX Craft Academy</h3>
                <p className="text-xs text-muted-foreground">Minha edtech de formação em UX</p>
              </div>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed flex-1">
              Formação prática em UX Design, UX Writing e Design Conversacional para profissionais 
              que querem atuar em produtos digitais complexos.
            </p>
            <Button asChild variant="outline" size="sm" className="gap-2 w-full mt-4">
              <a 
                href="https://www.linkedin.com/company/ux-craft-academy/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin size={14} />
                Conhecer empresa
              </a>
            </Button>
          </div>

          {/* Newsletter */}
          <div className="bg-card border border-border rounded-lg p-5 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                <Newspaper className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">UX Potion</h3>
                <p className="text-xs text-muted-foreground">Sua po(r)ção semanal de UX</p>
              </div>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed flex-1">
              Newsletter semanal no LinkedIn com insights práticos sobre UX, IA e estratégia de produto.
            </p>
            <Button asChild variant="outline" size="sm" className="gap-2 w-full mt-4">
              <a 
                href="https://www.linkedin.com/newsletters/ux-potion-7233530230617866242/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin size={14} />
                Assinar newsletter
              </a>
            </Button>
          </div>

          {/* Podcast */}
          <div className="bg-card border border-border rounded-lg p-5 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                <Headphones className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Podcast</h3>
                <p className="text-xs text-muted-foreground">Conversas sobre UX e produto</p>
              </div>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed flex-1">
              Episódios sobre design conversacional, IA generativa e carreira em UX.
            </p>
            <Button asChild variant="outline" size="sm" className="gap-2 w-full mt-4">
              <a 
                href="https://open.spotify.com/show/1DMAV1ydDlaxpSzIAC2lv4" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Headphones size={14} />
                Ouvir no Spotify
              </a>
            </Button>
          </div>

          {/* Publications */}
          <div className="bg-card border border-border rounded-lg p-5 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Publicações</h3>
                <p className="text-xs text-muted-foreground">Artigos sobre UX e IA</p>
              </div>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Escrevo regularmente sobre UX Conversacional, IA Generativa e Estratégia de Produto.
            </p>
            <div className="flex flex-wrap gap-1.5 my-3 flex-1">
              {publications.map((pub) => (
                <a
                  key={pub.name}
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-secondary px-2 py-1 rounded-full hover:bg-secondary/80 transition-colors h-fit"
                >
                  {pub.name}
                </a>
              ))}
            </div>
            <Button asChild variant="outline" size="sm" className="gap-2 w-full mt-auto">
              <a 
                href="https://yagohenrique.medium.com/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BookOpen size={14} />
                Ver artigos no Medium
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Response Time */}
      <div className="mt-10 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground">
          Respondo todas as mensagens em até <span className="text-foreground font-medium">48 horas</span>.
        </p>
      </div>
    </div>
  );
}
