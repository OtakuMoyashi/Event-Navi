/*
  Warnings:

  - You are about to drop the column `storeId` on the `tickets` table. All the data in the column will be lost.
  - Added the required column `storeType` to the `stores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attractionId` to the `tickets` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StoreType" AS ENUM ('ATTRACTION', 'FOOD');

-- DropForeignKey
ALTER TABLE "tickets" DROP CONSTRAINT "tickets_storeId_fkey";

-- AlterTable
ALTER TABLE "stores" ADD COLUMN     "storeType" "StoreType" NOT NULL;

-- AlterTable
ALTER TABLE "tickets" DROP COLUMN "storeId",
ADD COLUMN     "attractionId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "attracions" (
    "id" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "attracions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "foods" (
    "id" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "foods_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "attracions_storeId_key" ON "attracions"("storeId");

-- CreateIndex
CREATE UNIQUE INDEX "foods_storeId_key" ON "foods"("storeId");

-- AddForeignKey
ALTER TABLE "attracions" ADD CONSTRAINT "attracions_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "stores"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foods" ADD CONSTRAINT "foods_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "stores"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_attractionId_fkey" FOREIGN KEY ("attractionId") REFERENCES "attracions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
