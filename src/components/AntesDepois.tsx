import React, { useState } from "react";
import { Frown, Smile, XCircle, CheckCircle2, Flame, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface ComparisonItem {
  title: string;
  desc: string;
}

const ANTES_ITEMS: ComparisonItem[] = [
  {
    title: "Gritos e Birras Diárias",
    desc: "Cada tentativa de retirar o celular ou tablet resulta em choro, estresse e sentimentos de frustração para toda a família."
  },
  {
    title: "Hipnose Digital",
    desc: "Crianças paralisadas na frente das telas, ignorando refeições, deveres de casa e chamados dos pais."
  },
  {
    title: "Sono Prejudicado",
    desc: "Telas ligadas até tarde da noite, gerando noites mal dormidas, cansaço acumulado e mau humor na manhã seguinte."
  },
  {
    title: "Falta de Diálogo Real",
    desc: "O lar se torna uma coleção de pessoas na mesma sala, mas cada uma isolada e desconectada em seu próprio dispositivo."
  }
];

const DEPOIS_ITEMS: ComparisonItem[] = [
  {
    title: "Transição Sem Conflitos",
    desc: "Regras claras e combinadas que a criança compreende e aceita. O momento de guardar a tela acontece com tranquilidade."
  },
  {
    title: "Rotina Previsível e Ativa",
    desc: "Tempo equilibrado para estudos, brincadeiras manuais offline, atividades físicas e telas apenas como entretenimento regulado."
  },
  {
    title: "Noites de Sono Profundo",
    desc: "Ritual de desaceleração offline que acalma o cérebro, facilitando um sono restaurador e desenvolvimento cerebral pleno."
  },
  {
    title: "Fortalecimento de Vínculos",
    desc: "Momentos de conexão afetiva real dentro de casa, com conversas ativas, risadas e presença genuína dos pais."
  }
];

export default function AntesDepois() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mouseCoordsLeft, setMouseCoordsLeft] = useState({ x: 0, y: 0 });
  const [mouseCoordsRight, setMouseCoordsRight] = useState({ x: 0, y: 0 });
  const [isHoveredCard, setIsHoveredCard] = useState<"left" | "right" | null>(null);

  const handleMouseMoveLeft = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseCoordsLeft({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseMoveRight = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseCoordsRight({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section className="bg-gradient-to-b from-[#04101e] to-[#020a14] py-20 sm:py-28 border-t border-white/5 relative overflow-hidden">
      
      {/* Decorative gradients */}
      <div className="absolute top-1/3 right-1/4 -z-10 h-80 w-80 rounded-full bg-red-500/5 blur-[120px]" />
      <div className="absolute bottom-1/3 left-1/4 -z-10 h-80 w-80 rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Title / Badge */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-accent mb-4"
          >
            <Smile className="h-4 w-4 text-brand-light animate-bounce" />
            <span>Antes e Depois da Mudança</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight"
          >
            A real mudança que o Método traz para o seu lar
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-sans text-xs sm:text-base text-white/70 max-w-2xl mx-auto"
          >
            Passe o mouse por cima de um item para ver a <span className="text-emerald-400 font-semibold">solução direta</span> equivalente com o Método Pinguim.
          </motion.p>
        </div>

        {/* Comparison Grid */}
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto items-stretch">
          
          {/* Card ANTES - Sem o Método Pinguim */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            onMouseMove={handleMouseMoveLeft}
            onMouseEnter={() => setIsHoveredCard("left")}
            onMouseLeave={() => {
              setIsHoveredCard(null);
              setHoveredIdx(null);
            }}
            className={`relative rounded-2xl border transition-all duration-300 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between ${
              isHoveredCard === "left"
                ? "border-red-500/30 bg-white/[0.04] shadow-[0_10px_35px_-10px_rgba(239,68,68,0.15)]"
                : "border-red-500/10 bg-white/[0.01] shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]"
            }`}
          >
            {/* Spotlight element */}
            {isHoveredCard === "left" && (
              <div 
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition duration-300"
                style={{
                  background: `radial-gradient(220px circle at ${mouseCoordsLeft.x}px ${mouseCoordsLeft.y}px, rgba(239,68,68,0.1), transparent 80%)`
                }}
              />
            )}

            <div className="relative z-10">
              <div className="absolute top-0 right-0 text-red-500/10">
                <Frown size={72} />
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                  <Frown size={22} className="animate-pulse" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-extrabold text-red-200">
                  Antes (Como é hoje...)
                </h3>
              </div>

              <div className="space-y-4">
                {ANTES_ITEMS.map((item, idx) => {
                  const isActive = hoveredIdx === idx;
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      className={`group/item cursor-pointer flex items-start gap-3 p-3 sm:p-4 rounded-xl border transition-all duration-300 ${
                        isActive 
                          ? "bg-red-950/20 border-red-500/40 shadow-md translate-x-1" 
                          : "bg-white/[0.01] border-transparent hover:bg-white/[0.03]"
                      }`}
                    >
                      <XCircle size={18} className={`shrink-0 mt-0.5 transition-colors ${isActive ? "text-red-400" : "text-red-500/60"}`} />
                      <div className="space-y-1">
                        <h4 className={`text-xs sm:text-sm font-bold transition-colors ${isActive ? "text-red-300" : "text-white/90"}`}>
                          {item.title}
                        </h4>
                        <p className={`text-[11px] sm:text-xs leading-relaxed transition-colors ${isActive ? "text-red-100/90" : "text-white/60"}`}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] text-red-400 font-bold uppercase tracking-wider">
              <Flame size={12} />
              <span>Desgaste físico e mental diário</span>
            </div>
          </motion.div>

          {/* Card DEPOIS - Com o Método Pinguim */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            onMouseMove={handleMouseMoveRight}
            onMouseEnter={() => setIsHoveredCard("right")}
            onMouseLeave={() => {
              setIsHoveredCard(null);
              setHoveredIdx(null);
            }}
            className={`relative rounded-2xl border transition-all duration-300 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between ${
              isHoveredCard === "right"
                ? "border-emerald-500/30 bg-white/[0.04] shadow-[0_10px_35px_-10px_rgba(16,185,129,0.15)]"
                : "border-emerald-500/10 bg-white/[0.01] shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]"
            }`}
          >
            {/* Spotlight element */}
            {isHoveredCard === "right" && (
              <div 
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition duration-300"
                style={{
                  background: `radial-gradient(220px circle at ${mouseCoordsRight.x}px ${mouseCoordsRight.y}px, rgba(16,185,129,0.1), transparent 80%)`
                }}
              />
            )}

            <div className="relative z-10">
              <div className="absolute top-0 right-0 text-emerald-500/10">
                <Smile size={72} />
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Smile size={22} className="animate-bounce" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-extrabold text-emerald-200">
                  Depois (Com o Método Pinguim)
                </h3>
              </div>

              <div className="space-y-4">
                {DEPOIS_ITEMS.map((item, idx) => {
                  const isActive = hoveredIdx === idx;
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      className={`group/item cursor-pointer flex items-start gap-3 p-3 sm:p-4 rounded-xl border transition-all duration-300 ${
                        isActive 
                          ? "bg-emerald-950/20 border-emerald-500/40 shadow-md translate-x-1" 
                          : "bg-white/[0.01] border-transparent hover:bg-white/[0.03]"
                      }`}
                    >
                      <CheckCircle2 size={18} className={`shrink-0 mt-0.5 transition-colors ${isActive ? "text-emerald-400" : "text-emerald-500/60"}`} />
                      <div className="space-y-1">
                        <h4 className={`text-xs sm:text-sm font-bold transition-colors ${isActive ? "text-emerald-300 font-extrabold" : "text-white/90"}`}>
                          {item.title}
                        </h4>
                        <p className={`text-[11px] sm:text-xs leading-relaxed transition-colors ${isActive ? "text-emerald-100/90 font-medium" : "text-white/60"}`}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              <Sparkles size={12} className="animate-spin-slow" />
              <span>Paz, foco e conexão restaurada</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
