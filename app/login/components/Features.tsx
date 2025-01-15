import { CheckCircle, Clock, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    icon: <CheckCircle className="h-8 w-8 mb-2" />,
    title: 'Task Management',
    description: 'Easily create, organize, and track your tasks with our intuitive interface.'
  },
  {
    icon: <Clock className="h-8 w-8 mb-2" />,
    title: 'Time Tracking',
    description: 'Monitor your productivity and manage your time more effectively.'
  },
  {
    icon: <Users className="h-8 w-8 mb-2" />,
    title: 'Collaboration',
    description: 'Work seamlessly with your team, share tasks, and communicate in real-time.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-6">
      <h2 className="Alexi_Dg text-3xl md:text-4xl mb-12 text-center">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex flex-col items-center">
                {feature.icon}
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

