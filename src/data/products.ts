
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
            { volume: 'Standard', price: 199.99, bulkPackSize: 1, image: '/assets/Femme Chronos Watch.avif' }
        ],
        inStock: true,
        featured: true,
        rating: 4.9,
        reviews: 124,
        image: '/assets/Femme Chronos Watch.avif'
    },
    {
        id: 2,
        name: 'Vintage Cuff Ring',
        category: 'Rings',
        description: 'A timeless vintage-inspired gold ring that wraps elegantly around your finger.',
        variants: [
            { volume: 'Standard', price: 79.99, bulkPackSize: 1, image: '/assets/Vintage Cuff Ring.avif' }
        ],
        inStock: true,
        featured: true,
        rating: 4.9,
        reviews: 89,
        image: '/assets/Vintage Cuff Ring.avif'
    },
    {
        id: 3,
        name: 'Pearl Stud Earrings',
        category: 'Earrings',
        description: 'Delicate pearl studs that add a touch of grace to any ensemble.',
        variants: [
            { volume: 'Standard', price: 49.99, bulkPackSize: 1, image: '/assets/Pearl Stud Earrings.avif' }
        ],
        inStock: true,
        featured: true,
        rating: 4.8,
        reviews: 203,
        image: '/assets/Pearl Stud Earrings.avif'
    },
    {
        id: 4,
        name: 'Birthday Charm Bracelet',
        category: 'Bracelets',
        description: 'A charming bracelet to commemorate special moments and milestones.',
        variants: [
            { volume: 'Standard', price: 120.00, bulkPackSize: 1, image: '/assets/Birthday Charm Bracelet.avif' }
        ],
        inStock: true,
        featured: true,
        rating: 4.7,
        reviews: 156,
        image: '/assets/Birthday Charm Bracelet.avif'
    },
    {
        id: 5,
        name: 'Stack Diamond Ring',
        category: 'Rings',
        description: 'An exquisite diamond ring designed for layering or making a solo statement.',
        variants: [
            { volume: 'Standard', price: 680.00, bulkPackSize: 1, image: '/assets/Stack Diamond Ring.avif' }
        ],
        inStock: true,
        featured: true,
        rating: 4.9,
        reviews: 312,
        image: '/assets/Stack Diamond Ring.avif'
    },
    {
        id: 6,
        name: 'Diamond Drop Earrings',
        category: 'Earrings',
        description: 'Brilliant diamonds suspended in a graceful drop design.',
        variants: [
            { volume: 'Standard', price: 410.00, bulkPackSize: 1, image: '/assets/Diamond Drop Earrings.avif' }
        ],
        inStock: true,
        featured: true,
        rating: 4.8,
        reviews: 178,
        image: '/assets/Diamond Drop Earrings.avif'
    },
    {
        id: 7,
        name: 'Gold Pearl Ring',
        category: 'Rings',
        description: 'A stunning gold ring featuring a lustrous pearl centerpiece.',
        variants: [
            { volume: 'Standard', price: 1850, bulkPackSize: 1, image: '/assets/Gold Pearl Ring.avif' }
        ],
        inStock: true,
        featured: false,
        rating: 4.9,
        reviews: 94,
        image: '/assets/lp-mb.avif' // Fallback for now if Gold Pearl Ring.avif is missing
    }
];

