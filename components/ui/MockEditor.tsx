export default function MockEditor() {
  return (
    <div className="absolute inset-0 bg-linear-to-b from-[#0f1118] to-[#0c0d10]">
      <div className="flex h-6.5 items-center gap-1.5 border-b border-line bg-[#0c0d10] px-2.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-1.75 w-1.75 rounded-full bg-line" />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-6.5 flex">
        <div className="w-[22%] border-r border-line bg-[#0d0e12]">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="mx-3.5 mt-3.5 h-1.5 rounded-sm bg-[#1b1e24]" />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-2.25 p-4">
          <div className="h-1.75 w-[40%] rounded-sm bg-linear-to-r from-[#3b4270] to-[#2a2e44]" />
          <div className="h-1.75 w-[65%] rounded-sm bg-[#1b1e24]" />
          <div className="h-1.75 w-[80%] rounded-sm bg-[#1b1e24]" />
          <div className="h-1.75 w-[55%] rounded-sm bg-[#1b1e24]" />
          <div className="h-1.75 w-[40%] rounded-sm bg-[#1b1e24]" />
        </div>
      </div>
    </div>
  );
}