// components/MegaMenuSeeDo.tsx
import { FaBicycle, FaLeaf, FaSpa, FaFire, FaTree, FaWater, FaWineGlassAlt, FaBinoculars } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Poster from '../../public/poster.webp'

export default function MegaMenuSeeDo() {
  const t = useTranslations('Navbar.mobile'); // o crea una chiave separata 'SeeDo'

  const experiences = [
    { label: t('cycling'), icon: <FaBicycle /> },
    { label: t('mushrooming'), icon: <FaLeaf /> },
    { label: t('herbs'), icon: <FaSpa /> },
    { label: t('kayak'), icon: <FaWater /> },
    { label: t('campfire'), icon: <FaFire /> },
    { label: t('bbq'), icon: <FaWineGlassAlt /> },
    { label: t('forest'), icon: <FaTree /> },
    { label: t('birds'), icon: <FaBinoculars /> },
  ];

  return (
  <div className="absolute top-[10px] right-0 mt-2 w-[90vw] max-w-4xl bg-[#111A20] text-white py-6 px-8 shadow-xl flex flex-col lg:flex-row gap-8 z-50 rounded-md">


      {/* Lista esperienze */}
      <div className="grid grid-cols-2 gap-x-10 gap-y-4">
        {experiences.map(({ label, icon }) => (
          <div key={label} className="flex items-center gap-2 hover:text-[#B2CD9C] transition">
            <span className="w-5 h-5">{icon}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Box laterale con foto */}
      <div className="hidden lg:block w-1/3">
        <Image
          src={Poster}
          alt="Highlight"
          className="w-full h-auto object-cover rounded-md mb-3"
        />
        <p className="text-sm text-white/80 leading-relaxed">
          {t('seeDoHighlight')} {/* e.g. “Scopri le attività autentiche tra le foreste e i laghi della Kaszuby...” */}
        </p>
      </div>
    </div>
  );
}
