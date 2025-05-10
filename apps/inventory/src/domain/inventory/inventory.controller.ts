import { InventoryService } from './inventory.service';
import { AddInventoryDto } from './inventory.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Inventory')
@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  addInventory(@Body() body: AddInventoryDto) {
    return this.inventoryService.addInventory(body);
  }
}
