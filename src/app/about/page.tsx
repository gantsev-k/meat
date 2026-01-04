import Image from 'next/image';
import { placeholderImages } from '@/lib/images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  const farmImage = placeholderImages.find(p => p.id === 'about-farm');
  const butcherImage = placeholderImages.find(p => p.id === 'about-butcher');
  const agingImage = placeholderImages.find(p => p.id === 'about-aging');

  return (
    <div className="bg-background">
      <header className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">О Нашем Производстве</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Узнайте, почему мясо от "Мясного Двора" — это знак качества, традиций и настоящего вкуса.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 md:py-24 space-y-24">
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-headline text-3xl font-semibold">Наша история: с любовью к земле и своему делу</h2>
            <p>
              "Мясной Двор" родился из мечты — возродить традиции фермерства и предложить людям продукт, в качестве которого мы уверены на все сто. Наша ферма — это не просто бизнес, это наш дом. Здесь, на просторных пастбищах, вдали от городской суеты, растут наши животные.
            </p>
            <p>
              Мы начинали как небольшое семейное хозяйство, поставляя мясо друзьям и соседям. Слава о нашем продукте быстро разнеслась, и мы поняли, что хотим делиться настоящим вкусом с большим количеством людей. Так появился наш магазин.
            </p>
          </div>
          {farmImage && (
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={farmImage.imageUrl}
                alt={farmImage.description}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                data-ai-hint={farmImage.imageHint}
              />
            </div>
          )}
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          {butcherImage && (
            <div className="rounded-lg overflow-hidden shadow-lg md:order-2">
              <Image
                src={butcherImage.imageUrl}
                alt={butcherImage.description}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                data-ai-hint={butcherImage.imageHint}
              />
            </div>
          )}
          <div className="prose prose-lg max-w-none md:order-1">
            <h2 className="font-headline text-3xl font-semibold">Контроль качества на каждом этапе</h2>
            <p>
              Мы убеждены, что вкус мяса начинается с заботы о животных. Они питаются только натуральными кормами, без гормонов роста и антибиотиков. Свободный выгул обеспечивает им здоровую и активную жизнь.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Натуральный откорм:</strong> Только зерно, трава и чистая вода.</li>
              <li><strong>Экспертный забой:</strong> Гуманный и профессиональный подход для минимизации стресса.</li>
              <li><strong>Чистота на производстве:</strong> Мы соблюдаем строжайшие санитарные нормы на всех этапах разделки и упаковки.</li>
            </ul>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-headline text-3xl font-semibold">Искусство правильного созревания</h2>
            <p>
              Чтобы говядина стала по-настоящему нежной и ароматной, она должна "созреть". Мы используем как влажное, так и сухое созревание, позволяя ферментам сделать свою работу. Этот процесс требует времени, терпения и глубоких знаний, но результат — стейк, который тает во рту — того стоит.
            </p>
          </div>
          {agingImage && (
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={agingImage.imageUrl}
                alt={agingImage.description}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                data-ai-hint={agingImage.imageHint}
              />
            </div>
          )}
        </section>
        
        <section className="text-center bg-card rounded-lg p-8 md:p-16">
          <h2 className="font-headline text-3xl font-bold">Готовы попробовать настоящее мясо?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Мы гордимся каждым куском мяса, который продаем. Приглашаем вас оценить разницу и открыть для себя вкус, который дарит природа.
          </p>
          <Button asChild size="lg" className="mt-8 font-bold text-lg">
            <Link href="/catalog">Перейти в каталог</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
