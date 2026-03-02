/*
  Warnings:

  - You are about to drop the `StockLog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "StockLog" DROP CONSTRAINT "StockLog_itemId_fkey";

-- DropIndex
DROP INDEX "items_foodId_key";

-- DropTable
DROP TABLE "StockLog";

-- CreateTable
CREATE TABLE "stock_logs" (
    "id" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "change" INTEGER NOT NULL,
    "reason" "StockChangedReason" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "stock_logs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "stock_logs" ADD CONSTRAINT "stock_logs_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
