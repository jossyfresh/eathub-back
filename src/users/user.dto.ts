export class CreateUserDto {
  readonly username: string;
  readonly email: string;
  readonly phone?: string;
  readonly password: string;
  readonly image?: string;
  readonly address?: string;
}
