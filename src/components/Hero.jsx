export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.25),transparent_40%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow">
              Shri Ghanshyam Dubey Degree College
            </h1>
            <p className="mt-4 text-blue-100/90 text-lg">
              Empowering Education, Enriching Lives — in the heart of Suriyawan, Bhadohi, Uttar Pradesh.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#programs" className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition">Explore Programs</a>
              <a href="#contact" className="px-5 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition">Contact Us</a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-blue-300/5 backdrop-blur shadow-2xl"></div>
            <div className="absolute -top-3 -left-3 w-24 h-24 rounded-xl bg-blue-500/30 blur-2xl"></div>
            <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-xl bg-cyan-400/30 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
