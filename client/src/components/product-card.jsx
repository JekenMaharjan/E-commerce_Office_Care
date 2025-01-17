import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function ProductCard({
  product
}) {
  return (
    (<Card className="overflow-hidden">
      <CardHeader className="p-0">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          <Badge variant={product.availability === 'In Stock' ? 'default' : 'secondary'}>
            {product.availability}
          </Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>)
  );
}

