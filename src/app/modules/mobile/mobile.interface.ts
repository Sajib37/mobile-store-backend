
export interface Tvariant{
    type: string;
    value: string;
}
export interface Tinventory{
        quantity: number;
        inStock: boolean
}
export interface Tmobile {
    name: string;
    description: string;
    price: number;
    tags: string[];
    variants: Tvariant[];
    inventory: Tinventory
}