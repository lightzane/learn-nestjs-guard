import { User } from "../models/user.dto";

export const getMockAdminUser = (): User => ({
    name: 'John Doe',
    roles: ['member', 'admin']
});