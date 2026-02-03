/*
  Warnings:

  - You are about to drop the column `supabaseUserId` on the `admins` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "admins_supabaseUserId_key";

-- AlterTable
ALTER TABLE "admins" DROP COLUMN "supabaseUserId";
