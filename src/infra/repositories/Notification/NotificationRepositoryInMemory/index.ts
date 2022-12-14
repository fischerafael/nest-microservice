import { Notification } from 'src/app/entities/Notification';
import { NotificationRepository } from 'src/app/repositories/Notification/NotificationRepository';

export class NotificationRepositoryInMemory implements NotificationRepository {
  async create(notification: Notification): Promise<void> {}
}
