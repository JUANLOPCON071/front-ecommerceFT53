export interface IRegisterProps {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string
}

export interface IRegisterError {
    name?: string;
    email?: string;
    password?: string;
    address?: string;
    phone?: string
}