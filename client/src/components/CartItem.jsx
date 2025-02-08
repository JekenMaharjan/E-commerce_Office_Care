import Image from "next/image"
import { Minus, Plus, X } from "lucide-react"

export default function CartItem({
  item,
  updateQuantity,
  removeItem
}) {
  return (
    (<div className="flex items-center border-b py-4">
      <Image
        src={item.image || "/placeholder.svg"}
        alt={item.name}
        width={100}
        height={100}
        className="rounded-md" />
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">Rs.{item.price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          <button
            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
            className="p-1 rounded-md hover:bg-gray-100">
            <Minus size={16} />
          </button>
          <span className="mx-2">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="p-1 rounded-md hover:bg-gray-100">
            <Plus size={16} />
          </button>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
        <button
          onClick={() => removeItem(item.id)}
          className="text-red-500 hover:text-red-700 mt-2">
          <X size={20} />
        </button>
      </div>
    </div>)
  );
}

