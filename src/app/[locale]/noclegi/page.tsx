// src/app/[locale]/noclegi/page.tsx

import { Metadata } from "next";
import HeroNoclegi from "@/components/HeroNoclegi";
import Apartaments from "@/components/Apartaments";
import Facilities from "../../../components/Facilities/Facilities"
import HeaderReviewsApt from "@/components/HeaderReviewsApt";
import Reviews from "@/components/Reviews";
import LocationMap from "@/components/LocationMap";

export const metadata: Metadata = {
  title: "Dziewanna – noclegi z duszą w sercu Pomorza",
  description:
    "Poznaj noclegi w Dziewannie – miejsce blisko natury, stworzone z sercem. Komfortowe apartamenty wśród kaszubskich lasów.",
};

export default function NoclegiPage() {
  
  

  return (
    <>
      {/* Hero full screen */}
      <HeroNoclegi />
      <Facilities />
      <Apartaments />
      <HeaderReviewsApt />
      <Reviews />
    <LocationMap />
    </>
  );
}
