/*
  Warnings:

  - Made the column `stock` on table `items` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
ALTER TYPE "AdminRole" ADD VALUE 'SYSTEM_ADMIN';

-- AlterTable
ALTER TABLE "items" ALTER COLUMN "stock" SET NOT NULL,
ALTER COLUMN "stock" DROP DEFAULT;
