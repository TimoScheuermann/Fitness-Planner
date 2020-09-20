import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from 'src/user/interfaces/IUser';
import { Setting } from './schemas/Setting.schema';

export enum AvailableSetting {
  FRIENDS_RECEIVE_INVITES = 'FRIENDS_RECEIVE_INVITES',
  FRIENDS_RECEIVE_MESSAGES = 'FRIENDS_RECEIVE_MESSAGES',
  FRIENDS_RECEIVE_CHALLENGES = 'FRIENDS_RECEIVE_CHALLENGES',
  FRIENDS_SHARE_WEIGHT = 'FRIENDS_SHARE_WEIGHT',
  FRIENDS_SHARE_WATER = 'FRIENDS_SHARE_WATER',
  FRIENDS_SHARE_HEIGHT = 'FRIENDS_SHARE_HEIGHT',
  FRIENDS_SHARE_STATS = 'FRIENDS_SHARE_STATS',
}

@Injectable()
export class SettingService {
  constructor(
    @InjectModel(Setting.name)
    private settingModel: Model<Setting>,
  ) {}

  public async isAllowing(
    userId: string,
    setting: AvailableSetting,
  ): Promise<boolean> {
    return !(await this.settingModel.findOne({
      user: userId,
      disabled: { $all: [setting] },
    }));
  }

  public async enableSetting(
    user: IUser,
    name: AvailableSetting,
  ): Promise<void> {
    await this.settingModel.updateOne(
      { user: user._id },
      { $pull: { disabled: name } },
    );
  }
  public async disableSetting(
    user: IUser,
    name: AvailableSetting,
  ): Promise<void> {
    await this.settingModel.updateOne(
      { user: user._id },
      { $addToSet: { disabled: name } },
      { upsert: true },
    );
  }
  public async getSettings(userId: string): Promise<AvailableSetting[]> {
    const data = await this.settingModel.findOne({ user: userId });
    if (data.disabled) return data.disabled;
    return [];
  }
}
