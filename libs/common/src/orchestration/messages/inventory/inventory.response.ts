export interface InventoryDeducted extends Response {
  hotelId: number;
  roomTypeId: number;
  numberOfRooms: number;
}

export interface InventoryDeclined extends Response {
  message: string;
}
