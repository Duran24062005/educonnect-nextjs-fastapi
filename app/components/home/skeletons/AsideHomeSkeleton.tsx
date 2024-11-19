import { Skeleton } from "@/components/ui/skeleton"

export default function Component() {
  return (
    <div className="grid grid-cols-1 gap-4 pt-8">
      {[...Array(4)].map((_, index) => (
        <div 
          key={index} 
          className="px-4 py-3 w-72 m-auto rounded-md bg-slate-700/75 backdrop-blur-sm"
        >
          <Skeleton className="h-6 w-40 mx-auto mb-2 bg-slate-600/50" />
          {index === 3 ? (
            <Skeleton className="h-[200px] w-full bg-slate-600/50" />
          ) : (
            <Skeleton className="h-6 w-20 mx-auto bg-slate-600/50" />
          )}
        </div>
      ))}
    </div>
  )
}