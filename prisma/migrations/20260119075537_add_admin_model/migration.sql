/*
  Warnings:

  - The primary key for the `staffs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `staffs` table. All the data in the column will be lost.
  - You are about to drop the column `eventId` on the `staffs` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `staffs` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `staffs` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[supabaseUserId]` on the table `staffs` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[loginId]` on the table `staffs` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `loginId` to the `staffs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `supabaseUserId` to the `staffs` table without a default value. This is not possible if the table is not empty.
  - Made the column `storeId` on table `staffs` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "AdminRole" AS ENUM ('EVENT_ADMIN', 'STORE_ADMIN');

-- DropForeignKey
ALTER TABLE "staffs" DROP CONSTRAINT "staffs_eventId_fkey";

-- DropForeignKey
ALTER TABLE "staffs" DROP CONSTRAINT "staffs_storeId_fkey";

-- DropIndex
DROP INDEX "staffs_email_key";

-- AlterTable
ALTER TABLE "staffs" DROP CONSTRAINT "staffs_pkey",
DROP COLUMN "email",
DROP COLUMN "eventId",
DROP COLUMN "password",
DROP COLUMN "role",
ADD COLUMN     "loginId" TEXT NOT NULL,
ADD COLUMN     "supabaseUserId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "storeId" SET NOT NULL,
ADD CONSTRAINT "staffs_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "staffs_id_seq";

-- DropEnum
DROP TYPE "StaffRole";

-- CreateTable
CREATE TABLE "admins" (
    "id" TEXT NOT NULL,
    "supabaseUserId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "role" "AdminRole" NOT NULL,
    "eventId" TEXT,
    "storeId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_supabaseUserId_key" ON "admins"("supabaseUserId");

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");

-- CreateIndex
CREATE UNIQUE INDEX "staffs_supabaseUserId_key" ON "staffs"("supabaseUserId");

-- CreateIndex
CREATE UNIQUE INDEX "staffs_loginId_key" ON "staffs"("loginId");

-- AddForeignKey
ALTER TABLE "admins" ADD CONSTRAINT "admins_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admins" ADD CONSTRAINT "admins_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staffs" ADD CONSTRAINT "staffs_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "stores"("id") ON DELETE CASCADE ON UPDATE CASCADE;
