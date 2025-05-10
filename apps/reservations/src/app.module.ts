import { Module } from '@nestjs/common';
import { DomainModule } from './domain/domain.module';
import { LoggerModule } from '@hotels/common';

@Module({ imports: [LoggerModule.forRoot('Reservation'), DomainModule] })
export class AppModule {}
