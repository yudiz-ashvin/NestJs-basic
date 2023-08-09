import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
export class UserData {
  @IsNotEmpty()
  @Matches(RegExp('^[a-zA-Z0-9\\-]+$'))
  @MaxLength(20)
  sUserName: string;

  // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
  @Matches(
    RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
  )
  @IsNotEmpty()
  sPassword: string;
}
