/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `admins` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `staffs` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "admins_id_key" ON "admins"("id");

-- CreateIndex
CREATE UNIQUE INDEX "staffs_id_key" ON "staffs"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");
