import Link from 'next/link';
import { Beef, Facebook, Instagram, Twitter } from 'lucide-react';

const navLinks = [
  { href: '/catalog', label: 'Каталог' },
  { href: '/about', label: 'О нас' },
  { href: '/delivery', label: 'Доставка и оплата' },
  { href: '/contacts', label: 'Контакты' },
];

export default function SiteFooter() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Beef className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold">Мясной Двор</span>
            </Link>
            <p className="text-muted-foreground">Настоящий вкус от фермы до стола.</p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-headline font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>г. Москва, ул. Фермерская, д. 1</li>
                <li><a href="tel:+79991234567" className="hover:text-primary transition-colors">+7 (999) 123-45-67</a></li>
                <li><a href="mailto:zakaz@meat-dvor.ru" className="hover:text-primary transition-colors">zakaz@meat-dvor.ru</a></li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-headline font-semibold mb-4">Мы в соцсетях</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Мясной Двор. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
