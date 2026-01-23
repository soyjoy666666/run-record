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
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <main className="w-full max-w-xl rounded-3xl border border-zinc-200 bg-white/70 p-8 shadow-lg backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70">
        <header className="mb-8 flex items-baseline justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              ベストタイム一覧
            </h1>
            <p className="mt-1 text-xs text-zinc-500">
              距離ごとの自己ベストタイム（初期値は0）
            </p>
          </div>
        </header>

        <section className="space-y-3">
          {times.map((item) => (
            <div
              key={item.distance}
              className="flex items-center justify-between gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-900"
            >
              <span className="font-medium text-zinc-800 dark:text-zinc-100">
                {item.distance}
              </span>
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <label className="flex items-center gap-1">
                  <input
                    type="number"
                    inputMode="numeric"
                    min={0}
                    value={item.hours}
                    onChange={(e) =>
                      handleChange(item.distance, "hours", e.target.value)
                    }
                    className="w-14 rounded-lg border border-zinc-300 bg-white px-2 py-1 text-right font-mono text-zinc-700 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                    aria-label={`${item.distance}の時間（時）`}
                  />
                  <span className="text-zinc-500">h</span>
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
                    className="w-14 rounded-lg border border-zinc-300 bg-white px-2 py-1 text-right font-mono text-zinc-700 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                    aria-label={`${item.distance}の時間（分）`}
                  />
                  <span className="text-zinc-500">m</span>
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
                    className="w-14 rounded-lg border border-zinc-300 bg-white px-2 py-1 text-right font-mono text-zinc-700 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                    aria-label={`${item.distance}の時間（秒）`}
                  />
                  <span className="text-zinc-500">s</span>
                </label>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

