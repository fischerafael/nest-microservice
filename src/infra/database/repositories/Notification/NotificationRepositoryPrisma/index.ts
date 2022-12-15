import { Injectable } from '@nestjs/common';
import { Notification } from 'src/app/entities/Notification';
import { NotificationRepository } from 'src/app/repositories/Notification/NotificationRepository';
import { PrismaService } from 'src/infra/database/prisma.service';

export class NotificationRepositoryPrisma implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
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
