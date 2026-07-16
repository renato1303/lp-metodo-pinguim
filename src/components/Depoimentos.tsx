import React from "react";
import { MessageSquare, Star, User, ArrowRight } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  stars: number;
  initialState: string;
  afterState: string;
  text: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Mariana Santos",
    role: "Mãe do Theo (6 anos)",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    stars: 5,
    initialState: " Theo tinha crises de choro violentas quando eu pedia pra desligar o tablet.",
    afterState: " Hoje ele desliga sozinho e vai brincar com os blocos sem nenhuma reclamação.",
    text: "O Método Pinguim salvou a minha saúde mental. Eu achava que o problema era meu filho, mas entendi que faltava a estratégia correta de previsibilidade e conexão que o Walace ensina."
  },
  {
    id: "2",
    name: "Roberto Oliveira",
    role: "Pai da Beatriz (9 anos)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    stars: 5,
    initialState: " Beatriz ficava no celular até tarde e vivia cansada, irritada e tirando notas baixas.",
    afterState: " Estabelecemos o ritual do sono e as notas dela na escola subiram em menos de 1 mês.",
    text: "O que mais me impressionou foi como a mudança aconteceu sem brigas. O método ensina a negociar de forma que a criança se sinta ouvida e respeitada, mas com limites inegociáveis."
  },
  {
    id: "3",
    name: "Carla Ferreira",
    role: "Mãe do Lucas (11 anos) e da Júlia (5 anos)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    stars: 5,
    initialState: " Cada refeição era uma luta com telas ligadas na mesa e isolamento total.",
    afterState: " Temos jantares divertidos com jogos de conversa, as crianças amam.",
    text: "Minha casa parecia um hotel de estranhos, cada um num quarto com seu aparelho. Com as ferramentas práticas do curso, criamos dinâmicas familiares que tornaram as refeições o momento mais esperado do dia."
  },
  {
    id: "4",
    name: "Patricia Mendes",
    role: "Mãe do Enzo (8 anos)",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop",
    stars: 5,
    initialState: " Enzo estava extremamente ansioso e não demonstrava interesse em nada fora do videogame.",
    afterState: " Ele voltou a desenhar, andar de bicicleta e sua ansiedade reduziu visivelmente.",
    text: "O curso baseado em neurobiologia abriu meus olhos. Entendi o sequestro de dopamina que o videogame faz e soube exatamente como desintoxicar o cérebro dele com amor e presença."
  },
  {
    id: "5",
    name: "Felipe Albuquerque",
    role: "Pai da Laura (7 anos)",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    stars: 5,
    initialState: "Laura fazia chantagem emocional para comer com o celular na frente.",
    afterState: " Alimentação saudável sem necessidade de distrações visuais.",
    text: "Eu achava impossível ela comer sem uma tela na frente. Seguimos o plano de transição de 3 passos do Método Pinguim e em 6 dias ela já comia conversando conosco normalmente."
  },
  {
    id: "6",
    name: "Sandra de Souza",
    role: "Mãe do Murilo (10 anos)",
    avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=150&auto=format&fit=crop",
    stars: 5,
    initialState: " Muitas discussões sobre o tempo limite do tablet que desgastavam nossa relação.",
    afterState: " O tempo de tela agora é automático e respeitado de comum acordo.",
    text: "O Método Pinguim deu clareza. Não é sobre proibir a tecnologia, mas sobre educar para a autonomia digital. Meu filho hoje tem mais autocontrole do que muitos adultos que conheço."
  }
];

// Helper component for testimonial avatars with state-based fallback
function TestimonialAvatar({ src, name }: { src: string; name: string }) {
  const [error, setError] = React.useState(false);

  const getInitials = (fullName: string) => {
    const parts = fullName.trim().split(" ");
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return fullName.slice(0, 2).toUpperCase();
  };

  if (error) {
    return (
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-light/35 to-brand-accent/35 border border-white/20 text-brand-accent text-xs font-bold ring-2 ring-white/10 shadow-sm">
        {getInitials(name)}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-white/10"
      onError={() => setError(true)}
      referrerPolicy="no-referrer"
    />
  );
}

export default function Depoimentos() {
  return (
    <section className="bg-gradient-to-b from-[#020a14] via-[#06203a] to-[#040e1b] py-20 lg:py-28 border-t border-white/5 relative overflow-hidden">
      {/* Decorative accents for visual rhythm */}
      <div className="absolute top-1/4 left-10 -z-10 h-72 w-72 rounded-full bg-brand-light/10 blur-[100px]" />
      <div className="absolute bottom-1/4 right-10 -z-10 h-72 w-72 rounded-full bg-brand-accent/5 blur-[100px]" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Title and Subtitle */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-accent mb-4">
            <MessageSquare className="h-4 w-4 text-brand-light" />
            <span>Depoimentos Reais</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[40px] lg:leading-tight">
            Veja o antes e depois de famílias que sofriam com o descontrole das telas e conseguiram recuperar a harmonia com o Método Pinguim
          </h2>
          <p className="mt-4 font-sans text-base text-white/80 sm:text-lg max-w-2xl mx-auto">
            Histórias reais de mães e pais que colocaram o método prático de neuropsicologia em ação e transformaram o clima de seus lares.
          </p>
        </div>

        {/* Helper visual indicator for mobile scroll */}
        <div className="flex justify-center items-center gap-1.5 text-xs text-brand-light/70 mb-6 sm:hidden animate-pulse">
          <span>Arraste para o lado para ver mais</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </div>

        {/* Testimonials Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 -mx-6 px-6 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto scrollbar-none scroll-smooth">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id} 
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-brand-light/30 transition-all duration-300 backdrop-blur-sm min-w-[290px] max-w-[320px] sm:min-w-0 sm:max-w-none snap-start shrink-0"
            >
              <div>
                {/* Rating stars */}
                <div className="flex gap-1 text-brand-accent mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                {/* State compare */}
                <div className="space-y-2 mb-4 text-xs font-sans border-b border-white/5 pb-4">
                  <p className="text-red-300">
                    <span className="font-extrabold uppercase tracking-wider text-[10px] mr-1">Antes:</span>{t.initialState}
                  </p>
                  <p className="text-emerald-300">
                    <span className="font-extrabold uppercase tracking-wider text-[10px] mr-1">Depois:</span>{t.afterState}
                  </p>
                </div>

                {/* Core text */}
                <p className="font-sans text-sm text-white/90 italic leading-relaxed mb-6">
                  "{t.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <TestimonialAvatar src={t.avatar} name={t.name} />
                <div>
                  <h4 className="font-display text-sm font-bold text-white leading-tight">{t.name}</h4>
                  <p className="font-sans text-[11px] text-white/60">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
