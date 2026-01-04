import { placeholderImages, type ImagePlaceholder } from './images';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Говядина' | 'Свинина' | 'Баранина' | 'Тушки целиком' | 'Готовые продукты';
  image: ImagePlaceholder;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Говяжья вырезка',
    description: 'Нежнейшая часть говядины, практически без жира. Идеальна для приготовления стейков филе-миньон, карпаччо или бефстроганов.',
    price: 2500,
    category: 'Говядина',
    image: placeholderImages.find(p => p.id === 'beef-tenderloin')!,
  },
  {
    id: '2',
    name: 'Говяжьи ребра',
    description: 'Мраморные ребра для долгого томления или гриля. Мясо становится невероятно нежным и легко отходит от кости.',
    price: 950,
    category: 'Говядина',
    image: placeholderImages.find(p => p.id === 'beef-ribs')!,
  },
  {
    id: '3',
    name: 'Говяжья грудинка (брискет)',
    description: 'Классический отруб для копчения и медленного приготовления. Насыщенный мясной вкус и сочная текстура.',
    price: 1200,
    category: 'Говядина',
    image: placeholderImages.find(p => p.id === 'beef-brisket')!,
  },
  {
    id: '4',
    name: 'Свиная шейка',
    description: 'Сочная и жирная часть, идеальная для шашлыка, запекания целым куском или приготовления стейков.',
    price: 650,
    category: 'Свинина',
    image: placeholderImages.find(p => p.id === 'pork-neck')!,
  },
  {
    id: '5',
    name: 'Свиные ребрышки',
    description: 'Мясистые ребрышки для гриля или запекания в глазури. Хит любого пикника.',
    price: 580,
    category: 'Свинина',
    image: placeholderImages.find(p => p.id === 'pork-ribs')!,
  },
  {
    id: '6',
    name: 'Свиная брюшина',
    description: 'Жирный и ароматный отруб. Прекрасно подходит для засолки, копчения или приготовления рулетов.',
    price: 450,
    category: 'Свинина',
    image: placeholderImages.find(p => p.id === 'pork-belly')!,
  },
  {
    id: '7',
    name: 'Лопатка ягненка',
    description: 'Ароматное мясо на кости для запекания с травами и чесноком. Нежный вкус, который никого не оставит равнодушным.',
    price: 1300,
    category: 'Баранина',
    image: placeholderImages.find(p => p.id === 'lamb-shoulder')!,
  },
  {
    id: '8',
    name: 'Каре ягненка',
    description: 'Деликатесные ребрышки ягненка на кости. Готовятся очень быстро и выглядят празднично.',
    price: 2800,
    category: 'Баранина',
    image: placeholderImages.find(p => p.id === 'lamb-chops')!,
  },
  {
    id: '9',
    name: 'Тушка цыпленка-бройлера',
    description: 'Целый фермерский цыпленок для запекания в духовке. Сочное мясо и хрустящая корочка гарантированы.',
    price: 400,
    category: 'Тушки целиком',
    image: placeholderImages.find(p => p.id === 'whole-chicken')!,
  },
  {
    id: '10',
    name: 'Тушка утки',
    description: 'Идеальный выбор для праздничного стола. Запеките с яблоками или апельсинами для незабываемого ужина.',
    price: 800,
    category: 'Тушки целиком',
    image: placeholderImages.find(p => p.id === 'whole-duck')!,
  },
  {
    id: '11',
    name: 'Тушка ягненка целиком',
    description: 'Эксклюзивное предложение для больших праздников и ресторанов. Молодое, нежное мясо с тонким ароматом. Вес по запросу.',
    price: 10000,
    category: 'Тушки целиком',
    image: placeholderImages.find(p => p.id === 'whole-lamb')!,
  },
  {
    id: '12',
    name: 'Домашняя сырокопченая колбаса',
    description: 'Приготовлена по традиционному рецепту из отборной свинины и говядины с добавлением натуральных специй. Настоящий деликатес.',
    price: 1500,
    category: 'Готовые продукты',
    image: placeholderImages.find(p => p.id === 'smoked-sausage')!,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
