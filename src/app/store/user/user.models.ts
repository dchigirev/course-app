
export { User, Recruiter, Employee } from '@app/models/backend/user';

// Requests models

export interface EmailPasswordCredentials {
    email: string;
    password: string;
}
