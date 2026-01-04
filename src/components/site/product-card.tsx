'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cart-context';
import type { Product } from '@/lib/data';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Товар добавлен в корзину",
      description: `${product.name} успешно добавлен.`,
    });
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-0 border-b">
        <Link href={`/catalog/${product.id}`} className="block">
          <div className="aspect-video relative">
            <Image
              src={product.image.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={product.image.imageHint}
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <Link href={`/catalog/${product.id}`}>
          <CardTitle className="font-headline text-xl mb-2 hover:text-primary transition-colors">{product.name}</CardTitle>
        </Link>
        <p className="text-lg font-semibold text-primary">{product.price} ₽ / кг</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full font-bold" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-4 w-4" /> В корзину
        </Button>
      </CardFooter>
    </Card>
  );
}
