export interface iCreateTask {
  title: string;
  description: string;
}

export interface iYupError {
  errors: string[];
}

export interface iValidatedBody {
  email: string;
  password: string;
}

export interface iOwner {
  user_id: string;
  username: string;
}
