import { Body, Controller, Post } from '@nestjs/common';
import { NotificationContent } from 'src/app/entities/NotificationContent';
import { SendNotificationUseCase } from 'src/app/useCases/SendNotification';
import { CreateNotificationBody } from 'src/infra/controllers/NotificationController/create.notification.body';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotificationUseCase: SendNotificationUseCase) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { category, recipientId, content } = body;

    const notification = await this.sendNotificationUseCase.execute({
      category,
      content,
      recipientId,
    });

    return notification;
  }
}
