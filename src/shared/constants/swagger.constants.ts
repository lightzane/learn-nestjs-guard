import { ApiOperationOptions } from "@nestjs/swagger";

export const API_OPERATION = {
    get Member(): ApiOperationOptions {
        return {
            summary: 'NO "Role" metadata assigned at this endpoint',
            description: `This endpoint only have "<strong>Sample</strong>" metadata set. <br>
                Please see the <strong>NestApplication</strong> logs as well`
        };
    },
    get Admin(): ApiOperationOptions {
        return {
            summary: '"Role" metadata is set',
            description: `This endpoint both have "<strong>Role</strong>" and "<strong>Sample</strong>" metadata <br>
                Please see the <strong>NestApplication</strong> logs as well`
        };
    }
};