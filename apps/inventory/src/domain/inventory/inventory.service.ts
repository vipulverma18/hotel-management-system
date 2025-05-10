import { PrismaService } from '../prisma/prisma.service';
import { AddInventoryDto } from './inventory.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InventoryService {
  constructor(private readonly prismaService: PrismaService) {}

  addInventory(inventory: AddInventoryDto) {
    return this.prismaService.inventory.create({
      data: {
        ...inventory,
        reserved: 0,
        date: new Date(inventory.date),
      },
    });
  }
}
