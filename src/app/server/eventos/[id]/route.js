import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(request, { params }) {
  try {
    const id = params.id;
    const eventos = await prisma.evento.findUnique({
      where: { id: parseInt(id) },
    });
    if (!eventos) {
      return NextResponse.json(
        { message: "Este Id NO corresponde a ningun Evento." },
        { status: 400 }
      );
    }
    return NextResponse.json(eventos, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    //console.log("🚀 ~ ROUTES [] EVENTOS ", params.id);
    const data = await request.json();
    const eventUpdate = await prisma.evento.update({
      where: { id: Number(params.id) },
      data: data,
    });

    return NextResponse.json(eventUpdate, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const id = params.id;
    const eventos = await prisma.evento.findUnique({
      where: { id: parseInt(id) },
    });

    if (!eventos) {
      return NextResponse.json(
        { message: "Este Id NO corresponde a ningun Evento." },
        { status: 404 }
      );
    }

    await prisma.evento.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json(
      { message: "Evento eliminado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
