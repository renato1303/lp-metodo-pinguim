import React from "react";
import { Mail, CloudDownload, Smile, ArrowRight } from "lucide-react";

export default function ComoAcessar() {
  return (
    <section className="bg-gradient-to-b from-[#04101e] to-[#020a13] py-20 sm:py-28 border-t border-white/5 relative overflow-hidden">
      
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-1/4 -z-10 h-72 w-72 rounded-full bg-brand-light/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Title */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Compre agora e receba seu acesso no e-mail imediatamente!
          </h2>
          <p className="mt-3 font-sans text-sm sm:text-base text-white/80 max-w-xl mx-auto">
            O processo de inscrição e liberação do Método Pinguim é 100% digital e automático. Veja como funciona:
          </p>
        </div>

        {/* 3 Steps Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          
          {/* Card 1 */}
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 text-center transition-all hover:border-brand-accent/30 backdrop-blur-sm">
            <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent mb-5 text-lg sm:text-xl font-bold">
              1
            </div>
            <h3 className="font-display text-base sm:text-lg font-bold text-white mb-2">
              Faça sua Compra Segura
            </h3>
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-white/70">
              Clique no botão, preencha seus dados reais e escolha seu meio de pagamento (Pix com aprovação imediata ou Cartão de crédito).
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 text-center transition-all hover:border-brand-light/30 backdrop-blur-sm">
            <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-brand-light/10 border border-brand-light/20 text-brand-light mb-5 text-lg sm:text-xl font-bold">
              2
            </div>
            <h3 className="font-display text-base sm:text-lg font-bold text-white mb-2">
              Acesse seu E-mail
            </h3>
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-white/70">
              Imediatamente após a aprovação, enviamos um e-mail de boas-vindas com seus dados de acesso exclusivos para a área de membros.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 text-center transition-all hover:border-brand-accent/30 backdrop-blur-sm">
            <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent mb-5 text-lg sm:text-xl font-bold">
              3
            </div>
            <h3 className="font-display text-base sm:text-lg font-bold text-white mb-2">
              Baixe todo o Material
            </h3>
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-white/70">
              Entre no portal, assista às vídeo-aulas práticas e baixe todos os checklists, templates, bônus e guias de suporte no celular ou computador!
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
