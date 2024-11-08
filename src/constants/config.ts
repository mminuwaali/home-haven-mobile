import { router } from "expo-router";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export const welcome: IWelcome[] = [
    {
        title: "Online Home Store and Furniture",
        image: require("@/assets/images/welcome/welcome-1.png"),
        description: "Discover all style and budgets of furniture, appliances, kitchen, and more from 500+ brands in your hand.",
    },
    {
        title: "Delivery Right to Your Doorstep",
        image: require("@/assets/images/welcome/welcome-2.png"),
        description: "Sit back, and enjoy the convenience of our drivers delivering your order to your doorstep.",
    },
    {
        title: "Get Support From Our Skilled Team",
        image: require("@/assets/images/welcome/welcome-3.png"),
        description: "If our products don't meet your expectations, we're available 24/7 to assist you.",
    },
];

export const accountLiks: ISectionLink[] = [
    {
        title: "general",
        links: [
            {
                title: "transaction",
                onPress: () => router.push,
                icon: { element: MaterialCommunityIcons, props: { name: "receipt" } }
            },
            {
                title: "wishlist",
                onPress: () => router.push,
                icon: { element: AntDesign, props: { name: "hearto" } }
            },
            {
                title: "saved address",
                onPress: () => router.push,
                icon: { element: Feather, props: { name: "bookmark" } }
            },
            {
                title: "payment methods",
                onPress: () => router.push,
                icon: { element: Feather, props: { name: "credit-card" } }
            },
            {
                title: "notification",
                onPress: () => router.push,
                icon: { element: MaterialCommunityIcons, props: { name: "receipt" } }
            },
            {
                title: "security",
                onPress: () => router.push,
                icon: { element: MaterialCommunityIcons, props: { name: "receipt" } }
            },
        ],
    },
    {
        title: "help",
        links: [],
    }
];

export const products: IProduct[] = [
    {
        id: 1,
        name: "iPhone 14 Pro",
        price: 999,
        quantity: 50,
        category: "Electronics",
        created_at: "2023-01-01",
        updated_at: "2023-01-01",
        discount: Math.floor(Math.random() * 100),
        description: "Latest iPhone model with advanced features",

        image: [
            { id: 1, url: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb" },
            { id: 2, url: "https://images.unsplash.com/photo-1678685888425-d847fad37352" }
        ]
    },
    {
        id: 2,
        name: "Samsung Galaxy S23",
        price: 899,
        quantity: 45,
        category: "Electronics",
        created_at: "2023-01-02",
        updated_at: "2023-01-02",
        discount: Math.floor(Math.random() * 100),
        description: "Premium Android smartphone",

        image: [
            { id: 3, url: "https://images.unsplash.com/photo-1678685888513-d6c7f0c5f1c3" },
            { id: 4, url: "https://images.unsplash.com/photo-1678685888642-d847fad37352" }
        ]
    },
    {
        id: 3,
        name: "MacBook Pro",
        price: 1499,
        quantity: 30,
        category: "Electronics",
        created_at: "2023-01-03",
        updated_at: "2023-01-03",
        discount: Math.floor(Math.random() * 100),
        description: "Powerful laptop for professionals",

        image: [
            { id: 5, url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
            { id: 6, url: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9" }
        ]
    },
    {
        id: 4,
        name: "Nike Air Max",
        price: 129,
        quantity: 100,
        category: "Footwear",
        created_at: "2023-01-04",
        updated_at: "2023-01-04",
        discount: Math.floor(Math.random() * 100),
        description: "Comfortable running shoes",

        image: [
            { id: 7, url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
            { id: 8, url: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb" }
        ]
    },
    {
        id: 5,
        name: "Sony Headphones",
        price: 299,
        quantity: 75,
        category: "Electronics",
        created_at: "2023-01-05",
        updated_at: "2023-01-05",
        discount: Math.floor(Math.random() * 100),
        description: "Noise-cancelling wireless headphones",

        image: [
            { id: 9, url: "https://images.unsplash.com/photo-1583394838336-acd977736f90" },
            { id: 10, url: "https://images.unsplash.com/photo-1578319439584-104c94d37305" }
        ]
    },
    {
        id: 6,
        name: "Levi's Jeans",
        price: 69,
        quantity: 150,
        category: "Clothing",
        created_at: "2023-01-06",
        updated_at: "2023-01-06",
        discount: Math.floor(Math.random() * 100),
        description: "Classic denim jeans",

        image: [
            { id: 11, url: "https://images.unsplash.com/photo-1542272604-787c3835535d" },
            { id: 12, url: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246" }
        ]
    },
    {
        id: 7,
        name: "iPad Air",
        price: 599,
        quantity: 60,
        category: "Electronics",
        created_at: "2023-01-07",
        updated_at: "2023-01-07",
        discount: Math.floor(Math.random() * 100),
        description: "Versatile tablet device",

        image: [
            { id: 13, url: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0" },
            { id: 14, url: "https://images.unsplash.com/photo-1557825835-70d97c4aa567" }
        ]
    },
    {
        id: 8,
        name: "Coffee Maker",
        price: 79,
        quantity: 90,
        category: "Appliances",
        created_at: "2023-01-08",
        updated_at: "2023-01-08",
        discount: Math.floor(Math.random() * 100),
        description: "Automatic drip coffee maker",

        image: [
            { id: 15, url: "https://images.unsplash.com/photo-1517080191648-1488ee6e6777" },
            { id: 16, url: "https://images.unsplash.com/photo-1520970014086-2208d157c9e2" }
        ]
    },
    {
        id: 9,
        name: "Gaming Chair",
        price: 199,
        quantity: 40,
        category: "Furniture",
        created_at: "2023-01-09",
        updated_at: "2023-01-09",
        discount: Math.floor(Math.random() * 100),
        description: "Ergonomic gaming chair",

        image: [
            { id: 17, url: "https://images.unsplash.com/photo-1598550476439-6847785fcea6" },
            { id: 18, url: "https://images.unsplash.com/photo-1610297449831-5ffe15a123e8" }
        ]
    },
    {
        id: 10,
        name: "Smart Watch",
        price: 249,
        quantity: 85,
        category: "Electronics",
        created_at: "2023-01-10",
        updated_at: "2023-01-10",
        discount: Math.floor(Math.random() * 100),
        description: "Fitness tracking smartwatch",

        image: [
            { id: 19, url: "https://images.unsplash.com/photo-1544117519-31a4b719223d" },
            { id: 20, url: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a" }
        ]
    },
    {
        id: 11,
        name: "Backpack",
        price: 49,
        quantity: 120,
        category: "Accessories",
        created_at: "2023-01-11",
        updated_at: "2023-01-11",
        discount: Math.floor(Math.random() * 100),
        description: "Durable travel backpack",

        image: [
            { id: 21, url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62" },
            { id: 22, url: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa" }
        ]
    },
    {
        id: 12,
        name: "Desk Lamp",
        price: 39,
        quantity: 100,
        category: "Home",
        created_at: "2023-01-12",
        updated_at: "2023-01-12",
        discount: Math.floor(Math.random() * 100),
        description: "LED desk lamp with adjustable brightness",

        image: [
            { id: 23, url: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15" },
            { id: 24, url: "https://images.unsplash.com/photo-1540932239986-30128078f3c5" }
        ]
    },
    {
        id: 13,
        name: "Wireless Mouse",
        price: 29,
        quantity: 200,
        category: "Electronics",
        created_at: "2023-01-13",
        updated_at: "2023-01-13",
        discount: Math.floor(Math.random() * 100),
        description: "Bluetooth wireless mouse",

        image: [
            { id: 25, url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46" },
            { id: 26, url: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7" }
        ]
    },
    {
        id: 14,
        name: "Water Bottle",
        price: 19,
        quantity: 250,
        category: "Accessories",
        created_at: "2023-01-14",
        updated_at: "2023-01-14",
        discount: Math.floor(Math.random() * 100),
        description: "Insulated stainless steel water bottle",

        image: [
            { id: 27, url: "https://images.unsplash.com/photo-1602143407151-7111542de6e8" },
            { id: 28, url: "https://images.unsplash.com/photo-1523362628745-0c100150b504" }
        ]
    },
    {
        id: 15,
        name: "Sunglasses",
        price: 89,
        quantity: 80,
        category: "Accessories",
        created_at: "2023-01-15",
        updated_at: "2023-01-15",
        discount: Math.floor(Math.random() * 100),
        description: "Polarized sunglasses",

        image: [
            { id: 29, url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083" },
            { id: 30, url: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a" }
        ]
    },
    {
        id: 16,
        name: "Portable Speaker",
        price: 79,
        quantity: 70,
        category: "Electronics",
        created_at: "2023-01-16",
        updated_at: "2023-01-16",
        discount: Math.floor(Math.random() * 100),
        description: "Waterproof bluetooth speaker",

        image: [
            { id: 31, url: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1" },
            { id: 32, url: "https://images.unsplash.com/photo-1563330232-57114bb0823c" }
        ]
    },
    {
        id: 17,
        name: "Yoga Mat",
        price: 25,
        quantity: 150,
        category: "Sports",
        created_at: "2023-01-17",
        updated_at: "2023-01-17",
        discount: Math.floor(Math.random() * 100),
        description: "Non-slip exercise yoga mat",

        image: [
            { id: 33, url: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f" },
            { id: 34, url: "https://images.unsplash.com/photo-1518611012118-696072aa579a" }
        ]
    },
    {
        id: 18,
        name: "Plant Pot",
        price: 15,
        quantity: 180,
        category: "Home",
        created_at: "2023-01-18",
        updated_at: "2023-01-18",
        discount: Math.floor(Math.random() * 100),
        description: "Ceramic plant pot with drainage",

        image: [
            { id: 35, url: "https://images.unsplash.com/photo-1485955900006-10f4d324d411" },
            { id: 36, url: "https://images.unsplash.com/photo-1604762512526-b3465f484fd7" }
        ]
    },
    {
        id: 19,
        name: "Kitchen Knife Set",
        price: 129,
        quantity: 45,
        category: "Kitchen",
        created_at: "2023-01-19",
        updated_at: "2023-01-19",
        discount: Math.floor(Math.random() * 100),
        description: "Professional chef knife set",

        image: [
            { id: 37, url: "https://images.unsplash.com/photo-1593618998160-e34014e67546" },
            { id: 38, url: "https://images.unsplash.com/photo-1566454825481-9c19f2ca2f18" }
        ]
    },
    {
        id: 20,
        name: "Digital Camera",
        price: 699,
        quantity: 25,
        category: "Electronics",
        created_at: "2023-01-20",
        discount: Math.floor(Math.random() * 100),
        updated_at: "2023-01-20",
        description: "Mirrorless digital camera",

        image: [
            { id: 39, url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32" },
            { id: 40, url: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd" }
        ]
    }
];

export const carts: ICartItem[] = [
    {
        id: 1,
        product: {
            product: products[0],
            quantity: 2
        }
        ,
        total: 1998,
        created_at: "2023-01-01",
        updated_at: "2023-01-01"
    },
    {
        id: 2,
        product: {
            product: products[2],
            quantity: 1
        }
        ,
        total: 1499,
        created_at: "2023-01-01",
        updated_at: "2023-01-01"
    },
    {
        id: 3,
        product: {
            product: products[4],
            quantity: 3
        }
        ,
        total: 897,
        created_at: "2023-01-01",
        updated_at: "2023-01-01"
    },
    {
        id: 4,
        product: {
            product: products[6],
            quantity: 1
        }
        ,
        total: 599,
        created_at: "2023-01-01",
        updated_at: "2023-01-01"
    },
    {
        id: 5,
        product: {
            product: products[9],
            quantity: 2
        }
        ,
        total: 498,
        created_at: "2023-01-01",
        updated_at: "2023-01-01"
    },
    {
        id: 6,
        product: {
            product: products[12],
            quantity: 4
        }
        ,
        total: 116,
        created_at: "2023-01-01",
        updated_at: "2023-01-01"
    },
    {
        id: 7,
        product: {
            product: products[15],
            quantity: 1
        }
        ,
        total: 79,
        created_at: "2023-01-01",
        updated_at: "2023-01-01"
    },
    {
        id: 8,
        product: {
            product: products[19],
            quantity: 1
        }
        ,
        total: 699,
        created_at: "2023-01-01",
        updated_at: "2023-01-01"
    }
];

export const carousels:ICarousel[] = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1200&h=400&fit=crop&q=80"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=400&fit=crop&q=80"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1607083206325-f8123c6f0727?w=1200&h=400&fit=crop&q=80"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200&h=400&fit=crop&q=80"
    }
];