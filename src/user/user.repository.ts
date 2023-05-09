import { HttpException, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto, QueryUserDto, UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UserRepository {
  async find(query: QueryUserDto): Promise<User[]> {
    try {
      return User.find({
        where: query,
        order: { created_at: 'DESC' },
      });
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  async findOne(query: QueryUserDto): Promise<User | null> {
    try {
      return User.findOne({ where: query });
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  async findById(id: number): Promise<User | null> {
    try {
      return User.findOne({ where: { id: id } });
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  async create(body: CreateUserDto): Promise<User | null> {
    try {
      const created = User.create({
        ...body,
        created_at: new Date(),
        updated_at: new Date(),
        is_delete: false,
      });
      const response = await created.save();
      if (response) return this.findById(response.id);
      return null;
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  async update(id: number, body: UpdateUserDto): Promise<User | null> {
    try {
      const response = await User.update({ id: id }, body);
      if (response.affected > 0) return this.findById(id);
      return null;
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      const response = await User.update({ id: id }, { is_delete: true });
      if (response.affected > 0) return true;
      return false;
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }
}
