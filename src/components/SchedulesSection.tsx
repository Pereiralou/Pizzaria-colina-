import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Calendar, CheckCircle2, Info, Flame, Clock } from 'lucide-react';

export const SchedulesSection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-[#fff8f6]" id="horarios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center text-left">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#556340]">
              Pontualidade &amp; Acolhimento
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#201a18]">
              Horários de Atendimento no Huambo
            </h2>
            <p className="text-sm sm:text-base text-[#57423c] leading-relaxed">
              Prontos para servi-lo desde o pequeno-almoço matinal até ao último turno de jantar. Pizzas e pratos takeaway disponíveis durante todo o período com forno aquecido.
            </p>

            <div className="p-4 rounded-xl bg-[#d9e9bb]/40 border border-[#556340]/20 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#556340] shrink-0" />
              <div>
                <span className="font-bold text-sm sm:text-base text-[#201a18] block">
                  Atendimento Ativo
                </span>
                <span className="text-xs sm:text-sm text-[#57423c]">
                  Consumo no local, esplanada e takeaway/entregas activas.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#f8ebe8] p-5 sm:p-8 shadow-md border border-[#dec0b8]/40 flex flex-col gap-4">
              {/* Schedule 1 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-white shadow-sm border border-[#dec0b8]/20 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#ffdbd1] flex items-center justify-center text-[#973314] shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-base text-[#201a18] block">
                      Segunda-feira
                    </span>
                    <span className="text-xs text-[#57423c]">
                      Serviço matinal e contínuo
                    </span>
                  </div>
                </div>
                <div className="text-left sm:text-right mt-1 sm:mt-0 pl-12 sm:pl-0">
                  <span className="font-bold text-lg text-[#973314] block tabular-nums">
                    07:30 – 22:00
                  </span>
                  <span className="text-xs font-semibold text-[#556340]">
                    Aberto
                  </span>
                </div>
              </div>

              {/* Schedule 2 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-white shadow-sm border border-[#dec0b8]/20 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#ffdbd1] flex items-center justify-center text-[#973314] shrink-0">
                    <Flame className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="font-bold text-base text-[#201a18] block">
                      Terça-feira a Domingo
                    </span>
                    <span className="text-xs text-[#57423c]">
                      Forno a Lenha a pleno vapor
                    </span>
                  </div>
                </div>
                <div className="text-left sm:text-right mt-1 sm:mt-0 pl-12 sm:pl-0">
                  <span className="font-bold text-lg text-[#973314] block tabular-nums">
                    08:30 – 22:30
                  </span>
                  <span className="text-xs font-semibold text-[#556340]">
                    Aberto com Forno Completo
                  </span>
                </div>
              </div>

              {/* Notice Box */}
              <div className="mt-2 p-4 rounded-xl bg-[#ece0dc]/70 text-[#57423c] flex items-start gap-3 text-xs sm:text-sm">
                <Info className="w-5 h-5 text-[#794900] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Para grupos com mais de 8 pessoas ao fim-de-semana, recomendamos reserva com pelo menos 3 horas de antecedência para garantir a melhor acomodação na esplanada ou salão.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
