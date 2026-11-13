import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-6 md:py-8 bg-slate-100">
      <div className="relative overflow-hidden rounded-2xl border border-slate-300 bg-white p-2 shadow-xl md:p-3 mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Encabezado */}
        <section className="space-y-4">

          <h1 className="text-3xl font-extrabold tracking-tight text-blue-950 sm:text-5xl">
            Sacrament Meeting Planner
          </h1>

          <p className="mx-auto max-w-2xl text-base text-slate-600 sm:text-lg">
            Organize agendas, hymns, assignments, and speakers for each service in an efficient, orderly, and collaborative way.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/meetings/current"
              className="rounded-lg bg-blue-950 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:ring-offset-2"
            >
              View Current Meeting
            </Link>
            <Link
              href="/meetings"
              className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            >
              View All Meetings
            </Link>
          </div>
        </section>

        <section className="relative overflow-hidden">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-100">
            <Image
              src="/hero.png"
              alt="Interior of chapel for sacrament meeting"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
              className="object-cover object-center transition duration-500 hover:scale-[1.01]"
            />
          </div>
        </section>
      </div>
    </main>
  );
}