export function About() {
  return (
    <section className="bg-lime-400 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/placeholder.svg?height=300&width=250"
              alt="Team member 1"
              className="w-full h-64 object-cover rounded"
            />
            <img 
              src="/placeholder.svg?height=300&width=250"
              alt="Team member 2"
              className="w-full h-64 object-cover rounded mt-8"
            />
            <img 
              src="/placeholder.svg?height=300&width=250"
              alt="Team member 3"
              className="w-full h-64 object-cover rounded -mt-8"
            />
            <img 
              src="/placeholder.svg?height=300&width=250"
              alt="Team member 4"
              className="w-full h-64 object-cover rounded"
            />
          </div>

          <div>
            <p className="text-green-700 text-lg lg:text-xl leading-relaxed mb-8">
              Since 2012, we have provided strategy, design & development to innovative organizations around the world — from major consumer brands to early stage startups. Through our collaboration and design-driven leadership we've helped launch and grow digital-first brands, products and businesses.
            </p>
            
            <button className="w-24 h-24 bg-green-700 text-lime-400 rounded-full flex items-center justify-center text-sm font-medium hover:bg-green-800 transition-colors">
              View <br />
              All Work
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
