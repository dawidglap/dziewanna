// src/app/[locale]/noclegi/page.tsx
import { useTranslations } from "next-intl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dziewanna – noclegi z duszą w sercu Pomorza",
  description:
    "Poznaj noclegi w Dziewannie – miejsce blisko natury, stworzone z sercem. Komfortowe apartamenty wśród kaszubskich lasów.",
};

export default function NoclegiPage() {
  const t = useTranslations("accommodation");

  return (
    <main className="px-4 sm:px-8 xl:px-0 py-12 max-w-7xl mx-auto">
      {/* Hero Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        {t("title")}
      </h1>

      {/* Intro Paragraph */}
      <p className="text-lg text-center max-w-2xl mx-auto text-gray-700 mb-12">
        {t("intro")}
      </p>

      {/* Cards grid or image gallery */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* Qui aggiungeremo <ApartmentCard /> */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{t("apartments.sampleTitle")}</h2>
            <p className="text-sm text-gray-600">{t("apartments.sampleDescription")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
