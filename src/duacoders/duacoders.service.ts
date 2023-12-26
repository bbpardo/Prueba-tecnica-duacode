import { Injectable, HttpException, HttpStatus} from '@nestjs/common';
import { CreateDuacoderDto } from './dto/create-duacoder.dto';
import { UpdateDuacoderDto } from './dto/update-duacoder.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Duacoder } from './entities/duacoder.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DuacodersService {
  constructor(@InjectRepository(Duacoder) private duacoderRepository: Repository<Duacoder>){}
  
  async createDuacoder(createDuacoderDto: CreateDuacoderDto) {
    if(await this.duacoderRepository.findOne({
      where: {
        dni: createDuacoderDto.dni
      }})){
        return new HttpException('This dni is already in use', 400)
      }
    const newDuacoder = this.duacoderRepository.create(createDuacoderDto)
    return this.duacoderRepository.save(newDuacoder);
  }

  getDuacoders() {
    return this.duacoderRepository.find();
  }

  async getDuacoder(id: number) {
    const duacoderFound = await this.duacoderRepository.findOne({
      where: {
        id
      }
    });
    if(!duacoderFound){
      return new HttpException("Duacoder not found", HttpStatus.NOT_FOUND)
    }
    return duacoderFound
    
  }

  async updateDuacoder(id: number, updateDuacoderDto: UpdateDuacoderDto) {
    const duacoderFound = await this.duacoderRepository.findOne({
      where: {
        id
      }
    });
    if(!duacoderFound){
      return new HttpException("Duacoder not found", HttpStatus.NOT_FOUND)
    }
    return this.duacoderRepository.update({id},updateDuacoderDto);
  }

  async removeDuacoder(id: number) {
    const result = await this.duacoderRepository.delete({id})

    if(result.affected === 0){
      return new HttpException("Duacoder not found", HttpStatus.NOT_FOUND)
    }
    return this.duacoderRepository.delete({id});
  }
}
