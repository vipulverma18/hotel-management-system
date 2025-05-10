import { Injectable } from '@nestjs/common';
import { PrismaMixin } from '@hotels/common';
import { PrismaClient } from '@hotels/prisma';

@Injectable()
export class PrismaService extends PrismaMixin(PrismaClient) {}
