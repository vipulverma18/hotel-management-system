import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainModule } from './domain/domain.module';
import { LoggerModule } from '@hotels/common';

@Module({
  imports: [LoggerModule.forRoot('hotel-service'), DomainModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
