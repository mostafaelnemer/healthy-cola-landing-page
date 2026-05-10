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
    days: Math.max(days, 0),
    hours: Math.max(hours, 0),
    minutes: Math.max(minutes, 0),
    seconds: Math.max(seconds, 0),
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
    <div className="inline-flex justify-center rounded-3xl bg-bg-dark px-8 py-3 gap-4 sm:gap-6 md:gap-12 w-full mx-auto">
      {[
        { label: "Days", value: String(timeLeft.days).padStart(2, "0") },
        { label: "Hours", value: String(timeLeft.hours).padStart(2, "0") },
        { label: "Minutes", value: String(timeLeft.minutes).padStart(2, "0") },
        { label: "Seconds", value: String(timeLeft.seconds).padStart(2, "0") },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <span className="text-4xl md:text-6xl font-semibold text-e3mel-blue">
            {item.value}
          </span>
          <span className="text-base text-black tracking-wider uppercase">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
