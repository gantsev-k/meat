'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, ShoppingCart, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { enhanceDescriptionAction } from '@/app/actions';
import type { Product } from '@/lib/data';
import { useCart } from '@/context/cart-context';

interface ProductDescriptionEnhancerProps {
  product: Product;
}

export default function ProductDescriptionEnhancer({ product }: ProductDescriptionEnhancerProps) {
  const [description, setDescription] = useState(product.description);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const { toast } = useToast();
  const { addToCart } = useCart();

  const handleEnhance = async () => {
    setIsEnhancing(true);
    toast({
      title: 'Улучшаем описание...',
      description: 'Пожалуйста, подождите, магия AI в действии!',
    });

    const result = await enhanceDescriptionAction({
      productName: product.name,
      existingDescription: product.description, // always use original for better results
    });

    if (result.error) {
      toast({
        variant: 'destructive',
        title: 'Ошибка',
        description: result.error,
      });
    } else {
      setDescription(result.enhancedDescription);
      toast({
        title: 'Описание улучшено!',
        description: 'Новая версия описания сгенерирована.',
      });
    }
    setIsEnhancing(false);
  };

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Товар добавлен в корзину",
      description: `${product.name} успешно добавлен.`,
    });
  };

  return (
    <div>
      <p>{description}</p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="font-bold text-lg" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-5 w-5" />
          Добавить в корзину
        </Button>
        <Button
          size="lg"
          variant="secondary"
          onClick={handleEnhance}
          disabled={isEnhancing}
          className="font-bold text-lg"
        >
          {isEnhancing ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-5 w-5" />
          )}
          Улучшить с AI
        </Button>
      </div>
    </div>
  );
}
