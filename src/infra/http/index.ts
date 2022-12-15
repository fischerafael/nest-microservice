import { Module } from '@nestjs/common';
import { SendNotificationUseCase } from 'src/app/useCases/SendNotification';
import { NotificationsController } from '../controllers/NotificationController';
import { DataBaseModule } from '../database/prisma.module';
import { PrismaService } from '../database/prisma.service';
import { NotificationRepositoryPrisma } from '../database/repositories/Notification/NotificationRepositoryPrisma';

@Module({
  imports: [DataBaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotificationUseCase,
    NotificationRepositoryPrisma,
    PrismaService,
  ],
})
export class HttpModule {}
