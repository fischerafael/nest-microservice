import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from 'src/infra/create.notification.body';

import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly appService: PrismaService) {}

  @Get()
  async list() {
    return await this.appService.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { category, recipientId, content } = body;

    await this.appService.notification.create({
      data: {
        category: category,
        content: content,
        recipientId: recipientId,
        id: randomUUID(),
      },
    });
  }
}
