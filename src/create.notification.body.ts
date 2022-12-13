import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;
  @IsNotEmpty()
  @Length(3, 280)
  content: string;
  @IsNotEmpty()
  category: string;
}
