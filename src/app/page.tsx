import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-zinc-800 text-zinc-50">
      <main className="flex flex-col items-center gap-10 px-6 py-16 text-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
            Welcome to
          </p>
          <h1 className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-400 bg-clip-text text-6xl font-semibold tracking-tight text-transparent sm:text-7xl">
            welcome
          </h1>
          <p className="max-w-md text-sm text-zinc-400 sm:text-base">
            ランニングのベストタイムを、距離ごとにきれいに管理するための
            シンプルなページです。
          </p>
        </div>

        <div className="mt-4">
          <Link
            href="/list"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-50 px-7 py-3 text-sm font-medium text-zinc-950 shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-100 hover:text-zinc-900"
          >
            一覧ページへ
            <span className="text-lg leading-none">→</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
