import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Target, DollarSign, Instagram } from 'lucide-react'

export function InstagramCreators() {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-pink-600" />,
      title: 'No Minimum Followers',
      description: 'Start earning from 1K followers with authentic engagement'
    },
    {
      icon: <Target className="w-6 h-6 text-purple-600" />,
      title: 'Brand Alignment',
      description: 'Only work with brands that match your content and values'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-600" />,
      title: 'Fair Compensation',
      description: 'Transparent rates and timely payments for all collaborations'
    }
  ]

  const creatorTypes = [
    'Lifestyle & fashion creators',
    'Food & travel influencers', 
    'Fitness & wellness enthusiasts',
    'Tech & business content creators'
  ]

  return (
    <section id="creators" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="w-8 h-8 text-pink-600 mr-3" />
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              Instagram Creators: Start Earning Today
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Even with 1K followers, you can monetize your influence. Join thousands of creators earning through authentic brand partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Instagram Creators Choose Us
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Quality over quantity. Authentic engagement over vanity metrics. Real partnerships over random products.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">What You Get:</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Brand collaboration opportunities
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Professional account management
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Content creation guidance
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Exclusive campaign access
                </li>
              </ul>

              <h4 className="text-lg font-bold text-gray-900 mb-3">Perfect For:</h4>
              <ul className="space-y-1 mb-6">
                {creatorTypes.map((type, index) => (
                  <li key={index} className="text-gray-600 text-sm">• {type}</li>
                ))}
              </ul>

              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                Join as Instagram Creator
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Join the Creator Economy Revolution?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Whether you're a podcaster, Instagram creator, or brand looking for authentic partnerships - we have a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              I'm a Podcaster
            </Button>
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              I'm an Influencer
            </Button>
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              I'm a Brand
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            🚀 Join 1000+ creators already earning with us
          </p>
        </div>
      </div>
    </section>
  )
}
