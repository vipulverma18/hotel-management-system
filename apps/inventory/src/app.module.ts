import { Module } from '@nestjs/common';
import { DomainModule } from './domain/domain.module';
import { LoggerModule } from '@hotels/common';

@Module({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  imports: [LoggerModule.forRoot('inventory-service'), DomainModule],
})
export class AppModule {}
