interface IUser {
    id: number;
    email: string;
    username: string;
    last_name: string;
    first_name: string;
    last_login: string;
    phone_number: string;
    profile: null | string;
}

interface IProduct {
    id: number;
    name: string;
    price: number;
    quantity: number;
    discount: number;
    category: string;
    created_at: string;
    updated_at: string;
    description: string;
    image: IProductImage[];
}

interface IProductImage {
    id: number;
    url: string;
}

interface ICartItem {
    id: number;
    product: {
        product: IProduct;
        quantity: number;
    };
    total: number;
    created_at: string;
    updated_at: string;
}

interface ICarousel {
    id: number;
    image: string;
}
