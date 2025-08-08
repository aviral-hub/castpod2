export function FeaturedWork() {
  const projects = [
    {
      title: 'Saudi Venture Capital',
      category: 'Branding — 2014',
      image: '/placeholder-ryzpw.png'
    },
    {
      title: 'Saudi Venture Capital',
      category: 'Branding — 2014',
      image: '/placeholder-ycadl.png'
    },
    {
      title: 'Saudi Venture Capital',
      category: 'Branding — 2014',
      image: '/digital-design-showcase.png'
    },
    {
      title: 'Saudi Venture Capital',
      category: 'Branding — 2014',
      image: '/placeholder-7q8wn.png'
    }
  ]

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <div className="mb-4">
            <span className="text-green-700 text-sm font-medium tracking-wider uppercase">
              featured WORK
            </span>
          </div>
          <h2 className="text-black text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            Reach our <br />
            featured <span className="italic">works</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            We help local companies and services enter the market, and well-known brands expand an audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div key={index} className={`group cursor-pointer ${index === 1 ? 'lg:mt-24' : ''}`}>
              <div className="relative overflow-hidden mb-6">
                <div className="absolute inset-0 bg-green-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                <img 
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="text-black text-xl lg:text-2xl font-semibold mb-2 group-hover:text-green-700 transition-colors">
                  {project.title}
                </h3>
                <span className="text-gray-500 text-sm">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
          
          <div className="flex flex-col justify-center items-center text-center p-8">
            <p className="text-gray-600 text-base mb-8 max-w-xs">
              Whether your inquiries are big or small, we're prepared to engage, focusing on complex problems
            </p>
            <button className="w-24 h-24 bg-green-700 text-white rounded-full flex items-center justify-center text-sm font-medium hover:bg-green-800 transition-colors">
              View <br />
              All Work
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
