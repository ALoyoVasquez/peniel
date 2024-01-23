-- CreateTable
CREATE TABLE "Voluntariado" (
    "id" SERIAL NOT NULL,
    "sede" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "encargado" TEXT NOT NULL,
    "locacion" TEXT NOT NULL,
    "tiempo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Voluntariado_pkey" PRIMARY KEY ("id")
);
