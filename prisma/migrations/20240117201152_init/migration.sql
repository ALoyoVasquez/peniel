/*
  Warnings:

  - You are about to drop the column `imagen1` on the `Evento` table. All the data in the column will be lost.
  - You are about to drop the column `imagen2` on the `Evento` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Evento" DROP COLUMN "imagen1",
DROP COLUMN "imagen2";

-- CreateTable
CREATE TABLE "EventImg1" (
    "id" SERIAL NOT NULL,
    "imagen" TEXT NOT NULL,

    CONSTRAINT "EventImg1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventImg2" (
    "id" SERIAL NOT NULL,
    "imagen" TEXT NOT NULL,

    CONSTRAINT "EventImg2_pkey" PRIMARY KEY ("id")
);
