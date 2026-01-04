import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Beef, Factory, ShieldCheck, Truck } from 'lucide-react';
import { products } from '@/lib/data';
import ProductCard from '@/components/site/product-card';
import { placeholderImages } from '@/lib/images';

const benefits = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Без гормонов и антибиотиков',
    description: 'Наши животные растут на натуральных кормах в естественных условиях.',
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: 'Доставка в день заказа',
    description: 'Получите свежайшее мясо с доставкой на дом в удобное для вас время.',
  },
  {
    icon: <Factory className="h-10 w-10 text-primary" />,
    title: 'Собственное производство',
    description: 'Мы контролируем каждый этап: от забоя до разделки и упаковки.',
  },
  {
    icon: <Beef className="h-10 w-10 text-primary" />,
    title: 'Экспертная разделка',
    description: 'Профессиональные мясники подготовят для вас идеальные куски для любого блюда.',
  },
];

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const heroImage = placeholderImages.find(p => p.id === 'hero-main');

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] min-h-[400px] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Свежее фермерское мясо <br /> премиум-класса
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/90">
            Настоящий вкус от фермы до стола
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="font-bold text-lg">
              <Link href="/catalog">Выбрать мясо</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-bold text-lg">
              <Link href="/contacts">Заказать звонок</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col items-center">
                {benefit.icon}
                <h3 className="mt-4 font-headline text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Популярные товары</h2>
            <p className="mt-2 text-lg text-muted-foreground">Лучшее от наших фермеров</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="font-bold text-lg">
              <Link href="/catalog">
                Смотреть весь каталог <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">О нашем производстве</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/90">
            "Мясной Двор" — это не просто магазин, это семейное дело, в которое мы вкладываем душу. Мы верим, что настоящее мясо — это результат заботы о животных, уважения к традициям и бескомпромиссного контроля качества. Узнайте больше о нашем пути от фермы до вашего стола.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 font-bold text-lg">
            <Link href="/about">Наша история</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
