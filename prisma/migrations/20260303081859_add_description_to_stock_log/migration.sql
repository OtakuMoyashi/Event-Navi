-- AlterTable
ALTER TABLE "stock_logs" ADD COLUMN     "description" TEXT,
ALTER COLUMN "reason" DROP NOT NULL;
