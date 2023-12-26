import { Controller, Post, Body, UseGuards} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("auth")
@Controller()
export class AuthController {
  constructor(private readonly userService: UsersService) {}

  @Post("register")
  async registerUser(@Body() createAuthDto: CreateUserDto) {
    return this.userService.createUser(createAuthDto);
  }

  @Post("login")
  loginUser(@Body() createAuthDto: CreateUserDto) {
    return this.userService.loginUser(createAuthDto);
  }
}
