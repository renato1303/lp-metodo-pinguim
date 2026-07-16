import React from "react";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { Benefit } from "../types";

interface HeroProps {
  onOpenCheckout: () => void;
}

const BENEFITS: Benefit[] = [
  { id: "1", text: "Limites saudáveis sem conflitos" },
  { id: "2", text: "Mais conexão familiar" },
  { id: "3", text: "Rotina equilibrada" },
  { id: "4", text: "Uso consciente da tecnologia" },
];

export default function Hero({ onOpenCheckout }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#030d17] via-[#0D3B66] to-[#04101e] pt-6 pb-12 sm:py-20 lg:py-28">
      {/* Absolute high-end layout accents, clean and minimal */}
      <div className="absolute top-0 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-brand-light/15 blur-[120px]" />
      <div className="absolute right-10 bottom-10 -z-10 h-80 w-80 rounded-full bg-brand-accent/5 blur-[120px]" />
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="flex flex-col items-center text-center space-y-4 sm:space-y-8 max-w-4xl mx-auto fade-in-up">
          
          <div className="space-y-3 sm:space-y-5">
            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-snug sm:leading-tight">
              Descubra como <span className="text-brand-accent">criar uma rotina digital saudável</span> para seus filhos em <span className="text-brand-light">até 14 dias</span>, mesmo que você enfrente birras e resistência constante hoje.
            </h1>
            <p className="font-sans text-sm sm:text-base md:text-lg leading-relaxed text-white/80 max-w-3xl mx-auto">
              O método científico e prático para recuperar a paz na sua casa, restabelecer a conexão real e guiar o desenvolvimento do seu filho de forma equilibrada no mundo moderno.
            </p>
          </div>

          {/* Benefit Checkmarks with Centered Layout - Hidden on mobile to keep button above fold */}
          <div className="hidden sm:flex flex-wrap justify-center gap-x-6 gap-y-3 max-w-2xl mx-auto">
            {BENEFITS.map((benefit) => (
              <div key={benefit.id} className="flex items-center gap-2">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </div>
                <span className="font-sans text-xs sm:text-sm font-medium text-white/95">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>

          {/* High-Converting CTA Button Area */}
          <div className="flex flex-col items-center gap-3 w-full max-w-lg mx-auto pt-2">
            <button
              onClick={onOpenCheckout}
              className="group cursor-pointer w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-accent px-6 py-4 sm:px-8 sm:py-4.5 text-sm sm:text-base font-extrabold tracking-tight text-brand-dark shadow-xl shadow-brand-accent/20 transition-all hover:bg-white hover:shadow-white/20 hover:scale-[1.01] active:scale-[0.99]"
            >
              QUERO O MÉTODO PINGUIM COM DESCONTO
              <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <div className="flex flex-col items-center text-center space-y-1">
              <span className="text-xs sm:text-sm font-semibold text-white/80">
                Acesso imediato ao portal
              </span>
              <span className="text-[11px] sm:text-xs text-brand-light font-bold">
                Garantia incondicional de 7 dias
              </span>
            </div>
          </div>

          {/* Micro social proof badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
            <div className="text-center text-xs sm:text-sm text-white/90">
              <span className="font-extrabold text-brand-accent">+ de 500 famílias</span> já transformaram suas rotinas
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
