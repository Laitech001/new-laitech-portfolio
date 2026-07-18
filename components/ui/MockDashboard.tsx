export default function MockDashboard() {
  const bars = [["60%", "30%", "80%", "45%"], ["40%", "70%", "55%"]];
  return (
    <div className="absolute inset-0 bg-[#0c0d10]">
      <div className="h-6.5 border-b border-line bg-[#0c0d10]" />
      <div
        className="absolute bottom-0 left-0 right-0 top-6.5 grid gap-px bg-line"
        style={{ gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr" }}
      >
        <div className="bg-[#0d0e12] p-3.5">
          <div className="mb-2 h-1.25 w-[70%] rounded-sm bg-[#1b1e24]" />
          <div className="mb-2 h-1.25 w-[45%] rounded-sm bg-[#1b1e24]" />
          <div className="mt-1.5 flex h-8.5 items-end gap-1">
            {bars[0].map((h, i) => (
              <span key={i} className="flex-1 rounded-t-sm bg-[#242835]" style={{ height: h }} />
            ))}
          </div>
        </div>
        <div className="bg-[#0d0e12] p-3.5">
          <div className="mb-2 h-1.25 w-[85%] rounded-sm bg-[#1b1e24]" />
          <div className="h-1.25 w-[70%] rounded-sm bg-[#1b1e24]" />
        </div>
        <div className="bg-[#0d0e12] p-3.5">
          <div className="mb-2 h-1.25 w-[45%] rounded-sm bg-[#1b1e24]" />
          <div className="h-1.25 w-[85%] rounded-sm bg-[#1b1e24]" />
        </div>
        <div className="bg-[#0d0e12] p-3.5">
          <div className="mb-2 h-1.25 w-[70%] rounded-sm bg-[#1b1e24]" />
          <div className="mt-1.5 flex h-8.5 items-end gap-1">
            {bars[1].map((h, i) => (
              <span key={i} className="flex-1 rounded-t-sm bg-[#242835]" style={{ height: h }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}