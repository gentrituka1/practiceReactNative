interface Fruit {
    id: number;
    name: string;
    price: number;
}

const Fruits: Fruit[] = [
    {
        id: 1,
        name: 'Apple',
        price: 5,
    },
    {
        id: 2,
        name: 'Orange',
        price: 3,
    },
    {
        id: 3,
        name: 'Banana',
        price: 2,
    },
    {
        id: 4,
        name: 'Pineapple',
        price: 10,
    }
]

export {Fruit, Fruits};