'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 md:py-24 text-center">
        <ShoppingCart className="mx-auto h-24 w-24 text-muted-foreground" />
        <h1 className="mt-8 font-headline text-4xl font-bold">Ваша корзина пуста</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Похоже, вы еще ничего не добавили. Давайте это исправим!
        </p>
        <Button asChild size="lg" className="mt-8 font-bold text-lg">
          <Link href="/catalog">Перейти в каталог</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Ваша корзина</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px] hidden md:table-cell">Товар</TableHead>
                    <TableHead>Наименование</TableHead>
                    <TableHead className="text-center">Количество</TableHead>
                    <TableHead className="text-right">Цена</TableHead>
                    <TableHead className="text-right">Сумма</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cart.map((item) => (
                    <TableRow key={item.product.id}>
                      <TableCell className="hidden md:table-cell">
                        <Image
                          src={item.product.image.imageUrl}
                          alt={item.product.name}
                          width={80}
                          height={60}
                          className="rounded-md object-cover"
                          data-ai-hint={item.product.image.imageHint}
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        <Link href={`/catalog/${item.product.id}`} className="hover:underline">
                          {item.product.name}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center justify-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))}
                            className="h-8 w-14 text-center"
                            min="1"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="text-right whitespace-nowrap">{item.product.price} ₽ / кг</TableCell>
                      <TableCell className="text-right font-semibold whitespace-nowrap">{(item.product.price * item.quantity).toFixed(2)} ₽</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.product.id)}>
                          <Trash2 className="h-5 w-5 text-muted-foreground hover:text-destructive" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
           <div className="mt-4 text-right">
            <Button variant="outline" onClick={clearCart}>
              <Trash2 className="mr-2 h-4 w-4" /> Очистить корзину
            </Button>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Сумма заказа</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Товары</span>
                <span>{total.toFixed(2)} ₽</span>
              </div>
              <div className="flex justify-between">
                <span>Доставка</span>
                <span className="text-primary">Бесплатно</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-xl">
                <span>Итого</span>
                <span>{total.toFixed(2)} ₽</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="lg" className="w-full font-bold text-lg">Оформить заказ</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
