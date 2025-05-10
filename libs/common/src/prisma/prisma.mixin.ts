import { INestApplication, Logger, OnModuleInit } from '@nestjs/common';
import to from 'await-to-js';

interface PrismaClient {
  $on: (eventType, callback) => void;
  $connect: () => Promise<void>;
  $use: (cb) => void;
}

type Constructor<T = object> = new (...args: any[]) => T;

export function PrismaMixin<TBase extends Constructor<PrismaClient>>(
  PrismaClientClass: TBase,
) {
  return class extends PrismaClientClass implements OnModuleInit {
    readonly logger = new Logger(PrismaClientClass.name);

    async onModuleInit() {
      await this.$connect();
      this.logger.log('[Prisma] Connected');

      this.$use(async (params, next) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const [error, result] = await to(next(params));
        if (error) {
          this.logger.error(error);
          throw new Error(JSON.stringify(error));
        }
        return result;
      });
    }

    enableShutdownHooks(app: INestApplication) {
      this.$on('beforeExit', async () => {
        this.logger.log('[Prisma] Disconnected');
        await app.close();
      });
    }
  };
}
