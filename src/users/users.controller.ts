import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags("users")
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @UseGuards(AuthGuard)
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.usersService.getUser(+id);
  }
  @UseGuards(AuthGuard)
  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(+id, updateUserDto);
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.usersService.removeUser(+id);
  }
}
