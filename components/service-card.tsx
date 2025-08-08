export function ServiceCard() {
  const services = [
    'Branding',
    'Development', 
    'Design',
    'Marketing',
    'Creative Writing'
  ]

  return (
    <div className="w-full lg:w-auto mb-8 lg:mb-0">
      <div className="bg-green-700 text-lime-400 p-6 md:p-8 w-full lg:w-64 h-auto lg:h-64 flex flex-col">
        <div className="text-lg md:text-xl font-light mb-4 lg:mb-8">
          janicnt
        </div>
        <div className="space-y-1 md:space-y-2 text-sm md:text-base">
          {services.map((service, index) => (
            <div key={index} className="font-light">
              {service}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
