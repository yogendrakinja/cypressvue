export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    Category: string;
    rating: {
        rate: number;
        count: number;
    }
}