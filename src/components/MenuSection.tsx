import React, { useState } from 'react';
import { MENU_ITEMS, RESTAURANT_INFO, MenuItem } from '../data/restaurantData';
import {
  Flame,
  Search,
  Check,
  Utensils,
  Coffee,
  IceCream,
  Wine,
  PhoneCall,
  ShoppingBag,
  Plus,
  Table,
  Bike,
  Receipt,
  CreditCard,
  Building,
  CalendarCheck,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface MenuSectionProps {
  initialCategory?: string;
  onAddToCart: (item: MenuItem, selectedSize?: 'individual' | 'familiar') => void;
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  initialCategory = 'all',
  onAddToCart,
  onOpenReservation,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPizzaSizes, setSelectedPizzaSizes] = useState<Record<string, 'individual' | 'familiar'>>({});
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Todas as Categorias', icon: Utensils },
    { id: 'pizzas', label: 'Pizzas de Forno', icon: Flame },
    { id: 'pratos', label: 'Pratos de Restaurante', icon: Utensils },
    { id: 'pequeno-almoco', label: 'Pequeno-almoço & Cafetaria', icon: Coffee },
    { id: 'sobremesas', label: 'Sobremesas', icon: IceCream },
    { id: 'bebidas', label: 'Bebidas & Cafés', icon: Wine },
  ];

  const handleSizeToggle = (itemId: string, size: 'individual' | 'familiar') => {
    setSelectedPizzaSizes((prev) => ({
      ...prev,
      [itemId]: size,
    }));
  };

  const handleAdd = (item: MenuItem) => {
    const size = selectedPizzaSizes[item.id] || 'individual';
    onAddToCart(item, item.category === 'pizzas' ? size : undefined);
    setAddedItemNotice(item.name);
    setTimeout(() => {
      setAddedItemNotice(null);
    }, 2000);
  };

  // Filter items
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const pizzas = filteredItems.filter((i) => i.category === 'pizzas');
  const pratos = filteredItems.filter((i) => i.category === 'pratos');
  const pequenoAlmoco = filteredItems.filter((i) => i.category === 'pequeno-almoco');
  const sobremesas = filteredItems.filter((i) => i.category === 'sobremesas');
  const bebidas = filteredItems.filter((i) => i.category === 'bebidas');

  return (
    <div className="w-full bg-[#fff8f6] text-left">
      {/* Added notice alert */}
      {addedItemNotice && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#201a18] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-[#dec0b8]/40 animate-in slide-in-from-bottom-2">
          <div className="w-7 h-7 rounded-full bg-[#556340] flex items-center justify-center text-white">
            <Check className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-xs sm:text-sm block">Adicionado ao Pedido!</span>
            <span className="text-xs text-white/80">{addedItemNotice}</span>
          </div>
        </div>
      )}

      {/* Top Decorative Header Intro */}
      <section className="relative w-full overflow-hidden bg-[#fef1ed] px-4 sm:px-6 lg:px-12 py-12 sm:py-16 border-b border-[#dec0b8]/30">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#973314]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-12 w-80 h-80 rounded-full bg-[#556340]/10 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
          <div className="max-w-3xl flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#556340] w-fit shadow-xs border border-[#dec0b8]/30">
              <span className="w-2 h-2 rounded-full bg-[#556340] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Cozinha Autêntica do Huambo • Forno a Lenha
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#201a18] tracking-tight">
              O Nosso Cardápio • <span className="italic text-[#973314]">Sabores de Forno e Tradição</span> à Mesa no Huambo
            </h1>
            <p className="text-sm sm:text-base text-[#57423c] max-w-2xl leading-relaxed">
              Cada receita combina a herança culinária artesanal, massa fresca fermentada lentamente e carnes nobres grelhadas com o tempero hospitaleiro do planalto central angolano.
            </p>
          </div>

          {/* Quick Indicative Ticket Badge */}
          <div className="flex items-center gap-4 bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-[#dec0b8]/40 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-[#ffdbd1] flex items-center justify-center text-[#973314] shrink-0">
              <Receipt className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase font-bold text-[#57423c]">Estimativa Média de Refeição</span>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="font-bold text-lg sm:text-xl text-[#973314] tabular-nums">
                  9.100 Kz – 22.800 Kz
                </span>
                <span className="text-xs text-[#57423c]">/ pessoa</span>
              </div>
              <span className="text-xs text-[#556340] flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5" /> Sem taxas ocultas • Preços claros
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Category Navigation & Search */}
      <section className="sticky top-20 z-40 bg-[#fff8f6]/95 backdrop-blur-md py-4 px-4 sm:px-6 lg:px-12 border-b border-[#ece0dc] shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Categories Tab Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 no-scrollbar">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#201a18] text-white shadow-sm'
                      : 'bg-[#f8ebe8] text-[#57423c] hover:bg-[#f2e6e2] hover:text-[#201a18]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8b716b]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar prato ou ingrediente..."
                className="w-full pl-9 pr-3 py-2 rounded-full bg-white border border-[#dec0b8] text-xs sm:text-sm text-[#201a18] outline-none focus:ring-2 focus:ring-[#973314]"
              />
            </div>
            <a
              href={`tel:${RESTAURANT_INFO.phone1Raw}`}
              className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#f8ebe8] hover:bg-[#f2e6e2] text-[#973314] text-xs font-bold transition-colors whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Pedido Rápido</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quality & Transparency Alert Banner */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 pt-8 pb-4">
        <div className="bg-gradient-to-r from-[#f8ebe8] via-[#fef1ed] to-[#f8ebe8] p-5 sm:p-7 rounded-2xl border border-[#dec0b8]/40 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-start gap-4 z-10 max-w-3xl">
            <div className="w-11 h-11 rounded-xl bg-[#556340] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-sm sm:text-base text-[#201a18]">
                  Transparência &amp; Qualidade Gastronómica Certificada
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#d9e9bb] text-[#141f04] text-[11px] font-bold">
                  Ingredientes Frescos do Dia
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#57423c] leading-relaxed">
                As sugestões do chefe variam conforme o fornecimento diário de carnes frescas da região e frescos locais do Huambo. Para reservas especiais, banquetes em família ou confirmação de cortes específicos do dia, sugerimos contacto telefónico prévio:
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0 z-10 w-full md:w-auto">
            <a
              href={`tel:${RESTAURANT_INFO.phone1Raw}`}
              className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#201a18] hover:text-[#973314] shadow-xs border border-[#dec0b8]/30 font-bold text-sm tabular-nums"
            >
              <PhoneCall className="w-4 h-4 text-[#973314]" />
              <span>924 552 222</span>
            </a>
            <a
              href={`tel:${RESTAURANT_INFO.phone2Raw}`}
              className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#201a18] hover:text-[#973314] shadow-xs border border-[#dec0b8]/30 font-bold text-sm tabular-nums"
            >
              <PhoneCall className="w-4 h-4 text-[#556340]" />
              <span>940 794 987</span>
            </a>
          </div>
        </div>
      </section>

      {/* Catalog Sections */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 py-8 flex flex-col gap-16">
        {/* 1. SEÇÃO PIZZARIA */}
        {(activeCategory === 'all' || activeCategory === 'pizzas') && pizzas.length > 0 && (
          <section className="flex flex-col gap-6" id="section-pizzas">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#ece0dc] pb-4">
              <div>
                <div className="flex items-center gap-2 text-[#973314]">
                  <Flame className="w-5 h-5 fill-current" />
                  <span className="text-xs font-bold uppercase tracking-wider">Especialidade Maior</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#201a18] mt-1">
                  Pizzas Artesanais em Forno a Alta Temperatura
                </h2>
                <p className="text-xs sm:text-sm text-[#57423c] max-w-2xl mt-1">
                  Farinha nobre com 48h de fermentação lenta, molho pomodoro rústico, mozzarella cremosa gratinada e borda crocante e arejada.
                </p>
              </div>

              <div className="flex items-center gap-2 bg-[#f8ebe8] px-3.5 py-2 rounded-xl shrink-0 text-xs text-[#201a18]">
                <span className="font-bold">Tamanhos:</span>
                <span className="px-2 py-0.5 bg-white rounded border border-[#dec0b8]/40">
                  Individual (Ø 26cm)
                </span>
                <span className="px-2 py-0.5 bg-white rounded border border-[#dec0b8]/40">
                  Familiar (Ø 38cm)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pizzas.map((pizza) => {
                const isFamiliar = selectedPizzaSizes[pizza.id] === 'familiar';
                const currentPrice = isFamiliar && pizza.familyPriceAOA ? pizza.familyPriceAOA : pizza.priceAOA;

                return (
                  <div
                    key={pizza.id}
                    className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md border border-[#dec0b8]/30 transition-all flex flex-col justify-between group"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="relative w-full h-52 rounded-xl overflow-hidden bg-[#f8ebe8]">
                        <img
                          src={pizza.image}
                          alt={pizza.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        {pizza.highlightTag && (
                          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#973314] text-white text-xs font-bold shadow-xs">
                            {pizza.highlightTag}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col gap-1 mt-2">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#201a18]">
                            {pizza.name}
                          </h3>
                          <span className="font-bold text-base sm:text-lg text-[#973314] tabular-nums whitespace-nowrap">
                            {currentPrice.toLocaleString('pt-AO')} Kz
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#57423c] leading-relaxed">
                          {pizza.description}
                        </p>
                      </div>

                      {/* Size Selector for Pizza */}
                      {pizza.familyPriceAOA && (
                        <div className="flex items-center gap-2 pt-2">
                          <span className="text-[11px] font-bold text-[#57423c]">Tamanho:</span>
                          <div className="flex items-center bg-[#f8ebe8] p-0.5 rounded-lg text-xs">
                            <button
                              onClick={() => handleSizeToggle(pizza.id, 'individual')}
                              className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                                !isFamiliar ? 'bg-white text-[#973314] shadow-xs' : 'text-[#57423c]'
                              }`}
                            >
                              Individual
                            </button>
                            <button
                              onClick={() => handleSizeToggle(pizza.id, 'familiar')}
                              className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                                isFamiliar ? 'bg-white text-[#973314] shadow-xs' : 'text-[#57423c]'
                              }`}
                            >
                              Familiar ({pizza.familyPriceAOA.toLocaleString('pt-AO')} Kz)
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#f8ebe8]">
                      <span className="text-xs text-[#556340] font-semibold flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 fill-current" /> {pizza.prepInfo || 'Forno a Lenha'}
                      </span>
                      <button
                        onClick={() => handleAdd(pizza)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#b84a2a] hover:bg-[#973314] text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Adicionar</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 2. SEÇÃO COZINHA DE RESTAURANTE (ALMOÇO & JANTAR) */}
        {(activeCategory === 'all' || activeCategory === 'pratos') && pratos.length > 0 && (
          <section className="flex flex-col gap-6" id="section-pratos">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#ece0dc] pb-4">
              <div>
                <div className="flex items-center gap-2 text-[#794900]">
                  <Utensils className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Cozinha de Restaurante</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#201a18] mt-1">
                  Grelhados no Carvão, Carnes Suculentas &amp; Pratos Típicos
                </h2>
                <p className="text-xs sm:text-sm text-[#57423c] max-w-2xl mt-1">
                  Almoços acolhedores e jantares completos preparados com técnica refinada e guarnições tradicionais: arroz solto, feijão aromático e salada fresca.
                </p>
              </div>
              <button
                onClick={onOpenReservation}
                className="text-xs sm:text-sm font-bold text-[#973314] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Consultar Peixe Fresco do Dia</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pratos.map((dish) => (
                <div
                  key={dish.id}
                  className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md border border-[#dec0b8]/30 flex flex-col sm:flex-row gap-5 items-center transition-all group"
                >
                  <div className="w-full sm:w-48 h-40 sm:h-44 rounded-xl overflow-hidden shrink-0 bg-[#f8ebe8]">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col justify-between w-full h-full">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-lg font-bold text-[#201a18]">
                          {dish.name}
                        </h3>
                        <span className="font-bold text-base text-[#973314] tabular-nums whitespace-nowrap">
                          {dish.priceAOA.toLocaleString('pt-AO')} Kz
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#57423c] mt-2 leading-relaxed">
                        {dish.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#f8ebe8]">
                      <span className="text-xs text-[#556340] font-semibold">
                        {dish.prepInfo}
                      </span>
                      <button
                        onClick={() => handleAdd(dish)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#b84a2a] hover:bg-[#973314] text-white text-xs font-bold transition-colors cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Adicionar</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 3. SEÇÃO PEQUENO-ALMOÇO & PASTELARIA */}
        {(activeCategory === 'all' || activeCategory === 'pequeno-almoco') && pequenoAlmoco.length > 0 && (
          <section className="flex flex-col gap-6" id="section-pequeno-almoco">
            <div className="border-b border-[#ece0dc] pb-4">
              <div className="flex items-center gap-2 text-[#556340]">
                <Coffee className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Matinais &amp; Cafetaria</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#201a18] mt-1">
                Pequeno-Almoço, Omeletes &amp; Tostas Rústicas
              </h2>
              <p className="text-xs sm:text-sm text-[#57423c] max-w-2xl mt-1">
                Comece o dia com o conforto de pão estaladiço saído do forno matinal, ovos preparados na hora e sumos naturais da estação do Huambo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pequenoAlmoco.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-[#dec0b8]/30 flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="w-full h-36 rounded-xl overflow-hidden bg-[#f8ebe8]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <h4 className="font-serif text-base font-bold text-[#201a18] leading-tight">
                        {item.name}
                      </h4>
                      <span className="font-bold text-sm text-[#973314] tabular-nums whitespace-nowrap ml-2">
                        {item.priceAOA.toLocaleString('pt-AO')} Kz
                      </span>
                    </div>
                    <p className="text-xs text-[#57423c] mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#f8ebe8]">
                    <span className="text-[11px] font-semibold text-[#556340]">
                      {item.prepInfo}
                    </span>
                    <button
                      onClick={() => handleAdd(item)}
                      className="p-1.5 rounded-lg bg-[#b84a2a] hover:bg-[#973314] text-white text-xs font-bold transition-colors cursor-pointer"
                      title="Adicionar ao pedido"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. SEÇÃO SOBREMESAS DA CASA & BEBIDAS (BENTO ROW) */}
        {(activeCategory === 'all' || activeCategory === 'sobremesas' || activeCategory === 'bebidas') && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sobremesas (7 cols) */}
            {(activeCategory === 'all' || activeCategory === 'sobremesas') && (
              <section className="lg:col-span-7 flex flex-col gap-6" id="section-sobremesas">
                <div className="border-b border-[#ece0dc] pb-3">
                  <div className="flex items-center gap-2 text-[#973314]">
                    <IceCream className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Fecho Perfeito</span>
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#201a18] mt-1">
                    Sobremesas da Casa
                  </h2>
                  <p className="text-xs text-[#57423c]">
                    Doçaria clássica preparada artesanalmente pela equipa de pastelaria da Colina.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {sobremesas.map((dessert) => (
                    <div
                      key={dessert.id}
                      className="bg-white p-4 rounded-xl shadow-xs border border-[#dec0b8]/30 flex gap-3.5 items-center justify-between"
                    >
                      <div className="w-18 h-18 rounded-lg overflow-hidden shrink-0 bg-[#f8ebe8]">
                        <img
                          src={dessert.image}
                          alt={dessert.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex flex-col flex-1 pl-1">
                        <h4 className="font-serif text-sm font-bold text-[#201a18] leading-tight">
                          {dessert.name}
                        </h4>
                        <p className="text-xs text-[#57423c] line-clamp-1 mt-0.5">
                          {dessert.description}
                        </p>
                        <span className="font-bold text-xs sm:text-sm text-[#973314] tabular-nums mt-1">
                          {dessert.priceAOA.toLocaleString('pt-AO')} Kz
                        </span>
                      </div>
                      <button
                        onClick={() => handleAdd(dessert)}
                        className="p-1.5 rounded-lg bg-[#f8ebe8] hover:bg-[#b84a2a] text-[#973314] hover:text-white transition-colors cursor-pointer"
                        title="Adicionar"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Bebidas & Vinhos (5 cols) */}
            {(activeCategory === 'all' || activeCategory === 'bebidas') && (
              <section className="lg:col-span-5 flex flex-col gap-6" id="section-bebidas">
                <div className="border-b border-[#ece0dc] pb-3">
                  <div className="flex items-center gap-2 text-[#794900]">
                    <Wine className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Garrafeira &amp; Refrescos</span>
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#201a18] mt-1">
                    Bebidas Selecionadas
                  </h2>
                  <p className="text-xs text-[#57423c]">
                    Cervejas nacionais geladas, vinhos para emparelhar e refrescos.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-xs border border-[#dec0b8]/30 flex flex-col gap-3">
                  {bebidas.map((bev) => (
                    <div
                      key={bev.id}
                      className="flex justify-between items-center py-2 border-b border-[#f8ebe8] last:border-b-0 gap-3"
                    >
                      <div className="flex flex-col">
                        <span className="text-xs sm:text-sm font-bold text-[#201a18]">
                          {bev.name}
                        </span>
                        <span className="text-[11px] text-[#57423c]">
                          {bev.description}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-bold text-xs sm:text-sm text-[#973314] tabular-nums">
                          {bev.priceAOA.toLocaleString('pt-AO')} Kz
                        </span>
                        <button
                          onClick={() => handleAdd(bev)}
                          className="p-1 rounded-md bg-[#f8ebe8] hover:bg-[#b84a2a] text-[#973314] hover:text-white transition-colors cursor-pointer"
                          title="Adicionar"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>

      {/* MODALIDADES DE CONSUMO E SERVIÇOS (3 Columns Distinct Pattern) */}
      <section className="w-full bg-[#f8ebe8] py-16 px-4 sm:px-6 lg:px-12 mt-4 border-t border-[#dec0b8]/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#556340]">
              Flexibilidade Total
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#201a18]">
              Como Deseja Saborear a Nossa Cozinha?
            </h2>
            <p className="text-sm sm:text-base text-[#57423c]">
              Adaptamos o serviço ao seu ritmo: à mesa com atendimento dedicado, em takeaway rápido ou entregue no conforto de sua casa no Huambo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. Comer no Restaurante */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#dec0b8]/30 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#ffdbd1] flex items-center justify-center text-[#973314]">
                  <Table className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#201a18]">
                  Comer no Restaurante
                </h3>
                <p className="text-xs sm:text-sm text-[#57423c] leading-relaxed">
                  Esplanada arejada ao ar livre e salão acolhedor. Ambiente descontraído e ideal para almoços de família, confraternizações e jantares românticos.
                </p>
                <ul className="space-y-2 mt-2 text-xs sm:text-sm text-[#57423c]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#556340]" />
                    <span>Atendimento de mesa personalizado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#556340]" />
                    <span>Estacionamento amplo no recinto</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#556340]" />
                    <span>Mesas para grupos sob reserva prévia</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-[#f8ebe8]">
                <span className="text-xs text-[#973314] font-bold">
                  Terça a Domingo • 11:30 – 23:00
                </span>
              </div>
            </div>

            {/* 2. Takeaway / Levar para Casa */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#dec0b8]/30 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#d9e9bb] flex items-center justify-center text-[#556340]">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#201a18]">
                  Takeaway / Levar p/ Casa
                </h3>
                <p className="text-xs sm:text-sm text-[#57423c] leading-relaxed">
                  Ligue minutos antes para encomendar a sua pizza ou prato de refeição. Embalagens térmicas rígidas mantêm a temperatura e a crocância até chegar a sua casa.
                </p>
                <ul className="space-y-2 mt-2 text-xs sm:text-sm text-[#57423c]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#556340]" />
                    <span>Pronto em 15 a 25 minutos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#556340]" />
                    <span>Embalagens seladas com segurança térmica</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#556340]" />
                    <span>Sem taxa adicional de recolha</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-[#f8ebe8]">
                <span className="text-xs text-[#556340] font-bold">
                  Ponto de Recolha Rápida no Huambo
                </span>
              </div>
            </div>

            {/* 3. Entrega ao Domicílio */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#dec0b8]/30 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#ffddba] flex items-center justify-center text-[#794900]">
                  <Bike className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#201a18]">
                  Entrega ao Domicílio
                </h3>
                <p className="text-xs sm:text-sm text-[#57423c] leading-relaxed">
                  Entregadores dedicados cobrindo os principais bairros urbanos da cidade do Huambo. A sua pizza e grelhados chegam quentes, intactos e apetitosos.
                </p>
                <ul className="space-y-2 mt-2 text-xs sm:text-sm text-[#57423c]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#556340]" />
                    <span>Cobertura Cidade Alta, São João e arredores</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#556340]" />
                    <span>Pagamento por TPA no ato ou Multicaixa Express</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#556340]" />
                    <span>Acompanhamento direto via chamada/WhatsApp</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-[#f8ebe8]">
                <span className="text-xs text-[#794900] font-bold">
                  Consulte a taxa conforme o seu bairro
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guia de Preços & Indicador de Consumo Transparente */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 py-16">
        <div className="bg-white p-6 sm:p-10 lg:p-12 rounded-3xl shadow-sm border border-[#dec0b8]/40 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl flex flex-col gap-3">
            <span className="text-xs font-bold text-[#973314] uppercase tracking-wider">
              Compromisso &amp; Confiança
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#201a18]">
              Guia de Preços &amp; Faixa Indicativa de Consumo
            </h2>
            <p className="text-xs sm:text-sm text-[#57423c] leading-relaxed">
              Na Pizzaria e Restaurante Colina, priorizamos uma relação transparente e justa com a comunidade do Huambo e visitantes da província. A média de consumo por refeição completa situa-se habitualmente entre:
            </p>
            <div className="flex items-baseline gap-2 py-2">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#973314] tabular-nums">
                9.100 Kz
              </span>
              <span className="text-lg text-[#57423c]">a</span>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#973314] tabular-nums">
                22.800 Kz
              </span>
            </div>
            <p className="text-xs text-[#8b716b]">
              * Variações de acordo com escolha de prato principal (pizza familiar vs corte de carne nobre grelhado), entradas, sobremesas e seleção de garrafeira.
            </p>
          </div>

          {/* Informative Metrics / Features List */}
          <div className="w-full lg:w-96 flex flex-col gap-3 shrink-0">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#fef1ed] border border-[#dec0b8]/30">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#973314] shrink-0 shadow-xs">
                <CreditCard className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-[#201a18]">Pagamentos Práticos</span>
                <span className="text-xs text-[#57423c]">TPA Multicaixa, Numerário e Express</span>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#fef1ed] border border-[#dec0b8]/30">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#556340] shrink-0 shadow-xs">
                <Utensils className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-[#201a18]">Menu Diário e Pratos do Dia</span>
                <span className="text-xs text-[#57423c]">Opções executivas a preços convidativos</span>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#fef1ed] border border-[#dec0b8]/30">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#794900] shrink-0 shadow-xs">
                <Building className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-[#201a18]">Faturação Comercial</span>
                <span className="text-xs text-[#57423c]">Fatura com NIF emitida no momento</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action & Direct Reservation Anchor */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 pb-16" id="contacto-encomendas">
        <div className="relative bg-gradient-to-br from-[#b84a2a] via-[#973314] to-[#b84a2a] p-8 sm:p-12 lg:p-14 rounded-3xl text-white shadow-xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="flex flex-col gap-3 max-w-2xl text-left z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ffdbd1]">
              Forno Sempre Aceso &amp; Mesa Posta
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Faça o seu pedido ou reserve a sua mesa connosco hoje mesmo
            </h2>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              Garantimos o sabor fresco e a autenticidade huambense em cada fatia e grelhado. Entre em contacto direto com os nossos chefes de sala pelos números disponíveis.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0 z-10">
            <a
              href={`tel:${RESTAURANT_INFO.phone1Raw}`}
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white text-[#973314] hover:bg-[#fff8f6] font-bold text-base shadow-md transition-all tabular-nums"
            >
              <PhoneCall className="w-5 h-5" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-bold text-[#8b716b]">Ligue Principal</span>
                <span>{RESTAURANT_INFO.phone1}</span>
              </div>
            </a>
            <a
              href={`tel:${RESTAURANT_INFO.phone2Raw}`}
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-base transition-all border border-white/25 tabular-nums"
            >
              <PhoneCall className="w-5 h-5" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-bold text-[#ffdbd1]">Linha de Apoio</span>
                <span>{RESTAURANT_INFO.phone2}</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
