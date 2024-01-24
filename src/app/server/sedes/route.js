import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET() {
  //Consultar BD
  try {
    const sedes = await prisma.sede.findMany({
      orderBy: [{ name: "asc" }],
    });
  
    return NextResponse.json(sedes, { status: 200 });
  } catch (error) {
    return NextResponse.json({message : error.message}, { status: 500 });
  }
  
}

export async function POST(request) {
  try {
    const data = await request.json();
    const sedeN = await prisma.sede.findUnique({ 
      where: { name: data.name },
  });

  if (sedeN) {
    return NextResponse.json(
      { message: "El Nombre de la Sede no puede ser repetido." },
      { status: 500 }
    );
  }
    const newSede = await prisma.sede.create({
      data: {
        name: data.name,
        address: data.address,
        email: data.email,
        pastores: data.pastores,
        imagen: data.imagen,
        fotoPastores: data.fotoPastores,
        horarios: data.horarios,
      },
    });
    return NextResponse.json(newSede, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message, },
      { status: 500 }
    );
  }
}

export async function PUT() {
  //Consultar BD
  /* const usuarios = await prisma.users.findMany({
    orderBy: [{ tipoUser: "asc" }, { name: "asc" }],
  }); */

  return NextResponse.json("PUT sede");
}
export async function DELETE() {
  //Consultar BD
  /* const usuarios = await prisma.users.findMany({
    orderBy: [{ tipoUser: "asc" }, { name: "asc" }],
  }); */

  return NextResponse.json("DELETE Volunteer");
}
