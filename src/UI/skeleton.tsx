const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export default function CardSkeleton() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {
        Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className={`${shimmer} relative overflow-hidden rounded-xl p-2 shadow-sm bg-gray-200`}
          >
            <div className="flex justify-center">
              <div className="h-44 w-full rounded-md bg-gray-300 mb-8" />
            </div>
            <div className="flex items-center justify-center">
              <div className="h-7 w-2/4 rounded-md bg-gray-300" />
            </div>
          </div>
        ))
      }
    </div>

  )
}