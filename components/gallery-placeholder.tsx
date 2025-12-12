export function GalleryPlaceholder() {
  const placeholders = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-dirtydog-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-4xl mb-4">
            See the Dirty Dog Difference
          </h2>
          <p className="text-lg text-dirtydog-silver max-w-2xl mx-auto">
            Real vehicles. Real messes. Real transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((num) => (
            <div
              key={num}
              className="bg-neutral-800 rounded-xl w-full aspect-[4/3]"
              aria-label={`Placeholder for before/after transformation photo ${num}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

