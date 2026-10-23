import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Navigation, Car, Users, PhoneCall, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-[#fef1ed]" id="localizacao">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-10 text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#556340]">
              Localização &amp; Acesso
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#201a18]">
              No Coração da Cidade do Huambo
            </h2>
            <p className="text-sm sm:text-base text-[#57423c]">
              Fácil acesso pelas principais vias centrais, com parque de estacionamento no recinto e área segura.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg bg-[#973314] hover:bg-[#b84a2a] text-white font-bold text-sm flex items-center gap-2 shadow-sm transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>Abrir no Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Map & Location Info Mosaic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Interactive Map Visual (8 cols) */}
          <div className="lg:col-span-8 rounded-2xl overflow-hidden shadow-lg h-80 sm:h-96 lg:h-auto min-h-[360px] relative border border-[#dec0b8]/40">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC20nmvQgiibr19o4o6W-8uixE3ww4znWfGaXErZg8eS5vW4bKaJNHnFZO6ojN-75-mc9fH_IREUOE6daW3zBFGmax7wCuIiopEwmR713-RQBxFRkRv-VRfd81ClKQgMV0sMXRnOv-oJxNDL4fDZ1yC1Y65Pl0vIgMDAujcxWm_igw3YASlJaqBwe3q2qVo2Twp4a94OO9CEsxbqFwR_jW4siuLcC4BiGB9xZenlEYKwLSiZ1zXQqb_OA')`,
              }}
            />

            {/* Badge overlay */}
            <div className="absolute bottom-5 left-5 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-[#dec0b8]/40 flex items-center gap-3 max-w-sm">
              <div className="w-10 h-10 rounded-lg bg-[#ffdbd1] flex items-center justify-center text-[#973314] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-sm text-[#201a18] block">
                  {RESTAURANT_INFO.plusCode} Huambo
                </span>
                <span className="text-xs text-[#57423c]">
                  Angola • Planalto Central
                </span>
              </div>
            </div>
          </div>

          {/* Coordinates Details Card (4 cols) */}
          <div className="lg:col-span-4 rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-[#dec0b8]/40 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <span className="font-serif text-xl font-bold text-[#201a18]">
                Guia Rápido de Chegada
              </span>
              <div className="flex flex-col gap-3.5 text-xs sm:text-sm text-[#57423c]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-[#973314] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#201a18] block">Endereço Oficial</span>
                    <span>Código Plus: {RESTAURANT_INFO.plusCode}, Cidade de Huambo, Província do Huambo.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Car className="w-5 h-5 text-[#556340] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#201a18] block">Estacionamento</span>
                    <span>Estacionamento privativo disponível em frente ao restaurante.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Users className="w-5 h-5 text-[#794900] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#201a18] block">Ambiente</span>
                    <span>Esplanada ao ar livre e salão climatizado. Adequado para famílias e crianças.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#f8ebe8] border border-[#dec0b8]/30 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs uppercase font-bold text-[#57423c]">Contacto Direto</span>
                <span className="font-bold text-base text-[#973314] tabular-nums">
                  {RESTAURANT_INFO.phone1}
                </span>
              </div>
              <a
                href={`tel:${RESTAURANT_INFO.phone1Raw}`}
                className="w-10 h-10 rounded-full bg-[#b84a2a] hover:bg-[#973314] text-white flex items-center justify-center shadow-xs transition-colors"
                title="Ligar agora"
              >
                <PhoneCall className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
