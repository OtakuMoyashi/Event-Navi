/*
  Warnings:

  - You are about to drop the column `supabaseUserId` on the `staffs` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "staffs_supabaseUserId_key";

-- AlterTable
ALTER TABLE "staffs" DROP COLUMN "supabaseUserId";
