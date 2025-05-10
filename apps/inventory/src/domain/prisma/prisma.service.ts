import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@inventory/prisma';
import { PrismaMixin } from '@hotels/common';

@Injectable()
export class PrismaService extends PrismaMixin(PrismaClient) {
  constructor() {
    super({ log: ['query', 'error'], errorFormat: 'pretty' });
  }
}
