import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(request, { params }) {
  // console.log("🚀 ~ file: USERS - [] - ROUTE.js 5  ");
  try {
    const id = params.id;
    const user = await prisma.users.findUnique({
      where: { id: parseInt(id) },
    });
    if (!user) {
      return NextResponse.json(
        { message: "El Usuario NO existe" },
        { status: 400 }
      );
    }
    return NextResponse.json(user, { status: 200 });
   
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  //Consultar BD
  try {
    // if(delete ){
    console.log("🚀 ~ ROUTES  ", params.id);
    const data = await request.json();
    const userUpdate = await prisma.users.update({
      where: { id: Number(params.id) },
      data: data,
    });
    return NextResponse.json(userUpdate, { status: 200 });
    //}
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

//ELIMINAR
export async function DELETE(request, { params }) {
  try {
    const id = params.id;
    const user = await prisma.users.findUnique({
      where: { id: parseInt(id) },
    });
    if (Array.isArray(id))  console.log("🚀 ~ ROUTES ids ", id);

    if (!user) {
      return NextResponse.json(
        { message: "El usuario no existe" },
        { status: 404 }
      );
    }

    await prisma.users.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json(
      { message: "Usuario eliminado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
