import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { NotificationRepository } from 'src/app/repositories/Notification/NotificationRepository';
import { NotificationRepositoryPrisma } from './repositories/Notification/NotificationRepositoryPrisma';

@Module({
  providers: [
    PrismaClient,
    {
      provide: NotificationRepository,
      useClass: NotificationRepositoryPrisma,
    },
  ],
  exports: [NotificationRepository],
})
export class DataBaseModule {}
