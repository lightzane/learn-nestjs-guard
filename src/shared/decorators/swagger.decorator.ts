import { applyDecorators } from "@nestjs/common";
import { ApiBody, ApiOperation } from "@nestjs/swagger";
import { API_OPERATION } from "../constants/swagger.constants";
import { getMockAdminUser } from "../mocks/admin.mock";
import { getMockUser } from "../mocks/user.mock";

export const SwaggerAdmin = () => (
    applyDecorators(
        ApiOperation(API_OPERATION.Admin),
        ApiBody({ schema: { example: getMockAdminUser() } })
    )
);

export const SwaggerMember = () => (
    applyDecorators(
        ApiOperation(API_OPERATION.Member),
        ApiBody({ schema: { example: getMockUser() } })
    )
);