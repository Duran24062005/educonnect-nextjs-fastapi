import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon } from 'lucide-react'

interface DocCardProps {
  title: string
  description: string
  date: string
  category: string
}

export function DocCard({ title, description, date, category }: DocCardProps) {
  return (
    <Card className="bg-gray-800/50 border-gray-700 hover:border-[#ED82B4]/50 transition-colors">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="bg-[#ED82B4]/10 text-[#ED82B4] hover:bg-[#ED82B4]/20">
            {category}
          </Badge>
          <div className="flex items-center text-sm text-gray-400">
            <CalendarIcon className="mr-1 h-3 w-3" />
            {date}
          </div>
        </div>
        <CardTitle className="text-xl mt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}

