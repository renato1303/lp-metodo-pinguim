import React from "react";
import { ArrowRight, XCircle, CheckCircle, Lock, ShieldCheck } from "lucide-react";

interface CtaFinalProps {
  onOpenCheckout: () => void;
}

export default function CtaFinal({ onOpenCheckout }: CtaFinalProps) {
  return (
    <section className="bg-gradient-to-b from-[#04101e] to-[#020912] py-20 sm:py-28 border-t border-white/5 relative overflow-hidden">
      
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-brand-light/5 blur-3xl" />

      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        
        {/* Title */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Agora você tem duas opções claras para seguir:
          </h2>
          <p className="mt-3 font-sans text-sm sm:text-base text-white/80">
            A infância do seu filho passa rápido demais e a escolha que você faz hoje determina o relacionamento de vocês no futuro.
          </p>
        </div>

        {/* 2 Options Cards Comparison */}
        <div className="grid gap-5 md:grid-cols-2 max-w-3xl mx-auto mb-10 sm:mb-12">
          
          {/* Option 1: Negativa */}
          <div className="rounded-2xl border border-red-500/20 bg-red-950/5 p-5 sm:p-6 space-y-3.5">
            <div className="flex items-center gap-2 text-red-400">
              <XCircle className="h-5 w-5 shrink-0" />
              <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wider">Opção 1</h3>
            </div>
            <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
              Ignorar o que aprendeu aqui, continuar sofrendo com as discussões desgastantes todos os dias, ver seu filho cada vez mais isolado e hipnotizado pelas telas, e aceitar a desconexão no seu próprio lar.
            </p>
          </div>

          {/* Option 2: Positiva */}
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/5 p-5 sm:p-6 space-y-3.5 shadow-xl">
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle className="h-5 w-5 shrink-0" />
              <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wider">Opção 2</h3>
            </div>
            <p className="font-sans text-xs sm:text-sm text-white/85 leading-relaxed">
              Tomar uma atitude ativa de amor, entrar no Método Pinguim hoje, ter o passo a passo científico de um neuropsicólogo nas mãos, desintoxicar a mente do seu filho e finalmente viver em paz e conexão real.
            </p>
          </div>

        </div>

        {/* Persuasive Pitch & Repeat Value Block */}
        <div className="text-center space-y-6 sm:space-y-8 max-w-2xl mx-auto">
          <div className="space-y-2">
            <p className="font-sans text-base sm:text-xl font-bold text-brand-light">
              Eu sei (e você também sabe): a opção 2 é a mais inteligente.
            </p>
            <p className="font-sans text-xs sm:text-sm text-white/70">
              Não adie a paz da sua família. Garanta sua vaga hoje com desconto e bônus inclusos.
            </p>
          </div>

          {/* Large Offer Recap Block (BLOCO 13 - VALOR Repeat) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
            <p className="text-xs font-bold text-brand-accent uppercase tracking-wider">OFERTA FINAL ATIVA</p>
            <div className="flex justify-center items-baseline gap-1.5">
              <span className="text-xl sm:text-3xl font-extrabold text-white">12x de</span>
              <span className="text-3xl sm:text-5xl font-extrabold text-brand-accent font-display">R$ 29,64</span>
            </div>
            <p className="text-xs text-white/60">ou apenas R$ 297,00 à vista no Pix ou Boleto</p>

            <button
              onClick={onOpenCheckout}
              className="group cursor-pointer w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-accent hover:bg-white text-brand-dark font-extrabold py-3.5 sm:py-4 text-xs sm:text-sm tracking-tight transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              SIM! CLIQUE AQUI E ACESSE O MÉTODO AGORA
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Bottom Security Seals */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] text-white/40">
            <span className="flex items-center gap-1">
              <Lock className="h-3.5 w-3.5 text-brand-accent" />
              Pagamento 100% Criptografado
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-accent" />
              7 Dias de Garantia
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
