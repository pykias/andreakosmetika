import { MapPin } from "lucide-react";

export default function MaintenanceBanner() {
  return (
    <div className="bg-brand-brown-dark text-white py-3 px-4 text-center relative z-[60]">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <MapPin className="h-5 w-5 text-brand-beige shrink-0" />
        <span className="text-sm sm:text-base">
          Od <strong>4. 5.</strong> otevíráme novou pobočku:{" "}
          <strong>U Pošty 2, 625 00 Brno-Starý Lískovec</strong>
        </span>
      </div>
    </div>
  );
}
