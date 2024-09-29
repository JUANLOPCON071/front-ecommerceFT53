import { IRegisterError, IRegisterProps } from "@/components/interfaces/Register";
import { ILoginError, ILoginProps } from "@/components/interfaces/Types";

export function validateLoginForm (values: ILoginProps): ILoginError {
    const errors: ILoginError = {}

    if(values.email && !/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email is not valid"
    }
    return errors;

}
export function validateRegisterForm (values: IRegisterProps): IRegisterError {
    const errors: IRegisterError = {}

    if(values.email && !/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email is not valid"
    }
    return errors;

}