 interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
}


export interface IProductProps extends IProduct {
    onDelete: () => void;
}

export default IProduct;