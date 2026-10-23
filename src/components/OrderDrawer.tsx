import React, { useState } from 'react';
import { MenuItem, RESTAURANT_INFO } from '../data/restaurantData';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle, Check, Phone } from 'lucide-react';

export interface CartItem {
  id: string;
  item: MenuItem;
  size?: 'individual' | 'familiar';
  unitPrice: number;
  quantity: number;
}

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (cartItemId: string, delta: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderModality, setOrderModality] = useState<'takeaway' | 'entrega' | 'mesa'>('takeaway');
  const [notes, setNotes] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmedCode, setConfirmedCode] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, curr) => acc + curr.unitPrice * curr.quantity, 0);

  const handleConfirmDirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;

    const code = `PED-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmedCode(code);
    setIsConfirmed(true);
  };

  const getWhatsAppOrderLink = () => {
    let itemsText = cart
      .map(
        (ci) =>
          `• ${ci.quantity}x ${ci.item.name}${ci.size ? ` (${ci.size === 'familiar' ? 'Familiar' : 'Individual'})` : ''} - ${(ci.unitPrice * ci.quantity).toLocaleString('pt-AO')} Kz`
      )
      .join('%0A');

    const modalityText =
      orderModality === 'takeaway'
        ? 'Takeaway (Levantamento no Balcão)'
        : orderModality === 'entrega'
        ? 'Entrega ao Domicílio (Huambo)'
        : 'Consumo na Mesa';

    const text =
      `*NOVO PEDIDO - RESTAURANTE & PIZZARIA COLINA*%0A%0A` +
      `*Cliente:* ${customerName || 'Cliente'}%0A` +
      `*Contacto:* ${customerPhone || 'A confirmar'}%0A` +
      `*Modalidade:* ${modalityText}%0A%0A` +
      `*Itens:*%0A${itemsText}%0A%0A` +
      `*Total Estimado:* ${subtotal.toLocaleString('pt-AO')} Kz%0A` +
      (notes ? `*Observações:* ${notes}%0A%0A` : '%0A') +
      `Solicito confirmação de disponibilidade e tempo de preparo. Obrigado!`;

    return `https://wa.me/244924552222?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#201a18]/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-[#fff8f6] h-full shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-[#dec0b8] text-left">
        {/* Top Header */}
        <div className="p-5 border-b border-[#ece0dc] flex items-center justify-between bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#ffdbd1] flex items-center justify-center text-[#973314]">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#201a18]">
                A Sua Encomenda
              </h3>
              <span className="text-xs text-[#57423c]">
                {cart.length} {cart.length === 1 ? 'item selecionado' : 'itens selecionados'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#57423c] hover:bg-[#f8ebe8] hover:text-[#201a18] transition-colors cursor-pointer"
            aria-label="Fechar carrinho"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 p-5 flex flex-col gap-5">
          {isConfirmed ? (
            <div className="p-6 rounded-2xl bg-white border border-[#556340]/40 shadow-sm flex flex-col gap-4 text-center my-auto">
              <div className="w-12 h-12 rounded-full bg-[#d9e9bb] text-[#556340] mx-auto flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#201a18]">
                Pedido Registado!
              </h4>
              <p className="text-xs sm:text-sm text-[#57423c]">
                Referência: <span className="font-mono font-bold text-[#973314]">{confirmedCode}</span>
              </p>
              <p className="text-xs text-[#57423c] leading-relaxed">
                A nossa equipa do Restaurante &amp; Pizzaria Colina recebeu a sua encomenda. Para acelerar o envio, pode também enviar o resumo diretamente via WhatsApp:
              </p>

              <a
                href={getWhatsAppOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-sm hover:bg-[#20ba59] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enviar pelo WhatsApp Agora</span>
              </a>

              <button
                onClick={() => {
                  onClearCart();
                  setIsConfirmed(false);
                  onClose();
                }}
                className="text-xs text-[#57423c] hover:underline pt-2 cursor-pointer"
              >
                Concluir e Fechar
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center my-auto text-center gap-3 py-12">
              <div className="w-16 h-16 rounded-full bg-[#f8ebe8] flex items-center justify-center text-[#973314]">
                <ShoppingBag className="w-8 h-8 opacity-60" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#201a18]">
                Ainda não adicionou pratos
              </h4>
              <p className="text-xs text-[#57423c] max-w-xs">
                Explore o nosso cardápio de pizzas em forno a lenha, grelhados no carvão e bebidas frescas para adicionar ao seu pedido.
              </p>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="flex flex-col gap-3">
                {cart.map((cartItem) => (
                  <div
                    key={cartItem.id}
                    className="p-3.5 rounded-xl bg-white border border-[#dec0b8]/30 shadow-xs flex items-center justify-between gap-3"
                  >
                    <div className="flex flex-col flex-1">
                      <span className="font-serif text-sm font-bold text-[#201a18] leading-tight">
                        {cartItem.item.name}
                      </span>
                      {cartItem.size && (
                        <span className="text-[11px] text-[#556340] font-semibold">
                          Tamanho: {cartItem.size === 'familiar' ? 'Familiar' : 'Individual'}
                        </span>
                      )}
                      <span className="text-xs font-bold text-[#973314] tabular-nums mt-0.5">
                        {(cartItem.unitPrice * cartItem.quantity).toLocaleString('pt-AO')} Kz
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <div className="flex items-center bg-[#f8ebe8] rounded-lg border border-[#dec0b8]/30">
                        <button
                          onClick={() => onUpdateQuantity(cartItem.id, -1)}
                          className="p-1 text-[#57423c] hover:text-[#201a18] cursor-pointer"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-bold text-[#201a18] tabular-nums">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(cartItem.id, 1)}
                          className="p-1 text-[#57423c] hover:text-[#201a18] cursor-pointer"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(cartItem.id)}
                        className="p-1 text-[#8b716b] hover:text-[#ba1a1a] transition-colors cursor-pointer"
                        aria-label="Remover item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modality Choice */}
              <div className="pt-2">
                <label className="text-xs font-bold text-[#201a18] block mb-1.5">
                  Modalidade do Pedido
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setOrderModality('takeaway')}
                    className={`py-2 px-2 text-xs font-bold rounded-lg border transition-all text-center cursor-pointer ${
                      orderModality === 'takeaway'
                        ? 'bg-[#b84a2a] text-white border-[#b84a2a]'
                        : 'bg-white text-[#57423c] border-[#dec0b8]'
                    }`}
                  >
                    Takeaway
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderModality('entrega')}
                    className={`py-2 px-2 text-xs font-bold rounded-lg border transition-all text-center cursor-pointer ${
                      orderModality === 'entrega'
                        ? 'bg-[#b84a2a] text-white border-[#b84a2a]'
                        : 'bg-white text-[#57423c] border-[#dec0b8]'
                    }`}
                  >
                    Entrega
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderModality('mesa')}
                    className={`py-2 px-2 text-xs font-bold rounded-lg border transition-all text-center cursor-pointer ${
                      orderModality === 'mesa'
                        ? 'bg-[#b84a2a] text-white border-[#b84a2a]'
                        : 'bg-white text-[#57423c] border-[#dec0b8]'
                    }`}
                  >
                    Mesa
                  </button>
                </div>
              </div>

              {/* Customer quick data */}
              <div className="space-y-3 pt-1">
                <div>
                  <label className="text-xs font-bold text-[#201a18] block mb-1">
                    O Seu Nome
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Ex: Bento Gonçalves"
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#dec0b8] text-xs text-[#201a18] outline-none focus:ring-2 focus:ring-[#973314]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#201a18] block mb-1">
                    Número de Telefone (+244)
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="+244 9..."
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#dec0b8] text-xs text-[#201a18] outline-none focus:ring-2 focus:ring-[#973314] tabular-nums"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#201a18] block mb-1">
                    Instruções ou Morada (se entrega)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ex: Bairro São João, próximo à escola..."
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#dec0b8] text-xs text-[#201a18] outline-none focus:ring-2 focus:ring-[#973314]"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Bottom Actions */}
        {!isConfirmed && cart.length > 0 && (
          <div className="p-5 bg-white border-t border-[#ece0dc] flex flex-col gap-3 sticky bottom-0 z-10 shadow-lg">
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#57423c] font-medium">Subtotal Estimado:</span>
              <span className="font-serif text-lg font-bold text-[#973314] tabular-nums">
                {subtotal.toLocaleString('pt-AO')} Kz
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={getWhatsAppOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pedir Imediatamente por WhatsApp</span>
              </a>

              <button
                onClick={handleConfirmDirect}
                disabled={!customerName.trim() || !customerPhone.trim()}
                className="w-full py-2.5 rounded-xl bg-[#201a18] hover:bg-[#362f2d] disabled:opacity-50 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                Registar Pedido no Sistema
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
