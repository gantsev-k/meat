import Image from "next/image";
import { placeholderImages } from "@/lib/images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Phone, Share2 } from "lucide-react";

export default function ContactPage() {
    const mapImage = placeholderImages.find(p => p.id === 'contacts-map');

    return (
        <div className="bg-background">
            <header className="bg-card py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">Контакты</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Мы всегда на связи, чтобы ответить на ваши вопросы и принять заказ.
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1 space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline flex items-center gap-3 text-2xl">
                                    <MapPin className="h-6 w-6 text-primary" />
                                    <span>Наш адрес</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg">г. Москва, ул. Фермерская, д. 1</p>
                                <p className="text-muted-foreground">Ждем вас в нашем магазине!</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline flex items-center gap-3 text-2xl">
                                    <Phone className="h-6 w-6 text-primary" />
                                    <span>Телефон и WhatsApp</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <a href="tel:+79991234567" className="text-lg block hover:text-primary transition-colors">+7 (999) 123-45-67</a>
                                <p className="text-muted-foreground">Для заказов и консультаций.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline flex items-center gap-3 text-2xl">
                                    <Clock className="h-6 w-6 text-primary" />
                                    <span>График работы</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg">Ежедневно: с 9:00 до 21:00</p>
                                <p className="text-muted-foreground">Без перерывов и выходных.</p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle className="font-headline flex items-center gap-3 text-2xl">
                                    <Mail className="h-6 w-6 text-primary" />
                                    <span>Email</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <a href="mailto:zakaz@meat-dvor.ru" className="text-lg block hover:text-primary transition-colors">zakaz@meat-dvor.ru</a>
                                <p className="text-muted-foreground">Для предложений и сотрудничества.</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-3xl">Форма обратной связи</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Ваше имя</Label>
                                        <Input id="name" placeholder="Иван" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Телефон</Label>
                                        <Input id="phone" placeholder="+7 (999) 000-00-00" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Сообщение</Label>
                                    <Textarea id="message" placeholder="Ваш вопрос или предложение..." rows={6} />
                                </div>
                                <Button size="lg" className="w-full font-bold text-lg">Отправить сообщение</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
            
            {mapImage && (
                <div className="container mx-auto px-4 pb-16 md:pb-24">
                     <Image
                        src={mapImage.imageUrl}
                        alt={mapImage.description}
                        width={1200}
                        height={400}
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                        data-ai-hint={mapImage.imageHint}
                    />
                </div>
            )}
        </div>
    );
}
