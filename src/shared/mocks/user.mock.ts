import { User } from "../models/user.dto";

export const getMockUser = (): User => ({
    name: 'Jane Doe',
    roles: ['member']
});