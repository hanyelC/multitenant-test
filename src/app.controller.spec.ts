import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './modules/users/user.entity';
import { DatabaseModule } from './database/database.module';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(() => {});
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      imports: [
          DatabaseModule
      ],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('users', () => {
    it('users', async () => {
      const users = await User.find();

      expect(users).toBeInstanceOf(Array);
    });
  });
});
