import { SendNotificationUseCase } from '.';

describe('SendNotificationUseCase', () => {
  it('should be able to send a notification', async () => {
    const notification = new SendNotificationUseCase();
    const result = await notification.execute({
      category: 'test',
      content: 'test',
      recipientId: 'test',
    });
    expect(result.category).toBe('test');
    expect(result.content.value).toBe('test');
    expect(result.recipientId).toBe('test');
  });
});
