import { NotificationContent } from '.';

describe('NotificationContent', () => {
  it('should return a content', () => {
    const result = new NotificationContent('Hi, how are you');
    expect(result.value).toBe('Hi, how are you');
  });
});
