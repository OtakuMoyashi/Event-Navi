/*
  Warnings:

  - You are about to alter the column `name` on the `admins` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `slug` on the `stores` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.

*/
-- AlterTable
ALTER TABLE "admins" ALTER COLUMN "name" SET DATA TYPE VARCHAR(20);

-- AlterTable
ALTER TABLE "events" ALTER COLUMN "startedAt" DROP NOT NULL,
ALTER COLUMN "finishedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "staffs" ADD COLUMN     "name" VARCHAR(20);

-- AlterTable
ALTER TABLE "stores" ALTER COLUMN "slug" SET DATA TYPE VARCHAR(20);
