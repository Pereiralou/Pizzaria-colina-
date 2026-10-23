import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Phone, Car, Clock, Shield, Share2, Facebook, Navigation } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#fef1ed] text-[#57423c] border-t border-[#ece0dc] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#973314] text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">local_pizza</span>
            </div>
            <span className="font-serif text-lg font-bold text-[#201a18]">
              {RESTAURANT_INFO.name}
            </span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-[#57423c]">
            A autêntica hospitalidade huambense combinada com a tradição da pizza artesanal em forno a lenha, massas frescas e pratos clássicos no planalto central angolano.
          </p>
          <div className="flex items-center gap-2 text-[#556340]">
            <Shield className="w-4 h-4 shrink-0" />
            <span className="text-xs font-semibold">
              Informações Oficiais &amp; Verificadas • 2025
            </span>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-3">
          <span className="font-serif text-base font-bold text-[#201a18]">
            Localização &amp; Acesso
          </span>
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#973314] shrink-0 mt-0.5" />
            <div className="flex flex-col text-xs sm:text-sm">
              <span className="font-bold text-[#201a18]">
                {RESTAURANT_INFO.plusCode} Huambo, Angola
              </span>
              <span>Cidade Alta / Planalto Central</span>
              <span className="text-xs text-[#8b716b] mt-0.5">
                Código Plus Code: {RESTAURANT_INFO.plusCode}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <Car className="w-4 h-4 text-[#556340]" />
            <span className="text-xs text-[#57423c]">
              Estacionamento privativo disponível no local
            </span>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-3">
          <span className="font-serif text-base font-bold text-[#201a18]">
            Horários &amp; Serviços
          </span>
          <div className="space-y-1.5 text-xs sm:text-sm">
            <div className="flex justify-between items-center py-1 bg-white px-2.5 rounded border border-[#dec0b8]/30">
              <span className="font-medium text-[#201a18]">Terça a Domingo</span>
              <span className="font-bold text-[#973314] tabular-nums">08:30 – 22:30</span>
            </div>
            <div className="flex justify-between items-center py-1 px-2.5 rounded text-[#57423c] bg-white border border-[#dec0b8]/20">
              <span className="font-medium">Segunda-feira</span>
              <span className="font-semibold tabular-nums">07:30 – 22:00</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="w-2 h-2 rounded-full bg-[#556340]" />
            <span className="text-xs font-bold text-[#556340]">
              Takeaway &amp; Consumo no Local Disponíveis
            </span>
          </div>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-3">
          <span className="font-serif text-base font-bold text-[#201a18]">
            Contactos &amp; Reservas
          </span>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#973314]" />
            <a
              href={`tel:${RESTAURANT_INFO.phone1Raw}`}
              className="font-bold text-base text-[#201a18] hover:text-[#973314] transition-colors tabular-nums"
            >
              {RESTAURANT_INFO.phone1}
            </a>
          </div>
          <div className="text-xs text-[#57423c]">
            Linha de Apoio: <a href={`tel:${RESTAURANT_INFO.phone2Raw}`} className="font-semibold text-[#201a18]">{RESTAURANT_INFO.phone2}</a>
          </div>
          <p className="text-xs text-[#57423c] leading-relaxed">
            Reservas antecipadas de mesas para grupos, eventos familiares e encomendas takeaway com forno sempre aceso.
          </p>

          <div className="flex items-center gap-2 mt-2">
            <a
              href={RESTAURANT_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white hover:bg-[#ffdbd1] text-[#201a18] hover:text-[#973314] flex items-center justify-center transition-colors border border-[#dec0b8]/40"
              title="Facebook Oficial"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white hover:bg-[#ffdbd1] text-[#201a18] hover:text-[#973314] flex items-center justify-center transition-colors border border-[#dec0b8]/40"
              title="Google Maps"
            >
              <Navigation className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#f8ebe8] py-4 border-t border-[#ece0dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between text-xs text-[#57423c] gap-2">
          <p>© 2025 Restaurante &amp; Pizzaria Colina. Todos os direitos reservados. Huambo, Angola.</p>
          <p className="flex items-center gap-1.5 font-semibold text-[#556340]">
            <Shield className="w-3.5 h-3.5" />
            Gastronomia Artesanal &amp; Hospitalidade Angolana
          </p>
        </div>
      </div>
    </footer>
  );
};
