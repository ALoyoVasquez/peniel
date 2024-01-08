-- DropIndex
DROP INDEX "Users_email_key";

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "updateAt" TIMESTAMP(3),
ADD COLUMN     "username" TEXT;
