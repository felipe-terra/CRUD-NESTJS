import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ){

  }


  create(dto: CreateUserDto) {
    const user = this.repository.create(dto);
    return this.repository.save(user);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({id});
  }

  async update(id: string, dto: UpdateUserDto) {
    const usuario = await this.repository.findOneBy({id});
    if (!usuario) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    this.repository.merge(usuario, dto);
    return this.repository.save(usuario);
  }

  async remove(id: string) {
    const usuario = await this.repository.findOneBy({id});
    if (!usuario) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return this.repository.remove(usuario);
  }
}
