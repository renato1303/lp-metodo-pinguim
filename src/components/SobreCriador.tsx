import React, { useState } from "react";
import { Award, ShieldCheck, Mail, Users, UserCheck } from "lucide-react";

export default function SobreCriador() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="bg-gradient-to-b from-[#020a13] via-[#0D3B66] to-[#04101e] py-20 sm:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Image Area */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px]">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-brand-light/20 to-brand-accent/20 blur-xl opacity-80" />
              
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3.5 shadow-xl">
                {!imageError ? (
                  <img
                    src="/images/walace.png"
                    alt="Walace Freiman - Criador do Método Pinguim"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="h-[300px] sm:h-[380px] w-full rounded-xl object-cover"
                  />
                ) : (
                  /* Elegant, high-class designer fallback avatar */
                  <div className="flex h-[300px] sm:h-[380px] w-full flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#0a2e50] to-[#051c31] p-5 sm:p-6 text-center text-white border border-white/5">
                    <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-brand-light/10 border-2 border-brand-accent/40 text-brand-accent mb-4 sm:mb-6 shadow-lg animate-pulse">
                      <span className="font-display text-xl sm:text-2xl font-extrabold tracking-tight">WF</span>
                    </div>
                    <h4 className="font-display text-base sm:text-lg font-bold text-white">Walace Freiman</h4>
                    <p className="font-sans text-[11px] sm:text-xs text-brand-light mt-1">Criador do Método Pinguim</p>
                    <div className="mt-4 sm:mt-6 rounded-lg bg-white/5 border border-white/10 p-3 sm:p-3.5 text-left">
                      <p className="text-[10px] sm:text-[11px] leading-relaxed text-white/70">
                        Seu arquivo de imagem real deve ser colocado em:
                      </p>
                      <code className="block text-[9px] sm:text-[10px] bg-black/30 p-1 sm:p-1.5 rounded mt-1 sm:mt-1.5 text-brand-accent font-mono">
                        /public/images/walace.png
                      </code>
                    </div>
                  </div>
                )}


              </div>
            </div>
          </div>

          {/* Right Column: Founder Info */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6">
            <div className="space-y-1 text-center lg:text-left">
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-accent">
                QUEM TE COMPANHARÁ
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Walace Freiman
              </h2>
              <p className="font-sans text-sm sm:text-base font-semibold text-brand-light leading-snug">
                Empresário, escritor, teólogo e pós-graduado em Psicopedagogia
              </p>
            </div>

            <div className="border-t border-white/10 pt-2" />

            <div className="font-sans text-white/90 space-y-3.5 sm:space-y-4 leading-relaxed text-xs sm:text-sm md:text-base">
              <p>
                Sou esposo da Luciana, pai do Benjamin e criador do Método Pinguim.
              </p>
              <p>
                Minha jornada começou em casa ao perceber as dificuldades das famílias modernas em manter a conexão e o diálogo. Compreendi que o excesso de telas é apenas o sintoma de algo mais profundo: rotinas fragilizadas, falta de presença e dificuldades de comunicação.
              </p>
              <p>
                Dessa experiência nasceu o <strong>Método Pinguim</strong>, uma metodologia criada para ajudar pais a reorganizarem o lar, estabelecerem limites saudáveis e resgatarem o tempo de qualidade em família, provando que nenhuma tecnologia substitui o afeto real.
              </p>
              <p>
                Minha missão é ajudar famílias a restaurarem aquilo que realmente transforma uma casa: relacionamento, limites saudáveis e amor presente.
              </p>
            </div>

            <div className="grid gap-4 pt-3 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-light border border-white/5">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-xs sm:text-sm font-bold text-white">Abordagem Baseada em Ciência</h4>
                  <p className="font-sans text-[11px] text-white/70 mt-0.5">Técnicas fundamentadas na neurociência do desenvolvimento.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-light border border-white/5">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-xs sm:text-sm font-bold text-white">Suporte Dedicado</h4>
                  <p className="font-sans text-[11px] text-white/70 mt-0.5">Acompanhamento e clareza para a tomada de decisões no lar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
