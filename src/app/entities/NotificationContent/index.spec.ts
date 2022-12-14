import { NotificationContent } from '.';

describe('NotificationContent', () => {
  it('should return a content', () => {
    const result = new NotificationContent('Hi, how are you');
    expect(result.value).toBe('Hi, how are you');
  });

  it('should not be able to create a notification with few chars', () => {
    expect(() => new NotificationContent('Hi')).toThrow();
  });

  it('should not be able to create a notification with lots of chars', () => {
    const input = 'a'.repeat(300);
    expect(() => new NotificationContent(input)).toThrow();
  });
});
