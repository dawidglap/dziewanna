import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { Caveat, Montserrat } from 'next/font/google';
import '../globals.css';
import NavbarDesktop from '@/components/NavbarDesktop';
import NavbarMobile from '@/components/NavbarMobile';
import InstagramBadge from '@/components/InstagramBadge';
import type { ReactNode } from 'react';

// ✅ Fonts ottimizzati
const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caveat',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

// ✅ SEO multilingua
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params?.locale;

  const metadataByLocale: Record<string, Metadata> = {
    pl: {
      title: 'Dziewanna – pokoje z duszą w sercu Pomorza',
      description: 'Odkryj magiczne miejsce blisko natury – Dziewanna to komfortowe noclegi z klimatem, zwierzętami i wyjątkowymi doświadczeniami.',
    },
    de: {
      title: 'Dziewanna – Zimmer mit Seele in Pommern',
      description: 'Entdecke einen magischen Ort in der Natur – gemütliche Unterkünfte, Tiere und unvergessliche Erlebnisse in Dziewanna.',
    },
    en: {
      title: 'Dziewanna – soulful stays in the heart of Pomerania',
      description: 'Discover a magical place close to nature – Dziewanna offers cozy rooms, friendly animals, and unique experiences.',
    }
  };

  return metadataByLocale[locale] || metadataByLocale.en;
}

// ✅ Typing fix
interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = params?.locale;

  if (!locale || !(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${caveat.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <NextIntlClientProvider locale={locale}>
          <NavbarDesktop />
          <NavbarMobile />
          <InstagramBadge />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
