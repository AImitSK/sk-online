export default function Page() {
  return (
    <div className="flex justify-between items-center h-[800px] w-full">
      {/* Linker Container */}
      <div className="w-1/2 h-full flex items-center justify-start">
        <h1 className="font-bricolage font-light text-6xl leading-tight">
          digital marketing
        </h1>
      </div>

      {/* Rechter Container mit grauem Hintergrund */}
      <div className="w-1/2 h-full bg-grau flex items-center justify-start">
        {/* Kein Inhalt hier */}
      </div>
    </div>
  );
}
