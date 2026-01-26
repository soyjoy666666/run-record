"use client";

import { useState } from "react";

const distances = [
  { label: "5km", value: "5km" },
  { label: "10km", value: "10km" },
  { label: "Half", value: "half" },
  { label: "Full", value: "full" },
];

type TimeEntry = {
  distance: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const initialTimes: TimeEntry[] = distances.map((d) => ({
  distance: d.label,
  hours: d.value === "half" ? "1" : "0",
  minutes: d.value === "half" ? "30" : "0",
  seconds: "0",
}));

export default function ListPage() {
  const [times, setTimes] = useState<TimeEntry[]>(initialTimes);

  const handleChange = (
    distance: string,
    part: "hours" | "minutes" | "seconds",
    value: string
  ) => {
    const onlyNumbers = value.replace(/[^\d]/g, "");
    const capped =
      part === "hours"
        ? onlyNumbers
        : String(Math.min(Number(onlyNumbers || "0"), 59));

    setTimes((prev) =>
      prev.map((item) =>
        item.distance === distance ? { ...item, [part]: capped } : item
      )
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-50 via-green-100 to-emerald-100 px-4 py-12 dark:from-green-950 dark:via-green-900 dark:to-emerald-900">
      <main className="w-full max-w-xl rounded-3xl border border-green-200 bg-white/70 p-8 shadow-lg backdrop-blur dark:border-green-800 dark:bg-green-900/70">
        <header className="mb-8 flex items-baseline justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-green-900 dark:text-green-50">
              ベストタイム一覧
            </h1>
            <p className="mt-1 text-xs text-green-600 dark:text-green-400">
              距離ごとの自己ベストタイム（初期値は0）
            </p>
          </div>
        </header>

        <section className="space-y-3">
          {times.map((item) => (
            <div
              key={item.distance}
              className="flex items-center justify-between gap-3 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm dark:border-green-700 dark:bg-green-900"
            >
              <span className="font-medium text-green-800 dark:text-green-100">
                {item.distance}
              </span>
              <div className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400">
                <label className="flex items-center gap-1">
                  <input
                    type="number"
                    inputMode="numeric"
                    min={0}
                    value={item.hours}
                    onChange={(e) =>
                      handleChange(item.distance, "hours", e.target.value)
                    }
                    className="w-14 rounded-lg border border-green-300 bg-white px-2 py-1 text-right font-mono text-green-700 shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:border-green-700 dark:bg-green-800 dark:text-green-100"
                    aria-label={`${item.distance}の時間（時）`}
                  />
                  <span className="text-green-600 dark:text-green-400">h</span>
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="number"
                    inputMode="numeric"
                    min={0}
                    max={59}
                    value={item.minutes}
                    onChange={(e) =>
                      handleChange(item.distance, "minutes", e.target.value)
                    }
                    className="w-14 rounded-lg border border-green-300 bg-white px-2 py-1 text-right font-mono text-green-700 shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:border-green-700 dark:bg-green-800 dark:text-green-100"
                    aria-label={`${item.distance}の時間（分）`}
                  />
                  <span className="text-green-600 dark:text-green-400">m</span>
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="number"
                    inputMode="numeric"
                    min={0}
                    max={59}
                    value={item.seconds}
                    onChange={(e) =>
                      handleChange(item.distance, "seconds", e.target.value)
                    }
                    className="w-14 rounded-lg border border-green-300 bg-white px-2 py-1 text-right font-mono text-green-700 shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:border-green-700 dark:bg-green-800 dark:text-green-100"
                    aria-label={`${item.distance}の時間（秒）`}
                  />
                  <span className="text-green-600 dark:text-green-400">s</span>
                </label>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

