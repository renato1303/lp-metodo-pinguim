import React from "react";
import { UserCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface ParaQuemProps {
  onOpenCheckout: () => void;
}

const CHECKLIST_ITEMS = [
  "Quer ver seu filho brincando de forma criativa, lendo, correndo ou socializando com alegria no mundo real;",
  "Está exausto(a) de brigar e gritar todos os dias para ele desligar os aparelhos eletrônicos;",
  "Sente medo de que o excesso de telas esteja destruindo o desenvolvimento escolar, sono e saúde mental dele;",
  "Deseja recuperar a autoridade afetuosa no lar, sem precisar recorrer a castigos pesados ou proibições agressivas;",
  "Quer ter jantares e momentos agradáveis em família, com conexões genuínas e sem celulares apoiados nos pratos;",
  "É pai, mãe ou responsável por crianças entre 3 e 12 anos e quer agir a tempo de moldar um futuro equilibrado."
];

export default function ParaQuem({ onOpenCheckout }: ParaQuemProps) {
  return (
    <section className="bg-gradient-to-b from-[#030b15] to-[#071d31] py-20 sm:py-28 border-t border-white/5 relative overflow-hidden">
      {/* Decorative side layout gradient */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-brand-accent/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-16">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
          >
            O Método Pinguim é ideal para você?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 font-sans text-xs sm:text-base text-white/80"
          >
            Identifique se as suas dores e aspirações como pai ou mãe se alinham com a nossa metodologia de transformação.
          </motion.p>
        </div>

        {/* Content Box - Centered beautifully with Advanced Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="max-w-3xl mx-auto bg-white/[0.03] border border-white/10 p-5 sm:p-10 rounded-2xl backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_20px_40px_rgba(0,0,0,0.4)] space-y-6 sm:space-y-8"
        >
          
          <div className="flex flex-col space-y-6">
            <h3 className="font-display text-lg sm:text-2xl font-bold text-white text-center leading-tight">
              Este método é perfeito para você que quer:
            </h3>

            <ul className="space-y-3.5">
              {TESTIMONIAL_ITEMS.map((text, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 mt-0.5 border border-emerald-500/20">
                    <CheckCircle2 className="h-3.5 w-3.5 animate-pulse" />
                  </div>
                  <span className="font-sans text-xs sm:text-sm text-white/95 leading-relaxed">
                    {text}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="border-t border-white/10 pt-6 sm:pt-8 space-y-5 sm:space-y-6 text-center">
              <p className="font-sans text-xs sm:text-base italic text-white/90 max-w-2xl mx-auto leading-relaxed">
                "Enfim... Se você quer que a sua casa volte a ser um espaço de harmonia, diálogo e desenvolvimento saudável... O Método Pinguim é para você!"
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenCheckout}
                className="group cursor-pointer inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-xs sm:text-sm font-extrabold tracking-tight text-brand-dark shadow-xl shadow-brand-accent/20 transition-all hover:bg-white hover:text-brand-dark w-full sm:w-auto"
              >
                QUERO ENTRAR NO MÉTODO AGORA
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

const TESTIMONIAL_ITEMS = CHECKLIST_ITEMS;
