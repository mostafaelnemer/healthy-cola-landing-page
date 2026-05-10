import React from "react";

interface ProgressBarProps {
  amountRaised: number;
  targetRaised: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  amountRaised,
  targetRaised,
}) => {
  const percent = Math.min(100, (amountRaised / targetRaised) * 100);

  return (
    <div className="w-full h-6 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full animate-stripes"
        style={{
          width: `${percent}%`,
          background:
            "repeating-linear-gradient(45deg, #fa5f8d, #fa5f8d 7px, #cf45cf 7px, #cf45cf 14px)",
        }}
      />
    </div>
  );
};

export default ProgressBar;
