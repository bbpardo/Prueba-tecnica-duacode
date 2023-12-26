import { Injectable , HttpException, HttpStatus} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PasswordCipher } from 'src/utils/password-cipher';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User)
   private userRepository: Repository<User>,
    private jwtService: JwtService){}
  
  async createUser(createUser: CreateUserDto) {

    if(await this.userRepository.findOne({
      where: {
        email: createUser.email
      }})){
        return new HttpException('CONFLICT', HttpStatus.CONFLICT)
      }
    const userEntity: User={
      email: createUser.email,
      password: await PasswordCipher.cipher(createUser.password)
    }
    return this.userRepository.save(userEntity);
  }

  async loginUser(createUserDto: CreateUserDto){
    const userFound = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
      }
    });
    if(!userFound){
      return new HttpException("Unauthorized", 401)
    }
    if(!await PasswordCipher.verify(createUserDto.password,userFound.password)){
      return new HttpException("Unauthorized", 401)
    }
    const payload = {email: userFound.email }
    console.log(await this.jwtService.signAsync(payload))
    return{
      access_token: await this.jwtService.signAsync(payload),
    };
    
  }

  getUsers() {
    return this.userRepository.find();
  }

  async getUser(id: number) {
    const userFound = await this.userRepository.findOne({
      where: {
        id
      }
    });
    if(!userFound){
      return new HttpException("User not found", HttpStatus.NOT_FOUND)
    }
    return userFound
    
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const userFound = await this.userRepository.findOne({
      where: {
        id
      }
    });
    if(!userFound){
      return new HttpException("User not found", HttpStatus.NOT_FOUND)
    }
    return this.userRepository.update({id},updateUserDto);
  }

  async removeUser(id: number) {
    const result = await this.userRepository.delete({id})

    if(result.affected === 0){
      return new HttpException("User not found", HttpStatus.NOT_FOUND)
    }
    return this.userRepository.delete({id});
  }
}
