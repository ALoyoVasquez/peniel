import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET() {
  //Consultar BD
  const taskVoluntariado = await prisma.voluntariado.findMany({
    orderBy: [{ status: "asc" }],
  });

  return NextResponse.json(taskVoluntariado, { status: 200 });
}

export async function POST(request) {
  try {
    const data = await request.json();

    const newTask = await prisma.voluntariado.create({
      data: {
        sede: data.sede,
        titulo: data.titulo,
        encargado: data.encargado,
        locacion: data.locacion,
        tiempo: data.tiempo,
        descripcion: data.descripcion,
        avatar: data.avatar,
        status: "A",
      },
    });
    return NextResponse.json(newTask, { status: 200 });
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

  return NextResponse.json("PUT Volunteer");
}
export async function DELETE() {
  //Consultar BD
  /* const usuarios = await prisma.users.findMany({
    orderBy: [{ tipoUser: "asc" }, { name: "asc" }],
  }); */

  return NextResponse.json("DELETE Volunteer");
}
