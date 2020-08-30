import { Controller, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles, RolesGuard } from 'src/auth/roles.guard';
import FHUser from 'src/auth/user.decorator';
import { IUser } from 'src/user/interfaces/IUser';
import { UserService } from 'src/user/user.service';

@Controller('promote')
export class PromoteController {
  constructor(private readonly userService: UserService) {}

  @Roles(['admin'])
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post('moderator/:id')
  async toModerator(
    @FHUser() promoter: IUser,
    @Param('id') id: string,
  ): Promise<void> {
    this.userService.promoteTo(promoter, id, 'Moderator');
  }

  @Roles(['admin'])
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post('user/:id')
  async toUser(
    @FHUser() promoter: IUser,
    @Param('id') id: string,
  ): Promise<void> {
    this.userService.promoteTo(promoter, id, 'User');
  }
}
