'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Moon, Sun, HelpCircle, LogOut } from 'lucide-react'

export default function BuyerDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState('light')
  const router = useRouter()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    // Implement theme switching logic here
  }

  const handleLogout = () => {
    // Implement logout logic here
    router.push('/signin')
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Sand & Grit Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-xl font-bold">Sand & Grit</h1>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => {}}>
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Help</span>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={toggleTheme}>
              {theme === 'light' ? <Moon className="mr-2 h-4 w-4" /> : <Sun className="mr-2 h-4 w-4" />}
              <span>Theme</span>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <div className="flex">
        <nav className="w-64 bg-gray-800 text-white p-4">
          <ul>
            <li><Link href="/buyer-dashboard/profile">Profile</Link></li>
            <li><Link href="/buyer-dashboard/orders">Orders</Link></li>
            <li><Link href="/buyer-dashboard/products">Products</Link></li>
            <li><Link href="/buyer-dashboard/invoices">Invoices</Link></li>
          </ul>
        </nav>
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  )
}

