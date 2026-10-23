import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Phone, UtensilsCrossed, Menu as MenuIcon, X, ShoppingBag, MapPin } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  onOpenReservation: () => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onTabChange,
  onOpenReservation,
  cartCount,
  onOpenCart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'inicio', label: 'Início' },
    { id: 'cardapio', label: 'Cardápio & Especialidades' },
    { id: 'sobre', label: 'Sobre & Tradição' },
    { id: 'horarios', label: 'Horários & Serviços' },
    { id: 'avaliacoes', label: 'Avaliações' },
    { id: 'localizacao', label: 'Localização & Contactos' },
  ];

  const handleNavClick = (id: string) => {
    onTabChange(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#fff8f6]/95 backdrop-blur-md border-b border-[#ece0dc]/70 shadow-[0_1px_8px_rgba(36,30,28,0.06)]">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="flex items-center gap-3 shrink-0 text-left cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-full bg-[#f8ebe8] group-hover:bg-[#ffdbd1] transition-colors flex items-center justify-center text-[#973314]">
            <span className="material-symbols-outlined text-2xl">local_pizza</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#201a18] leading-tight">
              Pizzaria Colina
            </span>
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#556340] flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#556340] inline" />
              Huambo • Angola
            </span>
          </div>
        </button>

        {/* Navigation Zone (Desktop) */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#fef1ed] px-2 py-1.5 rounded-full shadow-[0_1px_3px_rgba(36,30,28,0.04)]">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-semibold px-4 py-2 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#b84a2a] text-white shadow-sm'
                    : 'text-[#57423c] hover:text-[#201a18] hover:bg-[#f8ebe8]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Direct Phone */}
          <a
            href={`tel:${RESTAURANT_INFO.phone1Raw}`}
            className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#f8ebe8] hover:bg-[#f2e6e2] text-[#201a18] transition-colors text-sm font-bold tabular-nums"
            title="Ligar para a Pizzaria Colina"
          >
            <Phone className="w-4 h-4 text-[#973314]" />
            <span>{RESTAURANT_INFO.phone1}</span>
          </a>

          {/* Cart / Order tray if items added */}
          {cartCount > 0 && (
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#d9e9bb] text-[#141f04] hover:bg-[#cbe0a5] transition-colors text-xs font-bold shadow-sm"
              title="Ver pedido takeaway"
            >
              <ShoppingBag className="w-4 h-4 text-[#556340]" />
              <span className="bg-[#973314] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                {cartCount}
              </span>
            </button>
          )}

          {/* Primary CTA */}
          <button
            onClick={onOpenReservation}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-[#b84a2a] hover:bg-[#973314] text-white text-xs sm:text-sm font-bold shadow-[0_2px_8px_-1px_rgba(36,30,28,0.12)] transition-all cursor-pointer whitespace-nowrap"
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span className="hidden sm:inline">Fazer Reserva / Encomenda</span>
            <span className="sm:hidden">Reservar</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-[#f8ebe8] text-[#201a18] hover:bg-[#f2e6e2] transition-colors"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fff8f6] border-b border-[#ece0dc] px-6 py-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-base font-semibold py-2.5 px-3 rounded-lg transition-colors ${
                  currentTab === link.id
                    ? 'bg-[#b84a2a] text-white'
                    : 'text-[#57423c] hover:bg-[#f8ebe8] hover:text-[#201a18]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-[#ece0dc] flex flex-col gap-2">
              <a
                href={`tel:${RESTAURANT_INFO.phone1Raw}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#f8ebe8] text-[#201a18] font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-[#973314]" />
                Ligar: {RESTAURANT_INFO.phone1}
              </a>
              <a
                href={`tel:${RESTAURANT_INFO.phone2Raw}`}
                className="flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold text-[#57423c]"
              >
                Linha de Apoio: {RESTAURANT_INFO.phone2}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
