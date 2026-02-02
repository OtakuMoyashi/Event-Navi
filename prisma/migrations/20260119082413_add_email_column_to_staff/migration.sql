/*
  Warnings:

  - You are about to drop the column `loginId` on the `staffs` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `staffs` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `staffs` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "staffs_loginId_key";

-- AlterTable
ALTER TABLE "staffs" DROP COLUMN "loginId",
ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "staffs_email_key" ON "staffs"("email");
