/*
  Warnings:

  - You are about to drop the column `change` on the `stock_logs` table. All the data in the column will be lost.
  - Added the required column `difference` to the `stock_logs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "stock_logs" DROP COLUMN "change",
ADD COLUMN     "difference" INTEGER NOT NULL;
