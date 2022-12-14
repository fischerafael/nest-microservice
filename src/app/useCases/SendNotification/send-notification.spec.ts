import { NotificationRepositoryInMemory } from 'src/infra/repositories/Notification/NotificationRepositoryInMemory';
import { SendNotificationUseCase } from '.';

describe('SendNotificationUseCase', () => {
  it('should be able to send a notification', async () => {
    const notification = new SendNotificationUseCase(
      new NotificationRepositoryInMemory(),
    );
    const result = await notification.execute({
      category: 'testeteste',
      content: 'testeteste',
      recipientId: 'testeteste',
    });
    expect(result.category).toBe('testeteste');
    expect(result.content.value).toBe('testeteste');
    expect(result.recipientId).toBe('testeteste');
  });
});
