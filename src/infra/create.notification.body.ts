import { IsNotEmpty, IsUUID, Length } from 'class-validator';
import { NotificationContent } from 'src/app/entities/NotificationContent';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId!: string;
  @IsNotEmpty()
  @Length(5, 240)
  content!: NotificationContent;
  @IsNotEmpty()
  category!: string;
}
