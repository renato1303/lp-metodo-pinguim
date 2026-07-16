import React from "react";
import { ListChecks, AlertCircle, ShieldCheck, Sparkles, CreditCard, Lock } from "lucide-react";

interface RecapitulandoValorProps {
  onOpenCheckout: () => void;
}

interface PriceItem {
  id: string;
  name: string;
  price: string;
}

const PRICE_ITEMS: PriceItem[] = [
  { id: "1", name: "Checklist Método Pinguim Completo", price: "R$ 147,00" },
  { id: "2", name: "Template de Atividades e Rituais Offline", price: "R$ 147,00" },
  { id: "3", name: "Guia de Sobrevivência para Birras e Crises", price: "R$ 147,00" },
  { id: "4", name: "Lista Negra dos 7 Erros Comuns", price: "R$ 97,00" },
  { id: "5", name: "BÔNUS: Manual da Transformação Cerebral", price: "R$ 147,00" },
  { id: "6", name: "BÔNUS: Calendário da Desintoxicação", price: "R$ 147,00" },
  { id: "7", name: "BÔNUS: Protocolo do Sono Restaurador", price: "R$ 147,00" },
  { id: "8", name: "Suporte e Comunidade Exclusiva", price: "R$ 227,00" }
];

export default function RecapitulandoValor({ onOpenCheckout }: RecapitulandoValorProps) {
  return (
    <section className="bg-gradient-to-b from-[#071d31] via-[#0D3B66] to-[#04101e] py-20 sm:py-28 border-t border-white/5 relative overflow-hidden">
      
      {/* Visual background accents for high value focus */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-brand-light/10 blur-[130px]" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-brand-accent/5 blur-[130px]" />

      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Recapitulando...
          </h2>
          <p className="mt-3 font-sans text-sm sm:text-base text-white/80">
            Veja tudo o que você recebe ao garantir sua vaga no Método Pinguim hoje:
          </p>
        </div>

        {/* Anchored price lists with dotted borders */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-8 backdrop-blur-sm max-w-2xl mx-auto space-y-4 mb-8 sm:mb-12">
          {PRICE_ITEMS.map((item) => (
            <div key={item.id} className="flex justify-between items-center gap-4 text-xs sm:text-base border-b border-dashed border-white/10 pb-3">
              <span className="text-white/90 font-sans flex items-center gap-2">
                <span className="text-brand-accent font-bold">✓</span> {item.name}
              </span>
              <span className="text-white/60 font-mono font-semibold shrink-0">
                {item.price}
              </span>
            </div>
          ))}

          {/* Sum up price calculation */}
          <div className="pt-4 text-center space-y-2">
            <p className="text-white/70 text-xs sm:text-sm">
              TUDO ISSO DEVERIA CUSTAR:
            </p>
            <p className="font-display text-xl sm:text-3xl font-extrabold text-red-400 line-through">
              R$ 1.206,00
            </p>
            <p className="font-sans text-xs sm:text-base text-brand-light font-medium">
              Mas somente hoje você terá acesso a toda essa transformação por um valor muito mais acessível!
            </p>
          </div>
        </div>

        {/* Core Final Offer Card */}
        <div className="rounded-3xl border-2 border-brand-accent bg-gradient-to-br from-[#06203a] to-brand-dark p-6 sm:p-12 text-center shadow-2xl max-w-2xl mx-auto space-y-6">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-emerald-400 mb-2">
              Oferta Especial de Lançamento
            </span>
            <h3 className="font-display text-lg sm:text-2xl font-bold text-white">
              Método Pinguim
            </h3>
            <p className="text-[11px] sm:text-xs text-white/60">
              Acesso vitalício ao portal + atualizações + comunidade de alunos
            </p>
          </div>

          <div className="py-4 border-y border-white/5 space-y-1">
            <p className="text-[10px] sm:text-xs text-brand-light uppercase tracking-wider font-bold">Por Apenas:</p>
            <p className="font-display text-3xl sm:text-6xl font-extrabold text-brand-accent tracking-tight">
              12x <span className="text-lg sm:text-3xl font-medium">de</span> R$ 29,64
            </p>
            <p className="text-xs sm:text-sm text-white/80">
              ou apenas <span className="text-white font-extrabold">R$ 297,00 à vista</span> (Pix ou Cartão)
            </p>
          </div>

          {/* Checkout Button */}
          <button
            onClick={onOpenCheckout}
            className="group cursor-pointer w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-accent hover:bg-white text-brand-dark font-extrabold py-4 text-sm sm:text-base tracking-tight shadow-xl shadow-brand-accent/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            QUERO LIBERAR MEU ACESSO AGORA
          </button>

          {/* Security and Guarantee info */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-white/50 pt-2 border-t border-white/5">
            <span className="flex items-center gap-1.5">
              <Lock className="h-4 w-4 text-brand-accent" />
              Ambiente Criptografado
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-brand-accent" />
              Garantia de 7 Dias
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
