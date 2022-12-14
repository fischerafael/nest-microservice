import { NotificationRepositoryInMemory } from 'src/infra/database/repositories/Notification/NotificationRepositoryInMemory';
import { SendNotificationUseCase } from '.';

describe('SendNotificationUseCase', () => {
  it('should be able to send a notification', async () => {
    const repository = new NotificationRepositoryInMemory();
    const notification = new SendNotificationUseCase(repository);

    const result = await notification.execute({
      category: 'testeteste',
      content: 'testeteste',
      recipientId: 'testeteste',
    });

    expect(repository.repositories).toHaveLength(1);
    expect(result.category).toBe('testeteste');
    expect(result.content.value).toBe('testeteste');
    expect(result.recipientId).toBe('testeteste');
  });
});
