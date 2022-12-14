import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http';
import { DataBaseModule } from './infra/database/prisma.module';

// ENTRY CLASS

@Module({
  imports: [HttpModule, DataBaseModule],
})
export class AppModule {}
