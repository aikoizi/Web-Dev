import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { Category } from './models/category';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Category[] = [
    {
      id: 1,
      name: 'Лежаки и миски',
      products: [
        {
          id: 11,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h58/84858442350622.jpg?format=gallery-medium',
          name: 'Лежак LezhankaSer 60x60 см',
          description: 'Внешний диаметр лежанки 60см, внутренний 30 см; высота бортиков 15 см',
          rating: 4.5,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/lezhak-lezhankaser-60x60-sm-108181720/',
        },
        {
          id: 12,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h70/h4b/79863970299934.jpg?format=gallery-medium',
          name: 'Лежак 843596 55x45 см',
          description: 'Съемный чехол на молнии - можно стирать в стиральной машине',
          rating: 5.0,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/lezhak-843596-55-sm-x-45-sm-109785330/',
        },
        {
          id: 13,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h0c/h45/86403378151454.jpg?format=gallery-medium',
          name: 'Керамическая миска',
          description: 'Керамическая миска на металлической подставке',
          rating: 5.0,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/dvoinaja-miska-30291745-940218194-300-ml-belyi-119325538/',
        },
        {
          id: 14,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hb6/hcf/85024438255646.jpg?format=gallery-medium',
          name: 'Лежак 662158 35х35 см',
          description: 'Уютная и теплая лежанка домик/гнездо подойдет для кошек и собак мелких пород.',
          rating: 4.8,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/lezhak-662158-35h35-sm-108820375/?c=750000000',
        },
        {
          id: 15,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h57/h3a/68527030829086.jpg?format=gallery-medium',
          name: 'Автопоилка',
          description: 'Набор автопоилка + автокормушка',
          rating: 4.9,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/nabor-avtopoilka-3-8-l-avtokormushka-2-1-kg-998619-belyi-108666663/',
        },
      ],
    },
    {
      id: 2,
      name: 'Одежда и аксессуары',
      products: [
        {
          id: 21,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h17/84664359714846.jpg?format=gallery-medium',
          name: 'Свитер',
          description: 'Свитер красный XL',
          rating: 3.7,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/sviter-725122033-krasnyi-xl-108241643/',
        },
        {
          id: 22,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h04/ha3/85952670695454.jpg?format=gallery-medium',
          name: 'Очки для животных',
          description: 'Очки для домашних питомцев',
          rating: 4.8,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/ochki-900496120-chernyi-xs-119122056/',
        },
        {
          id: 23,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p26/p6c/17840289.jpg?format=gallery-medium',
          name: 'Cat&Dog футболка',
          description: 'Футболка для кошечек, идеально подходит на сфинксов, Корниш Рекс и других пород',
          rating: 4.0,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/cat-dog-futbolka-futf01-fioletovyi-s-132692841/?c=750000000',
        },
        {
          id: 24,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h92/h08/64855435051038.jpg?format=gallery-medium',
          name: 'DogLemi комбинезон',
          description: 'Cветоотражающий комбинезон высокого качества для средних и крупных собак',
          rating: 4.2,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/doglemi-kombinezon-rs001-1-chernyi-seryi-5xl-106820548/?c=750000000',
        },
        {
          id: 25,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h95/h0b/85582962425886.jpg?format=gallery-medium',
          name: 'Головной убор',
          description: 'Милая шапочка в виде лягушонка 17609329_813733024 зеленый M',
          rating: 4.9,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/golovnoi-ubor-17609329-813733024-zelenyi-m-117924346/?c=750000000',
        },
      ],
    },
    {
      id: 3,
      name: 'Уход и гигиена',
      products: [
        {
          id: 31,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/he3/h07/84198206996510.jpg?format=gallery-medium',
          name: 'Уход АВЗ Бриллиантовые глаза',
          description: 'Таурин и янтарная кислота нормализуют окислительно-восстановительные процессы 10 мл',
          rating: 4.5,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/cat-nabor-zubnaja-pasta-609479-3-predmeta-109523171/',
        },
        {
          id: 32,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h54/ha6/84535611981854.jpg?format=gallery-medium',
          name: 'Уход Muzzle спрей',
          description: 'Спрей для ухода за шерстью, 250 мл',
          rating: 4.9,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/muzzle-sprei-dlja-uhoda-za-sherst-114732325/',
        },
        {
          id: 33,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p9b/pf9/22387189.png?format=gallery-medium',
          name: 'Уход VEDA',
          description: 'Шампунь витаминный для щенков и котят 220 мл',
          rating: 5.0,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/veda-shampun-vitaminnyi-dlja-schenkov-i-kotjat-220-ml-101068389/?c=750000000',
        },
        {
          id: 34,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hd8/h29/64138382573598.jpg?format=gallery-medium',
          name: 'Уход Muzzle',
          description: 'Защитный воск для лап увлажняющий и питательный 100 мл, заживляет и защищает летом',
          rating: 4.3,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/muzzle-zaschitnyi-vosk-dlja-lap-uvlazhnjajuschii-i-pitatel-nyi-100-ml-102439947/?c=750000000',
        },
        {
          id: 35,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pc7/pf0/25148685.png?format=gallery-medium',
          name: 'Уход Wellroom',
          description: 'Спрей-кондиционер для шерсти для кошек и собак 200 мл',
          rating: 4.7,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/wellroom-wrp-sc200-sprei-konditsioner-dlja-shersti-dlja-koshek-i-sobak-200-ml-118550784/?c=750000000',
        },
      ],
    },
    {
      id: 4,
      name: 'Вольеры и игрушки',
      products: [
        {
          id: 41,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h9e/h6a/86386064523294.jpg?format=gallery-medium',
          name: 'Вольер-тент Leo Octagon коричневый',
          description: 'Вольер секционный для кошек, небольших собак, кроликов, в сложенном состоянии плоский',
          rating: 3.6,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/vol-er-tent-vol-er-leo-octagon-korichnevyi-117866498/?c=750000000',
        },
        {
          id: 42,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pf7/p6f/11564522.jpg?format=gallery-medium',
          name: 'Игрушка OZBERRY мячик PY-A-GDB-GN',
          description: 'Практичные и интерактивные игрушки для собак – универсальный мяч пищалка',
          rating: 4.1,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/ozberry-mjachik-py-a-gdb-gn-zelenyi-14-sm-130956297/?c=750000000',
        },
        {
          id: 43,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h45/he9/83753775202334.jpg?format=gallery-medium',
          name: 'Игрушка для зубов',
          description: 'Для самостоятельных игр пластик, растительное волокно',
          rating: 4.3,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/igrushka-dlja-zubov-dlja-samostojatel-nyh-igr-plastik-rastitel-noe-volokno-113296956/?c=750000000',
        },
        {
          id: 44,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/h81/85952453050398.jpg?format=gallery-medium',
          name: 'Игрушка птица',
          description: 'Птица для самостоятельных игр полиэстер, хлопок',
          rating: 4.0,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/ptitsa-dlja-samostojatel-nyh-igr-poliester-hlopok-118709393/?c=750000000',
        },
        {
          id: 45,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h99/h9c/64479310938142.jpg?format=gallery-medium',
          name: 'Пижон вольер',
          description: 'Ширина и Длина - 105 см; Высота - 35 см; 7472676 черный',
          rating: 4.5,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/pizhon-vol-er-7472676-chernyi-105607783/?c=750000000',
        },
      ],
    },
  ];

  selectedCategoryId: number | null = null;

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
  }

  get selectedProducts() {
    if (this.selectedCategoryId === null) return [];
    const category = this.categories.find(c => c.id === this.selectedCategoryId);
    return category ? category.products : [];
  }

  get selectedCategoryName(): string {
    const category = this.categories.find(c => c.id === this.selectedCategoryId);
    return category ? category.name : '';
  }
}

