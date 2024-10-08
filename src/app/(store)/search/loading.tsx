'use client'

import { Suspense } from 'react'
import { Skeleton } from '@/components/skeleton'
import { useSearchParams } from 'next/navigation'

export default function SearchLoading() {
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  return (
    <Suspense>
      <div className="flex flex-col gap-4">
        <p className="text-sm">
          Resultados para: <span>{query}</span>
        </p>

        <div className="grid grid-cols-3 gap-6">
          <Skeleton className="h-[400px]" />
          <Skeleton className="h-[400px]" />
          <Skeleton className="h-[400px]" />
          <Skeleton className="h-[400px]" />
          <Skeleton className="h-[400px]" />
          <Skeleton className="h-[400px]" />
        </div>
      </div>
    </Suspense>
  )
}
