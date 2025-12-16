export interface LoginForm {
    phone: string;
    password: string;
    remember?: boolean;
}

export interface RegisterForm {
    phone: string;
    password: string;
    rePassword: string;
}