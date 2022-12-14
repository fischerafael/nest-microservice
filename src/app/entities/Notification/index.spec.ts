import { Notification } from '.';
import { NotificationContent } from '../NotificationContent';

describe('NotificationContent', () => {
  it('should return a content', () => {
    const result = new Notification({
      content: new NotificationContent('Hi, how are you'),
      category: 'test',
      recipientId: '1212',
    });
    expect(result.category).toBe('test');
    expect(result.content.value).toBe('Hi, how are you');
    expect(result.recipientId).toBe('1212');
  });
});
