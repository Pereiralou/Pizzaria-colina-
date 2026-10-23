import React from 'react';
import { ArrowRight, Flame, UtensilsCrossed, Coffee, Wine } from 'lucide-react';

interface BentoGridSectionProps {
  onSelectCategory: (category: string) => void;
}

export const BentoGridSection: React.FC<BentoGridSectionProps> = ({ onSelectCategory }) => {
  return (
    <section className="w-full py-16 sm:py-20 bg-[#fff8f6]" id="especialidades">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-10 sm:gap-12 text-left">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#973314]">
              Sabor &amp; Variedade Artesanal
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#201a18]">
              Cardápio &amp; Quatro Momentos do Dia
            </h2>
            <p className="text-sm sm:text-base text-[#57423c]">
              Do amanhecer revigorante ao jantar requintado com forno a lenha, oferecemos pratos preparados com dedicação na província do Huambo.
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#d9e9bb] text-[#141f04] text-xs font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#556340]" />
              Forno Ativo Terça a Domingo
            </span>
          </div>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {/* Big Card 1: Pizzaria de Forno (7 cols) */}
          <div className="md:col-span-7 rounded-2xl bg-[#f8ebe8] border border-[#dec0b8]/40 overflow-hidden shadow-md flex flex-col justify-between group">
            <div className="h-64 sm:h-72 w-full overflow-hidden relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaAuk6VnzrudeoGPtIe-zikJb5Mpp6qdTG5I0xMHV2oSc5HtLU8BeM8GeXwpSj3pay3pkpYIondLX7isuZx01MNOoGTM4W4xJY3lx94uoRsv16rdjMgS04sWA-E_gmdBSVZKhju6xLUYXxqvQKUFBo12naAHAQ82hMy2Ol4IFG1iClRMwBfx5A6ORufZ-vNtYNaXVRY5mgYtEwDa5VxlQtNmI9JY8zETwhWk6Vfxr5asL1Fk2jJng8hA"
                alt="Pizzas artesanais em forno a lenha"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#973314] text-xs font-bold shadow-sm">
                Especialidade Rainha
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#201a18]">
                  Pizzas em Forno a Lenha
                </h3>
                <div className="w-10 h-10 rounded-full bg-[#ffdbd1] flex items-center justify-center text-[#973314]">
                  <Flame className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-sm sm:text-base text-[#57423c] leading-relaxed">
                Massa de fermentação natural, molho de tomate cozido lentamente e mozzarella de fusão dourada. Disponível nos clássicos Marguerita, Colina Especial, Quatro Queijos, Frango Catupiry e sabores do mar.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-2.5 py-1 rounded bg-white text-xs font-medium text-[#57423c] border border-[#ece0dc]">
                  Massa fina estaladiça
                </span>
                <span className="px-2.5 py-1 rounded bg-white text-xs font-medium text-[#57423c] border border-[#ece0dc]">
                  Ingredientes frescos
                </span>
                <span className="px-2.5 py-1 rounded bg-white text-xs font-medium text-[#57423c] border border-[#ece0dc]">
                  Tamanhos Médio &amp; Familiar
                </span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onSelectCategory('pizzas')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#973314] hover:text-[#b84a2a] group-hover:underline cursor-pointer"
                >
                  <span>Ver todas as pizzas no cardápio</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Big Card 2: Cozinha & Grelhados (5 cols) */}
          <div className="md:col-span-5 rounded-2xl bg-[#f8ebe8] border border-[#dec0b8]/40 overflow-hidden shadow-md flex flex-col justify-between group">
            <div className="h-64 sm:h-72 w-full overflow-hidden relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQvmcEpbkpU5jvxcF2yLtnSUkkTdwc7x-fDQrBRU-gX2ilfZ2JZ7XOrnzmxb933cOd7ulike9R4a1zlp5MS1Ubl7BZFbWwa7xlp1DeZk5TBT-dFnbeFazmK4hKMubelQPu7HIzaohNwEUUM5NZ14u2AyoxNCjnESfVFdJ-jYmrDs8RodWNFrOmidwgIBVG0XzxXtBBp1QpygxsRxi75OzqYbRpW1PPkqVSGVWrAlhV-rbvK2FaCFuqEQ"
                alt="Grelhados e carnes nobres"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#556340] text-xs font-bold shadow-sm">
                Almoço &amp; Jantar
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#201a18]">
                  Cozinha &amp; Grelhados
                </h3>
                <div className="w-10 h-10 rounded-full bg-[#d9e9bb] flex items-center justify-center text-[#556340]">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
              </div>
              <p className="text-sm sm:text-base text-[#57423c] leading-relaxed">
                Pratos de carne e peixe confecionados na hora, bife à casa, massas cremosas e guarnições tradicionais para o almoço de negócios ou refeição em família.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-2.5 py-1 rounded bg-white text-xs font-medium text-[#57423c] border border-[#ece0dc]">
                  Grelhados no carvão
                </span>
                <span className="px-2.5 py-1 rounded bg-white text-xs font-medium text-[#57423c] border border-[#ece0dc]">
                  Doses generosas
                </span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onSelectCategory('pratos')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#556340] hover:text-[#201a18] group-hover:underline cursor-pointer"
                >
                  <span>Ver pratos de almoço e jantar</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Pequeno-Almoço & Cafetaria (6 cols) */}
          <div className="md:col-span-6 rounded-2xl bg-[#fef1ed] border border-[#dec0b8]/30 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row gap-6 items-center">
            <div className="w-full sm:w-44 h-44 rounded-xl overflow-hidden shrink-0 shadow-sm border border-[#dec0b8]/40">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfVK0HAUOYWI1-r-GFJJM9exzqyoymuB_GQjpJBcER-qjleQslDHC_BND45WoZWn4s5zPjyzHbils6VU1elEkCITTLfigcPCAwWoN8uvocDVJsqKI6qN0yKOD5dwoIQsnsXg_a_L0cgPM44XAOcdS5JGKua0KDCUN6O5kOz607Z1oeqPAkhThqxpm9qLYrkjmoXLHQnPisqLoHu6AybPKR0qNLLQh-c3kSnMK5F-Ga30u29xLCeYWuYg"
                alt="Pequeno almoço e café"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#794900]">
                Manhãs no Huambo
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#201a18]">
                Pequeno-Almoço &amp; Cafetaria
              </h3>
              <p className="text-xs sm:text-sm text-[#57423c] leading-relaxed">
                Café expresso encorpado, tostas generosas, pastelaria matinal e sumos de fruta fresca natural para começar bem o dia logo a partir das 07:30 / 08:30.
              </p>
              <button
                onClick={() => onSelectCategory('pequeno-almoco')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#794900] hover:underline pt-2 cursor-pointer"
              >
                <span>Explorar opções matinais</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4: Sobremesas & Bar (6 cols) */}
          <div className="md:col-span-6 rounded-2xl bg-[#fef1ed] border border-[#dec0b8]/30 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row gap-6 items-center">
            <div className="w-full sm:w-44 h-44 rounded-xl overflow-hidden shrink-0 shadow-sm border border-[#dec0b8]/40">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjyfYZWbAzFzF05n54Qx427xMaDs0ChuNfrmi16gSrW5depc29WiLQHsIZY5M1UOr36v9KxJ_QW9zHnA377SRh62HbB3PlN1SiKmbWRB3BmaemjCAn5QFsNZi2bRXgi_ejVrsl19k7-htN9c0mbnPfgLzGD3Y2zFICrv824mUET-cyoyU2-qdisEQnWAtfpM_1-DdZseBeiJXmkbnmlwm0bwoFMeZGQ1KG0uPgKLEzXZAZ2vLwx-icEQ"
                alt="Sobremesas e bebidas"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#973314]">
                Para Concluir
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#201a18]">
                Sobremesas, Vinhos &amp; Sumos
              </h3>
              <p className="text-xs sm:text-sm text-[#57423c] leading-relaxed">
                Doces artesanais caseiros, vinhos selecionados para acompanhar as massas, cervejas geladas e sumos frescos para todas as idades.
              </p>
              <button
                onClick={() => onSelectCategory('sobremesas')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#973314] hover:underline pt-2 cursor-pointer"
              >
                <span>Ver sobremesas e bebidas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
