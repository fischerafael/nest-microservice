import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotificationBody } from 'src/infra/create.notification.body';

@Controller('notifications')
export class NotificationsController {
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { category, recipientId, content } = body;
  }
}
