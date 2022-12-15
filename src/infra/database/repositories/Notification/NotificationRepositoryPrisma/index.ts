import { Injectable } from '@nestjs/common';
import { Notification } from 'src/app/entities/Notification';
import { NotificationRepository } from 'src/app/repositories/Notification/NotificationRepository';
import { PrismaService } from 'src/infra/database/prisma.service';

@Injectable()
export class NotificationRepositoryPrisma implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    console.log('REPOSITORY - ', notification.category);
    console.log('REPOSITORY - ', notification.content);
    console.log('REPOSITORY - ', notification.recipientId);
    console.log('REPOSITORY - ', notification.createdAt);
    console.log('REPOSITORY - ', notification.id);
    console.log('REPOSITORY - ', notification.readAt);
    this.prismaService.notification.create({
      data: {
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        createdAt: notification.createdAt,
        readAt: notification.readAt,
        id: notification.id,
      },
    });
  }
}
