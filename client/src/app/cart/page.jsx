"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CartItem from "@/components/CartItem"

// Mock data for cart items
const initialCartItems = [
  { id: 1, name: "Product 1", price: 19.99, quantity: 2, image: "/placeholder.svg?height=100&width=100" },
  { id: 2, name: "Product 2", price: 29.99, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
  { id: 3, name: "Product 3", price: 39.99, quantity: 3, image: "/placeholder.svg?height=100&width=100" },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    )
  }

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    (<div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-xl">Your cart is empty.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  updateQuantity={updateQuantity}
                  removeItem={removeItem} />
              ))}
            </div>
            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal:</span>
                  <span>Rs.{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping:</span>
                  <span>Rs.5.00</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Tax:</span>
                  <span>Rs.{(total * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>Rs.{(total + 5 + total * 0.1).toFixed(2)}</span>
                  </div>
                </div>
                <button
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-700 transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>)
  );
}

