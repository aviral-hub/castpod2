import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, MessageSquare, Users, Calendar, Send } from 'lucide-react'

export function ContactSection() {
  const contactOptions = [
    {
      icon: <Send className="w-6 h-6" />,
      title: 'Send Message',
      description: 'General inquiries and questions',
      action: 'Get In Touch'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Brand Interest Form',
      description: 'Quick brand partnership inquiry',
      action: 'Submit Form'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Submit Your Podcast',
      description: 'Join our creator network',
      action: 'Join Network'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Book a Discovery Call',
      description: 'Let\'s discuss your goals',
      action: 'Schedule Call'
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ready to Start?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't hide. Make it easy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactOptions.map((option, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-purple-100 rounded-full text-purple-600 group-hover:scale-110 transition-transform duration-300">
                    {option.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {option.description}
                </p>
                <Button size="sm" variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Mail className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-gray-600">Direct Email:</span>
          </div>
          <a 
            href="mailto:castpodconnect@gmail.com" 
            className="text-xl font-semibold text-purple-600 hover:text-purple-700 transition-colors"
          >
            castpodconnect@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
