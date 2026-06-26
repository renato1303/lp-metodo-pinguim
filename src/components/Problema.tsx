import React from "react";
import { HelpCircle, AlertCircle, CheckCircle2, ShieldAlert, Lightbulb } from "lucide-react";

interface ProblemaProps {
  onOpenCheckout: () => void;
}

export default function Problema({ onOpenCheckout }: ProblemaProps) {
  return (
    <section className="bg-gradient-to-b from-[#040e1b] via-[#1c080d] to-[#040d18] py-20 lg:py-28 border-t border-white/5 relative overflow-hidden">
      {/* Background radial accent with warm threat/alert tone */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[550px] w-[550px] rounded-full bg-red-500/[0.03] blur-[120px]" />

      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-accent mb-4">
            <ShieldAlert className="h-4 w-4 text-brand-light animate-pulse" />
            <span>Uma Conversa Sincera</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Você não aguenta mais mandar seu filho desligar o celular e receber de volta gritos, cara feia e birra?
          </h2>
        </div>

        {/* Core rumination copy */}
        <div className="space-y-8 text-center text-white/90">
          <p className="font-sans text-lg sm:text-xl leading-relaxed text-white/80 max-w-3xl mx-auto">
            Não aguenta mais ver ele <span className="text-brand-accent font-semibold">hipnotizado em vídeos curtos</span>, isolado de todos na sala, fingindo que não ouve quando você o chama para comer, estudar ou dormir.
          </p>

          {/* "Por isso, você pensa" Box */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 max-w-2xl mx-auto text-left backdrop-blur-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">Por isso, você se pega pensando...</span>
            <p className="font-sans text-base sm:text-lg text-white italic leading-relaxed">
              "Será que errei na criação dele? Por que os filhos dos outros parecem mais calmos e focados? Como meu lar se transformou nessa guerra digital silenciosa?"
            </p>
          </div>

          <div className="pt-4">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-light">
              Eu sei o que você está passando...
            </h3>
            <p className="mt-3 font-sans text-base text-white/70 max-w-2xl mx-auto">
              Você não aguenta mais essa dor constante de sentir que está perdendo a infância do seu filho para algoritmos de redes sociais desenhados especificamente para viciá-lo.
            </p>
          </div>

          <h4 className="font-display text-2xl sm:text-3xl font-extrabold text-white pt-4">
            Estou certo?
          </h4>

          {/* Premium Outcome Offer Box */}
          <div className="rounded-2xl bg-gradient-to-r from-[#990A0A]/20 to-brand-dark border border-[#990A0A]/40 p-8 text-left max-w-2xl mx-auto shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#990A0A]/30 text-white font-extrabold">
                <Lightbulb className="h-5 w-5 text-brand-accent animate-pulse" />
              </div>
              <h5 className="font-display text-lg font-bold text-white leading-tight">
                Pense por um segundo:
              </h5>
            </div>
            
            <p className="font-sans text-base text-white/90 leading-relaxed">
              Se você pudesse ter seu filho <span className="text-emerald-400 font-semibold">focado nos estudos</span>, dormindo cedo com facilidade, conversando com você com um sorriso no rosto e <span className="text-emerald-400 font-semibold">respeitando os combinados de tela</span> de forma natural, sem você precisar brigar...
            </p>
            <p className="font-sans text-sm font-semibold text-brand-accent">
              Isso mudaria a atmosfera da sua família hoje?
            </p>
          </div>

          {/* Final "Sim" call out */}
          <div className="pt-6 space-y-4 max-w-2xl mx-auto">
            <p className="font-sans text-lg sm:text-xl text-white/95">
              Se a sua resposta for um absoluto <span className="text-brand-accent font-extrabold">“SIM”</span>, o <strong className="text-white">Método Pinguim</strong> foi desenhado especificamente para você.
            </p>

            <button
              onClick={onOpenCheckout}
              className="group cursor-pointer inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-8 py-4.5 text-sm font-extrabold tracking-tight text-brand-dark shadow-xl shadow-brand-accent/10 transition-all hover:bg-white hover:scale-[1.01] active:scale-[0.99] w-full sm:w-auto"
            >
              SIM! QUERO MUDAR ISSO HOJE
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
