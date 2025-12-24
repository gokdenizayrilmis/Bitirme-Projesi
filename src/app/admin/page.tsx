import { BarChart3, LockKeyhole, Settings, Shield, UserCheck } from 'lucide-react';

const adminModules = [
  {
    title: 'Duyuru Yönetimi',
    description: 'Yeni duyuru oluştur, yayın durumunu kontrol et.',
    status: 'Planlama aşamasında',
  },
  {
    title: 'Anket & Geri Bildirim',
    description: 'Yanıtları filtrele, öne çıkan önerileri işaretle.',
    status: 'UI tasarımı hazırlanıyor',
  },
  {
    title: 'Raporlama ve Analitik',
    description: 'Modül bazlı kullanım istatistikleri ve trendler.',
    status: 'Veri şeması tasarlanıyor',
  },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
        <header className="space-y-3">
          <div className="inline-flex items-center gap-3 rounded-3xl bg-slate-800 px-5 py-4 text-white">
            <Shield size={28} />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
                Yönetici Paneli
              </p>
              <h1 className="text-3xl font-bold">Kontrol Merkezi</h1>
            </div>
          </div>
          <p className="text-base text-slate-600">
            Kampüs Asistanı&apos;nın içerik ve anket yönetimini buradan
            yapabileceksin. Modüller hazır olana kadar bu sayfa bilgi amaçlı
            yer alıyor.
          </p>
        </header>

        <section className="space-y-4 rounded-3xl border border-white bg-white p-6 shadow-lg shadow-slate-200">
          <div className="flex items-center gap-3">
            <Settings className="text-slate-700" size={20} />
            <h2 className="text-lg font-semibold text-gray-900">
              Geliştirilen Modüller
            </h2>
          </div>
          <div className="space-y-4">
            {adminModules.map((module) => (
              <div
                key={module.title}
                className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
              >
                <p className="text-base font-semibold text-gray-900">
                  {module.title}
                </p>
                <p className="text-sm text-gray-600">{module.description}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-indigo-500">
                  {module.status}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <UserCheck className="text-slate-600" size={22} />
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Yetkilendirme
                </h3>
                <p className="text-sm text-gray-600">
                  Rol bazlı erişim ve denetim kayıtları eklenecek.
                </p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <LockKeyhole size={16} />
              Güvenlik Öncelikli
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-dashed border-slate-200 p-4 text-sm text-gray-600 sm:flex-row">
            <div className="flex flex-1 items-center gap-3">
              <BarChart3 className="text-indigo-500" size={18} />
              Kullanıcı etkinliği grafikleri ve KPI kartları ekleniyor.
            </div>
            <div className="flex flex-1 items-center gap-3">
              <Shield className="text-emerald-500" size={18} />
              Oturum açma, MFA ve audit log bileşenleri hazırlanıyor.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

