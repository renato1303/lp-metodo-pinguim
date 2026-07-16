import React from "react";
import { Compass, CheckCircle2, Brain, Handshake, BookOpen, Home } from "lucide-react";

interface BenefitCard {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const BENEFITS_LIST: BenefitCard[] = [
  {
    id: "1",
    icon: Brain,
    title: "Regular a dopamina do cérebro infantil",
    description: "Seu filho vai desinflamar mentalmente dos estímulos de recompensa rápida do TikTok, Reels e jogos, reduzindo a irritabilidade e ansiedade.",
  },
  {
    id: "2",
    icon: Handshake,
    title: "Eliminar a necessidade de mentiras e desculpas",
    description: "Você construirá combinados em que ele assume a responsabilidade de desligar o aparelho no horário combinado por conta própria.",
  },
  {
    id: "3",
    icon: BookOpen,
    title: "Conquistar mais foco e desempenho escolar",
    description: "Ao diminuir a poluição visual digital, a capacidade de foco e retenção de estudos e leitura do seu filho vai disparar.",
  },
  {
    id: "4",
    icon: Home,
    title: "Recuperar a cumplicidade real na família",
    description: "O ambiente de discussões diárias dá lugar a um lar leve, onde vocês conversam ativamente à mesa e compartilham momentos divertidos offline.",
  },
];

export default function NovaPerspectiva() {
  return (
    <section className="bg-gradient-to-b from-[#051829] to-[#020912] py-20 sm:py-28 relative overflow-hidden border-t border-white/5">
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/2 left-0 -z-10 h-72 w-72 rounded-full bg-brand-light/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[40px] lg:leading-tight">
            Com esse passo a passo você vai:
          </h2>
          <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-white/80 sm:text-lg">
            Muito além de regras, o Método Pinguim fornece a transformação que a estrutura do seu lar precisa para prosperar.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {BENEFITS_LIST.map((b) => (
            <div
              key={b.id}
              className="group relative flex flex-col items-center text-center p-6 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-brand-accent/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/10 text-brand-accent shadow-sm transition-all duration-300 mb-5 border border-white/5">
                <b.icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>

              <h3 className="font-display text-base sm:text-lg font-bold text-white mb-2 leading-tight">
                {b.title}
              </h3>
              
              <p className="font-sans text-xs sm:text-sm leading-relaxed text-white/70">
                {b.description}
              </p>
            </div>
          ))}
        </div>

        {/* Core quote card */}
        <div className="mt-10 sm:mt-16 border-l-4 border-brand-accent bg-white/5 border-t border-r border-b border-white/5 p-5 sm:p-8 rounded-r-xl max-w-3xl mx-auto backdrop-blur-sm">
          <p className="font-sans text-sm sm:text-base italic text-white/95 leading-relaxed">
            "Quando oferecemos às crianças uma rotina estruturada e conectada, a necessidade neurótica pela dopamina rápida das telas cai drasticamente de forma natural."
          </p>
          <div className="mt-2 text-[10px] sm:text-xs font-semibold text-white/60 tracking-tight">
            — Base científica do Método Pinguim
          </div>
        </div>
      </div>
    </section>
  );
}
