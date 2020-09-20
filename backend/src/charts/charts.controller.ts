import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/roles.guard';
import FHUser from 'src/auth/user.decorator';
import { FriendIDParam, FriendsGuard } from 'src/friends/friends.guard';
import { FHSetting, SettingGuard } from 'src/setting/setting.guard';
import { AvailableSetting } from 'src/setting/setting.service';
import { IUser } from 'src/user/interfaces/IUser';
import { ChartsService } from './charts.service';

@Controller('charts')
export class ChartsController {
  constructor(private readonly chartService: ChartsService) {}

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('')
  async getCharts(@FHUser() user: IUser): Promise<number[][]> {
    return this.chartService.getCharts(user._id);
  }

  @FriendIDParam('userId')
  @FHSetting(AvailableSetting.FRIENDS_SHARE_STATS)
  @UseGuards(AuthGuard('jwt'), RolesGuard, FriendsGuard, SettingGuard)
  @Get(':userId')
  async getCHartsOf(@Param('userId') userId: string): Promise<number[][]> {
    return this.chartService.getCharts(userId);
  }
}
