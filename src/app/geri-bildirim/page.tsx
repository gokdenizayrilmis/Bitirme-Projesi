'use client';

import { useState } from 'react';
import {
  CheckCircle2,
  Loader2,
  MessageSquarePlus,
  Sparkles,
} from 'lucide-react';

const emojiScale = [
  { label: 'Çok Kötü', symbol: '😡' },
  { label: 'Kötü', symbol: '☹️' },
  { label: 'Orta', symbol: '😐' },
  { label: 'İyi', symbol: '🙂' },
  { label: 'Harika', symbol: '🤩' },
];

const topics = [
  'Hata Bildirimi',
  'Yeni Özellik Önerisi',
  'Genel Görüş',
  'Tasarım Önerisi',
];

export default function FeedbackCenterPage() {
  const [selectedEmoji, setSelectedEmoji] = useState<number | null>(null);
  const [topic, setTopic] = useState(topics[0]);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl space-y-8">
        <header className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-blue-500">
                Anket &amp; Geri Bildirim Merkezi
              </p>
              <h1 className="mt-2 text-3xl font-bold text-gray-900">
                Fikrin Bizim İçin Değerli
              </h1>
              <p className="mt-2 text-base text-gray-600">
                Kampüs deneyimini iyileştirmek için önerilerini bekliyoruz.
              </p>
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <MessageSquarePlus size={32} />
            </div>
          </div>
        </header>

        {!isSuccess ? (
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-gray-100 bg-white p-6 shadow-lg sm:p-8"
          >
            <div className="space-y-8">
              <section>
                <div className="mb-3 flex items-center gap-3">
                  <Sparkles className="text-indigo-500" size={20} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Kampüs deneyimini nasıl buluyorsun?
                    </p>
                    <p className="text-sm text-gray-500">
                      Bir emojiyi seçerek memnuniyet seviyeni paylaş.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between gap-2">
                  {emojiScale.map((emoji, index) => {
                    const isActive = selectedEmoji === index;
                    return (
                      <button
                        key={emoji.label}
                        type="button"
                        onClick={() => setSelectedEmoji(index)}
                        className={`flex flex-1 flex-col items-center gap-2 rounded-2xl border px-3 py-3 text-sm font-medium transition
                          ${
                            isActive
                              ? 'border-indigo-200 bg-indigo-50 text-indigo-600 shadow-inner'
                              : 'border-gray-100 bg-gray-50 text-gray-500 hover:border-indigo-100 hover:bg-white'
                          }`}
                      >
                        <span
                          className={`text-2xl transition-transform ${
                            isActive ? 'scale-125' : 'scale-100'
                          }`}
                        >
                          {emoji.symbol}
                        </span>
                        <span className="text-xs">{emoji.label}</span>
                      </button>
                    );
                  })}
                </div>
              </section>

              <div className="grid gap-6">
                <label className="block space-y-2">
                  <span className="text-sm font-semibold text-gray-800">
                    Konu Seçimi
                  </span>
                  <select
                    value={topic}
                    onChange={(event) => setTopic(event.target.value)}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                  >
                    {topics.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block space-y-2">
                  <span className="text-sm font-semibold text-gray-800">
                    Mesajın
                  </span>
                  <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    rows={5}
                    required
                    placeholder="Bize detaylardan bahset..."
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                  />
                </label>

                <label className="block space-y-2">
                  <span className="text-sm font-semibold text-gray-800">
                    E-posta (Opsiyonel)
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Geri dönüş istersen e-posta adresin"
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:from-blue-500 hover:to-indigo-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Gönderiliyor...
                  </>
                ) : (
                  'Geri Bildirim Gönder'
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="rounded-3xl border border-green-100 bg-white p-10 text-center shadow-xl">
            <CheckCircle2
              size={72}
              className="mx-auto text-green-500 drop-shadow-sm"
            />
            <h2 className="mt-6 text-2xl font-semibold text-gray-900">
              Teşekkürler!
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Geri bildirimin alındı. Kampüs Asistanı deneyimini geliştirmek
              için önerilerin bizimle.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

