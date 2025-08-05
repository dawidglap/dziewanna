// src/app/[locale]/noclegi/page.tsx
import { useTranslations } from "next-intl";
import { Metadata } from "next";
import HeroNoclegi from "@/components/HeroNoclegi"; // Assicurati che il path sia corretto

export const metadata: Metadata = {
  title: "Dziewanna – noclegi z duszą w sercu Pomorza",
  description:
    "Poznaj noclegi w Dziewannie – miejsce blisko natury, stworzone z sercem. Komfortowe apartamenty wśród kaszubskich lasów.",
};

export default function NoclegiPage() {
  const t = useTranslations("accommodation");

  return (
    <>
      {/* Hero full screen */}
      <HeroNoclegi />

      {/* Main content */}
    
    </>
  );
}
