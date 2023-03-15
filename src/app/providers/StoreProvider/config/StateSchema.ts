import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername/model/types/loginSchema';

export interface StateSchema {
    count: CounterSchema,
    user: UserSchema,
    loginForm: LoginSchema
}
