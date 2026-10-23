import React, { useState } from 'react';
import { REVIEWS, RESTAURANT_INFO, ReviewItem } from '../data/restaurantData';
import { Star, MessageSquarePlus, Check, X } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS);
  const [modalOpen, setModalOpen] = useState(false);
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('Cliente Local • Huambo');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !comment.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: author.trim(),
      role: role.trim() || 'Cliente • Huambo',
      rating,
      comment: comment.trim(),
      initial: author.trim().charAt(0).toUpperCase() || 'C',
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setAuthor('');
      setComment('');
    }, 1800);
  };

  return (
    <section className="w-full py-16 sm:py-20 bg-[#fef1ed]" id="avaliacoes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-10 sm:gap-12 text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#973314]">
              Opiniões de Quem Nos Visita
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#201a18]">
              Classificação 3,8★ no Google com +150 Avaliações
            </h2>
            <p className="text-sm sm:text-base text-[#57423c]">
              Apreciamos cada comentário sincero da nossa comunidade. Trabalhamos diariamente para elevar a rapidez, o sabor da massa e a calidez do nosso atendimento.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Rating metric badge */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white shadow-sm border border-[#dec0b8]/30 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ffddba] flex items-center justify-center text-[#794900]">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <div>
                <span className="font-bold text-lg text-[#201a18] block leading-tight">
                  3,8 em 5,0
                </span>
                <span className="text-xs text-[#556340] block leading-tight mt-0.5">
                  Mais de 150 clientes avaliadores
                </span>
              </div>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-[#f8ebe8] text-[#973314] font-bold text-xs shadow-sm border border-[#dec0b8]/40 transition-colors cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Deixar Opinião</span>
            </button>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviewsList.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm hover:shadow-md border border-[#dec0b8]/30 flex flex-col justify-between gap-6 transition-all"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-1 text-[#9b5f01]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'fill-current text-[#9b5f01]' : 'text-[#dec0b8]'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-[#201a18] italic leading-relaxed">
                  “{review.comment}”
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#f8ebe8]">
                <div className="w-10 h-10 rounded-full bg-[#ffdbd1] flex items-center justify-center text-[#973314] font-bold text-base">
                  {review.initial}
                </div>
                <div>
                  <span className="font-bold text-sm text-[#201a18] block">
                    {review.author}
                  </span>
                  <span className="text-xs text-[#57423c]">
                    {review.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Button to leave review */}
        <div className="sm:hidden text-center pt-2">
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white text-[#973314] font-bold text-sm shadow-sm border border-[#dec0b8]/40"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Deixar a Sua Avaliação</span>
          </button>
        </div>
      </div>

      {/* Review Submission Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#201a18]/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-[#dec0b8] text-left relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#57423c] hover:text-[#201a18]"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-2xl font-bold text-[#201a18] mb-1">
              Partilhe a Sua Experiência
            </h3>
            <p className="text-xs sm:text-sm text-[#57423c] mb-5">
              O seu comentário sincero ajuda a equipa do Restaurante &amp; Pizzaria Colina a melhorar continuamente.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#d9e9bb] text-[#141f04] flex items-center gap-3 font-semibold text-sm">
                <Check className="w-6 h-6 text-[#556340]" />
                <span>Muito obrigado pela sua avaliação! Foi adicionada ao mural.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-xs font-bold text-[#201a18] block mb-1">O seu Nome</label>
                  <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Ex: Mateus Fernando"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#fff8f6] border border-[#dec0b8] text-sm text-[#201a18] focus:outline-none focus:ring-2 focus:ring-[#973314]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#201a18] block mb-1">Classificação</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <button
                        type="button"
                        key={val}
                        onClick={() => setRating(val)}
                        className="p-1 text-[#9b5f01] hover:scale-110 transition-transform cursor-pointer"
                      >
                        <Star className={`w-6 h-6 ${val <= rating ? 'fill-current text-[#9b5f01]' : 'text-[#dec0b8]'}`} />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-[#57423c] ml-2">{rating} de 5 estrelas</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#201a18] block mb-1">A Sua Opinião</label>
                  <textarea
                    required
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Conte como foi a comida, atendimento, esplanada ou entrega..."
                    className="w-full px-4 py-2.5 rounded-lg bg-[#fff8f6] border border-[#dec0b8] text-sm text-[#201a18] focus:outline-none focus:ring-2 focus:ring-[#973314]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#b84a2a] hover:bg-[#973314] text-white font-bold text-sm shadow-md transition-colors cursor-pointer mt-2"
                >
                  Publicar Avaliação
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
