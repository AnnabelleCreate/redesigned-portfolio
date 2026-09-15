export function ImageSlot({
  label = "Image",
  className = "aspect-[16/10]",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`checkerboard relative overflow-hidden rounded-lg border border-ink/8 ${className}`}
    >
      <p className="absolute inset-0 flex items-center justify-center text-[12px] uppercase tracking-[0.14em] text-ink/35">
        {label}
      </p>
    </div>
  );
}
