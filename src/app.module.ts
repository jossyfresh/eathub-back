import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { FirebaseModule } from './firebase/firebase.module';
import { FirebaseController } from './firebase/firebase.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot({ cache: true }), FirebaseModule, UsersModule],
  controllers: [AppController, FirebaseController],
  providers: [AppService],
})
export class AppModule {}
