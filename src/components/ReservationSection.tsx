import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Phone, CheckCircle, Send, MessageCircle, ShieldCheck } from 'lucide-react';

export const ReservationSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [orderType, setOrderType] = useState('Mesa no Restaurante');
  const [people, setPeople] = useState('3 a 4 Pessoas');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('19:30');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const code = `COL-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmationCode(code);
    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const text = `*Pedido de Reserva / Encomenda - Pizzaria Colina (Huambo)*%0A%0A` +
      `*Ref:* ${confirmationCode || 'COL-NOVA'}%0A` +
      `*Nome:* ${name}%0A` +
      `*Telefone:* ${phone}%0A` +
      `*Tipo:* ${orderType}%0A` +
      `*Pessoas:* ${people}%0A` +
      `*Data:* ${date}%0A` +
      `*Hora:* ${time}%0A` +
      (notes ? `*Notas:* ${notes}%0A` : '') +
      `%0AAguardamos confirmação. Obrigado!`;
    return `https://wa.me/244924552222?text=${text}`;
  };

  return (
    <section className="w-full py-16 sm:py-20 bg-[#fff8f6]" id="reserva-rapida">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start text-left">
          {/* Left: Context & Direct Phones (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#973314]">
              Atendimento Personalizado
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#201a18]">
              Reserve a Sua Mesa ou Peça por Telefone
            </h2>
            <p className="text-sm sm:text-base text-[#57423c] leading-relaxed">
              Quer garantir a melhor mesa na esplanada ou prefere que a sua pizza esteja pronta para recolha no caminho para casa? Fale diretamente connosco ou preencha o formulário rápido.
            </p>

            {/* Contact Cards */}
            <div className="flex flex-col gap-3 pt-2">
              <div className="p-4 rounded-xl bg-[#f8ebe8] border border-[#dec0b8]/30 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ffdbd1] flex items-center justify-center text-[#973314] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#57423c] block">
                      Linha Principal / WhatsApp
                    </span>
                    <a
                      href={`tel:${RESTAURANT_INFO.phone1Raw}`}
                      className="font-bold text-base sm:text-lg text-[#201a18] hover:text-[#973314] transition-colors tabular-nums"
                    >
                      {RESTAURANT_INFO.phone1}
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${RESTAURANT_INFO.phone1Raw}`}
                  className="px-3.5 py-1.5 rounded-lg bg-white text-xs font-bold text-[#973314] border border-[#dec0b8]/40 shadow-xs hover:bg-[#fff8f6]"
                >
                  Ligar
                </a>
              </div>

              <div className="p-4 rounded-xl bg-[#f8ebe8] border border-[#dec0b8]/30 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#d9e9bb] flex items-center justify-center text-[#556340] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#57423c] block">
                      Linha de Apoio Secundária
                    </span>
                    <a
                      href={`tel:${RESTAURANT_INFO.phone2Raw}`}
                      className="font-bold text-base sm:text-lg text-[#201a18] hover:text-[#973314] transition-colors tabular-nums"
                    >
                      {RESTAURANT_INFO.phone2}
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${RESTAURANT_INFO.phone2Raw}`}
                  className="px-3.5 py-1.5 rounded-lg bg-white text-xs font-bold text-[#556340] border border-[#dec0b8]/40 shadow-xs hover:bg-[#fff8f6]"
                >
                  Ligar
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#fef1ed] border border-[#dec0b8]/30 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#556340] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-[#57423c] leading-relaxed">
                Confirmamos a reserva por chamada ou mensagem imediata. Aceitamos pagamentos por Multicaixa (TPA), Multicaixa Express e numerário.
              </div>
            </div>
          </div>

          {/* Right: Modern Reservation Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#f8ebe8] border border-[#dec0b8]/40 p-6 sm:p-10 shadow-lg flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-[#ece0dc] pb-4">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#201a18]">
                    Pedido de Reserva / Encomenda Rápida
                  </h3>
                  <span className="text-xs text-[#57423c]">
                    Resposta em menos de 10 minutos pela equipa de sala
                  </span>
                </div>
              </div>

              {submitted ? (
                <div className="flex flex-col gap-5 p-6 rounded-2xl bg-white border border-[#556340]/30 shadow-md">
                  <div className="flex items-center gap-3 text-[#556340]">
                    <CheckCircle className="w-8 h-8 shrink-0 text-[#556340]" />
                    <div>
                      <h4 className="font-bold text-lg text-[#201a18]">
                        Pedido Registado com Sucesso!
                      </h4>
                      <p className="text-xs text-[#57423c]">
                        Código de Referência: <span className="font-mono font-bold text-[#973314]">{confirmationCode}</span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#fef1ed] p-4 rounded-xl text-xs sm:text-sm text-[#57423c] space-y-1">
                    <p><strong>Nome:</strong> {name}</p>
                    <p><strong>Telefone:</strong> {phone}</p>
                    <p><strong>Serviço:</strong> {orderType} ({people})</p>
                    <p><strong>Data &amp; Hora:</strong> {date} às {time}</p>
                    {notes && <p><strong>Notas:</strong> {notes}</p>}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Enviar pelo WhatsApp Agora</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-3 rounded-xl bg-[#f8ebe8] hover:bg-[#ece0dc] text-[#201a18] font-bold text-sm transition-colors cursor-pointer"
                    >
                      Novo Pedido
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#201a18]">Nome Completo</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Bento Gonçalves"
                        className="px-4 py-3 rounded-lg bg-white border border-[#dec0b8] text-sm text-[#201a18] outline-none focus:ring-2 focus:ring-[#973314] shadow-xs"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#201a18]">Número de Telefone</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+244 9..."
                        className="px-4 py-3 rounded-lg bg-white border border-[#dec0b8] text-sm text-[#201a18] outline-none focus:ring-2 focus:ring-[#973314] shadow-xs tabular-nums"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#201a18]">Tipo de Pedido</label>
                      <select
                        value={orderType}
                        onChange={(e) => setOrderType(e.target.value)}
                        className="px-3 py-3 rounded-lg bg-white border border-[#dec0b8] text-sm text-[#201a18] outline-none focus:ring-2 focus:ring-[#973314] shadow-xs"
                      >
                        <option>Mesa no Restaurante</option>
                        <option>Mesa na Esplanada</option>
                        <option>Takeaway (Levantamento)</option>
                        <option>Entrega ao Domicílio</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#201a18]">Número de Pessoas</label>
                      <select
                        value={people}
                        onChange={(e) => setPeople(e.target.value)}
                        className="px-3 py-3 rounded-lg bg-white border border-[#dec0b8] text-sm text-[#201a18] outline-none focus:ring-2 focus:ring-[#973314] shadow-xs"
                      >
                        <option>1 a 2 Pessoas</option>
                        <option>3 a 4 Pessoas</option>
                        <option>5 a 8 Pessoas</option>
                        <option>Grupo (+8 Pessoas)</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#201a18]">Horário Previsto</label>
                      <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="px-3 py-3 rounded-lg bg-white border border-[#dec0b8] text-sm text-[#201a18] outline-none focus:ring-2 focus:ring-[#973314] shadow-xs tabular-nums"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#201a18]">
                      Notas Especiais / Pedido Adiantado (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Indique pedidos prévios de pizza, cadeiras de criança ou celebrações..."
                      className="px-4 py-3 rounded-lg bg-white border border-[#dec0b8] text-sm text-[#201a18] outline-none focus:ring-2 focus:ring-[#973314] shadow-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#b84a2a] hover:bg-[#973314] text-white font-bold text-base shadow-md transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>Confirmar e Enviar Pedido</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
