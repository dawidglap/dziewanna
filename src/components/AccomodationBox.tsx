import Link from "next/link";

export default function AccommodationBox() {
  return (
    <div className="bg-white rounded-sm shadow-md p-6 flex flex-col justify-between h-full">
      <h3 className="text-xl font-bold mb-2">🛏️ Accommodation</h3>
      <p className="text-sm text-[#333] leading-relaxed">
        Choose from 6 cozy studio apartments at Dziewanna, each with private kitchen and bathroom. Enjoy our garden, animals, and peaceful forest surroundings.
      </p>
      <Link
        href="/pokoje"
        className="mt-4 bg-black text-white px-4 py-2 text-sm text-center font-medium rounded hover:bg-[#B2CD9C] hover:text-black transition"
      >
        See all
      </Link>
    </div>
  );
}
