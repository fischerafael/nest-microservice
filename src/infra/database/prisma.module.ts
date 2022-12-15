import { Module } from '@nestjs/common';
import { NotificationRepository } from 'src/app/repositories/Notification/NotificationRepository';
import { PrismaService } from './prisma.service';
import { NotificationRepositoryPrisma } from './repositories/Notification/NotificationRepositoryPrisma';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: NotificationRepositoryPrisma,
    },
  ],
  exports: [NotificationRepository],
})
export class DataBaseModule {}
