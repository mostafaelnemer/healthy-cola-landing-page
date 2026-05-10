"use client";
import { useEffect, useState } from "react";

function getTimeLeft(targetDate: Date | string) {
  const total = new Date(targetDate).getTime() - Date.now();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return {
    total,
    days: days > 0 ? days : 0,
    hours: hours > 0 ? hours : 0,
    minutes: minutes > 0 ? minutes : 0,
    seconds: seconds > 0 ? seconds : 0,
  };
}

const Countdown = ({ targetDate }: { targetDate: Date }) => {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  // Prevent SSR mismatch by not rendering on server
  if (!mounted) return null;

  return (
    <div className="inline-flex justify-center rounded-lg bg-bg-dark px-8 py-3 gap-6 sm:gap-15 w-full mx-auto bg-gradient-to-b from-[#4D44B7] to-[#221E51]">
      {[
        { label: "Days", value: String(timeLeft.days).padStart(2, "0") },
        { label: "Hours", value: String(timeLeft.hours).padStart(2, "0") },
        { label: "Minutes", value: String(timeLeft.minutes).padStart(2, "0") },
        { label: "Seconds", value: String(timeLeft.seconds).padStart(2, "0") },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <span className="text-xl sm:text-2xl font-semibold text-white">
            {item.value}
          </span>
          <span className="text-[10px] sm:text-xs text-white tracking-wider uppercase">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
