/*
  Warnings:

  - You are about to drop the column `phoneNumber` on the `Sede` table. All the data in the column will be lost.
  - Added the required column `email` to the `Sede` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sede" DROP COLUMN "phoneNumber",
ADD COLUMN     "email" TEXT NOT NULL;
