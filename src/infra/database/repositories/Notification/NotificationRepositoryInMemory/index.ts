import { Notification } from 'src/app/entities/Notification';
import { NotificationRepository } from 'src/app/repositories/Notification/NotificationRepository';

export class NotificationRepositoryInMemory implements NotificationRepository {
  private _repositories: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this._repositories.push(notification);
  }

  get repositories(): Notification[] {
    return this._repositories;
  }
}
