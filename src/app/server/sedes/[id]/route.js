import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(request, { params }) {
  try {
    const id = params.id;
    const sedes = await prisma.sede.findUnique({
      where: { id: parseInt(id) },
    });
    if (!sedes) {
      return NextResponse.json(
        { message: "Este Id NO corresponde a ninguna Sede." },
        { status: 400 }
      );
    }
    return NextResponse.json(sedes, { status: 200 });
   
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  //Consultar BD
  try {
    // if(delete ){
   // console.log("🚀 ~ ROUTES [] sedes ", params.id);
    const data = await request.json();
    const sedeUpdate = await prisma.sede.update({
      where: { id: Number(params.id) },
      data: data,
    });
    NextResponse.json(
      { message: "La Informacion de la Sede se edito correctamente." },
      { status: 200 } );
    return NextResponse.json(sedeUpdate, { status: 200 });
    //}
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

//ELIMINAR
export async function DELETE(request, { params }) {
  try {
    const id = params.id;
    const sedes = await prisma.sede.findUnique({
      where: { id: parseInt(id) },
    });

    if (!sedes) {
      return NextResponse.json(
        { message: "Este Id NO corresponde a ninguna Sede." },
        { status: 404 }
      );
    }

    await prisma.sede.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json(
      { message: "Sede eliminada correctamente" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
