import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Role } from './shared/decorators/role.decorator';
import { Sample } from './shared/decorators/sample.decorator';
import { SwaggerAdmin, SwaggerMember } from './shared/decorators/swagger.decorator';
import { Roles } from './shared/enums/roles.enum';
import { RoleGuard } from './shared/guards/role.guard';
import { User } from './shared/models/user.dto';

@Controller()
@UseGuards(RoleGuard)
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Sample('abc', 'def')
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @SwaggerMember()
  @Sample('sample-member-metadata')
  @Post('member')
  getMember(@Body() user: User): string {
    return `Hello ${user.name}, you are viewing endpoint of member!`;
  }

  @SwaggerAdmin()
  @Sample('sample-ADMIN-metadata')
  @Post('admin')
  @Role(Roles.ADMIN)
  getAdmin(@Body() user: User): string {
    return `Hello ${user.name}, You had successful access to admin`;
  }
}
