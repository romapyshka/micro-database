import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @MessagePattern("createUser")
  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }
}

