import { Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly appService: PrismaService) {}

  @Get()
  async list() {
    return await this.appService.notification.findMany();
  }

  @Post()
  async create() {
    await this.appService.notification.create({
      data: {
        category: 'message',
        content: 'First Message',
        recipientId: randomUUID(),
        id: randomUUID(),
      },
    });
  }
}
