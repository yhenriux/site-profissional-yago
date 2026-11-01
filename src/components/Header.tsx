import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, PencilRuler } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Trabalho", href: "/work" },
  { label: "Pesquisa e escrita", href: "/research" },
  { label: "UX Craft Academy", href: "/ux-craft-academy" },
  { label: "Palestras e ensino", href: "/speaking" },
  { label: "Sobre", href: "/about" },
  { label: "Contato", href: "/contact" },
];

export function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + "/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-lg font-semibold text-foreground hover:text-accent transition-colors"
            onClick={() => setOpen(false)}
          >
            <PencilRuler size={18} />
            Yago Henrique
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors link-underline",
                    isActive(item.href)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation - Sheet/Drawer */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-foreground"
                aria-label="Abrir menu"
              >
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[320px] p-0">
              <SheetHeader className="p-6 pb-4 border-b border-border">
                <SheetTitle asChild>
                  <Link 
                    to="/" 
                    className="inline-flex items-center gap-2 text-lg font-semibold text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    <PencilRuler size={18} />
                    Yago Henrique
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="p-6">
                <ul className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "text-base font-medium transition-colors block py-3 px-4 rounded-lg",
                          isActive(item.href)
                            ? "text-foreground bg-secondary"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
