import Link from "next/link"
import { ShoppingCart } from "lucide-react"

export default function Header() {
  return (
    (<header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Office Care
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-blue-600">
                Products
              </Link>
            </li>
            <li>
              <Link href="/cart" className="text-blue-600">
                <ShoppingCart />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>)
  );
}

