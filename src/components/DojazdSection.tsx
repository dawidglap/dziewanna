'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';

type TableRow = { stop: string; wkdays: string; saturday: string; sunday: string };

export default function DojazdSection() {
  const t = useTranslations('dojazd');

  const rows: TableRow[] = t.raw('table.rows') as TableRow[];
  const phone = '+48 600 243 754';

  return (
    <section className="bg-yellow-100 py-12 md:py-16">
      <div className="mx-auto max-w-7xl ">
        {/* Hero/intestazione */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl"
        >
          <p className="uppercase tracking-[0.18em] text-sm text-neutral-600 mb-2">
            {t('hero.eyebrow')}
          </p>
          <h1 className="text-[clamp(2rem,6vw,3.25rem)] leading-tight font-semibold text-[#1F1F1F]">
            {t('hero.title')}
          </h1>
          <p className="mt-4 text-neutral-700 font-semibold text-base md:text-lg">
            {t('hero.description')}
          </p>
        </motion.div>

        {/* Griglia contenuti */}
        <div className="mt-10 grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-16 ">
          {/* Colonna testo */}
          <div className="xl:col-span-6 space-y-8">
            <Block
              title={t('blocks.shuttleTitle')}
              body={t('blocks.shuttleIntro')}
              
            />
            <Block title={t('blocks.carTitle')} body={t('blocks.carBody')} />
            <Block title={t('blocks.trainTitle')} body={t('blocks.trainBody')} />
            <Block title={t('blocks.lakeTitle')} body={t('blocks.lakeBody')} />
            <Block
              title={t('blocks.taxiTitle')}
              body={t('blocks.taxiBody', { phone })}
              ctaLabel={t('table.ctaTaxi', { phone })}
              ctaHref={`tel:${phone.replace(/\s+/g, '')}`}
              variant="dark"
            />
            <Block title={t('blocks.parkingTitle')} body={t('blocks.parkingBody', { phone })} />
          </div>

          {/* Colonna tabella orari */}
          <div className="xl:col-span-6">
            <div className="rounded-xl border border-neutral-200 overflow-hidden bg-white shadow-sm">
              <div className="bg-neutral-100 px-4 py-4 md:px-6">
                <h3 className="text-xl font-montserrat font-semibold text-[#1F1F1F]">
                  {t('table.departure')}
                </h3>
                <p className="text-sm text-neutral-600 mt-1">
                  {t('table.note')}
                </p>
                <div className="mt-3 flex gap-3 flex-wrap">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center bg-white border border-[#1F1F1F] text-[#1F1F1F] font-semibold px-4 py-2 rounded-sm hover:bg-[#B2CD9C] hover:text-black hover:border-[#B2CD9C] transition text-sm"
                  >
                    {t('table.ctaBus')}
                  </Link>
                  <Link
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center justify-center bg-[#1F1F1F] text-white font-semibold px-4 py-2 rounded-sm hover:bg-[#B2CD9C] hover:text-black transition text-sm"
                  >
                    {t('table.ctaTaxi', { phone })}
                  </Link>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-neutral-50">
                    <tr className="border-b border-neutral-200">
                      <Th>{t('table.cols.stop')}</Th>
                      <Th>{t('table.cols.wkdays')}</Th>
                      <Th>{t('table.cols.saturday')}</Th>
                      <Th>{t('table.cols.sunday')}</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r, i) => (
                      <tr key={i} className="border-b border-neutral-200">
                        <Td className="font-medium">{r.stop}</Td>
                        <Td>{r.wkdays}</Td>
                        <Td>{r.saturday}</Td>
                        <Td>{r.sunday}</Td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Akapit SEO dodatkowy */}
            <p className="mt-6 text-neutral-700 text-sm">
              {t('seo.paragraph')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Block({
  title,
  body,
  ctaLabel,
  ctaHref,
  variant = 'light'
}: {
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: 'light' | 'dark';
}) {
  return (
    <div>
      <h3 className="font-montserrat text-xl font-semibold text-[#1F1F1F]">{title}</h3>
      <p className="mt-2 text-neutral-700">{body}</p>
      {ctaLabel && ctaHref && (
        <div className="mt-4">
          <Link
            href={ctaHref}
            className={
              variant === 'dark'
                ? 'bg-[#1F1F1F] text-white font-semibold px-4 py-2 rounded-sm hover:bg-[#B2CD9C] hover:text-black transition text-sm inline-block'
                : 'bg-white border border-[#1F1F1F] text-[#1F1F1F] font-semibold px-4 py-2 rounded-sm hover:bg-[#B2CD9C] hover:text-black hover:border-[#B2CD9C] transition text-sm inline-block'
            }
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-3 md:px-6 text-xs md:text-sm font-semibold text-neutral-700">{children}</th>;
}
function Td({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-4 py-3 md:px-6 align-top text-neutral-800 ${className}`}>{children}</td>;
}
