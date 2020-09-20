import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FHSocket } from 'src/FHSocket';
import { FriendsModule } from 'src/friends/friends.module';
import { Message, MessageSchema } from 'src/message/schemas/Message.schema';
import { SettingModule } from 'src/setting/setting.module';
import { TgbotModule } from 'src/tgbot/tgbot.module';
import { UserModule } from 'src/user/user.module';
import { ExerciseController } from './exercise.controller';
import { ExerciseService } from './exercise.service';
import {
  CompletedExercise,
  CompletedExerciseSchema,
} from './schemas/CompletedExercise.schema';
import { Exercise, ExerciseSchema } from './schemas/Exercise.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Exercise.name, schema: ExerciseSchema },
      { name: Message.name, schema: MessageSchema },
      { name: CompletedExercise.name, schema: CompletedExerciseSchema },
    ]),
    FriendsModule,
    UserModule,
    SettingModule,
    TgbotModule,
  ],
  controllers: [ExerciseController],
  providers: [ExerciseService, FHSocket],
})
export class ExerciseModule {}
