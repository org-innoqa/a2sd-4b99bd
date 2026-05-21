import React from 'react';
import { Coffee, MapPin, Phone, Instagram, Clock } from 'lucide-react';

const menuItems = [
  { name: 'Espresso', price: '45 TL', desc: 'Yoğun ve aromatik' },
  { name: 'Cappuccino', price: '65 TL', desc: 'Bol köpüklü İtalyan klasiği' },
  { name: 'Artisan Kruvasan', price: '85 TL', desc: 'Taze tereyağlı' },
  { name: 'Cheesecake', price: '95 TL', desc: 'Orman meyveli sos ile' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      <nav className="p-6 flex justify-between items-center border-b border-zinc-800">
        <h1 className="text-2xl font-serif tracking-widest text-amber-500">LUMIÈRE CAFE</h1>
        <div className="space-x-6 text-sm uppercase tracking-tighter">
          <a href="#menu" className="hover:text-amber-500 transition">Menü</a>
          <a href="#gallery" className="hover:text-amber-500 transition">Galeri</a>
          <a href="#contact" className="hover:text-amber-500 transition">İletişim</a>
        </div>
      </nav>

      <header className="h-[60vh] flex flex-col justify-center items-center text-center bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center">
        <div className="bg-black/60 p-10 backdrop-blur-sm">
          <h2 className="text-5xl font-serif mb-4">Zarafetin Tadı</h2>
          <p className="text-zinc-300">Şehrin kalbinde, eşsiz bir kahve deneyimi.</p>
        </div>
      </header>

      <section id="menu" className="py-20 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-serif text-center mb-12 text-amber-500">Menü & Fiyatlar</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {menuItems.map((item, i) => (
            <div key={i} className="border-b border-zinc-800 pb-4">
              <div className="flex justify-between items-baseline">
                <h4 className="text-xl font-semibold">{item.name}</h4>
                <span className="text-amber-500 font-bold">{item.price}</span>
              </div>
              <p className="text-zinc-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="h-64 bg-zinc-800 overflow-hidden">
              <img src={`https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600`} alt="Cafe" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="py-12 border-t border-zinc-800 text-center">
        <div className="flex justify-center space-x-8 mb-8">
          <MapPin className="text-amber-500" />
          <Phone className="text-amber-500" />
          <Instagram className="text-amber-500" />
        </div>
        <p className="text-zinc-500">© 2023 Lumière Cafe. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}