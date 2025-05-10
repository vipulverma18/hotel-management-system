import { DynamicModule } from '@nestjs/common';
import { LoggerService } from './logger.service';

export class LoggerModule {
  static forRoot(serviceName: string): DynamicModule {
    return {
      module: LoggerModule,
      providers: [
        {
          provide: LoggerService,
          useFactory: () => new LoggerService(serviceName),
        },
      ],
      exports: [LoggerService],
    };
  }
}
