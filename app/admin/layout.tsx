'use client'

import { useEffect, useState } from 'react'
import Sidebar from '@/components/admin/sidebar'
import Navbar from '@/components/admin/navbar'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasAccess, setHasAccess] = useState(true)

  useEffect(() => {
    // Mock authentication check - replace with actual auth
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#d4af37]"></div>
      </div>
    )
  }

  if (!hasAccess) {
    return null
  }

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="overflow-y-auto p-8 flex-1">{children}</main>
      </div>
    </div>
  )
}
