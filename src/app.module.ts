import { Module } from '@nestjs/common';
import { NotificationsController } from './infra/NotificationsController';
import { AppService } from './infra/app.service';

@Module({
  imports: [],
  controllers: [NotificationsController],
  providers: [AppService],
})
export class AppModule {}
