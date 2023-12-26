import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DuacodersModule } from './duacoders/duacoders.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import {dbConfig} from './db/config.js'
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    DuacodersModule,
    UsersModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
