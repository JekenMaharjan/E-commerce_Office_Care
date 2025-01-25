import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react';

export function Navbar() {
  return (
    (<nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold text-primary">Office Care</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-4">
            <Input type="search" placeholder="Search products..." className="w-full" />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart
            </Button>
            <Link href="/signin">
              <Button variant="outline" size="sm">Sign In</Button>
            </Link>
            <Link href="/login">
              <Button size="sm">Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>)
  );
}

