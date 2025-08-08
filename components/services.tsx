export function Services() {
  const services = [
    {
      number: '01',
      title: 'Art Direction',
      features: ['Design Strategy', 'Prototyping & Wireframe', 'Design system', 'Usability testing']
    },
    {
      number: '02',
      title: 'Brand Guideline',
      features: ['Design Strategy', 'Prototyping & Wireframe', 'Design system', 'Usability testing']
    },
    {
      number: '03',
      title: 'Art Direction',
      features: ['Design Strategy', 'Prototyping & Wireframe', 'Design system', 'Usability testing']
    },
    {
      number: '04',
      title: 'Brand Guideline',
      features: ['Design Strategy', 'Prototyping & Wireframe', 'Design system', 'Usability testing']
    }
  ]

  return (
    <section className="bg-lime-400 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="mb-4">
                <span className="text-green-700 text-sm font-medium">
                  {service.number}
                </span>
              </div>
              <h3 className="text-green-700 text-2xl lg:text-3xl font-bold mb-6 group-hover:text-black transition-colors">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-green-700 text-sm lg:text-base">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="lg:col-span-1 xl:col-span-1">
            <div className="relative">
              <img 
                src="/creative-team-design.png"
                alt="Service showcase"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-700/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
