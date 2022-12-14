import { NotificationContent } from '../NotificationContent';
import { randomUUID } from 'node:crypto';

export class Notification {
  private props: INotificationProps;
  private _id: string;

  constructor(props: INotificationRequest) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ? props.createdAt : new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public set recipientId(data: string) {
    this.props.recipientId = data;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(content: NotificationContent) {
    this.props.content = content;
  }

  public get content(): NotificationContent {
    return this.props.content;
  }

  public set category(data: string) {
    this.props.category = data;
  }

  public get category(): string {
    return this.props.category;
  }

  public set readAt(data: Date | null | undefined) {
    this.props.readAt = data;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt!;
  }
}

export interface INotificationRequest {
  content: NotificationContent;
  category: string;
  recipientId: string;
  createdAt?: Date;
}

export interface INotificationProps extends INotificationRequest {
  readAt?: Date | null;
}
