import { Test, TestingModule } from '@nestjs/testing';
import { DuacodersController } from './duacoders.controller';
import { DuacodersService } from './duacoders.service';

describe('DuacodersController', () => {
  let controller: DuacodersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DuacodersController],
      providers: [DuacodersService],
    }).compile();

    controller = module.get<DuacodersController>(DuacodersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
