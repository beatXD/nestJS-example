import { IsBoolean, IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class UserDto {
  @IsNumber()
  id: number;

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at: Date;

  @IsBoolean()
  is_delete: boolean;

  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  full_name: string;
}

export class CreateUserDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  full_name: string;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  full_name?: string;
}

export class QueryUserDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsBoolean()
  is_delete?: boolean;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  full_name?: string;
}
