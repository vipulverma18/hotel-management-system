-- CreateEnum
CREATE TYPE "RoomType" AS ENUM ('STANDARD', 'DELUXE', 'SUITES');

-- CreateTable
CREATE TABLE "Inventory" (
    "hotelId" INTEGER NOT NULL,
    "roomType" "RoomType" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "reserved" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("hotelId","roomType","date")
);
