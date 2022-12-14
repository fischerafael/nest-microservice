// DATA VALUE OBJECT - SELF VALIDATING OBJECT TO KEEP VALIDATION COHESE

export class NotificationContent {
  constructor(private readonly content: string) {
    if (!this.validate(content)) {
      throw new Error('Lenght error');
    }
    this.content = content;
  }

  get value() {
    return this.content;
  }

  validate(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }
}
