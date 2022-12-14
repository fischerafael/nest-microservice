import { Notification } from 'src/app/entities/Notification';

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
}
