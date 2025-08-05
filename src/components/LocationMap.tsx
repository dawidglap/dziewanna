'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { MapPin, Phone } from 'lucide-react'

const LocationMap = () => {
  const t = useTranslations('Location')

  return (
    <section className="bg-[#B2CD9C]/20 text-black py-16 px-6 rounded-b-xl shadow-md ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          {t('title')}
        </h2>

        <div className="flex flex-wrap gap-4 mb-6">
          <Link
            href="/atrakcje"
            className="bg-black text-white px-6 py-3 rounded-sm font-semibold hover:bg-[#B2CD9C] hover:text-black transition w-full sm:w-auto text-center"
          >
            {t('ctaAttractions')}
          </Link>
          <a
            href="tel:+48600243754"
            className="border border-black text-black px-6 py-3 rounded-sm font-semibold hover:bg-[#B2CD9C] hover:text-black transition w-full sm:w-auto text-center"
          >
            {t('ctaCall')}
          </a>
        </div>

        <div className="w-full aspect-ratio:[16/9] md:aspect-[16/3]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2291.3322229278227!2d17.200222!3d54.4109735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fe059236090455%3A0x6fc2f2fbcc37278d!2sDziewanna!5e0!3m2!1spl!2spl!4v1691512845362!5m2!1spl!2spl"
            width="100%"
            height="100%"
            className="rounded-md border-none"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        <p className="text-sm mt-4">
          <a
            href="https://www.google.com/maps/place/Dziewanna/@54.4109735,17.200222,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold"
          >
            {t('seeOnGoogle')}
          </a>
        </p>

        {/* Kontakty */}
        <div className="mt-8 space-y-4 text-black text-base">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#0B7D82]" />
            <span>Dziewanny 10, 76-248 Brzezinec</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-[#0B7D82]" />
            <a href="tel:+48600243754" className="hover:underline">
              +48 600 243 754
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationMap
