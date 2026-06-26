import React from "react";
import { Lock, ShieldCheck, HelpCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#04101e] py-10 text-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 space-y-8">
        
        {/* Top footer row with badge certifications */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-white/10 pb-8 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-accent text-brand-dark">
              <ShieldCheck className="h-4 w-4 text-brand-dark" />
            </div>
            <span className="font-display text-xs font-extrabold tracking-tight text-white">MÉTODO PINGUIM</span>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-semibold">
            <span className="flex items-center gap-1.5 text-white/85">
              <Lock className="h-4 w-4 text-brand-accent" />
              Certificado SSL Criptografado
            </span>
            <span className="flex items-center gap-1.5 text-white/85">
              <ShieldCheck className="h-4 w-4 text-brand-accent" />
              Satisfação 100% Garantida
            </span>
          </div>
        </div>

        {/* Bottom copyright and legal disclaimer */}
        <div className="grid gap-6 md:grid-cols-2 text-xs leading-relaxed">
          <div className="space-y-3">
            <p className="font-semibold text-white">Método Pinguim • Walace Freiman</p>
            <p>
              Este site não é afiliado ao Google ou Facebook. Todas as informações contidas aqui são de responsabilidade do desenvolvedor e do autor e têm base em práticas psicológicas consolidadas.
            </p>
            <p className="text-[10px] text-white/40">
              © {currentYear} Método Pinguim. Todos os direitos reservados. CNPJ: 45.120.932/0001-82
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-semibold text-white flex items-center gap-1">
              <HelpCircle className="h-3.5 w-3.5 text-brand-accent" />
              Aviso Importante
            </p>
            <p>
              As informações e orientações prestadas neste material não substituem acompanhamento psicológico individualizado ou avaliação neuropsicológica clínica formal quando identificadas patologias graves de desenvolvimento.
            </p>
            <div className="flex gap-4 font-semibold text-brand-accent">
              <a href="#termos" className="hover:underline hover:text-white transition-colors">Termos de Uso</a>
              <a href="#privacidade" className="hover:underline hover:text-white transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
