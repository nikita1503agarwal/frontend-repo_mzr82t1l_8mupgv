export default function Highlights() {
  const items = [
    {
      title: 'Experienced Faculty',
      text: 'Our dedicated teachers bring experience and care to the classroom.'
    },
    {
      title: 'Modern Classrooms',
      text: 'Clean, well-ventilated spaces equipped for engaging learning.'
    },
    {
      title: 'Scholarships',
      text: 'Guidance for eligible state and central scholarship schemes.'
    },
    {
      title: 'Sports & NSS',
      text: 'Active participation in sports, cultural events, and NSS.'
    },
  ]

  return (
    <section id="highlights" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Campus Highlights</h2>
        <p className="text-blue-100/80 mt-2 max-w-2xl">A supportive environment where students learn, grow and lead with confidence.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-blue-100/90">
              <h3 className="text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-blue-100/80">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
