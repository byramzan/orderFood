export const categories = [
    {
        id: 1,
        name: 'Пиццы',
        image: require('../assets/images/pizzaIcon.png'),
    },
    {
        id: 2,
        name: 'Бургеры',
        image: require('../assets/images/burgerIcon.png'),
    },
    {
        id: 3,
        name: 'Напитки',
        image: require('../assets/images/colaIcon.png'),
    },
    {
        id: 4,
        name: 'Закуски',
        image: require('../assets/images/snackIcon.png'),
    },
    {
        id: 5,
        name: 'Суши',
        image: require('../assets/images/sushiIcon.png'),
    },
    {
        id: 6,
        name: 'Десерты',
        image: require('../assets/images/cakeIcon.png'),
    },

]


export const featured = {
    id: 1,
    title: 'Категория',
    description: 'тут будет очень вкусный текст',
    restaurants: [
        {
            id: 1,
            name: 'Way-Sushi',
            image: require('../assets/images/unnamed.png'),
            description: 'Лучшие пиццы',
            lng: -85.5324269,
            lat: 38.2145602,
            address: 'бул. Султана Дудаева, 20/2',
            stars: 4,
            reviews: '4.4тыс',
            category: 'Японская кухня',
            dishes: [
                {
                   id: 1,
                   name: 'Калифорния',
                   description: 'Состав: рыба (весь текст можно редактировать)',
                   price: 299,
                   image:  require('../assets/images/california.avif')
                },
                {
                   id: 2,
                   name: 'Суши-сет',
                   description: 'Состав: рыба (весь текст можно редактировать',
                   price: 299,
                   image:  require('../assets/images/sushi.png')
                },
                {
                   id: 3,
                   name: 'Бешеный лосось',
                   description: 'Состав: рыба (весь текст можно редактировать',
                   price: 299,
                   image:  require('../assets/images/losos.jpeg')
                },
            ]
    
        },
        {
            id: 2,
            name: 'Crispy',
            image: require('../assets/images/IMG_3533.jpg'),
            description: 'Описание продукта',
            lng: -85.5324269,
            lat: 38.2145602,
            address: 'пр. Эсамбаева, 14',
            stars: 4,
            reviews: '4.4тыс.',
            category: 'Фаст-Фуд',
            dishes: [
                {
                   id: 1,
                   name: 'Бургер',
                   description: 'Описание пиццы',
                   price: 299,
                   image:  require('../assets/images/Burger.png')
                },
                {
                   id: 2,
                   name: 'Наггетсы',
                   description: 'Описание пиццы',
                   price: 299,
                   image:  require('../assets/images/nuggets.png')
                },
                {
                   id: 3,
                   name: 'Картошка Фри',
                   description: 'Описание пиццы',
                   price: 299,
                   image:  require('../assets/images/fries.png')
                },
            ]
    
        },
        {
            id: 3,
            name: 'Dady pizza',
            image: require('../assets/images/unnamed.jpg'),
            description: 'Описание продукта',
            lng: -85.5324269,
            lat: 38.2145602,
            address: 'Ул. Трошева 31',
            stars: 4,
            reviews: '4.4тыс.',
            category: 'Фаст-Фуд',
            dishes: [
                {
                   id: 1,
                   name: 'Пицца',
                   description: 'Описание пиццы',
                   price: 299,
                   image:  require('../assets/images/pizzaDish.png')
                },
                {
                   id: 2,
                   name: 'Мясная Пицца',
                   description: 'В ней много мяса',
                   price: 299,
                   image:  require('../assets/images/myasnaya.webp')
                },
                {
                   id: 3,
                   name: 'Сырная пицца',
                   description: 'В ней много сыра',
                   price: 299,
                   image:  require('../assets/images/sirnaya.webp')
                },
            ]
    
        }
    ]
}