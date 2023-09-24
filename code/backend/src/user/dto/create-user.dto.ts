import { User } from '../entity/user.entity';
import { IsEmail, IsString, Length } from 'class-validator';
import { Role } from '../../core/roles/roles.enum';

export class CreateUserDTO {
  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(11)
  cpf: string;

  role: Role;
}

export function createUserDTOToUser(createUserDTO: CreateUserDTO): User {
  return new User({
    name: createUserDTO.name,
    password: createUserDTO.password,
    email: createUserDTO.email,
    cpf: createUserDTO.cpf,
    role: createUserDTO.role,
  });
}
