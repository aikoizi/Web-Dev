import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Импортируем CommonModule
import { Product } from '../product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule], // Добавьте CommonModule сюда
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h58/84858442350622.jpg?format=gallery-medium', // замените на реальный URL товара
      name: 'Лежак LezhankaSer 60x60 см',
      description: 'Внешний диаметр лежанки 60см, внутренний диаметр (размер спального места) - 30 см; высота бортиков - 15 см',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/lezhak-lezhankaser-60x60-sm-108181720/?c=750000000', // ссылка на страницу товара
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha7/h77/84858442416158.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hcd/ha2/84858442481694.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h51/hf4/84858442547230.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0c/h45/86403378151454.jpg?format=gallery-medium',
      name: 'Двойная миска',
      description: 'Керамическая миска на металлической подставке - это замечательный подарок вашему питомцу',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/dvoinaja-miska-30291745-940218194-300-ml-belyi-119325538/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9c/hd1/86403378216990.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he0/h6d/86403378348062.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hab/h4c/86403378282526.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h17/84664359714846.jpg?format=gallery-medium',
      name: 'Свитер',
      description: 'Свитер 725122033 красный XL',
      rating: 3.7,
      link: 'https://kaspi.kz/shop/p/sviter-725122033-krasnyi-xl-108241643/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h03/hf3/84664359747614.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h1c/hc1/84664359780382.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5a/h3e/84252743630878.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h04/ha3/85952670695454.jpg?format=gallery-medium',
      name: 'Очки 900496120 черный XS',
      description: 'Стильные очки для домашних животных. Подходит для кошек и собак мелких пород',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/ochki-900496120-chernyi-xs-119122056/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h24/85952670760990.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hed/h41/85952670826526.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h26/he5/85952670892062.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7b/hd3/79253654405150.jpg?format=gallery-medium',
      name: 'CAT Набор зубная паста',
      description: 'В наборе зубная паста с мятой и 2 щетки, борьба с болезнями зубов и борьба с запахом изо рта',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/cat-nabor-zubnaja-pasta-schetka-dvustoronnjaja-napal-chnik-609479-3-predmeta-109523171/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h78/h64/84458536370206.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbb/he2/84458536468510.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/hcd/84458536402974.png?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h54/ha6/84535611981854.jpg?format=gallery-medium',
      name: 'Уход Muzzle Спрей для ухода за шерстью',
      description: 'Спрей для ухода за шерстью для собак и кошек, с любым типом шерсти, 250 мл.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/muzzle-sprei-dlja-uhoda-za-sherst-ju-dlja-sobak-i-koshek-250-ml-114732325/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h12/h71/84535612047390.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha4/h20/84535612178462.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h69/hfa/84535612309534.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf7/p6f/11564522.jpg?format=gallery-medium',
      name: 'Игрушка OZBERRY мячик PY-A-GDB-GN',
      description: 'Практичные и интерактивные игрушки для собак – универсальный мяч пищалка',
      rating: 3.6,
      link: 'https://kaspi.kz/shop/p/ozberry-mjachik-py-a-gdb-gn-zelenyi-14-sm-130956297/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/p2f/p70/11564524.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p13/p70/11564523.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p83/p70/11564527.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9e/h6a/86386064523294.jpg?format=gallery-medium',
      name: 'Вольер-тент Leo Octagon коричневый',
      description: 'Вольер секционный для кошек, небольших собак, кроликов, в сложенном состоянии плоский',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/vol-er-tent-vol-er-leo-octagon-korichnevyi-117866498/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h42/hfd/86386064588830.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h19/h27/86386064654366.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hce/hc8/86386064850974.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h70/h4b/79863970299934.jpg?format=gallery-medium',
      name: 'Лежак 843596 55 см x 45 см',
      description: 'Съемный чехол на молнии - можно стирать в стиральной машине',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/lezhak-843596-55-sm-x-45-sm-109785330/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1e/hac/79863970824222.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h1e/hac/79863970824222.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd6/hbe/79863972397086.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h57/h3a/68527030829086.jpg?format=gallery-medium',
      name: 'Автопоилка',
      description: 'Набор автопоилка 3.8 л + автокормушка 2.1 кг 998619 белый',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/nabor-avtopoilka-3-8-l-avtokormushka-2-1-kg-998619-belyi-108666663/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h8c/h2d/68438093299742.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8c/hb3/68437526347806.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb4/hac/68438093037598.jpg?format=gallery-medium'
      ]
    }
  ];

  shareProduct(link: string) {
    const message = encodeURIComponent(`Check out this product: ${link}`);
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }
}
