import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { CreateUserDto, QueryUserDto, UpdateUserDto } from './dto/user.dto';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/find')
  async find(@Res() res: Response, @Query() query: QueryUserDto) {
    try {
      console.log('query', query);
      const users = await this.userService.find(query);
      return res.status(200).json({
        statusCode: 200,
        message: 'Success',
        data: users,
      });
    } catch (error) {
      return res.status(error.response.status).json({
        statusCode: error.response.status,
        message: error.response.message,
      });
    }
  }

  @Get('/findOne')
  async findOne(@Res() res: Response, @Query() query: QueryUserDto) {
    try {
      // check query is empty
      if (!Object.keys(query).length) {
        return res.status(400).json({
          statusCode: 400,
          message: 'Bad Request',
        });
      }

      const user = await this.userService.findOne(query);
      if (!user) {
        return res.status(404).json({
          statusCode: 404,
          message: 'Not Found',
        });
      }

      return res.status(200).json({
        statusCode: 200,
        message: 'Success',
        data: user,
      });
    } catch (error) {
      return res.status(error.response.status).json({
        statusCode: error.response.status,
        message: error.response.message,
      });
    }
  }

  @Get('/:id')
  async findById(@Res() res: Response, @Param('id') id: string) {
    try {
      const user = await this.userService.findById(parseInt(id));
      if (!user) {
        return res.status(404).json({
          statusCode: 404,
          message: 'Not Found',
        });
      }

      return res.status(200).json({
        statusCode: 200,
        message: 'Success',
        data: user,
      });
    } catch (error) {
      return res.status(error.response.status).json({
        statusCode: error.response.status,
        message: error.response.message,
      });
    }
  }

  @Post('/create')
  async create(@Res() res: Response, @Body() body: CreateUserDto) {
    try {
      const user = await this.userService.create(body);
      return res.status(200).json({
        statusCode: 200,
        message: 'Success',
        data: user,
      });
    } catch (error) {
      return res.status(error.response.status).json({
        statusCode: error.response.status,
        message: error.response.message,
      });
    }
  }

  @Put('/update/:id')
  async update(@Res() res: Response, @Param('id') id: string, @Body() body: UpdateUserDto) {
    try {
      const user = await this.userService.update(parseInt(id), body);
      if (!user) {
        return res.status(404).json({
          statusCode: 404,
          message: 'Not Found',
        });
      }

      return res.status(200).json({
        statusCode: 200,
        message: 'Success',
        data: user,
      });
    } catch (error) {
      return res.status(error.response.status).json({
        statusCode: error.response.status,
        message: error.response.message,
      });
    }
  }

  @Delete('/delete/:id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    try {
      const user = await this.userService.delete(parseInt(id));
      if (!user) {
        return res.status(404).json({
          statusCode: 404,
          message: 'Not Found',
        });
      }

      return res.status(200).json({
        statusCode: 200,
        message: 'Success',
        data: user,
      });
    } catch (error) {
      return res.status(error.response.status).json({
        statusCode: error.response.status,
        message: error.response.message,
      });
    }
  }
}
