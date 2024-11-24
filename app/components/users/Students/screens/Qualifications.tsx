import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Progress } from '@radix-ui/react-progress'
import { TabsContent } from '@radix-ui/react-tabs'
import React from 'react'

export const Qualifications = () => {
  return (
    <div className='mt-6'>
        <TabsContent value="courses">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                    { name: "Matemáticas", teacher: "Prof. Rodríguez", progress: 75 },
                    { name: "Literatura", teacher: "Prof. Gómez", progress: 60 },
                    { name: "Física", teacher: "Prof. Martínez", progress: 80 },
                    { name: "Historia", teacher: "Prof. Sánchez", progress: 70 },
                    { name: "Biología", teacher: "Prof. López", progress: 85 },
                    { name: "Inglés", teacher: "Prof. Smith", progress: 90 },
                  ].map((course, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{course.name}</CardTitle>
                        <CardDescription>{course.teacher}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Progreso del curso</span>
                          <span className="text-sm font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="w-full" />
                        <Button className="w-full mt-4">Ver Detalles</Button>
                      </CardContent>
                    </Card>
                ))}
            </div>
        </TabsContent>
    </div>
  )
}
