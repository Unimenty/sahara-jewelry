
export interface ProductVariant {
    volume: string;
    price: number;
    bulkPackSize: number;
    image?: string;
}

export interface Product {
    id: number;
    name: string;
    category: string;
    description: string;
    variants: ProductVariant[];
    inStock: boolean;
    featured: boolean;
    newArrival?: boolean;
    rating: number;
    reviews: number;
    image: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: 'Femme Chronos Watch',
        category: 'Watches',
        description: 'A sophisticated timepiece blending classic design with modern precision.',
        variants: [
            { volume: 'Standard', price: 199.99, bulkPackSize: 1, image: '/images/641257660_18096118768993200_8221634173007991919.jpg' }
        ],
        inStock: true,
        featured: true,
        newArrival: false,
        rating: 4.9,
        reviews: 124,
        image: '/images/641257660_18096118768993200_8221634173007991919.jpg'
    },
    {
        id: 2,
        name: 'Vintage Cuff Ring',
        category: 'Rings',
        description: 'A timeless vintage-inspired gold ring that wraps elegantly around your finger.',
        variants: [
            { volume: 'Standard', price: 79.99, bulkPackSize: 1, image: '/images/650248546_18097704751993200_599285580110736557.jpg' }
        ],
        inStock: true,
        featured: true,
        newArrival: false,
        rating: 4.9,
        reviews: 89,
        image: '/images/650248546_18097704751993200_599285580110736557.jpg'
    },
    {
        id: 3,
        name: 'Pearl Stud Earrings',
        category: 'Earrings',
        description: 'Delicate pearl studs that add a touch of grace to any ensemble.',
        variants: [
            { volume: 'Standard', price: 49.99, bulkPackSize: 1, image: '/images/650248546_18097704751993200_599285580110736557.jpg' }
        ],
        inStock: true,
        featured: true,
        newArrival: true,
        rating: 4.8,
        reviews: 203,
        image: '/images/650248546_18097704751993200_599285580110736557.jpg'
    },
    {
        id: 4,
        name: 'Birthday Charm Bracelet',
        category: 'Bracelets',
        description: 'A charming bracelet to commemorate special moments and milestones.',
        variants: [
            { volume: 'Standard', price: 120.00, bulkPackSize: 1, image: '/images/632080553_18095572057993200_5548534565715174669.jpg' }
        ],
        inStock: true,
        featured: true,
        newArrival: true,
        rating: 4.7,
        reviews: 156,
        image: '/images/632080553_18095572057993200_5548534565715174669.jpg'
    },
    {
        id: 5,
        name: 'Stack Diamond Ring',
        category: 'Rings',
        description: 'An exquisite diamond ring designed for layering or making a solo statement.',
        variants: [
            { volume: 'Standard', price: 680.00, bulkPackSize: 1, image: '/images/636260784_18095391595993200_1588585220738309222.jpg' }
        ],
        inStock: true,
        featured: true,
        newArrival: true,
        rating: 4.9,
        reviews: 312,
        image: '/images/636260784_18095391595993200_1588585220738309222.jpg'
    },
    {
        id: 6,
        name: 'Diamond Drop Earrings',
        category: 'Earrings',
        description: 'Brilliant diamonds suspended in a graceful drop design.',
        variants: [
            { volume: 'Standard', price: 410.00, bulkPackSize: 1, image: '/images/634227826_18095294266993200_6946412695698815738.jpg' }
        ],
        inStock: true,
        featured: true,
        newArrival: true,
        rating: 4.8,
        reviews: 178,
        image: '/images/634227826_18095294266993200_6946412695698815738.jpg'
    },
    {
        id: 7,
        name: 'Gold Pearl Ring',
        category: 'Rings',
        description: 'A stunning gold ring featuring a lustrous pearl centerpiece.',
        variants: [
            { volume: 'Standard', price: 1850, bulkPackSize: 1, image: '/images/641467959_18096917182993200_5153935394528728463.jpg' }
        ],
        inStock: true,
        featured: false,
        newArrival: true,
        rating: 4.9,
        reviews: 94,
        image: '/images/641467959_18096917182993200_5153935394528728463.jpg'
    }
];
