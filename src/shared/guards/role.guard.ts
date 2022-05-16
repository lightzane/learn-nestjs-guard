import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { METADATA_ROLE as ROLE_METADATA_KEY } from '../decorators/role.decorator';
import { SampleMetadataKey as SAMPLE_METADATA_KEY } from '../decorators/sample.decorator';
import { Roles } from '../enums/roles.enum';
import { User } from '../models/user.dto';

@Injectable()
export class RoleGuard implements CanActivate {

  logger = new Logger(RoleGuard.name);

  constructor(private reflector: Reflector) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest() as Request;
    const user: User = request.body;

    // * get metadata set by @Role() and @SetMetadata() -- see src/shared/role.decorator.ts
    const requiredRole = this.reflector.get(ROLE_METADATA_KEY, context.getHandler());
    this.logger.log(`This endpoint requires the following role: ${requiredRole}`);

    this.verboseSampleMetadata(context);

    if (requiredRole) {
      // allow admin only!
      if (user.roles.includes(requiredRole)) {
        return true;
      } else {
        return false;
      }
    }

    // no roles set, means public endpoint, allow request to go through
    return true;
  }

  private verboseSampleMetadata(context: ExecutionContext): void {
    // * get metadata set by @Sample() and @SetMetadata() -- see src/shared/sample.decorator.ts
    const sample = this.reflector.get<string[]>(SAMPLE_METADATA_KEY, context.getHandler());
    this.logger.verbose(`Sample Metadata set at this endpoint: ${sample}`);
  }
}
