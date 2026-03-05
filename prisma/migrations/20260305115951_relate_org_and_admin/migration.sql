-- AlterTable
ALTER TABLE "admins" ADD COLUMN     "organizationId" TEXT;

-- AddForeignKey
ALTER TABLE "admins" ADD CONSTRAINT "admins_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE SET NULL ON UPDATE CASCADE;
