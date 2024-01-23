/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Sede` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Sede_name_key" ON "Sede"("name");
