'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import {
  FaBicycle,
  FaLeaf,
  FaSpa,
  FaFire,
  FaTree,
  FaWater,
  FaWineGlassAlt,
  FaBinoculars,
} from 'react-icons/fa'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const t = useTranslations('Footer')

  const seeDo = [
    { icon: <FaBicycle />, label: t('cycling') },
    { icon: <FaLeaf />, label: t('mushrooming') },
    { icon: <FaSpa />, label: t('herbs') },
    { icon: <FaWater />, label: t('kayak') },
    { icon: <FaFire />, label: t('campfire') },
    { icon: <FaWineGlassAlt />, label: t('bbq') },
    { icon: <FaTree />, label: t('forest') },
    { icon: <FaBinoculars />, label: t('birds') },
  ]

  return (
    <footer className=" text-black py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo */}
        <div>
          <h3 className="font-montserrat lg:text-5xl text-3xl font-bold tracking-widest mb-4">Dziewanna</h3>
          <p className="text-sm text-black/70">
            {t('description')}
          </p>
        </div>

        {/* Navigazione */}
        <div className=''>
          <h4 className="text-2xl font-bold mb-4">{t('navigation')}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#zakwaterowanie" className="hover:text-[#B2CD9C] transition">{t('accommodation')}</Link></li>
            <li><Link href="#see-do" className="hover:text-[#B2CD9C] transition">{t('seeDo')}</Link></li>
            <li><Link href="#about" className="hover:text-[#B2CD9C] transition">{t('about')}</Link></li>
            <li><Link href="#reviews" className="hover:text-[#B2CD9C] transition">{t('reviews')}</Link></li>
          </ul>
        </div>

        {/* See & Do */}
        <div>
          <h4 className="text-2xl font-bold mb-4">{t('activities')}</h4>
          <ul className="grid grid-cols-2 gap-3 text-sm">
            {seeDo.map(({ icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <span className="w-5 h-5">{icon}</span>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact */}
      <div className="max-w-7xl mx-auto mt-12 border-t border-white/10 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-[#B2CD9C]" />
          <span>Dziewanny 10, 76-248 Brzezinec</span>
        </div>
        <div className="flex items-center md:justify-end gap-3">
          <Phone className="w-5 h-5 text-[#B2CD9C]" />
          <a href="tel:+48600243754" className="hover:underline">600 243 754</a>
        </div>
        <div className="flex items-center gap-3 md:col-span-2">
          <Mail className="w-5 h-5 text-[#B2CD9C]" />
          <a href="mailto:kontakt@dziewanna.pl" className="hover:underline">kontakt@dziewanna.pl</a>
        </div>
      </div>
    </footer>
  )
}
