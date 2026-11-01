import { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, Eye, EyeOff, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface WorkAccessModalProps {
  open: boolean;
  onUnlock: (password: string) => boolean;
}

export function WorkAccessModal({ open, onUnlock }: WorkAccessModalProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);

    setTimeout(() => {
      const success = onUnlock(password);
      if (!success) {
        setError(true);
        setPassword("");
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent 
        className="sm:max-w-md [&>button]:hidden"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
            <Lock className="w-8 h-8 text-accent" />
          </div>
          <DialogTitle className="text-2xl">Desbloquear cases</DialogTitle>
          <DialogDescription className="text-base leading-relaxed">
            Esta seção é exclusiva para recrutadores, gerentes de design e profissionais 
            avaliando meu portfólio. Se você recebeu uma senha de acesso, insira abaixo.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Digite a senha de acesso"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className={`pr-10 ${error ? "border-destructive focus-visible:ring-destructive" : ""}`}
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          
          {error && (
            <p className="text-sm text-destructive">
              Senha incorreta. Verifique e tente novamente.
            </p>
          )}

          <Button 
            type="submit" 
            className="w-full gap-2" 
            disabled={!password || isLoading}
          >
            {isLoading ? "Verificando..." : "Acessar cases"}
            {!isLoading && <ArrowRight size={16} />}
          </Button>

          <Button 
            type="button" 
            variant="outline"
            className="w-full gap-2" 
            asChild
          >
            <Link to="/">
              <ArrowLeft size={16} />
              Voltar para a home
            </Link>
          </Button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-4">
          Não tem a senha? Entre em contato pelo{" "}
          <a 
            href="https://www.linkedin.com/in/yhenria/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </DialogContent>
    </Dialog>
  );
}
