import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Phone, Clock, Utensils, BookOpen, Navigation, Flame, Star, Coffee, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenReservation: () => void;
  onNavigateMenu: () => void;
  onNavigateLocation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenReservation,
  onNavigateMenu,
  onNavigateLocation,
}) => {
  return (
    <>
      <section className="relative w-full pt-10 sm:pt-14 pb-16 sm:pb-20 bg-gradient-to-b from-[#fef1ed] via-[#fff8f6] to-[#fff8f6] overflow-hidden">
        {/* Subtle Atmospheric Ambient Shapes */}
        <div className="absolute -top-32 right-0 w-[540px] h-[540px] rounded-full bg-[#ffdbd1]/30 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-20 w-[420px] h-[420px] rounded-full bg-[#d9e9bb]/30 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Text Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              {/* Institutional Badge */}
              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#f8ebe8] border border-[#dec0b8]/40 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#556340] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#201a18]">
                  Tradição Gastronómica • Huambo desde 2016
                </span>
              </div>

              {/* Main Title */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#201a18] tracking-tight leading-[1.12]">
                A autêntica alma da{' '}
                <span className="text-[#973314] italic">pizza no forno</span> &amp; cozinha acolhedora do Planalto.
              </h1>

              {/* Body Description */}
              <p className="text-base sm:text-lg text-[#57423c] max-w-2xl leading-relaxed">
                Há quase uma década a reunir famílias e amigos em Huambo. Das pizzas artesanais com massa estaladiça aos grelhados generosos, pequenos-almoços e cafés revigorantes para todas as horas do dia.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <button
                  onClick={onOpenReservation}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#b84a2a] hover:bg-[#973314] text-white font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <Utensils className="w-5 h-5" />
                  <span>Reservar Mesa / Encomenda</span>
                </button>

                <button
                  onClick={onNavigateMenu}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#f8ebe8] hover:bg-[#f2e6e2] text-[#201a18] font-bold text-sm sm:text-base transition-all shadow-sm cursor-pointer"
                >
                  <BookOpen className="w-5 h-5 text-[#973314]" />
                  <span>Ver Cardápio Completo</span>
                </button>

                <button
                  onClick={onNavigateLocation}
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg text-[#556340] hover:text-[#201a18] font-semibold text-sm sm:text-base transition-colors cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Como Chegar</span>
                </button>
              </div>

              {/* Micro Metas */}
              <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-6 text-[#57423c]">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#973314]" />
                  <a
                    href={`tel:${RESTAURANT_INFO.phone1Raw}`}
                    className="font-bold text-sm sm:text-base text-[#201a18] hover:text-[#973314] transition-colors tabular-nums"
                  >
                    {RESTAURANT_INFO.phone1}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#556340]" />
                  <span className="text-xs sm:text-sm font-medium">Aberto hoje até às 22:30</span>
                </div>
              </div>
            </div>

            {/* Visual Mosaic Column (5 cols) */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative w-full rounded-2xl overflow-hidden bg-[#f8ebe8] shadow-2xl aspect-[4/5] max-h-[540px] border border-[#dec0b8]/30">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHs_jyp71wjktx9ha3EMyHIYCtjahv-bOW7xZgx_OAq_cRod_a_Uj0SU3YcFnaSKCBYbEeYQqwt60PspuHEBIiZ780UlH9muuMJopRZE_86aZArqvpxg1h1cSu86cluCXtHw_Lqftnza0OV-019TSiN4enk72p8dEihJwHy2NejRcmNYxRdUJUw5AZfB1CWIwra4KlSFor2M-qKYWRebwtEc5bIac4anBQHqDWgc8Xq5iFRWIM3LLosw"
                  alt="Pizza artesanal em forno a lenha no Restaurante e Pizzaria Colina Huambo"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#201a18]/80 via-transparent to-transparent" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#fff8f6]/95 backdrop-blur-md shadow-lg border border-[#ece0dc] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg bg-[#ffdbd1] flex items-center justify-center text-[#973314]">
                      <Flame className="w-6 h-6 fill-current" />
                    </div>
                    <div className="text-left">
                      <span className="block font-serif text-lg font-bold text-[#201a18]">
                        Forno a Lenha
                      </span>
                      <span className="block text-xs text-[#57423c]">
                        Massas de fermentação lenta
                      </span>
                    </div>
                  </div>
                  <span className="font-bold text-base text-[#973314] bg-[#f8ebe8] px-2.5 py-1 rounded-md">
                    ~10 Anos
                  </span>
                </div>
              </div>

              {/* Floating Badge Top Left */}
              <div className="absolute -top-4 -left-3 sm:-left-4 px-4 py-3 rounded-xl bg-white shadow-lg border border-[#ece0dc] flex items-center gap-2.5 z-20">
                <div className="w-8 h-8 rounded-lg bg-[#ffddba] flex items-center justify-center text-[#794900]">
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <div className="text-left">
                  <span className="font-bold text-sm text-[#201a18] block leading-tight">
                    {RESTAURANT_INFO.rating.toFixed(1).replace('.', ',')} / 5,0
                  </span>
                  <span className="text-xs text-[#57423c] block leading-tight">
                    150+ opiniões Google
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK HIGHLIGHTS RIBBON */}
      <section className="w-full bg-[#fef1ed] py-8 border-y border-[#dec0b8]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {RESTAURANT_INFO.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white shadow-sm border border-[#dec0b8]/20 text-left hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-[#f8ebe8] flex items-center justify-center text-[#973314] shrink-0">
                  <span className="material-symbols-outlined text-xl">{feature.icon}</span>
                </div>
                <div>
                  <span className="text-sm font-bold text-[#201a18] block leading-tight">
                    {feature.title}
                  </span>
                  <span className="text-xs text-[#57423c] block leading-tight mt-0.5">
                    {feature.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
