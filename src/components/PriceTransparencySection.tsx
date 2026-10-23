import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { CreditCard, PhoneCall, CalendarCheck } from 'lucide-react';

interface PriceTransparencySectionProps {
  onOpenReservation: () => void;
}

export const PriceTransparencySection: React.FC<PriceTransparencySectionProps> = ({
  onOpenReservation,
}) => {
  return (
    <section className="w-full py-14 sm:py-16 bg-[#f2e6e2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="rounded-3xl bg-white p-6 sm:p-10 lg:p-12 shadow-md border border-[#dec0b8]/40 flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#556340]">
              <CreditCard className="w-5 h-5 text-[#556340]" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Transparência &amp; Honestidade
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#201a18]">
              Consumo Médio Estimado:{' '}
              <span className="text-[#973314] font-bold">
                {RESTAURANT_INFO.averageTicketMin.toLocaleString('pt-AO')} Kz –{' '}
                {RESTAURANT_INFO.averageTicketMax.toLocaleString('pt-AO')} Kz
              </span>{' '}
              por pessoa
            </h3>
            <p className="text-sm sm:text-base text-[#57423c] leading-relaxed">
              Os valores médios variam conforme a escolha entre cafetaria ligeira, pizzas partilhadas ou pratos completos de cozinha com bebidas e sobremesas. Para consultar pratos do dia, menus para grupos ou encomendas específicas, contacte a nossa equipa de sala.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full lg:w-auto">
            <a
              href={`tel:${RESTAURANT_INFO.phone1Raw}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#f8ebe8] hover:bg-[#ece0dc] text-[#201a18] font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors tabular-nums border border-[#dec0b8]/30"
            >
              <PhoneCall className="w-4 h-4 text-[#973314]" />
              <span>{RESTAURANT_INFO.phone1}</span>
            </a>
            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#973314] hover:bg-[#b84a2a] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Reservar com Antecedência</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
