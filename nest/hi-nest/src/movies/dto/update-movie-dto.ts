import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie-dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

//PartialType을 사용하면 아래와 같은 것을 간편하게 해준다.
// @IsString()
// readonly title?: string;

// @IsNumber()
// readonly year?: number;

// @IsString({ each: true })
// readonly genres?: string[];
