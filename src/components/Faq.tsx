import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "1",
    question: "O que é o Método Pinguim?",
    answer: "O Método Pinguim é um programa prático 100% online desenvolvido pelo neuropsicólogo clínico Walace Freiman. Ele foi desenhado especificamente para ensinar pais a criarem uma rotina digital saudável e equilibrada para seus filhos, reduzindo o excesso de telas de forma natural e sem brigas no ambiente familiar."
  },
  {
    id: "2",
    question: "Para quais idades o método é indicado?",
    answer: "O método é altamente recomendado para pais, mães e cuidadores de crianças e adolescentes com idades entre 3 e 12 anos. Essa é a janela de ouro do desenvolvimento neurológico, onde os hábitos de foco, sono e autorregulação emocional estão sendo estruturados no cérebro."
  },
  {
    id: "3",
    question: "Meu filho faz birras extremas quando tiro o celular. O método funciona nesse caso?",
    answer: "Com certeza. Esse comportamento é uma resposta biológica natural à queda brusca de dopamina rápida no cérebro. O método fornece um protocolo clínico específico (Guia de Sobrevivência para Birras) que ensina exatamente como fazer a transição de telas com acolhimento e firmeza, desarmando o estresse da criança."
  },
  {
    id: "4",
    question: "Eu tenho uma rotina muito corrida. Consigo aplicar?",
    answer: "Sim! O Método Pinguim foi feito sob medida para pais atarefados. Todo o material é prático, direto ao ponto e focado em micro-atitudes diárias. Você não precisa estudar horas de teoria; basta ler o checklist do dia correspondente (cerca de 10 a 15 minutos) e aplicar no dia a dia."
  },
  {
    id: "5",
    question: "Como funciona a garantia de 7 dias?",
    answer: "Sua satisfação é resguardada por uma garantia incondicional de 7 dias. Inscreva-se hoje, assista ao material e use os checklists. Se por qualquer motivo você achar que o método não serve para a sua família, envie um único e-mail ao nosso suporte e faremos o reembolso integral de 100% do valor pago, sem burocracia."
  },
  {
    id: "6",
    question: "Como vou receber o meu acesso ao portal?",
    answer: "O envio é automático e imediato. Assim que o pagamento for aprovado, você receberá um e-mail contendo seu link individual de login, usuário e senha provisória para acessar o portal exclusivo de alunos de qualquer celular, tablet ou computador."
  }
];

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-gradient-to-b from-[#020912] to-[#04101e] py-20 sm:py-28 border-t border-white/5 relative overflow-hidden">
      
      {/* Decorative gradient overlay */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-brand-light/5 blur-3xl" />

      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 font-sans text-sm sm:text-base text-white/80">
            Ainda tem alguma dúvida? Esclarecemos as principais perguntas de mães e pais sobre o Método Pinguim.
          </p>
        </div>

        {/* Interactive Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-4.5 sm:p-5 text-left font-display text-sm sm:text-base font-bold text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
                >
                  <span>{item.question}</span>
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-brand-accent shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-brand-light shrink-0 ml-4" />
                  )}
                </button>
                
                {/* Collapsible Answer container */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-white/5" : "max-h-0"
                  }`}
                >
                  <p className="p-4.5 sm:p-5 font-sans text-xs sm:text-sm md:text-base leading-relaxed text-white/80 bg-white/[0.02]">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
