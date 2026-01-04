import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, CreditCard, Gift, Phone, ShoppingBasket, Truck } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: <ShoppingBasket className="h-10 w-10 text-primary" />,
    title: "1. Соберите корзину",
    description: "Выберите понравившиеся товары в нашем каталоге и добавьте их в корзину. Вы можете указать нужный вес для каждой позиции.",
  },
  {
    icon: <Phone className="h-10 w-10 text-primary" />,
    title: "2. Оформите заказ",
    description: "Перейдите в корзину, проверьте состав заказа и нажмите 'Оформить заказ'. Вы также можете сделать заказ по телефону.",
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-primary" />,
    title: "3. Подтверждение",
    description: "Наш менеджер свяжется с вами в течение 15 минут для подтверждения заказа и уточнения деталей доставки.",
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "4. Ожидайте доставку",
    description: "Мы доставим ваш заказ в специальных термобоксах, чтобы мясо осталось свежим и охлажденным.",
  },
];

export default function DeliveryPage() {
  return (
    <div className="bg-background">
      <header className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Доставка и Оплата</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Просто, быстро и удобно. Закажите свежее мясо, не выходя из дома.
          </p>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Как сделать заказ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {steps.map((step) => (
              <div key={step.title} className="flex flex-col items-center text-center">
                {step.icon}
                <h3 className="mt-4 font-headline text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Условия доставки</h2>
              <p className="mt-4 text-lg text-muted-foreground">Мы доставляем по Москве и ближайшему Подмосковью.</p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <Truck className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Зона доставки</h4>
                    <p className="text-muted-foreground">В пределах МКАД и до 10 км за МКАД.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Gift className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Бесплатная доставка</h4>
                    <p className="text-muted-foreground">При заказе на сумму от 3000 ₽.</p>
                  </div>
                </li>
                 <li className="flex items-start gap-3">
                  <ShoppingBasket className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Минимальная сумма заказа</h4>
                    <p className="text-muted-foreground">1500 ₽. Стоимость доставки для заказов до 3000 ₽ составляет 350 ₽.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Способы оплаты</h2>
               <p className="mt-4 text-lg text-muted-foreground">Выберите удобный для вас способ.</p>
               <div className="mt-6 space-y-4">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <CreditCard className="h-8 w-8 text-primary" />
                    <CardTitle>Картой онлайн</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Безопасная оплата на сайте через защищенный платежный шлюз.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <CreditCard className="h-8 w-8 text-primary" />
                    <CardTitle>Картой курьеру</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Оплатите заказ банковской картой при получении.</p>
                  </CardContent>
                </Card>
                 <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <CreditCard className="h-8 w-8 text-primary" />
                    <CardTitle>Наличными курьеру</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Вы можете оплатить заказ наличными при получении.</p>
                  </CardContent>
                </Card>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">Готовы сделать заказ?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Перейдите в наш каталог и выберите свежайшее мясо для ваших кулинарных шедевров.
        </p>
        <Button asChild size="lg" className="mt-8 font-bold text-lg">
          <Link href="/catalog">Перейти в каталог</Link>
        </Button>
      </section>
    </div>
  );
}
