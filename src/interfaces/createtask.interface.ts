export interface iCreateTask {
    title: string;
    description: string
}

export interface YupError {
    errors: string[];
}

export interface validatedBody {
    email: string,
    password: string
}