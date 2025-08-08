export function Awards() {
  const awards = [
    { category: 'Awwwards', award: '3x creative agency of the day', year: '2023' },
    { category: 'Envato', award: '1x agency of the year', year: '2010' },
    { category: 'CSS Winner', award: '5x honorable mentioned', year: '2012' },
    { category: 'Behance', award: '2x Featured design of the week', year: '2021' },
    { category: 'Dribbble', award: '8x Best design of the day', year: '2017' }
  ]

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <div className="mb-4">
            <span className="text-green-700 text-sm font-medium tracking-wider uppercase">
              Awards
            </span>
          </div>
          <h2 className="text-black text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            We proudly receive<br />
            worthy recognition and<br />
            <span className="italic">awards</span>
          </h2>
        </div>

        <div className="space-y-8">
          {awards.map((award, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-gray-200 group hover:border-green-700 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-4 md:mb-0">
                <span className="text-green-700 text-sm font-medium min-w-[100px]">
                  {award.category}
                </span>
                <p className="text-black text-lg lg:text-xl font-medium group-hover:text-green-700 transition-colors">
                  {award.award}
                </p>
              </div>
              <span className="text-gray-500 text-sm">
                {award.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
