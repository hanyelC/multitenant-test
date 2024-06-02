import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor() {}

  findAll(): Promise<User[]> {
    return User.find();
  }

  findOne(id: number): Promise<User | null> {
    return User.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await User.delete({ id });
  }
}
