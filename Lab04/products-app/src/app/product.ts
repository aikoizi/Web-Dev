export interface Product {
    image: string;       // ссылка на изображение (основное)
    name: string;        // название товара
    description: string; // описание товара
    rating: number;      // рейтинг (например, от 1 до 5)
    link: string;        // ссылка на страницу товара на kaspi.kz
    gallery?: string[];  // (опционально) массив ссылок для галереи изображений
  }
  