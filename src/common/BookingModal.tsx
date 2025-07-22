// components/BookingModal.tsx
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { ClassNameType } from "@/utils/types";
import { cn } from "@/lib/utils";

export function BookingModal({ className }: { className?: ClassNameType }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn("text-primary-foreground ", className)}>
          Schedule a Demo
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl p-0 overflow-hidden border-4 border-[#00aeef] rounded-xl">
        <DialogHeader className="flex justify-between items-center p-4 bg-white border-b">
          <DialogTitle className="text-lg font-medium">
            Book a Walk-through
          </DialogTitle>
          {/* <DialogTrigger asChild>
            <button className="text-gray-500 hover:text-gray-800 transition">
              <X className="w-5 h-5" />
            </button>
          </DialogTrigger> */}
        </DialogHeader>
        <div className="w-full h-[700px]">
          <iframe
            src="https://outlook.office365.com/owa/calendar/Procarma2@procarma.com/bookings/"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
