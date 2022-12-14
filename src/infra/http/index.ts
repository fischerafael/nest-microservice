import { Module } from '@nestjs/common';
import { NotificationsController } from '../controllers/NotificationController';

@Module({
  imports: [],
  controllers: [NotificationsController],
})
export class HttpModule {}
