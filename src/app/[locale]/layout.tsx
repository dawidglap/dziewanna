import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import type { Metadata } from "next";
import { Caveat, Montserrat } from "next/font/google";
import '../globals.css';
import NavbarDesktop from '@/components/NavbarDesktop';
import NavbarMobile from '@/components/NavbarMobile';
import InstagramBadge from '@/components/InstagramBadge';
import Footer from '@/components/Footer';

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-caveat',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Dziewanna – pokoje z duszą w sercu Pomorza",
  description: "Odkryj magiczne miejsce blisko natury – Dziewanna to komfortowe noclegi z klimatem, zwierzętami i wyjątkowymi doświadczeniami.",
};
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale} className={`${caveat.variable} ${montserrat.variable}`}>
      <body  className= "antialiased" > 
        <NextIntlClientProvider>
          <NavbarDesktop />
          <NavbarMobile />
          <InstagramBadge />
          {children}
          <Footer />
          </NextIntlClientProvider>
      </body>
    </html>
  );
}
