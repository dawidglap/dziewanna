'use client';

import ExperiencesMobile from './ExperiencesMobile';
import ExperiencesDesktop from './ExperiencesDesktop';

export default function Experiences() {
  return (
    <section className="px-4 sm:px-8 xl:px-0 py-12 max-w-7xl mx-auto">
      <ExperiencesMobile />
      <ExperiencesDesktop />
    </section>
  );
}
