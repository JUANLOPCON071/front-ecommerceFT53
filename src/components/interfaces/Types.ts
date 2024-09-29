import IProduct from "./Product";

export interface ILoginProps {
    email: string;
    password: string
}

export interface ILoginError {
    email?: string;
    password?: string
}

export interface userSessionProps {
    token: string;
    userData: {
        id: number;
        address: string;
        email: string;
        name: string;
        phone: string;
        orders: []
    }
}

export interface IOrder {
    id: string;
    status: string;
    date: Date;
    products: IProduct[]
}