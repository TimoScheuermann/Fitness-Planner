import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FHSocket } from 'src/FHSocket';
import { FriendsModule } from 'src/friends/friends.module';
import {
  Variable,
  VariableSchema,
} from 'src/management/variables/schemas/Variable.schema';
import { Message, MessageSchema } from 'src/message/schemas/Message.schema';
import { SettingModule } from 'src/setting/setting.module';
import { TgbotService } from 'src/tgbot/tgbot.service';
import { User, UserSchema } from 'src/user/schemas/User.schema';
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
      { name: User.name, schema: UserSchema },
      { name: Exercise.name, schema: ExerciseSchema },
      { name: Message.name, schema: MessageSchema },
      { name: CompletedExercise.name, schema: CompletedExerciseSchema },
      { name: Variable.name, schema: VariableSchema },
    ]),
    FriendsModule,
    SettingModule,
  ],
  controllers: [ExerciseController],
  providers: [ExerciseService, FHSocket, TgbotService],
})
export class ExerciseModule {}
