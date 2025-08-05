'use client';

import FacilitiesMobile from './FacilitiesMobile';
import FacilitiesDesktop from './FacilitiesDesktop';

export default function Facilities() {
  return (
    <section className="px-4 sm:px-8 xl:px-0 py-12 max-w-7xl mx-auto">
      <FacilitiesMobile />
      <FacilitiesDesktop />
    </section>
  );
}
