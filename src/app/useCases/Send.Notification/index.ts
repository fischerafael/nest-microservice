import { Notification } from 'src/app/entities/Notification';
import { NotificationContent } from 'src/app/entities/NotificationContent';

export class SendNotificationUseCase {
  async execute(input: ISendNotificationUseCase): Promise<Notification> {
    const { category, content, recipientId } = input;
    const notification = new Notification({
      category,
      content: new NotificationContent(content),
      recipientId,
    });
    return notification;
  }
}

export interface ISendNotificationUseCase {
  category: string;
  content: string;
  recipientId: string;
}
