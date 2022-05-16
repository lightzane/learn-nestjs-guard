import { SetMetadata } from '@nestjs/common';

// export const Role = (...args: string[]) => SetMetadata('role', args); // generated by -- npx nest g decorator shared/decorators/role
export const METADATA_ROLE = 'roles';
export const Role = (roles: string) => SetMetadata(METADATA_ROLE, roles);