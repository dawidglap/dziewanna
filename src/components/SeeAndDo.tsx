export default function SeeAndDoBox() {
  return (
    <div className="bg-white rounded-sm shadow-md p-6 flex flex-col justify-between h-full">
      <h3 className="text-xl font-bold mb-2">🗻 See & Do</h3>
      <p className="text-sm text-[#333] leading-relaxed">
        Discover biking trails, forest paths, mushroom foraging, kayaking on Krzynia lake, goat cheese tasting, bonfires and more around Dziewanna.
      </p>
      <a
        href="/see-and-do"
        className="mt-4 bg-black text-white px-4 py-2 text-sm text-center font-medium rounded hover:bg-[#B2CD9C] hover:text-black transition"
      >
        See all
      </a>
    </div>
  );
}
