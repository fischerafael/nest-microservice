import { Notification } from '.';
import { NotificationContent } from '../NotificationContent';

describe('NotificationContent', () => {
  it('should return a content', () => {
    const result = new Notification({
      content: new NotificationContent('Hi, how are you'),
      category: 'test',
      recipientId: '1212',
      createdAt: new Date('11-11-11'),
    });
    expect(result.category).toBe('test');
    expect(result.content.value).toBe('Hi, how are you');
    expect(result.recipientId).toBe('1212');
    expect(result.id).toBeTruthy();
    expect(result.readAt).toBe(undefined);
    expect(result.createdAt.toISOString()).toBe('2011-11-11T02:00:00.000Z');
  });

  it('should return a content', () => {
    const result = new Notification({
      content: new NotificationContent('Hi, how are you'),
      category: 'test',
      recipientId: '1212',
    });
    expect(result.createdAt).toBeTruthy();
  });
});
