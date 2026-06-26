import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AntesDepois from "./components/AntesDepois";
import Depoimentos from "./components/Depoimentos";
import Problema from "./components/Problema";
import MetodoPinguim from "./components/MetodoPinguim";
import NovaPerspectiva from "./components/NovaPerspectiva";
import Entregaveis from "./components/Entregaveis";
import ParaQuem from "./components/ParaQuem";
import RecapitulandoValor from "./components/RecapitulandoValor";
import ComoAcessar from "./components/ComoAcessar";
import SobreCriador from "./components/SobreCriador";
import CtaFinal from "./components/CtaFinal";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import CheckoutModal from "./components/CheckoutModal";

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#030d17] text-white selection:bg-brand-accent/30 selection:text-white antialiased">
      {/* Sticky Header */}
      <Header onOpenCheckout={handleOpenCheckout} />

      <main>
        {/* BLOCO 1 - VENDER SOZINHO (Hero/Headline) */}
        <Hero onOpenCheckout={handleOpenCheckout} />

        {/* BLOCO 1 - VENDER SOZINHO - ANTES E DEPOIS */}
        <AntesDepois />

        {/* BLOCO 2 - DEPOIMENTOS */}
        <Depoimentos />

        {/* BLOCO 3 - RUMINAÇÃO */}
        <Problema onOpenCheckout={handleOpenCheckout} />

        {/* BLOCO 4 - PASSO A PASSO */}
        <MetodoPinguim />

        {/* BLOCO EXTRA - BENEFÍCIOS */}
        <NovaPerspectiva />

        {/* BLOCO 5 - ENTREGÁVEIS & BLOCO 6 - BÔNUS */}
        <Entregaveis />

        {/* BLOCO 7 - PARA QUEM SERVE */}
        <ParaQuem onOpenCheckout={handleOpenCheckout} />

        {/* BLOCO 8 - RECAPITULANDO & BLOCO 9 - VALOR */}
        <RecapitulandoValor onOpenCheckout={handleOpenCheckout} />

        {/* BLOCO 10 - COMO ACESSAR */}
        <ComoAcessar />

        {/* BLOCO 11 - AUTORIDADE */}
        <SobreCriador />

        {/* BLOCO 12 - CONVERSA SÉRIA & BLOCO 13 - VALOR REPEAT */}
        <CtaFinal onOpenCheckout={handleOpenCheckout} />

        {/* BLOCO 14 - FAQ */}
        <Faq />
      </main>

      {/* BLOCO 15 - RODAPÉ */}
      <Footer />

      {/* Interactive Conversion Funnel Checkout Modal */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />
    </div>
  );
}
