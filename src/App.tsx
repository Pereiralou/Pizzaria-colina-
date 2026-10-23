import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BentoGridSection } from './components/BentoGridSection';
import { PriceTransparencySection } from './components/PriceTransparencySection';
import { SchedulesSection } from './components/SchedulesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { LocationSection } from './components/LocationSection';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { OrderDrawer, CartItem } from './components/OrderDrawer';
import { MenuItem } from './data/restaurantData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('inicio');
  const [initialMenuCat, setInitialMenuCat] = useState<string>('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (item: MenuItem, selectedSize?: 'individual' | 'familiar') => {
    const size = selectedSize || (item.category === 'pizzas' ? 'individual' : undefined);
    const unitPrice = size === 'familiar' && item.familyPriceAOA ? item.familyPriceAOA : item.priceAOA;
    const cartItemId = `${item.id}-${size || 'default'}`;

    setCart((prev) => {
      const existing = prev.find((ci) => ci.id === cartItemId);
      if (existing) {
        return prev.map((ci) =>
          ci.id === cartItemId ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          item,
          size,
          unitPrice,
          quantity: 1,
        },
      ];
    });
  };

  const handleUpdateQuantity = (cartItemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((ci) => {
          if (ci.id === cartItemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCart((prev) => prev.filter((ci) => ci.id !== cartItemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Nav actions
  const handleSelectBentoCategory = (cat: string) => {
    setInitialMenuCat(cat);
    setCurrentTab('cardapio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToReservation = () => {
    if (currentTab !== 'inicio') {
      setCurrentTab('inicio');
      setTimeout(() => {
        const el = document.getElementById('reserva-rapida');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('reserva-rapida');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToLocation = () => {
    if (currentTab !== 'inicio') {
      setCurrentTab('localizacao');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById('localizacao');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#fff8f6] text-[#201a18]">
      {/* Fixed Header */}
      <Header
        currentTab={currentTab}
        onTabChange={(tab) => {
          setCurrentTab(tab);
          if (tab === 'cardapio') setInitialMenuCat('all');
        }}
        onOpenReservation={scrollToReservation}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 pt-20">
        {currentTab === 'inicio' && (
          <div>
            <HeroSection
              onOpenReservation={scrollToReservation}
              onNavigateMenu={() => {
                setInitialMenuCat('all');
                setCurrentTab('cardapio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onNavigateLocation={scrollToLocation}
            />
            <BentoGridSection onSelectCategory={handleSelectBentoCategory} />
            <PriceTransparencySection onOpenReservation={scrollToReservation} />
            <SchedulesSection />
            <ReviewsSection />
            <ReservationSection />
            <LocationSection />
          </div>
        )}

        {currentTab === 'cardapio' && (
          <div>
            <MenuSection
              initialCategory={initialMenuCat}
              onAddToCart={handleAddToCart}
              onOpenReservation={scrollToReservation}
            />
          </div>
        )}

        {currentTab === 'sobre' && (
          <div>
            <AboutSection
              onOpenReservation={scrollToReservation}
              onNavigateMenu={() => {
                setInitialMenuCat('all');
                setCurrentTab('cardapio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <ReviewsSection />
            <LocationSection />
          </div>
        )}

        {currentTab === 'horarios' && (
          <div className="pt-6">
            <SchedulesSection />
            <PriceTransparencySection onOpenReservation={scrollToReservation} />
            <ReservationSection />
          </div>
        )}

        {currentTab === 'avaliacoes' && (
          <div className="pt-6">
            <ReviewsSection />
            <ReservationSection />
          </div>
        )}

        {currentTab === 'localizacao' && (
          <div className="pt-6">
            <LocationSection />
            <ReservationSection />
          </div>
        )}
      </main>

      {/* Slide-out Order Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Master 4-column Footer */}
      <Footer onNavigate={(tab) => setCurrentTab(tab)} />
    </div>
  );
}
