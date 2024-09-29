import IProduct from "@/components/interfaces/Product";

const APIURL = process.env.NEXT_PUBLIC_API_URL

export const fetchProducts = async (): Promise<IProduct[]> => {
    try {
        const response = await fetch(`${APIURL}/products`,{
            next: {revalidate: 1200}
        });
        const products: IProduct[] = await response.json();
        return products;
    } catch (error: any) {
        throw new Error(error)
    }
};

export const getProductById = async (id: string): Promise<IProduct> => {
    try {
        const products: IProduct[] = await fetchProducts();
        const productFiltered = products.find((product) => product.id.toString() === id)
        if (!productFiltered) throw new Error("Product not found")
        return productFiltered;
    } catch (error: any) {
        throw new Error(error)
    }
};

export const getProductByCaregoy = async (category: string): Promise<IProduct[]> => {
    try {
        const products: IProduct[] = await fetchProducts();
        const productFiltered = products.filter((product) => product.categoryId === Number(category))
        if (!productFiltered) throw new Error("Product not found")
        return productFiltered;
    } catch (error: any) {
        throw new Error(error)
    }
};