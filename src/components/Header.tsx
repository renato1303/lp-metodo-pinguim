import React, { useState } from "react";
import { ShieldCheck } from "lucide-react";

interface HeaderProps {
  onOpenCheckout: () => void;
}

export default function Header({ onOpenCheckout }: HeaderProps) {
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#030d17]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-center px-6 sm:px-8">
        <div className="flex items-center justify-center gap-2.5">
          {!logoError ? (
            <img
              src="/images/logo.png"
              alt="Método Pinguim"
              className="h-12 sm:h-14 w-auto rounded-xl object-contain"
              onError={() => setLogoError(true)}
              referrerPolicy="no-referrer"
            />
          ) : (
            <>
              {/* Typographic logo with abstract premium badge */}
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.08] text-brand-accent shadow-sm border border-white/15">
                <ShieldCheck className="h-5 w-5 text-brand-accent" />
              </div>
              <div>
                <span className="font-display text-sm sm:text-base font-extrabold tracking-tight text-white uppercase">
                  Método Pinguim
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
