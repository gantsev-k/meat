'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';

export default function CartIcon() {
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Button asChild variant="ghost" className="relative">
      <Link href="/cart">
        <ShoppingCart className="h-6 w-6" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
            {itemCount}
          </span>
        )}
        <span className="sr-only">Корзина, {itemCount} товаров</span>
      </Link>
    </Button>
  );
}
