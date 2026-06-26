import React, { useState } from "react";
import { X, Lock, CheckCircle, CreditCard, Sparkles, ShieldCheck } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card">("pix");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    setLoading(true);
    // Simulate real high-performing API call
    setTimeout(() => {
      setLoading(false);
      setStep("success");
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/85 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#0a2e50] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between p-4.5 sm:p-6 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-brand-accent flex items-center justify-center">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-dark" />
            </div>
            <span className="font-display text-xs sm:text-sm font-bold text-white tracking-tight">Método Pinguim</span>
          </div>
          <button 
            onClick={onClose}
            className="cursor-pointer h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/5"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal body */}
        <div className="overflow-y-auto p-5 sm:p-6 md:p-8">
          {step === "form" ? (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="text-center space-y-1">
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Inscrição Método Pinguim
                </h3>
                <p className="font-sans text-[11px] sm:text-xs text-white/70">
                  Preencha seus dados reais para liberar seu portal imediatamente.
                </p>
              </div>

              {/* Bullet Value Prop banner inside checkout */}
              <div className="rounded-xl bg-white/5 border border-white/10 p-3 flex items-center gap-2.5 text-[11px] sm:text-xs text-white font-medium">
                <Sparkles className="h-4 w-4 shrink-0 text-brand-accent animate-pulse" />
                <span>Acesso vitalício a todas as atualizações e suporte psicológico na comunidade!</span>
              </div>

              {/* Form inputs */}
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[10px] sm:text-xs font-bold text-white/80 uppercase tracking-wider mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 sm:py-3.5 text-xs sm:text-sm text-white placeholder:text-white/40 focus:border-brand-accent focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-[10px] sm:text-xs font-bold text-white/80 uppercase tracking-wider mb-1">
                      Seu E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="exemplo@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 sm:py-3.5 text-xs sm:text-sm text-white placeholder:text-white/40 focus:border-brand-accent focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[10px] sm:text-xs font-bold text-white/80 uppercase tracking-wider mb-1">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 sm:py-3.5 text-xs sm:text-sm text-white placeholder:text-white/40 focus:border-brand-accent focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Select */}
              <div className="space-y-2">
                <label className="block text-[10px] sm:text-xs font-bold text-white/80 uppercase tracking-wider">
                  Método de Pagamento
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("pix")}
                    className={`cursor-pointer flex items-center justify-center gap-1.5 rounded-xl p-2.5 sm:p-3.5 border text-[10px] sm:text-xs font-bold tracking-tight transition-all ${
                      paymentMethod === "pix"
                        ? "border-brand-accent bg-brand-accent/15 text-white"
                        : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                    }`}
                  >
                    <span>⚡ PIX (Imediato)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`cursor-pointer flex items-center justify-center gap-1.5 rounded-xl p-2.5 sm:p-3.5 border text-[10px] sm:text-xs font-bold tracking-tight transition-all ${
                      paymentMethod === "card"
                        ? "border-brand-accent bg-brand-accent/15 text-white"
                        : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                    }`}
                  >
                    <CreditCard className="h-3.5 w-3.5 shrink-0" />
                    <span>Cartão de Crédito</span>
                  </button>
                </div>
              </div>

              {/* Payment details text depending on choice */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 space-y-1.5 text-[11px] sm:text-xs">
                {paymentMethod === "pix" ? (
                  <>
                    <p className="font-bold text-brand-accent flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                      Desconto de PIX Ativo
                    </p>
                    <p className="text-white/80 leading-relaxed">
                      O código copia e cola será gerado após clicar no botão. Você recebe o acesso ao curso imediatamente em seu e-mail de cadastro.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-bold text-brand-accent">Parcelado em até 12x</p>
                    <p className="text-white/80 leading-relaxed">
                      Aprovado instantaneamente. Aceitamos todas as principais bandeiras nacionais com segurança criptografada de ponta a ponta.
                    </p>
                  </>
                )}
              </div>

              {/* Big Checkout Button */}
              <button
                type="submit"
                disabled={loading}
                className="cursor-pointer w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-accent hover:bg-white text-brand-dark font-extrabold py-3.5 sm:py-4 text-xs sm:text-sm tracking-tight shadow-lg disabled:opacity-50 transition-all"
              >
                {loading ? (
                  <span>Processando inscrição segura...</span>
                ) : (
                  <span>CONCLUIR INSCRIÇÃO POR R$ 297,00</span>
                )}
              </button>

              {/* Secure checkout footer */}
              <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] text-white/50">
                <Lock className="h-3.5 w-3.5 text-brand-accent" />
                <span>Ambiente Criptografado de Pagamento Seguro</span>
              </div>
            </form>
          ) : (
            /* SUCCESS CELEBRATION VIEW */
            <div className="text-center py-4 sm:py-6 space-y-4 sm:space-y-6">
              <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                <CheckCircle className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              
              <div className="space-y-1.5">
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white">
                  Parabéns, {formData.name.split(" ")[0]}!
                </h3>
                <p className="font-sans text-xs sm:text-sm text-white/90 max-w-sm mx-auto leading-relaxed">
                  Sua inscrição no <strong>Método Pinguim</strong> foi processada com total sucesso e seu acesso já está liberado!
                </p>
              </div>

              <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-4 sm:p-5 space-y-2.5 text-left max-w-sm mx-auto">
                <h4 className="font-display text-[10px] sm:text-xs font-extrabold text-brand-accent uppercase tracking-wider">
                  Próximos passos imediatos:
                </h4>
                <ul className="space-y-2 text-[11px] sm:text-xs text-white/80 leading-relaxed">
                  <li className="flex gap-2">
                    <span className="font-bold text-brand-accent">1.</span>
                    <span>Enviamos um e-mail de confirmação para <strong>{formData.email}</strong> com seu link de login e senha provisória.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-brand-accent">2.</span>
                    <span>O link da nossa comunidade exclusiva no WhatsApp também foi enviado para o seu número de cadastro.</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={onClose}
                className="cursor-pointer rounded-xl bg-brand-accent hover:bg-white text-brand-dark font-extrabold px-6 py-3 sm:py-3.5 text-[11px] sm:text-xs tracking-tight transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                IR PARA O PORTAL DE ALUNOS
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
