/*
  Warnings:

  - You are about to drop the column `eventId` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_eventId_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "eventId";
