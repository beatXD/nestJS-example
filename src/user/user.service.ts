import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto, QueryUserDto, UpdateUserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async find(query: QueryUserDto): Promise<User[]> {
    try {
      return await this.userRepository.find(query);
    } catch (error) {
      throw error;
    }
  }

  async findOne(query: QueryUserDto): Promise<User> {
    try {
      return await this.userRepository.findOne(query);
    } catch (error) {
      throw error;
    }
  }

  async findById(id: number): Promise<User> {
    try {
      return await this.userRepository.findById(id);
    } catch (error) {
      throw error;
    }
  }

  async create(body: CreateUserDto): Promise<User> {
    try {
      return await this.userRepository.create(body);
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, body: UpdateUserDto): Promise<User> {
    try {
      return await this.userRepository.update(id, body);
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      return await this.userRepository.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
