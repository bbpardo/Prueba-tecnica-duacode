import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards} from '@nestjs/common';
import { DuacodersService } from './duacoders.service';
import { CreateDuacoderDto } from './dto/create-duacoder.dto';
import { UpdateDuacoderDto } from './dto/update-duacoder.dto';
import { ApiTags } from '@nestjs/swagger';
import { Duacoder } from './entities/duacoder.entity';
import { AuthGuard } from 'src/auth/auth.guard';


@ApiTags('duacoders')
@Controller('duacoders')
export class DuacodersController {
  constructor(private duacodersService: DuacodersService) {}

  @UseGuards(AuthGuard)
  @Post()
  createDuacoder(@Body() newDuacoder: CreateDuacoderDto) {
    return this.duacodersService.createDuacoder(newDuacoder);
  }
  @UseGuards(AuthGuard)
  @Get()
  getDuacoders(): Promise<Duacoder[]> {
    return this.duacodersService.getDuacoders();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  getDuacoder(@Param('id', ParseIntPipe) id: number) {
    return this.duacodersService.getDuacoder(id);
  }
  @UseGuards(AuthGuard)
  @Patch(':id')
  updateDuacoder(@Param('id', ParseIntPipe) id: number, @Body() updateDuacoderDto: UpdateDuacoderDto) {
    return this.duacodersService.updateDuacoder(id, updateDuacoderDto);
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  removeDuacoder(@Param('id', ParseIntPipe) id: number) {
    return this.duacodersService.removeDuacoder(id);
  }
}
