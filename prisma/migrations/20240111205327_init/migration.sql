-- CreateTable
CREATE TABLE "Sede" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "pastores" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,
    "horarios" TEXT NOT NULL,

    CONSTRAINT "Sede_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evento" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "dateEvent" TIMESTAMP(3) NOT NULL,
    "place" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);
