import { IsAlphanumeric, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3, { message: "Username must have at least 3 characters." })
  @IsAlphanumeric(null, {
    message: "Username does not allow other than alpha numeric chars.",
  })
  username: string;
}