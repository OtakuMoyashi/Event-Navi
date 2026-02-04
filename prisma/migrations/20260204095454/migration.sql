-- DropForeignKey
ALTER TABLE "stores" DROP CONSTRAINT "stores_eventId_fkey";

-- AlterTable
ALTER TABLE "stores" ALTER COLUMN "eventId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "stores" ADD CONSTRAINT "stores_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE SET NULL ON UPDATE CASCADE;
