import { Notification } from 'src/app/entities/Notification';
import { NotificationRepository } from 'src/app/repositories/Notification/NotificationRepository';

export class NotificationRepositoryInMemory implements NotificationRepository {
  create(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
