import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Flame, HeartHandshake, Sparkles, MapPin, CheckCircle, Shield } from 'lucide-react';

interface AboutSectionProps {
  onOpenReservation: () => void;
  onNavigateMenu: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenReservation,
  onNavigateMenu,
}) => {
  return (
    <div className="w-full bg-[#fff8f6] text-left">
      {/* Hero Header */}
      <section className="relative w-full py-16 sm:py-20 bg-[#fef1ed] border-b border-[#dec0b8]/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#973314] w-fit shadow-xs border border-[#dec0b8]/30">
              <span className="w-2 h-2 rounded-full bg-[#973314]" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Sobre Nós • Tradição Gastronómica no Huambo
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#201a18] tracking-tight leading-tight">
              A autêntica hospitalidade huambense combinada com a paixão pelo forno a lenha.
            </h1>
            <p className="text-sm sm:text-lg text-[#57423c] leading-relaxed">
              No coração do planalto central de Angola, o Restaurante &amp; Pizzaria Colina nasceu com a missão de proporcionar uma mesa acolhedora onde famílias, amigos e profissionais desfrutam de refeições saborosas, preparadas com calma e respeito pelos ingredientes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 flex flex-col gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#556340]">
              O Nosso Ofício Diário
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#201a18]">
              Massa de fermentação lenta e calor vivo das brasas.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#57423c] leading-relaxed">
              <p>
                A nossa pizzaria apoia-se num processo artesanal rigoroso: as massas descansam até 48 horas em ambiente controlado para ganhar elasticidade, leveza digestiva e uma borda arejada que ganha vida ao entrar no forno de pedra a altas temperaturas.
              </p>
              <p>
                Paralelamente, a nossa cozinha de restaurante honra os sabores familiares: cortes tenros grelhados no carvão natural, peixes e aves marinados com ervas aromáticas e guarnições generosas que transformam qualquer almoço ou jantar numa ocasião memorável.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#dec0b8]/30 shadow-xs">
                <span className="font-serif text-2xl font-bold text-[#973314] block">48 Horas</span>
                <span className="text-xs text-[#57423c]">Fermentação natural da massa</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#dec0b8]/30 shadow-xs">
                <span className="font-serif text-2xl font-bold text-[#556340] block">100% Brasa</span>
                <span className="text-xs text-[#57423c]">Carvão vegetal selecionado</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] border border-[#dec0b8]/40">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaAuk6VnzrudeoGPtIe-zikJb5Mpp6qdTG5I0xMHV2oSc5HtLU8BeM8GeXwpSj3pay3pkpYIondLX7isuZx01MNOoGTM4W4xJY3lx94uoRsv16rdjMgS04sWA-E_gmdBSVZKhju6xLUYXxqvQKUFBo12naAHAQ82hMy2Ol4IFG1iClRMwBfx5A6ORufZ-vNtYNaXVRY5mgYtEwDa5VxlQtNmI9JY8zETwhWk6Vfxr5asL1Fk2jJng8hA"
                alt="Forno de pedra e preparo de pizzas na Pizzaria Colina"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Pillars / Compromisso */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-6 rounded-2xl bg-white border border-[#dec0b8]/30 shadow-xs flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ffdbd1] flex items-center justify-center text-[#973314]">
              <Flame className="w-5 h-5 fill-current" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#201a18]">
              01. Tradição do Forno
            </h3>
            <p className="text-xs sm:text-sm text-[#57423c] leading-relaxed">
              O fogo a lenha confere aquele toque fumado sutil e a crosta dourada estaladiça que só os fornos tradicionais conseguem proporcionar.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#dec0b8]/30 shadow-xs flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#d9e9bb] flex items-center justify-center text-[#556340]">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#201a18]">
              02. Acolhimento Familiar
            </h3>
            <p className="text-xs sm:text-sm text-[#57423c] leading-relaxed">
              Dispomos de esplanada fresca para os fins de tarde e de um salão fechado climatizado, ideal para celebrar aniversários, reuniões ou almoços de domingo.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#dec0b8]/30 shadow-xs flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ffddba] flex items-center justify-center text-[#794900]">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#201a18]">
              03. Preço Justo &amp; Claro
            </h3>
            <p className="text-xs sm:text-sm text-[#57423c] leading-relaxed">
              Sem surpresas na conta. Cardápio transparente com preços em Kwanzas confirmados pela equipa de sala, pagamento por TPA e emissão de fatura com NIF.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="rounded-3xl bg-[#f8ebe8] p-8 sm:p-10 border border-[#dec0b8]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#201a18]">
              Visite-nos ou contacte a nossa receção
            </h3>
            <p className="text-xs sm:text-sm text-[#57423c] mt-1">
              Estamos prontos para recebê-lo de portas abertas na cidade do Huambo.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onNavigateMenu}
              className="px-5 py-3 rounded-xl bg-white text-[#201a18] hover:bg-[#f2e6e2] font-bold text-xs sm:text-sm border border-[#dec0b8]/40 shadow-xs cursor-pointer"
            >
              Consultar Cardápio
            </button>
            <button
              onClick={onOpenReservation}
              className="px-5 py-3 rounded-xl bg-[#973314] hover:bg-[#b84a2a] text-white font-bold text-xs sm:text-sm shadow-sm cursor-pointer"
            >
              Fazer Reserva
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
