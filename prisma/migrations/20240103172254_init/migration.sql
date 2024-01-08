/*
  Warnings:

  - Made the column `updateAt` on table `Users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `username` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "updateAt" SET NOT NULL,
ALTER COLUMN "username" SET NOT NULL;
