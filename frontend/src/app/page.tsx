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
          <a
            href="/dashboard"
            className="rounded-full bg-white px-7 py-3 font-medium text-black transition hover:bg-white/90"
              >Get Started
          </a>
          
      
          

          <button className="rounded-full border border-white/20 px-7 py-3 font-medium text-white transition hover:border-white/40 hover:bg-white/10">
            Learn More
          </button>
        </div>

        <div className="mt-20 w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#0d1228]/80 shadow-2xl shadow-purple-950/30 backdrop-blur-xl">
  <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
    <div className="flex gap-2">
      <div className="h-3 w-3 rounded-full bg-red-400"></div>
      <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
      <div className="h-3 w-3 rounded-full bg-green-400"></div>
    </div>

    <p className="text-sm text-white/50">Atlas Dashboard</p>

    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
  </div>

  <div className="grid min-h-[350px] md:grid-cols-[220px_1fr]">
    <aside className="border-r border-white/10 p-6 text-left">
      <p className="mb-8 text-lg font-semibold">Atlas</p>

      <div className="space-y-3 text-white/60">
        <p>Dashboard</p>
        <p>Courses</p>
        <p>Study Plan</p>
        <p>Deadlines</p>
      </div>
    </aside>

    <div className="p-8">
      <h3 className="text-left text-2xl font-semibold">
        Good morning 👋
      </h3>

      <p className="mt-2 text-left text-white/50">
        Your personalized dashboard will appear here.
      </p>
    </div>
  </div>
</div>
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
<section className="relative z-10 px-6 py-24 md:px-16">
  <div className="mx-auto max-w-6xl">
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-300">
        How it works
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        From syllabus to study plan
      </h2>

      <p className="mt-4 text-white/60">
        Atlas turns a complicated semester into a clear plan in three simple
        steps.
      </p>
    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-3">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
          1
        </div>

        <h3 className="mt-6 text-xl font-semibold">Upload your syllabus</h3>

        <p className="mt-3 leading-7 text-white/60">
          Add your course syllabus so Atlas can understand your semester.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-500/15 text-purple-300">
          2
        </div>

        <h3 className="mt-6 text-xl font-semibold">Atlas finds the details</h3>

        <p className="mt-3 leading-7 text-white/60">
          Important assignments, exams, and deadlines are identified for you.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-300">
          3
        </div>

        <h3 className="mt-6 text-xl font-semibold">Get your study plan</h3>

        <p className="mt-3 leading-7 text-white/60">
          Receive a clear schedule that helps you prepare without feeling
          overwhelmed.
        </p>
      </div>
    </div>
  </div>
</section>
<footer className="relative z-10 border-t border-white/10 px-6 py-8 md:px-16">
  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-white/50 sm:flex-row">
    <p>© 2026 Atlas. Built for students.</p>

    <div className="flex gap-6">
      <a href="#" className="transition hover:text-white">
        Privacy
      </a>

      <a href="#" className="transition hover:text-white">
        Terms
      </a>

      <a href="#" className="transition hover:text-white">
        Contact
      </a>
    </div>
  </div>
</footer>
    </main>
  );
}