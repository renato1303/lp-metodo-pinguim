import React, { useState } from "react";
import { Compass, Award, CheckCircle2, ArrowRight, Star, Heart, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface StepDetail {
  title: string;
  subtitle: string;
  bullets: string[];
  duration: string;
  iconColor: string;
}

const STEP_DETAILS: Record<number, StepDetail> = {
  1: {
    title: "Passo 1: Desintoxicação e Entendimento",
    subtitle: "Reequilibrando a dopamina e desinflamando a mente infantil nos primeiros 4 dias",
    bullets: [
      "Fisiologia do Algoritmo: Compreensão simples de como vídeos curtos e jogos hiperestimulantes sequestram o foco do seu filho.",
      "Protocolo de 4 Dias: Micro-ajustes graduais para diminuir o tempo de tela sem causar choques ou rebeldia.",
      "Garantia Anticonflito: O script exato de 3 frases acolhedoras que acalmam a birra na hora de guardar o tablet ou celular.",
      "Desinflamação Mental: Técnicas para resgatar a atenção e a capacidade de foco de longo prazo de forma natural."
    ],
    duration: "Dias 1 a 4",
    iconColor: "text-brand-accent"
  },
  2: {
    title: "Passo 2: Nova Rotina Familiar",
    subtitle: "Construindo rituais offline prazerosos e vencendo o tédio sem telas",
    bullets: [
      "Menu de Atividades Criativas: Um catálogo prático de jogos, leituras e brincadeiras motoras de alto engajamento por faixa etária.",
      "O Ritmo da Casa: Como estruturar uma rotina previsível onde a criança sabe exatamente quando terá acesso a telas e quando será hora de brincar.",
      "Ritual de Conexão: Dinâmicas de apenas 15 minutos diários de atenção exclusiva para preencher a necessidade de afeto do seu filho.",
      "Socialização Ativa: Incentivando a interação no mundo real, esportes e contato com a natureza."
    ],
    duration: "Dias 5 a 9",
    iconColor: "text-brand-light"
  },
  3: {
    title: "Passo 3: Regras Inabaláveis",
    subtitle: "Estabelecendo combinados claros que a criança aceita e executa sozinha",
    bullets: [
      "Acordos de Ouro: Como negociar o uso de telas com firmeza e afeto, criando regras inabaláveis que a criança compreende.",
      "O Truque do Cronômetro: Técnica lúdica de autonomia para fazer seu filho desligar os aparelhos sozinho, sem você precisar gritar.",
      "Ambiente Controlado: Como configurar filtros familiares invisíveis e gerenciar o uso de tecnologia de maneira pacífica e segura.",
      "Manutenção de Resultados: Estratégias simples para manter os hábitos saudáveis pelos próximos meses e anos."
    ],
    duration: "Dias 10 a 14",
    iconColor: "text-brand-accent"
  }
};

export default function MetodoPinguim() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, stepId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section className="bg-gradient-to-b from-[#040d18] via-[#0D3B66] to-[#051829] py-20 sm:py-28 border-t border-white/5 relative overflow-hidden">
      
      {/* Absolute decorative background glows */}
      <div className="absolute top-10 right-10 -z-10 h-96 w-96 rounded-full bg-brand-light/10 blur-[100px]" />
      <div className="absolute bottom-10 left-10 -z-10 h-96 w-96 rounded-full bg-brand-accent/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Title and Badge */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-20">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight"
          >
            Os 3 passos fundamentais do Método Pinguim
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-sans text-xs sm:text-base text-white/80 max-w-2xl mx-auto"
          >
            Dividido em etapas simples e fáceis de aplicar no dia a dia. <span className="text-brand-accent font-semibold">Clique nos passos abaixo</span> para explorar o plano de ação detalhado!
          </motion.p>
        </div>

        {/* Timeline Columns (Interactive Selectors) */}
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-10">
          
          {/* Passo 1 Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={() => setActiveStep(1)}
            onMouseMove={(e) => handleMouseMove(e, 1)}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`cursor-pointer group relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 backdrop-blur-md border ${
              activeStep === 1 
                ? "border-brand-accent bg-white/10 shadow-[0_0_25px_rgba(253,186,116,0.15),inset_0_1px_1px_rgba(255,255,255,0.15)]" 
                : "border-white/10 bg-white/5 hover:border-brand-accent/40 hover:bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
            }`}
          >
            {/* Spotlight element */}
            {hoveredCard === 1 && (
              <div 
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition duration-300"
                style={{
                  background: `radial-gradient(180px circle at ${mouseCoords.x}px ${mouseCoords.y}px, rgba(253,186,116,0.15), transparent 80%)`
                }}
              />
            )}

            <div>
              <div className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl font-display text-xs sm:text-sm font-bold mb-4 transition-transform duration-300 group-hover:scale-105 ${
                activeStep === 1
                  ? "bg-brand-accent text-brand-dark"
                  : "bg-brand-accent/10 text-brand-accent border border-brand-accent/20"
              }`}>
                P1
              </div>
              <h3 className="font-display text-sm sm:text-base font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                Passo 1: Desintoxicação
              </h3>
              <p className="font-sans text-[11px] sm:text-xs leading-relaxed text-white/80">
                Você vai entender como os algoritmos sequestram a atenção infantil e aprenderá as técnicas iniciais para desinflamar a mente de forma amorosa.
              </p>
            </div>
            
            <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-brand-accent/80 block">Impacto Inicial:</span>
                <p className="text-[10px] text-white/90">Fim imediato das crises agudas de ansiedade.</p>
              </div>
              <div className="h-5 w-5 rounded-full bg-white/5 flex items-center justify-center text-brand-accent text-xs font-bold shrink-0">
                ➔
              </div>
            </div>
          </motion.div>

          {/* Passo 2 Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setActiveStep(2)}
            onMouseMove={(e) => handleMouseMove(e, 2)}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`cursor-pointer group relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 backdrop-blur-md border ${
              activeStep === 2 
                ? "border-brand-light bg-white/10 shadow-[0_0_25px_rgba(56,189,248,0.15),inset_0_1px_1px_rgba(255,255,255,0.15)]" 
                : "border-white/10 bg-white/5 hover:border-brand-light/40 hover:bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
            }`}
          >
            {/* Spotlight element */}
            {hoveredCard === 2 && (
              <div 
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition duration-300"
                style={{
                  background: `radial-gradient(180px circle at ${mouseCoords.x}px ${mouseCoords.y}px, rgba(56,189,248,0.15), transparent 80%)`
                }}
              />
            )}

            <div>
              <div className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl font-display text-xs sm:text-sm font-bold mb-4 transition-transform duration-300 group-hover:scale-105 ${
                activeStep === 2
                  ? "bg-brand-light text-brand-dark"
                  : "bg-brand-light/10 text-brand-light border border-brand-light/20"
              }`}>
                P2
              </div>
              <h3 className="font-display text-sm sm:text-base font-bold text-white mb-2 group-hover:text-brand-light transition-colors">
                Passo 2: Nova Rotina
              </h3>
              <p className="font-sans text-[11px] sm:text-xs leading-relaxed text-white/80">
                Criamos um cronograma previsível e lúdico de atividades offline que preenchem as lacunas de tédio da criança de forma divertida e ativa.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-brand-light block">Impacto Inicial:</span>
                <p className="text-[10px] text-white/90">Redução drástica das brigas no cotidiano.</p>
              </div>
              <div className="h-5 w-5 rounded-full bg-white/5 flex items-center justify-center text-brand-light text-xs font-bold shrink-0">
                ➔
              </div>
            </div>
          </motion.div>

          {/* Passo 3 Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => setActiveStep(3)}
            onMouseMove={(e) => handleMouseMove(e, 3)}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`cursor-pointer group relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 backdrop-blur-md border ${
              activeStep === 3 
                ? "border-brand-accent bg-white/10 shadow-[0_0_25px_rgba(253,186,116,0.15),inset_0_1px_1px_rgba(255,255,255,0.15)]" 
                : "border-white/10 bg-white/5 hover:border-brand-accent/40 hover:bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
            }`}
          >
            {/* Spotlight element */}
            {hoveredCard === 3 && (
              <div 
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition duration-300"
                style={{
                  background: `radial-gradient(180px circle at ${mouseCoords.x}px ${mouseCoords.y}px, rgba(253,186,116,0.15), transparent 80%)`
                }}
              />
            )}

            <div>
              <div className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl font-display text-xs sm:text-sm font-bold mb-4 transition-transform duration-300 group-hover:scale-105 ${
                activeStep === 3
                  ? "bg-brand-accent text-brand-dark"
                  : "bg-brand-accent/10 text-brand-accent border border-brand-accent/20"
              }`}>
                P3
              </div>
              <h3 className="font-display text-sm sm:text-base font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                Passo 3: Regras Saudáveis
              </h3>
              <p className="font-sans text-[11px] sm:text-xs leading-relaxed text-white/80">
                Implementamos regras de ouro e acordos claros. Você aprenderá como gerenciar o tempo sem precisar fiscalizar, gritar ou vigiar o dia inteiro.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-brand-accent/80 block">Impacto Inicial:</span>
                <p className="text-[10px] text-white/90">Seu filho desliga a tela de forma voluntária.</p>
              </div>
              <div className="h-5 w-5 rounded-full bg-white/5 flex items-center justify-center text-brand-accent text-xs font-bold shrink-0">
                ➔
              </div>
            </div>
          </motion.div>

        </div>

        {/* Dynamic Detail Panel with Advanced Glassmorphism */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-10 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_20px_40px_rgba(0,0,0,0.4)]"
            >
              {/* Corner abstract gradients */}
              <div className={`absolute top-0 right-0 h-40 w-40 rounded-full blur-[60px] opacity-20 ${
                activeStep === 2 ? "bg-brand-light" : "bg-brand-accent"
              }`} />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
                
                {/* Content Side */}
                <div className="space-y-5 flex-1">
                  
                  {/* Badge & Timeline Marker */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className={`inline-flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${
                      activeStep === 2
                        ? "bg-brand-light/10 text-brand-light border border-brand-light/10"
                        : "bg-brand-accent/10 text-brand-accent border border-brand-accent/10"
                    }`}>
                      <Calendar className="h-3 w-3" />
                      {STEP_DETAILS[activeStep].duration}
                    </span>
                    <span className="text-[10px] font-semibold text-white/50">• Cronograma do Aluno</span>
                  </div>

                  <div>
                    <h3 className="font-display text-lg sm:text-2xl font-extrabold text-white">
                      {STEP_DETAILS[activeStep].title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-white/70 mt-1">
                      {STEP_DETAILS[activeStep].subtitle}
                    </p>
                  </div>

                  {/* Bullet points detailing the step */}
                  <ul className="grid gap-3.5 mt-2 sm:grid-cols-2">
                    {STEP_DETAILS[activeStep].bullets.map((bullet, idx) => {
                      const [title, desc] = bullet.split(": ");
                      return (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 transition-all hover:bg-white/[0.05] hover:border-white/10"
                        >
                          <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-accent mt-0.5`}>
                            <CheckCircle2 className="h-3.5 w-3.5 text-brand-accent" />
                          </div>
                          <span className="font-sans text-xs text-white/90 leading-relaxed">
                            <strong className="text-white block font-semibold mb-0.5">{title}</strong>
                            {desc}
                          </span>
                        </motion.li>
                      );
                    })}
                  </ul>

                </div>

                {/* Micro CTA Box inside Glassmorphism Board */}
                <div className="md:w-72 shrink-0 p-4 sm:p-5 rounded-xl border border-white/5 bg-white/[0.02] space-y-4 flex flex-col justify-between self-stretch">
                  <div className="space-y-2">
                    <span className="text-[9px] font-extrabold text-brand-accent uppercase tracking-wider block">Meta da Etapa</span>
                    <p className="text-xs font-sans text-white/90 leading-relaxed">
                      Transformar radicalmente o comportamento do seu filho com apenas <strong className="text-white">15 minutos de prática diária</strong> guiada por nossa plataforma.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-[10px] text-white/60">
                      <Star className="h-3.5 w-3.5 text-brand-accent fill-brand-accent" />
                      <span>Desenvolvido por Psicopedagogas</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-white/60">
                      <Heart className="h-3.5 w-3.5 text-red-400 fill-red-400/40" />
                      <span>Acolhimento Familiar Garantido</span>
                    </div>
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
