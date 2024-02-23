import {
  Controller,
  Get,
  Param,
  Patch,
  Body,
  NotFoundException,
  Post,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './user.dto';
import { User } from './user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: CreateUserDto,
  ): Promise<User> {
    const updatedUser = await this.usersService.update(id, updateUserDto);
    if (!updatedUser) {
      throw new NotFoundException('User not found');
    }
    return updatedUser;
  }
}
