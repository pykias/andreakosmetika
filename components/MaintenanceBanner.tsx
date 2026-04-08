import { Construction, MapPin } from "lucide-react";

export default function MaintenanceBanner() {
  return (
    <div className="bg-brand-brown-dark text-white py-3 px-4 text-center relative z-[60]">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <div className="flex items-center gap-2">
          <Construction className="h-5 w-5 text-brand-beige shrink-0" />
          <span className="font-medium text-sm sm:text-base">
            Web je momentálně v údržbě
          </span>
        </div>
        <span className="hidden sm:inline text-brand-beige">|</span>
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-brand-beige shrink-0" />
          <span className="text-sm sm:text-base">
            Od <strong>4. 5.</strong> otevíráme novou pobočku:{" "}
            <strong>U Pošty 2, 625 00 Brno-Starý Lískovec</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
