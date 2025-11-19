import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Highlights from './components/Highlights'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-blue-100">
      <Navbar />

      <main>
        <Hero />

        <section id="about" className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About the College</h2>
            <div className="mt-4 grid lg:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
                <p className="text-blue-100/90">
                  Shri Ghanshyam Dubey Degree College, Suriyawan is dedicated to providing quality higher education with a focus on academic excellence, character building, and community development.
                </p>
                <ul className="mt-4 list-disc list-inside text-blue-100/80 text-sm">
                  <li>Affiliated to State University</li>
                  <li>Programs: B.A., B.Sc., B.Com.</li>
                  <li>Location: Suriyawan, Bhadohi, Uttar Pradesh</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
                <p className="text-blue-100/90">
                  We strive to empower students from rural and urban backgrounds through accessible education, holistic development, and community engagement.
                </p>
                <p className="mt-3 text-blue-100/80 text-sm">
                  Highlights include experienced faculty, supportive learning environment, and opportunities in sports, cultural activities, and NSS.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Programs />
        <Highlights />
        <Contact />
      </main>

      <footer className="mt-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-blue-300/70 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Shri Ghanshyam Dubey Degree College, Suriyawan</p>
          <p>For queries: info@sgddcollege.ac.in • +91-XXXXXXXXXX</p>
        </div>
      </footer>
    </div>
  )
}

export default App
