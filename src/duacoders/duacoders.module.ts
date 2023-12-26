import { Module } from '@nestjs/common';
import { DuacodersService } from './duacoders.service';
import { DuacodersController } from './duacoders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Duacoder } from './entities/duacoder.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Duacoder])],
  controllers: [DuacodersController],
  providers: [DuacodersService],
})
export class DuacodersModule {}
