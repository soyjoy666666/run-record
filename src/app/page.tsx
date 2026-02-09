import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-50 via-green-100 to-emerald-100 text-zinc-900 dark:from-green-950 dark:via-green-900 dark:to-emerald-900 dark:text-zinc-50">
      <main className="flex flex-col items-center gap-10 px-6 py-16 text-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-green-600/80 dark:text-green-300/80">
            Welcome to
          </p>
          <h1 className="relative">
            <span className="bg-gradient-to-r from-green-500 via-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-8xl drop-shadow-2xl">
              Running
            </span>
            <span className="block bg-gradient-to-r from-emerald-500 via-green-400 via-emerald-400 to-green-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-8xl drop-shadow-2xl mt-2">
              Record
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-transparent to-emerald-400/20 blur-3xl -z-10"></div>
          </h1>
          
        </div>

        <div className="mt-6">
          <Link
            href="/list"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 text-sm font-semibold text-white shadow-2xl shadow-green-500/50 transition-all hover:-translate-y-1 hover:scale-105 hover:shadow-green-500/70"
          >
            一覧ページへ
            <span className="text-lg leading-none">→</span>
          </Link>
        </div>
        <div className="mt-6">
          <Link
            href="/race"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 text-sm font-semibold text-white shadow-2xl shadow-green-500/50 transition-all hover:-translate-y-1 hover:scale-105 hover:shadow-green-500/70"
          >
            レースページへ
            <span className="text-lg leading-none">→</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
