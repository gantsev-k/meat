'use client';

import { products, Product } from '@/lib/data';
import ProductCard from '@/components/site/product-card';
import { useMemo, useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const categories = ['Все', ...Array.from(new Set(products.map(p => p.category)))];

export default function CatalogPage() {
  const [activeTab, setActiveTab] = useState('Все');

  const filteredProducts = useMemo(() => {
    if (activeTab === 'Все') return products;
    return products.filter(p => p.category === activeTab);
  }, [activeTab]);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Каталог Продукции</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Выберите лучшее мясо от наших фермеров. Свежесть и качество в каждом куске.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-4xl grid-cols-2 sm:grid-cols-3 md:grid-cols-6 h-auto">
              {categories.map(category => (
                <TabsTrigger key={category} value={category} className="py-2 text-base">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
        </div>

        <TabsContent value={activeTab}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
        {/* Create dummy TabsContent for other tabs to prevent layout shift */}
        {categories.filter(c => c !== activeTab).map(category => (
            <TabsContent key={category} value={category}></TabsContent>
        ))}

      </Tabs>
    </div>
  );
}
