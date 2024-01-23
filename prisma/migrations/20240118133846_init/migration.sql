/*
  Warnings:

  - You are about to drop the `EventImg1` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventImg2` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "EventImg1";

-- DropTable
DROP TABLE "EventImg2";

-- CreateTable
CREATE TABLE "EventImg" (
    "id" SERIAL NOT NULL,
    "imagen" TEXT NOT NULL,

    CONSTRAINT "EventImg_pkey" PRIMARY KEY ("id")
);
