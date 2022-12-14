import { NotificationContent } from 'src/app/entities/NotificationContent';
import { Notification } from 'src/app/entities/Notification';
import { NotificationRepository } from 'src/app/repositories/Notification/NotificationRepository';

export class SendNotificationUseCase {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(input: ISendNotificationUseCase): Promise<Notification> {
    const { category, content, recipientId } = input;
    const notification = new Notification({
      category,
      content: new NotificationContent(content),
      recipientId,
    });
    await this.notificationRepository.create(notification);
    return notification;
  }
}

export interface ISendNotificationUseCase {
  category: string;
  content: string;
  recipientId: string;
}
