import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(request, { params }) {
   console.log("🚀 ~ file: voluntariado - [] - ROUTE.js 5  ");
  try {
    const id = params.id;
    const volunteer = await prisma.voluntariado.findUnique({
      where: { id: parseInt(id) },
    });
    if (!volunteer) {
      return NextResponse.json(
        { message: "El Id no corresponde a ninguna actividad de Voluntariado" },
        { status: 400 }
      );
    }
    return NextResponse.json(volunteer, { status: 200 });
   
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
    //Consultar BD
    try {
      // if(delete ){
      console.log("🚀 ~ ROUTES  linea 28 ", params.id);
      const data = await request.json();
      const volunteerUpdate = await prisma.voluntariado.update({
        where: { id: Number(params.id) },
        data: data,
      });
      return NextResponse.json(volunteerUpdate, { status: 200 });
      //}
    } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }