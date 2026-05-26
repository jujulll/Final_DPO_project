export const products = [
  // Фрукты
  { id: 1, category: 'fruits', image: '/images/12.png', title: 'Виноград', description: 'Солнечные ягоды, без косточек', price: 190, fullDesc: 'Солнечные ягоды без косточек, выращенные на органических виноградниках. Сладкий, сочный и ароматный — идеальный перекус или украшение стола.' },
  { id: 2, category: 'fruits', image: '/images/13.png', title: 'Лимоны', description: 'Ароматные, сочная кислинка', price: 130, fullDesc: 'Ароматные лимоны с яркой сочной кислинкой. Идеальны для лимонада, выпечки и маринадов.' },
  { id: 3, category: 'fruits', image: '/images/16.png', title: 'Вишня', description: 'Спелая, сладкая ягода', price: 200, fullDesc: 'Спелая вишня с насыщенным сладким вкусом. Собрана вручную на семейных фермах.' },
  { id: 4, category: 'fruits', image: '/images/15.png', title: 'Персики', description: 'Бархатные, сладкие', price: 150, fullDesc: 'Бархатные персики с нежной сладкой мякотью. Тают во рту и наполняют летним ароматом.' },
  { id: 5, category: 'fruits', image: '/images/16.png', title: 'Мандарины', description: 'Сочные, легко чистятся', price: 100, fullDesc: 'Сочные мандарины с тонкой кожурой. Легко чистятся и радуют сладким вкусом.' },
  { id: 6, category: 'fruits', image: '/images/17.png', title: 'Яблоки', description: 'Хрустящие, с лёгкой кислинкой', price: 110, fullDesc: 'Хрустящие яблоки с лёгкой кислинкой. Собраны в экологичных садах без химии.' },
  { id: 7, category: 'fruits', image: '/images/11.png', title: 'Груши', description: 'Медовая и тающая во рту', price: 120, fullDesc: 'Медовые груши, тающие во рту. Нежная текстура и насыщенный аромат.' },

  // Овощи
  { id: 8, category: 'vegetables', image: '/images/7.png', title: 'Томаты', description: 'Сочные, мясистые', price: 140, fullDesc: 'Сочные мясистые томаты с насыщенным вкусом. Идеальны для салатов и соусов.' },
  { id: 9, category: 'vegetables', image: '/images/1.png', title: 'Кукуруза', description: 'Сладкая и сочная', price: 120, fullDesc: 'Сладкая сочная кукуруза. Идеальна для варки и гриля.' },
  { id: 10, category: 'vegetables', image: '/images/3.png', title: 'Картофель', description: 'Молодой и свежий', price: 90, fullDesc: 'Молодой свежий картофель. Отлично подходит для жарки и пюре.' },
  { id: 11, category: 'vegetables', image: '/images/2.png', title: 'Морковь', description: 'Свежая и сладкая', price: 100, fullDesc: 'Свежая сладкая морковь. Богата витамином А и идеальна для соков.' },
  { id: 12, category: 'vegetables', image: '/images/4.png', title: 'Спаржа', description: 'Нежная, полезная, фермерская', price: 180, fullDesc: 'Нежная полезная спаржа от местных фермеров. Богата витаминами и минералами.' },
  { id: 13, category: 'vegetables', image: '/images/5.png', title: 'Тыква', description: 'Яркая, большая, вкусная', price: 200, fullDesc: 'Яркая большая тыква. Отлично подходит для запекания и супов-пюре.' },
  { id: 14, category: 'vegetables', image: '/images/6.png', title: 'Огурцы', description: 'Домашние, тепличные', price: 100, fullDesc: 'Домашние тепличные огурцы. Хрустящие и ароматные, идеальны для салатов.' },
  { id: 15, category: 'vegetables', image: '/images/8.png', title: 'Айсберг', description: 'Хрустящий салат', price: 120, fullDesc: 'Хрустящий салат айсберг. Освежает и добавляет объём любому блюду.' },
  { id: 16, category: 'vegetables', image: '/images/9.png', title: 'Имбирь', description: 'Пряность для ваших блюд', price: 100, fullDesc: 'Свежий имбирь — пряность для ваших блюд. Добавляет остроту и аромат.' },
  { id: 17, category: 'vegetables', image: '/images/10.png', title: 'Чеснок', description: 'Свежий, легко чистится', price: 70, fullDesc: 'Свежий чеснок, легко чистится. Незаменимая приправа для множества блюд.' },
  
  // Молочная продукция
  { id: 18, category: 'dairy', image: '/images/25.png', title: 'Молоко (green)', description: 'Свежее и натуральное', price: 150, fullDesc: 'Свежее и натуральное молоко от коров на свободном выгуле. Без консервантов и добавок.' },
  { id: 19, category: 'dairy', image: '/images/26.png', title: 'Молоко', description: 'Длительного хранения', price: 200, fullDesc: 'Молоко длительного хранения. Ультрапастеризованное, сохраняет свежесть дольше.' },
  { id: 20, category: 'dairy', image: '/images/27.png', title: 'Куриные яйца', description: 'Яркий желток', price: 300, fullDesc: 'Куриные яйца с ярким желтком. От кур на свободном выгуле, богаты белком.' },
  { id: 21, category: 'dairy', image: '/images/28.png', title: 'Фермерский сыр', description: 'Натуральный и очень вкусный', price: 900, fullDesc: 'Натуральный фермерский сыр. Выдержанный, с насыщенным вкусом и ароматом.' },
  { id: 22, category: 'dairy', image: '/images/29.png', title: 'Сливочное масло', description: 'Настоящие 82,2%', price: 650, fullDesc: 'Сливочное масло настоящее 82,2%. Из цельного молока, без растительных жиров.' },

    // Мясо
  { id: 23, category: 'meat', image: '/images/30.png', title: 'Говядина', description: 'Вскармливание без добавок', price: 1200, fullDesc: 'Говядина от быков на натуральном откорме. Без гормонов и антибиотиков.' },
  { id: 24, category: 'meat', image: '/images/31.png', title: 'Индейка', description: 'Сочное и вкусное', price: 720, fullDesc: 'Сочное и вкусное мясо индейки. Диетическое, богато белком и низкокалорийное.' },

  // Крупы
  { id: 25, category: 'grains', image: '/images/18.png', title: 'Гречка', description: 'Органические ядрица', price: 60, fullDesc: 'Органическая гречневая ядрица. Источник белка и сложных углеводов.' },
  { id: 26, category: 'grains', image: '/images/19.png', title: 'Овёс', description: 'Цельные зёрна, для каш', price: 50, fullDesc: 'Цельные овсяные зёрна. Идеальны для полезных каш и гранолы.' },
  { id: 27, category: 'grains', image: '/images/20.png', title: 'Киноа', description: 'Суперфуд, источник белка', price: 100, fullDesc: 'Киноа — суперфуд и отличный источник растительного белка.' },
];

// Функции
export const getByCategory = (category) => products.filter(p => p.category === category);
export const getById = (id) => products.find(p => p.id === Number(id));

// Получить товары по массиву id (для главной — новинки, акции)
export const getByIds = (ids) => products.filter(p => ids.includes(p.id));