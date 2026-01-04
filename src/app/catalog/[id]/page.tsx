import Image from 'next/image';
import { getProductById } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductDescriptionEnhancer from '@/components/site/product-description-enhancer';

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
        <div className="sticky top-24">
          <div className="aspect-square relative rounded-lg overflow-hidden border">
            <Image
              src={product.image.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              data-ai-hint={product.image.imageHint}
            />
          </div>
        </div>

        <div>
          <Badge variant="secondary">{product.category}</Badge>
          <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">{product.name}</h1>
          <p className="text-3xl font-semibold text-primary mt-4">{product.price} ₽ / кг</p>
          
          <div className="mt-6 prose prose-lg max-w-none text-foreground/80">
            <ProductDescriptionEnhancer product={product} />
          </div>

          <div className="mt-8">
            {/* The 'Add to Cart' button is inside the enhancer, so we don't duplicate it here */}
          </div>
          
          <div className="mt-8 border-t pt-6">
            <h3 className="font-headline text-xl font-semibold">Информация о товаре</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Категория:</span> {product.category}</li>
              <li><span className="font-semibold text-foreground">Происхождение:</span> Фермерское хозяйство</li>
              <li><span className="font-semibold text-foreground">Хранение:</span> Хранить в холодильнике при 0-4°C</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
