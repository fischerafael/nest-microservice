import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBody } from 'src/infra/controllers/NotificationController/create.notification.body';

@Controller('notifications')
export class NotificationsController {
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { category, recipientId, content } = body;
  }
}
