"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { salonInfo } from "@/lib/data";

interface BookingCTAProps {
  variant?: "default" | "secondary" | "outline";
  size?: "default" | "sm" | "lg";
  text?: string;
  className?: string;
}

export default function BookingCTA({
  variant = "default",
  size = "default",
  text = "Objednat se",
  className = "",
}: BookingCTAProps) {
  const handleBooking = () => {
    window.open(salonInfo.bookingUrl, "_blank");
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleBooking}
      className={`gap-2 ${className}`}
    >
      <Calendar className="h-4 w-4" />
      {text}
    </Button>
  );
}