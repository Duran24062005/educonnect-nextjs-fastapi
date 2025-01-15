import { BarChart3, BookOpen, Users } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900/50 p-4 space-y-4 border-r border-gray-800">
      <Card className="bg-gray-800/50">
        <CardContent className="p-4 text-center">
          <h3 className="text-lg font-medium mb-2">Active Users</h3>
          <div className="text-3xl font-bold text-[#ED82B4]">1,234</div>
          <Users className="w-5 h-5 mx-auto mt-2 text-gray-400" />
        </CardContent>
      </Card>

      <Card className="bg-gray-800/50">
        <CardContent className="p-4 text-center">
          <h3 className="text-lg font-medium mb-2">API Endpoints</h3>
          <div className="text-3xl font-bold text-[#ED82B4]">24</div>
          <BookOpen className="w-5 h-5 mx-auto mt-2 text-gray-400" />
        </CardContent>
      </Card>

      <Card className="bg-gray-800/50">
        <CardContent className="p-4 text-center">
          <h3 className="text-lg font-medium mb-2">Performance</h3>
          <div className="text-3xl font-bold text-[#ED82B4]">98%</div>
          <BarChart3 className="w-5 h-5 mx-auto mt-2 text-gray-400" />
        </CardContent>
      </Card>
    </div>
  )
}

