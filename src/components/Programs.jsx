export default function Programs() {
  const programs = [
    { name: 'B.A.', duration: '3 Years', intake: 120, desc: 'Undergraduate program in Arts with multiple subject combinations.' },
    { name: 'B.Sc.', duration: '3 Years', intake: 120, desc: 'Undergraduate program in Science with strong lab exposure.' },
    { name: 'B.Com.', duration: '3 Years', intake: 120, desc: 'Undergraduate program in Commerce focusing on business and finance.' },
  ]

  return (
    <section id="programs" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Programs Offered</h2>
        <p className="text-blue-100/80 mt-2 max-w-2xl">We offer undergraduate programs designed to build strong foundations and open future opportunities.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-blue-100/90">
              <h3 className="text-xl font-semibold text-white">{p.name}</h3>
              <p className="mt-1 text-sm">Duration: {p.duration}</p>
              <p className="text-sm">Intake: {p.intake}</p>
              <p className="mt-3 text-sm text-blue-100/80">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
