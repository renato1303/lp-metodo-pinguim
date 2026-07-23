import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Play, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import avatarClaudio from "../assets/images/avatar_claudio_1784831696617.jpg";
import avatarMariana from "../assets/images/avatar_mariana_1784831707021.jpg";
import avatarCarla from "../assets/images/avatar_carla_1784831716489.jpg";
import avatarPatricia from "../assets/images/avatar_patricia_1784831725758.jpg";

type TestimonialItem =
  | {
      type: "video";
      id: string;
      vimeoId: string;
      headline: string;
      description: string;
      author: string;
      role: string;
      location: string;
    }
  | {
      type: "text";
      id: string;
      text: string;
      author: string;
      role: string;
      location: string;
      avatar: string;
      stars: number;
    };

const ALL_TESTIMONIALS: TestimonialItem[] = [
  {
    type: "video",
    id: "v1",
    vimeoId: "1212417370",
    headline: "Veja como o método trouxe leveza para o nosso lar",
    description: "Transformação real de rotinas e reconexão offline. Assista ao relato completo e acompanhe as estratégias aplicadas que transformaram nossa dinâmica diária com as telas.",
    author: "Larissa Albuquerque",
    role: "Mãe do Enzo (7 anos)",
    location: "RIO DE JANEIRO - RJ"
  },
  {
    type: "text",
    id: "t1",
    text: "Mariana passava mais de 7 horas no Instagram e TikTok. Estava sempre triste, ansiosa e o rendimento escolar caiu bastante. O manual de controle parental e o acompanhamento empático que o Método Pinguim ensina nos ajudaram a reverter isso. Ela agora dorme no horário certo e voltou a ler livros.",
    author: "Cláudio Mendes",
    role: "Pai de Mariana (15 anos)",
    location: "SÃO PAULO - SP",
    avatar: avatarClaudio,
    stars: 5
  },
  {
    type: "video",
    id: "v2",
    vimeoId: "1212417369",
    headline: "Acabamos com as brigas diárias pelo celular e videogame",
    description: "Como aplicamos os acordos de convivência e a previsibilidade neuropsicológica para fazer o desmame digital sem gritos, birras ou chantagens.",
    author: "Mariana & Rodrigo",
    role: "Pais do Theo (6 anos)",
    location: "SÃO PAULO - SP"
  },
  {
    type: "text",
    id: "t2",
    text: "O Método Pinguim salvou a minha saúde mental. Eu achava que o problema era meu filho, mas entendi que faltava a estratégia correta de previsibilidade e conexão que o Walace ensina. Hoje ele desliga o tablet sozinho.",
    author: "Mariana Santos",
    role: "Mãe do Theo (6 anos)",
    location: "BELO HORIZONTE - MG",
    avatar: avatarMariana,
    stars: 5
  },
  {
    type: "video",
    id: "v3",
    vimeoId: "1212417371",
    headline: "Conexão e limites respeitados com total serenidade",
    description: "Como colocamos em prática o plano prático em 3 passos e vimos as crianças voltarem a brincar juntas, desenhar e conversar com alegria.",
    author: "Camila Rocha",
    role: "Mãe do Lucas (9 anos)",
    location: "CURITIBA - PR"
  },
  {
    type: "text",
    id: "t3",
    text: "Minha casa parecia um hotel de estranhos, cada um num quarto com seu aparelho. Com as ferramentas práticas do curso, criamos dinâmicas familiares que tornaram as refeições o momento mais esperado do dia.",
    author: "Carla Ferreira",
    role: "Mãe do Lucas (11 anos) e da Júlia (5 anos)",
    location: "PORTO ALEGRE - RS",
    avatar: avatarCarla,
    stars: 5
  },
  {
    type: "video",
    id: "v4",
    vimeoId: "1212417368",
    headline: "Refeições em família sem nenhuma tela na mesa",
    description: "Paz nos momentos em família, autonomia digital e um ambiente onde todos conversam com presença, sem a necessidade de distrações visuais.",
    author: "Fernanda & Eduardo",
    role: "Pais da Beatriz (8 anos)",
    location: "FLORIANÓPOLIS - SC"
  },
  {
    type: "text",
    id: "t4",
    text: "O curso baseado em neurobiologia abriu meus olhos. Entendi o sequestro de dopamina que o videogame faz e soube exatamente como desintoxicar o cérebro dele com amor e presença.",
    author: "Patricia Mendes",
    role: "Mãe do Enzo (8 anos)",
    location: "BRASÍLIA - DF",
    avatar: avatarPatricia,
    stars: 5
  }
];

export default function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? ALL_TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === ALL_TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const item = ALL_TESTIMONIALS[currentIndex];

  return (
    <section className="bg-[#030d1a] py-16 sm:py-24 border-t border-white/5 relative overflow-hidden text-white">
      {/* Subtle background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -z-10 h-96 w-[600px] rounded-full bg-blue-900/15 blur-[120px]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Header Badges and Title */}
        <div className="text-center mb-10 sm:mb-14">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-rose-400 mb-4">
            <Heart className="h-3.5 w-3.5 fill-current text-rose-400" />
            <span>RESGATE DE HARMONIA FAMILIAR</span>
          </div>

          {/* Main Title */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5">
            O que dizem os pais e educadores
          </h2>

          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0a1b2d] border border-white/10 px-5 py-2 text-xs sm:text-sm font-semibold text-white/90 shadow-md">
            <div className="flex gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span>Nota de Satisfação Geral: <strong className="text-white">5.0 / 5.0</strong></span>
          </div>
        </div>

        {/* Main Card Container */}
        <div className="relative rounded-3xl border border-white/10 bg-[#08182b]/90 backdrop-blur-xl p-6 sm:p-10 md:p-12 shadow-2xl overflow-hidden">
          
          {/* Decorative Big Quote Icon Watermark */}
          <div className="absolute top-4 left-6 text-white/5 text-8xl font-serif pointer-events-none select-none leading-none">
            “
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="min-h-[380px] flex flex-col justify-between"
            >
              {item.type === "video" ? (
                /* VIDEO TESTIMONIAL LAYOUT */
                <div className="flex flex-col md:flex-row items-center md:items-center gap-8 lg:gap-12 my-2">
                  
                  {/* Left Column: Portrait Video Player (Large 9:16 Aspect Ratio) */}
                  <div className="w-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px] shrink-0 mx-auto md:mx-0">
                    <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-2xl ring-1 ring-white/15">
                      <iframe
                        src={`https://player.vimeo.com/video/${item.vimeoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                        title={item.headline}
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>

                  {/* Right Column: Text and Author Details */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                      <Play className="h-3 w-3 fill-current" />
                      <span>DEPOIMENTO EM VÍDEO</span>
                    </div>

                    {/* Headline Quote */}
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-snug mb-4">
                      "{item.headline}"
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed font-sans mb-8">
                      {item.description}
                    </p>

                    {/* Divider */}
                    <div className="border-t border-white/10 pt-6">
                      <h4 className="font-display text-lg font-bold text-white leading-tight">
                        {item.author}
                      </h4>
                      <p className="text-sky-400 text-sm font-medium mt-0.5">
                        {item.role}
                      </p>
                      <p className="text-white/40 text-[11px] font-bold tracking-widest uppercase mt-1">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                /* TEXT TESTIMONIAL LAYOUT */
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto py-4">
                  {/* Quote Text */}
                  <p className="font-sans text-lg sm:text-xl md:text-2xl text-white/90 italic leading-relaxed mb-8">
                    "{item.text}"
                  </p>

                  {/* Avatar */}
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="h-16 w-16 rounded-full object-cover ring-2 ring-amber-400/50 shadow-lg mb-4"
                    referrerPolicy="no-referrer"
                  />

                  {/* Author Name and Role */}
                  <h4 className="font-display text-xl font-bold text-white">
                    {item.author}
                  </h4>
                  <p className="text-sky-400 text-sm font-medium mt-0.5">
                    {item.role}
                  </p>
                  <p className="text-white/40 text-[11px] font-bold tracking-widest uppercase mt-1">
                    {item.location}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Bottom Navigation Control Bar inside Card */}
          <div className="border-t border-white/10 pt-6 mt-8 flex items-center justify-between">
            {/* Slide Indicator Dots */}
            <div className="flex items-center gap-2">
              {ALL_TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 transition-all duration-300 rounded-full cursor-pointer ${
                    currentIndex === idx
                      ? "w-8 bg-amber-400"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Ir para o depoimento ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Circle Arrow Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white hover:border-white/20 active:scale-95 transition-all cursor-pointer shadow-md"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white hover:border-white/20 active:scale-95 transition-all cursor-pointer shadow-md"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}



