export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-[#050816] via-[#0B1026] to-[#1A1040] text-white">

      <div className="absolute left-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute right-[-150px] bottom-[-150px] h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-3xl" />

      <nav className="relative z-10 flex items-center justify-between px-8 py-6 md:px-16">
        <div className="text-xl font-semibold tracking-tight">Atlas</div>

        <button className="rounded-full border border-white/20 px-5 py-2 text-sm transition hover:border-white/40 hover:bg-white/10">
          Sign In
        </button>
      </nav>

      <section className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          Built for students
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
          Your AI operating system
          <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            for students.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
          Organize your semester, manage deadlines, and build a smarter study
          plan—all in one calm, intelligent workspace.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-white px-7 py-3 font-medium text-black transition hover:bg-white/90">
            Get Started
          </button>

          <button className="rounded-full border border-white/20 px-7 py-3 font-medium text-white transition hover:border-white/40 hover:bg-white/10">
            Learn More
          </button>
        </div>

        <div className="mt-20 h-48 w-full max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.02] shadow-2xl shadow-blue-500/10" />
      </section>
      <section className="relative z-10 px-6 py-24 md:px-16">
  <div className="mx-auto max-w-6xl">
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-300">
        Why Atlas?
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        Everything you need to stay ahead
      </h2>

      <p className="mt-4 text-white/60">
        Atlas helps students organize their semester, understand their workload,
        and focus on what matters most.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm">
        <p className="text-sm text-blue-300">01</p>
        <h3 className="mt-4 text-xl font-semibold">Never miss a deadline</h3>
        <p className="mt-3 leading-7 text-white/60">
          Keep assignments, exams, and important dates organized in one place.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm">
        <p className="text-sm text-purple-300">02</p>
        <h3 className="mt-4 text-xl font-semibold">Plan smarter</h3>
        <p className="mt-3 leading-7 text-white/60">
          Turn your course workload into a clear and manageable study plan.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm">
        <p className="text-sm text-indigo-300">03</p>
        <h3 className="mt-4 text-xl font-semibold">Study with confidence</h3>
        <p className="mt-3 leading-7 text-white/60">
          Spend less time figuring out what to do and more time actually learning.
        </p>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}