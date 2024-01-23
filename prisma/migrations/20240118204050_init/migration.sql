/*
  Warnings:

  - Changed the type of `sede` on the `Voluntariado` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Voluntariado" DROP COLUMN "sede",
ADD COLUMN     "sede" INTEGER NOT NULL;
