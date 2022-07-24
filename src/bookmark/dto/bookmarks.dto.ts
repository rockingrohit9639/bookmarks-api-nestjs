import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class BookmarksDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsUrl()
  @IsNotEmpty()
  link: string;
}
