export default function MockTerminal() {
  const widths = ["35%", "60%", "48%", "25%", "60%"];
  return (
    <div className="absolute inset-0 bg-[#0c0d10]">
      <div className="flex h-6.5 items-center gap-1.5 border-b border-line bg-[#0c0d10] px-2.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-1.75 w-1.75 rounded-full bg-line" />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-6.5 p-5">
        {widths.map((w, i) => (
          <div key={i} className="mb-2.5 h-1.5 rounded-sm bg-[#1b1e24]" style={{ width: w }} />
        ))}
      </div>
    </div>
  );
}