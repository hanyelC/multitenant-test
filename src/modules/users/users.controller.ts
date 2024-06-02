import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Query,
} from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param() { id }) {
    console.log(id);
    const user = await this.usersService.findOne(+id);
    if (!user) throw new NotFoundException();
    return user;
  }

  @Delete()
  async remove(@Query() { id }) {
    await this.usersService.remove(+id);
  }
}
