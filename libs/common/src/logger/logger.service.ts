import { LoggerService as NestLogger } from '@nestjs/common';
import pino from 'pino';

export class LoggerService implements NestLogger {
  private logger: pino.Logger;

  constructor(serviceName: string) {
    this.logger = pino({
      level: 'info',
      name: serviceName,
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: true,
          singleLine: true,
        },
      },
    });
  }

  log(message: any, context?: string) {
    this.logger.info({ context }, message);
  }

  error(message: any, trace?: string, context?: string) {
    this.logger.error({ context, trace }, message);
  }

  warn(message: any, context?: string) {
    this.logger.warn({ context }, message);
  }

  debug(message: any, context?: string) {
    this.logger.debug({ context }, message);
  }

  verbose(message: any, context?: string) {
    this.logger.info({ context }, message);
  }
}
