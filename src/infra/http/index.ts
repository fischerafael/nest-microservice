import { Module } from '@nestjs/common';
import { SendNotificationUseCase } from 'src/app/useCases/SendNotification';
import { NotificationsController } from '../controllers/NotificationController';
import { DataBaseModule } from '../database/prisma.module';

@Module({
  imports: [DataBaseModule],
  controllers: [NotificationsController],
  providers: [SendNotificationUseCase],
})
export class HttpModule {}
