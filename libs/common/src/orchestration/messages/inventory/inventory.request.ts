export interface DeductInventory extends Request {
  hotelId: number;
  roomTypeId: number;
  numberOfRooms: number;
}

export interface RestoreInventory extends Request {
  reservationId: number;
}

export type InventoryRequest = DeductInventory | RestoreInventory;
