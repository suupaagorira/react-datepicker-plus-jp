import React, { useState, useEffect } from "react";

interface InputHeaderProps {
  /** Current date in view */
  date: Date;
  /** Year range */
  yearRange: [number, number];
  /** Callback when year-month confirmed */
  onConfirm: (d: Date) => void;
}

const pad = (n: number, length = 2) => n.toString().padStart(length, "0");

const InputHeader: React.FC<InputHeaderProps> = function ({
  date,
  yearRange,
  onConfirm,
}: InputHeaderProps) {
  const [year, setYear] = useState(date.getFullYear().toString());
  const [month, setMonth] = useState(pad(date.getMonth() + 1));
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    setYear(date.getFullYear().toString());
    setMonth(pad(date.getMonth() + 1));
  }, [date]);

  const handleSubmit = () => {
    const y = parseInt(year, 10);
    const m = parseInt(month, 10);
    if (
      isNaN(y) ||
      isNaN(m) ||
      m < 1 ||
      m > 12 ||
      y < yearRange[0] ||
      y > yearRange[1]
    ) {
      setInvalid(true);
      return;
    }
    setInvalid(false);
    const newDate = new Date(date);
    newDate.setFullYear(y);
    newDate.setMonth(m - 1, 1);
    onConfirm(newDate);
  };

  return (
    <div className="react-datepicker__year-month-input">
      <input
        aria-label="年"
        value={year}
        size={4}
        onChange={(e) => setYear(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        onBlur={handleSubmit}
        aria-invalid={invalid ? "true" : undefined}
      />
      <span>年</span>
      <input
        aria-label="月"
        value={month}
        size={2}
        onChange={(e) => setMonth(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        onBlur={handleSubmit}
        aria-invalid={invalid ? "true" : undefined}
      />
      <span>月</span>
    </div>
  );
};

export default InputHeader;
